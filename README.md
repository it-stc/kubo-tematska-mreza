# KUBO tematska mreža

Spletni generator natisljivih mrež za robota **KUBO** s sličicami iz pravljic. Učitelj izbere pravljico, nastavi velikost polja in število polj ter izvozi PDF za tisk na **A3**. PDF vsebuje mrežo v pravi velikosti in sličice za izrez, ki jih otroci sami postavljajo na polja ter z robotom KUBO iščejo pot med njimi.

Različica: **1.0** (19. 10. 2026)

## Hiter začetek

1. Odpri datoteko `dist/kubo-tematska-mreza.html` v brskalniku (Chrome, Edge, Firefox ali Safari). Namestitev ni potrebna in stran deluje tudi brez interneta.
2. V razdelku **Pravljica** izberi eno od 17 pravljic.
3. Po potrebi spremeni velikost polja, število stolpcev in vrstic ter barve.
4. Klikni **Izvozi PDF**. Datoteka se shrani v mapo s prenosi.
5. PDF natisni v **dejanski velikosti (100 %)** in z ravnilom preveri, ali meri stranica polja toliko, kot si nastavil.

## Funkcije

- **17 pravljic**, vsaka s 7 izvirnimi sličicami in svojo barvno shemo.
- **Mreža poljubne velikosti:** polje od 20 do 400 mm, od 1 do 40 stolpcev in vrstic. Stolpci so označeni s črkami (A, B, C …), vrstice s številkami, vrstica 1 je spodaj.
- **Sličice za izrez:** vsaka je velika točno kot eno polje. Število kosov nastaviš za vsako sličico posebej.
- **Navodila na mreži (neobvezno):** sličice lahko postaviš na polja in tako pripraviš nalogo, kam naj jih otroci položijo. Na voljo so gumbi Privzeta postavitev, Naključno in Počisti vse.
- **Barve:** izbira barve polj, šahovnice in črt, 14 hitrih kombinacij in gumb »Barve pravljice«.
- **Izvoz PDF A3:**
  - pokončno ali ležeče;
  - v pravi velikosti, razrezano na več listov s prekrivanjem za lepljenje, ali pomanjšano na en list;
  - kakovost 150, 200 ali 300 dpi.
- **Mreža na sredini lista:** če gre mreža na en list, je natisnjena na sredini.
- **Pregledna stran** z navodili za tisk, shemo listov in legendo postavljenih sličic.
- **Ime datoteke** z datumom in uro: `LLLLMMDD_UUMMSS_<pravljica>-kubo-<stolpci>x<vrstice>-polje<mm>mm-A3.pdf`, npr. `20261019_143508_rdeca-kapica-kubo-6x9-polje40mm-A3.pdf`.
- **Svetla in temna izvedba** vmesnika. Privzeta je svetla, izbiro si stran zapomni.
- **Shranjevanje nastavitev:** stran si nastavitve zapomni v brskalniku, vsaka pravljica ima svoje sličice, število kosov in barve.

## Privzete vrednosti

| Nastavitev | Vrednost |
|---|---|
| Polje | 40 × 40 mm |
| Stolpci × vrstice | 6 × 9 (mreža 24 × 36 cm, en pokončni list A3) |
| Debelina črt | 0,4 mm |
| Oznake polj (A1, B1 …) | izklopljeno |
| Šahovnica | vklopljeno |
| Sličice za izrez | 4 kosi vsake sličice; izjeme: 7 kozličkov, 7 palčkov, 6 ovčk |
| Sličice na mreži | prazna mreža |
| Izvedba vmesnika | svetla |

## Velikost polja in robot KUBO

Robot KUBO meri približno 55 × 70 mm in je visok približno 90 mm. Proizvajalec ne navaja, kako daleč se robot premakne z eno ploščico »naprej«. Pred tiskanjem zato izmeri dolžino koraka: robota naj prevozi pet korakov, razdaljo izmeri in jo deli s številom korakov. To mero vpiši kot velikost polja.

## Pravljice

| Pravljica | Vir | Sličice |
|---|---|---|
| Trije prašički | angleška ljudska | volk, 3 prašički, slamnata, lesena in zidana hišica |
| Mojca Pokrajculja | slovenska ljudska | Mojca, lonček, miška, žabica, zajček, lisica, medved |
| Janko in Metka | brata Grimm | Janko, Metka, hišica iz sladkarij, čarovnica, drobtinice, ptica, peč |
| Rdeča kapica | brata Grimm | Rdeča kapica, babica, volk, lovec, košarica, babičina hišica, rože |
| Bremenski mestni godci | brata Grimm | osel, pes, mačka, petelin, razbojnik, hiša razbojnikov, mesto Bremen |
| Volk in sedem kozličkov | brata Grimm | mama koza, kozliček, volk, hišica, stenska ura, studenec, mlinar |
| Repa velikanka | ruska ljudska | dedek, babica, vnukinja, psička, mačka, miška, repa |
| Sneguljčica | brata Grimm | Sneguljčica, palček, kraljica, čarobno ogledalo, jabolko, hišica palčkov, lovec |
| Pepelka | brata Grimm / Perrault | Pepelka, princ, dobra vila, buča kočija, stekleni čeveljček, grad, ura polnoči |
| Zlata ribica | ljudska, po Puškinu | ribič, žena, zlata ribica, mreža, korito, hišica, morje |
| Lisica in vrana | Ezop | lisica, vrana, sir, drevo, gnezdo, potok, grm |
| Tri botre lisičice | rezijanska ljudska | 3 botre lisičke, velik avto, lisičja hiša, šopek rož, gramofon |
| Kralj Matjaž | slovenska ljudska legenda | kralj Matjaž, miza z brado, pastirček, vojak, konj, votlina pod Peco, zaklad |
| Kekec | Josip Vandot (1918–1924) | Kekec, Mojca, Rožle, Bedanec, Pehta, Bedančeva koča, ovčka |
| Ostržek | Carlo Collodi (1883) | Ostržek, Pepe, vila Plavolaska, Muren, lisica Zvitorepka, maček Brljav, morski pes |
| Cesarjeva nova oblačila | H. C. Andersen (1837) | cesar, tkalec slepar, minister, deček, statve, vreča zlata, prestol |
| Grdi raček | H. C. Andersen (1843) | grdi raček, mama raca, račka, labod, mačka, kokoš, jezero |

Imena v Ostržku sledijo slovenskemu prevodu.

## Struktura projekta

```
kubo-tematska-mreza/
├── src/
│   ├── aplikacija.html          predloga vmesnika (HTML, CSS, JavaScript)
│   ├── risbe/
│   │   ├── osnova.js            pomočniki za risanje in prvih 5 pravljic
│   │   ├── sklop2.js            barve teh pravljic in 5 novih pravljic
│   │   ├── sklop3.js            6 novih pravljic
│   │   └── prasicki.js          Trije prašički (dodani na začetek seznama)
│   └── vendor/
│       ├── jspdf-2.5.1.umd.min.js
│       └── jspdf-LICENSE.txt
├── tools/
│   ├── build.py                 gradnja v mapo dist/
│   └── preveri.py               samodejni preizkus izvoza
└── dist/
    ├── kubo-tematska-mreza.html            samostojna različica (za uporabo)
    ├── kubo-tematska-mreza-artefakt.html   različica za Claude artefakt
    └── pregled-slicic.png                  pregled vseh sličic
```

## Gradnja iz izvorne kode

Potrebuješ Python 3, Node.js ni potreben. Uporablja se knjižnica Playwright s Chromiumom:

```bash
pip install playwright
python3 -m playwright install chromium
python3 tools/build.py      # zgradi dist/
python3 tools/preveri.py    # preveri izvoz PDF za vse pravljice
```

`build.py` izriše vse sličice, izmeri njihov obseg, podatke vstavi v predlogo in zapiše obe različici ter pregledno sliko.

## Licence in viri

- **Koda in sličice:** sličice so izvirne risbe za ta projekt in ne posnemajo filmskih ali knjižnih ilustracij.
- **Zgodbe:** vse so ljudske ali avtorsko proste. Josip Vandot je umrl leta 1944, zato je Kekec v Sloveniji prost avtorskih pravic.
- **Tri botre lisičice:** uporabljena je samo ljudska zgodba. Besedilo priredbe Milka Matičetova in ilustracije Ančke Gošnik-Godec niso uporabljeni.
- **jsPDF 2.5.1:** licenca MIT, glej `src/vendor/jspdf-LICENSE.txt`.
- **Pisavi Baloo 2 in Nunito Sans:** iz Google Fonts, licenca SIL Open Font License. Brez interneta stran uporabi sistemsko pisavo.

Spremembe so opisane v [CHANGELOG.md](CHANGELOG.md), varnost in zasebnost v [SECURITY.md](SECURITY.md), navodila za razvoj s pomočjo umetne inteligence pa v [AGENTS.md](AGENTS.md).
