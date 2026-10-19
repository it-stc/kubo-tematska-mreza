# Varnost in zasebnost

## Podprte različice

| Različica | Podpora |
|---|---|
| 1.0 | ✅ podprta |

## Kako aplikacija deluje

KUBO tematska mreža je ena sama statična HTML datoteka. Vse se izvaja v brskalniku uporabnika.

- **Brez strežnika:** aplikacija nima zaledja, računov ali prijave.
- **Brez zbiranja podatkov:** ne pošilja podatkov o uporabi, nima analitike, piškotkov ali oglasov.
- **Shranjevanje v brskalniku:** nastavitve (izbrana pravljica, velikost mreže, barve, postavitev sličic, število kosov) se shranijo v `localStorage` pod ključema `kubo-tematska-mreza-v1` in `kubo-tematska-tema`. Ostanejo samo v tem brskalniku in jih izbrišeš z brisanjem podatkov spletnega mesta. Osebni podatki se ne shranjujejo.
- **Izvoz PDF:** PDF nastane v brskalniku s knjižnico jsPDF in se shrani neposredno na računalnik. Nikamor se ne pošlje.
- **Vnosi uporabnika:** aplikacija sprejema samo števila, izbire iz seznamov in barve. Besedila uporabnika ne vstavlja v stran.

## Omrežne povezave

| Različica | Povezava | Namen |
|---|---|---|
| Samostojna (`dist/kubo-tematska-mreza.html`) | `fonts.googleapis.com`, `fonts.gstatic.com` | pisavi Baloo 2 in Nunito Sans; brez interneta se uporabi sistemska pisava |
| Artefakt (`dist/kubo-tematska-mreza-artefakt.html`) | zgoraj navedeni + `cdnjs.cloudflare.com` | knjižnica jsPDF 2.5.1 z različico, določeno v naslovu |

Samostojna različica ima knjižnico jsPDF vključeno v datoteko in za izvoz ne potrebuje interneta.

## Odvisnosti

- **jsPDF 2.5.1** (licenca MIT), shranjena v `src/vendor/jspdf-2.5.1.umd.min.js`. Ob posodobitvi knjižnico prenesi iz uradnega paketa npm `jspdf`, preveri spremembe in posodobi ta dokument ter `CHANGELOG.md`.
- Orodja za gradnjo (`tools/`) uporabljajo Python in Playwright. Izvajajo se samo na razvijalčevem računalniku in niso del aplikacije.

## Poročanje o ranljivostih

Če odkriješ varnostno težavo, jo sporoči neposredno vzdrževalcu na [kontaktni e-naslov vzdrževalca] in je ne objavljaj javno, dokler ni odpravljena. V sporočilo zapiši:

- različico in ime datoteke, ki jo uporabljaš;
- brskalnik in operacijski sistem;
- korake, s katerimi se težava ponovi;
- morebiten predlog rešitve.
