#!/usr/bin/env python3
"""Zgradi KUBO tematsko mrežo iz izvornih datotek.

Uporaba (iz korenske mape projekta):
    python3 tools/build.py

Koraki:
  1. združi risbe iz src/risbe/ in jih v brskalniku brez glave (Playwright) izriše,
     da izmeri dejanski obseg vsake risbe (viewBox),
  2. podatke o pravljicah vstavi v src/aplikacija.html,
  3. zapiše dist/kubo-tematska-mreza.html (samostojna različica z vključenim jsPDF)
     in dist/kubo-tematska-mreza-artefakt.html (različica za Claude artefakt, jsPDF s CDN),
  4. zapiše dist/pregled-slicic.png s pregledom vseh sličic.
"""
import json, pathlib, sys
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC, DIST = ROOT / "src", ROOT / "dist"
VERSION = "1.0"
RISBE = ["osnova.js", "sklop2.js", "sklop3.js", "prasicki.js"]  # vrstni red je pomemben
CDN_TAG = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>'

def measure():
    lib = "\n".join((SRC / "risbe" / f).read_text(encoding="utf-8") for f in RISBE)
    page = """<html><body style='margin:0;background:#fff'><div id=o style='display:grid;grid-template-columns:repeat(7,160px);gap:6px;padding:6px'></div><script>
const module=undefined;""" + lib + r"""
const ns='http://www.w3.org/2000/svg',o=document.getElementById('o');
window.__out=STORIES.map(st=>{
  const pics=st.pics.map(([id,name,fn])=>{
    const svg=fn();const s=document.createElementNS(ns,'svg');s.setAttribute('width','100');s.setAttribute('height','100');
    s.style.position='absolute';s.style.left='-999px';s.innerHTML='<g id="g">'+svg+'</g>';document.body.appendChild(s);
    const b=s.querySelector('#g').getBBox();s.remove();const p=1.8;
    const vb=[b.x-p,b.y-p,b.width+2*p,b.height+2*p].map(v=>+v.toFixed(1)).join(' ');
    const d=document.createElement('div');d.style.cssText='border:1px solid #ccc;height:176px;font:11px sans-serif;text-align:center';
    d.innerHTML='<svg width="150" height="150" viewBox="'+vb+'">'+svg+'</svg><div>'+st.title+': '+name+'</div>';o.appendChild(d);
    return {id,name,svg,vb};
  });
  return {slug:st.slug,title:st.title,intro:st.intro,colors:st.colors,defaults:st.defaults,counts:st.counts||{},pics};
});
</script></body></html>"""
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1180, "height": 900})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.set_content(page)
        if errs:
            sys.exit("Napaka v risbah: " + "; ".join(errs))
        stories = pg.evaluate("window.__out")
        DIST.mkdir(exist_ok=True)
        pg.screenshot(path=str(DIST / "pregled-slicic.png"), full_page=True)
        b.close()
    return stories

def check(stories):
    slugs = set()
    for s in stories:
        assert s["slug"] not in slugs, "podvojen slug " + s["slug"]
        slugs.add(s["slug"])
        assert len(s["pics"]) == 7, s["slug"] + ": pravljica mora imeti 7 sličic"
        assert s["colors"] and len(s["colors"]) == 4, s["slug"] + ": manjkajo barve"
        ids = {p["id"] for p in s["pics"]}
        for pid, c, r in s["defaults"]:
            assert pid in ids, f'{s["slug"]}: neznana sličica {pid} v privzeti postavitvi'

def build(stories):
    tpl = (SRC / "aplikacija.html").read_text(encoding="utf-8")
    assert "/*@@STORIES@@*/[]" in tpl and "/*@@VERSION@@*/" in tpl
    h = tpl.replace("/*@@STORIES@@*/[]", json.dumps(stories, ensure_ascii=False)).replace("/*@@VERSION@@*/", VERSION)
    (DIST / "kubo-tematska-mreza-artefakt.html").write_text(h, encoding="utf-8")
    js = (SRC / "vendor" / "jspdf-2.5.1.umd.min.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
    assert h.count(CDN_TAG) == 1
    body = h.replace(CDN_TAG, "<script>/* jsPDF 2.5.1 (MIT) */\n" + js + "\n</script>")
    i = body.index('<div class="wrap">')
    head = body[:i].replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "")
    out = ('<!doctype html>\n<html lang="sl">\n<head>\n<meta charset="utf-8">\n'
           '<meta name="viewport" content="width=device-width,initial-scale=1">\n' + head +
           '<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>\n' + body[i:] + '\n</body>\n</html>\n')
    (DIST / "kubo-tematska-mreza.html").write_text(out, encoding="utf-8")
    return len(out)

if __name__ == "__main__":
    st = measure()
    check(st)
    n = build(st)
    print(f"Zgrajeno: {len(st)} pravljic, {sum(len(s['pics']) for s in st)} sličic, samostojna datoteka {n/1024:.0f} KB")
