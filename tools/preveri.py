#!/usr/bin/env python3
"""Preveri zgrajeno samostojno datoteko v brskalniku brez glave.

Uporaba (iz korenske mape projekta, po tools/build.py):
    python3 tools/preveri.py            # preveri vse pravljice
    python3 tools/preveri.py kekec      # preveri samo izbrane (slug)

Za vsako pravljico: izbere jo, nastavi privzeto postavitev, izvozi PDF in preveri,
da je nastal veljaven PDF in da v konzoli ni napak.
"""
import pathlib, sys, tempfile
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILE = ROOT / "dist" / "kubo-tematska-mreza.html"

def main(only):
    ok = True
    with sync_playwright() as p, tempfile.TemporaryDirectory() as tmp:
        b = p.chromium.launch()
        pg = b.new_page(accept_downloads=True, viewport={"width": 1280, "height": 900})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(FILE.as_uri())
        slugs = [x.replace("story-", "") for x in pg.eval_on_selector_all(".story", "els=>els.map(e=>e.id)")]
        theme = pg.evaluate("document.documentElement.getAttribute('data-theme')")
        print(f"Pravljic: {len(slugs)}, privzeta tema: {theme}")
        for s in slugs:
            if only and s not in only:
                continue
            pg.click("#story-" + s)
            pg.click("#bDefault")
            with pg.expect_download(timeout=180000) as d:
                pg.click("#bExport")
            out = pathlib.Path(tmp) / d.value.suggested_filename
            d.value.save_as(out)
            head = out.read_bytes()[:5]
            good = head == b"%PDF-" and out.stat().st_size > 10000
            ok &= good
            print(("OK   " if good else "NAPAKA ") + d.value.suggested_filename)
        b.close()
    if errs:
        ok = False
        print("Napake v konzoli:", *errs, sep="\n  ")
    sys.exit(0 if ok else 1)

if __name__ == "__main__":
    main(set(sys.argv[1:]))
