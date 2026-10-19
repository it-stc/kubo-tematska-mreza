# Dnevnik sprememb

Vse pomembne spremembe projekta so zapisane v tej datoteki. Oblika sledi načelom [Keep a Changelog](https://keepachangelog.com/sl/1.1.0/), različice pa [semantičnemu označevanju različic](https://semver.org/lang/sl/).

## [Neizdano]

## [1.0] – 2026-10-19

Prva izdaja.

### Dodano

- Generator mreže za robota KUBO z izbiro velikosti polja (20–400 mm) ter števila stolpcev in vrstic (1–40).
- 17 pravljic s po 7 izvirnimi sličicami:
  - Trije prašički, Mojca Pokrajculja, Janko in Metka, Rdeča kapica;
  - Bremenski mestni godci, Volk in sedem kozličkov, Repa velikanka, Sneguljčica;
  - Pepelka, Zlata ribica, Lisica in vrana, Tri botre lisičice;
  - Kralj Matjaž, Kekec, Ostržek, Cesarjeva nova oblačila, Grdi raček.
- Kratek opis vsake pravljice pod izbiro.
- Tematske barve za vsako pravljico, ki se nastavijo ob izbiri, in gumb »Barve pravljice« za vrnitev nanje.
- Izbira barve polj, šahovnice in črt ter 14 hitrih barvnih kombinacij.
- Sličice za izrez v velikosti enega polja, z nastavljivim številom kosov za vsako sličico.
- Neobvezna navodila: postavljanje sličic na mrežo s klikom, radirka ter gumbi Privzeta postavitev, Naključno in Počisti vse.
- Izvoz PDF na A3:
  - pokončno ali ležeče;
  - v pravi velikosti, razrezano na liste s prekrivanjem, ali pomanjšano na en list;
  - pregledna stran z navodili za tisk, shemo listov in legendo;
  - kakovost 150, 200 ali 300 dpi.
- Mreža na sredini lista, kadar gre na en list.
- Ime izvožene datoteke z datumom in uro, npr. `20261019_143508_rdeca-kapica-kubo-6x9-polje40mm-A3.pdf`.
- Predogled v živo, ki prikaže celotno mrežo brez drsnika in ostane viden ob pomikanju nastavitev.
- Svetla in temna izvedba vmesnika s preklopnim gumbom. Privzeta je svetla.
- Shranjevanje nastavitev v brskalniku, ločeno za vsako pravljico.
- Samostojna različica, ki deluje brez interneta (jsPDF je vključen v datoteko), in različica za Claude artefakt.
- Orodji `tools/build.py` za gradnjo in `tools/preveri.py` za samodejni preizkus izvoza.

### Privzete vrednosti

- Polje 40 × 40 mm, mreža 6 × 9 polj, debelina črt 0,4 mm.
- Oznake polj izklopljene, šahovnica vklopljena, mreža brez postavljenih sličic.
- 4 kosi vsake sličice za izrez; izjeme: 7 kozličkov, 7 palčkov, 6 ovčk.

[Neizdano]: #
[1.0]: #
