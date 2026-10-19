# Navodila za agente (AGENTS.md)

Ta datoteka je namenjena agentom umetne inteligence in razvijalcem, ki spreminjajo projekt **KUBO tematska mreža**. Splošni opis projekta je v `README.md`.

## Namen

Generator natisljivih mrež za robota KUBO s sličicami iz pravljic za 1. do 3. razred. Rezultat je ena statična HTML datoteka, ki deluje brez strežnika in brez interneta ter izvozi PDF na A3.

## Zlata pravila

1. **Jezik:** vsa besedila v vmesniku, PDF-ju, imenih pravljic in likov ter v dokumentaciji so v **slovenščini**. Za prevedene pravljice uporabljaj imena iz slovenskega prevoda (npr. Ostržek: Pepe, Muren, vila Plavolaska, lisica Zvitorepka, maček Brljav).
2. **Ne urejaj mape `dist/` ročno.** Vse spremembe naredi v `src/` ali `tools/` in nato zaženi gradnjo.
3. **Avtorske pravice:**
   - vse sličice so izvirne risbe;
   - nikoli ne posnemaj filmskih (npr. Disney), knjižnih ali drugih znanih ilustracij;
   - dodajaj samo ljudske pravljice ali dela avtorjev, ki so umrli pred več kot 70 leti;
   - ne kopiraj besedil zaščitenih priredb.
4. **Privzete vrednosti spreminjaj samo na izrecno zahtevo uporabnika** in jih takrat posodobi povsod (glej spodaj).
5. **Vsaka sprememba gre v `CHANGELOG.md`** pod `[Neizdano]`.
6. **Ne dodajaj funkcij, ki jih uporabnik ni zahteval.**

## Struktura

| Pot | Vsebina |
|---|---|
| `src/aplikacija.html` | vmesnik: HTML, CSS (žetoni na `:root`, svetla in temna izvedba), JavaScript. Vsebuje oznaki `/*@@STORIES@@*/[]` in `/*@@VERSION@@*/`, ki ju zamenja gradnja. |
| `src/risbe/osnova.js` | pomočniki za risanje (`person`, `animal`, `house`, `eyes`, `cheeks`, `smile`, `sw`, `flower`, `INK`, `SKIN`), seznam `STORIES` in prvih 5 pravljic |
| `src/risbe/sklop2.js` | barve prvih pravljic (`COLORS`) in 5 novih pravljic |
| `src/risbe/sklop3.js` | 6 novih pravljic in pomočnika `star`, `closedEyes` |
| `src/risbe/prasicki.js` | Trije prašički v lastnem obsegu; z `unshift` jih doda na začetek |
| `src/vendor/` | jsPDF 2.5.1 (MIT) |
| `tools/build.py` | gradnja: risbe → merjenje obsega → vstavljanje v predlogo → `dist/` |
| `tools/preveri.py` | preizkus izvoza PDF za vse pravljice v Chromiumu brez glave |

Datoteke risb se pri gradnji združijo v tem vrstnem redu: `osnova.js`, `sklop2.js`, `sklop3.js`, `prasicki.js`. Vse si delijo en globalni obseg, zato imena funkcij ne smejo biti podvojena.

## Dodajanje nove pravljice

1. V nov sklop (npr. `src/risbe/sklop4.js`) napiši 7 risarskih funkcij in pravljico dodaj s `STORIES.push({...})`:
   ```js
   {slug:"ime-pravljice",            // male črke brez šumnikov, vezaji
    title:"Ime pravljice",
    colors:["Ime sheme","#POLJA","#SAHOVNICA","#CRTE"],   // svetle barve polj, temne črte
    intro:"Kratek opis zgodbe v 1–2 povedih.",
    pics:[["id","Ime lika",funkcija], ...],               // točno 7
    defaults:[["id",stolpec,vrstica], ...],               // stolpec od 0, vrstica od 1 (spodaj); znotraj 6 × 9
    counts:{id:7}}                                        // neobvezno, privzeto 4 kosi
   ```
2. Datoteko dodaj na seznam `RISBE` v `tools/build.py`, pred `prasicki.js`.
3. Zaženi gradnjo in preizkus ter preglej `dist/pregled-slicic.png`.
4. Pravljico dodaj v tabelo v `README.md` in v `CHANGELOG.md`.

## Pravila za risbe

- **Koordinate:** risba je niz SVG elementov v koordinatah 0–100 (y raste navzdol). Gradnja izmeri dejanski obseg in nastavi `viewBox`, zato risba zapolni polje z robom 4 %.
- **Obrobe:** uporabi `INK` (`#2E2A33`) in `sw(debelina)`.
- **Slog:** prijazen otroški, z mehkimi barvami, velikimi očmi in debelimi obrobami.
- **Prepoznavnost:** liki iste pravljice se morajo jasno razlikovati (barva, dodatek, številka), ker jih otroci prepoznavajo na majhnih karticah.
- **Brez besedila:** v risbah ne uporabljaj besedila, razen številk ali kratkih oznak, kjer so nujne.
- **Pregled:** na `dist/pregled-slicic.png` nič ne sme štrleti, lebdeti ali se neželeno prekrivati.

## Privzete vrednosti in kje so

| Vrednost | Trenutno | Mesta v `src/aplikacija.html` |
|---|---|---|
| Polje | 40 mm | `id="cell" … value`, `let st={… cell:`, `NUM.cell` |
| Stolpci × vrstice | 6 × 9 | `id="cols"`/`id="rows" … value`, `let st={… cols:, rows:`, `NUM.cols`/`NUM.rows` |
| Debelina črt | 0,4 mm | `id="lw" … value`, `let st={… lw:`, `NUM.lw` |
| Oznake polj | izklopljeno | `id="labels"` brez `checked`, `labels:false` |
| Kosi za izrez | 4 | `defCounts()` in `counts` posamezne pravljice |
| Izvedba vmesnika | svetla | `root.setAttribute("data-theme","light")` |

Ko spremeniš privzeto vrednost, povečaj različico ključa `KEY` (npr. `kubo-tematska-mreza-v2`), da se shranjene nastavitve uporabnikov ponastavijo na nove privzete vrednosti.

## Tehnična pravila

- **Izvoz:** strani PDF se izrišejo kot SVG, rasterizirajo v JPEG in vstavijo z jsPDF. Mere so v milimetrih in mreža MORA ostati v pravi velikosti, ko je izbrana »Prava velikost«.
- **Shranjevanje datoteke:** samostojna različica shranjuje s `pdf.save(ime)`. Če obstaja `window.claude`, se uporabi zmožnost `downloads` artefakta.
- **Ime datoteke:** `LLLLMMDD_UUMMSS_<slug>-kubo-<stolpci>x<vrstice>-polje<mm>mm-A3.pdf`.
- **Barve vmesnika:** vse so žetoni na `:root`, s temno izvedbo pod `prefers-color-scheme` in `[data-theme="dark"]`. Barve mreže in PDF-ja so neodvisne od izvedbe vmesnika.
- **`localStorage`:** vsak dostop zaviti v `try/catch`.
- **Zunanji viri:** v artefaktu so dovoljeni samo skripti s cdnjs in pisave z Google Fonts. Samostojna različica ne sme potrebovati interneta za delovanje.
- **Pisanje kode:** izogibaj se `alert`, `confirm` in `prompt`.

## Gradnja in preverjanje

```bash
python3 tools/build.py      # mora izpisati število pravljic in sličic brez napak
python3 tools/preveri.py    # vse pravljice morajo imeti »OK«, izhodna koda 0
```

Pred oddajo spremembe:

1. Gradnja in preizkus uspeta.
2. `dist/pregled-slicic.png` je pregledan.
3. Če je bila spremenjena postavitev PDF-ja, je pregledana vsaj ena izvožena stran: mreža je na sredini, kartice so velike kot polje, ime je pod črto za rezanje.
4. Predogled pokaže celotno mrežo brez drsnika.
5. `CHANGELOG.md` je posodobljen.

## Izdaja nove različice

1. V `tools/build.py` posodobi `VERSION`.
2. V `CHANGELOG.md` premakni vnose iz `[Neizdano]` v nov razdelek z različico in datumom.
3. Posodobi tabelo podprtih različic v `SECURITY.md` in različico v `README.md`.
4. Zgradi, preveri in objavi `dist/`.
