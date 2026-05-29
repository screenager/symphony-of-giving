import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Ticket, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.webp";
import orkestImage from "@/assets/Music meets science-6.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NAV = [
  { href: "#concert", label: "Concert" },
  { href: "#programma", label: "Programma" },
  { href: "#artiesten", label: "Artiesten" },
  { href: "#partners", label: "Partners" },
];

const BENEFICIARIES = [
  {
    name: "Artsen Zonder Grenzen",
    logo: "https://symphony-of-giving.be/images/logo-artsen-zonder-grenzen.png",
    text: "Een internationale, onafhankelijke medische hulporganisatie die levensreddende zorg biedt aan mensen in nood — ongeacht afkomst, religie of politieke overtuiging. 98% van de fondsen komt via particuliere schenkers.",
    link: { label: "azg.be", href: "https://www.azg.be/" },
    iban: "BE64 2100 4850 0052",
  },
  {
    name: "Mercy Ships",
    logo: "https://symphony-of-giving.be/images/logo-mercy-ships.webp",
    text: "Met twee ziekenhuisschepen brengt Mercy Ships gratis operaties en behandelingen naar landen waar medische zorg niet vanzelfsprekend is, en leidt lokale zorgverleners op voor blijvende impact.",
    link: { label: "mercyships.be", href: "https://www.mercyships.be/" },
  },
  {
    name: "Hart voor Handicap",
    logo: "https://symphony-of-giving.be/images/logo-hart-voor-handicap.png",
    text: "Kinderen en jongeren met een beperking volop laten meedoen — op school met ‘Onwijs Onderwijs’ en in de vrije tijd met ‘Doemamee’. Samen opgroeien creëert begrip, vriendschap en een sterker sociaal netwerk.",
    link: { label: "hartvoorhandicap.be", href: "https://www.hartvoorhandicap.be/" },
    iban: "BE11 0689 9998 4848",
  },
];

const PROGRAM = [
  { composer: "J.S. Bach", work: "Prelude uit Suite I" },
  { composer: "A. Dvořák", work: "Allegro ma non troppo & Larghetto uit Terzetto opus 74" },
  { composer: "L. v. Beethoven", work: "Koorfantasie opus 80" },
  { composer: "— Pauze —", work: "" },
  { composer: "C. Orff", work: "Carmina Burana" },
];

const SOLOISTS = [
  { name: "David Van Looveren", role: "Pianist", img: "https://symphony-of-giving.be/images/david-van-looveren.jpeg" },
  { name: "Elise Caluwaerts", role: "Sopraan", img: "https://symphony-of-giving.be/images/elise-caluwaerts.jpeg" },
  { name: "Timothy Veryser", role: "Tenor", img: "https://symphony-of-giving.be/images/timothy-veryser.jpeg" },
  { name: "Joris Derder", role: "Bariton / dirigent", img: "https://symphony-of-giving.be/images/joris-derder.jpeg" },
];

type Artist = {
  name: string;
  role: string;
  img: string;
  bio: string;
  website?: string;
};

type ArtistGroup = {
  label: string;
  artists: Artist[];
};

const ARTIST_GROUPS: ArtistGroup[] = [
  {
    label: "Solisten",
    artists: [
      {
        name: "David Van Looveren",
        role: "Pianist",
        img: "https://symphony-of-giving.be/images/david-van-looveren.jpeg",
        bio: "David Van Looveren is een pianist met een rijk gevuld palmares als solist en kamermusicus. Hij behaalde masterdiploma's aan het Koninklijk Vlaams Conservatorium Antwerpen en het Fontys Conservatorium Tilburg en vervolmaakte zich voor piano bij Jan Wijn. Als pianist en artistiek leider werkte hij met het 'ensemble hommages' conceptuele projecten uit rond o.a. Schumann, Bartok en Messiaen en voerde hij zowel het integrale kamermuziekrepertoire van Johannes Brahms als hedendaagse creaties uit. Hij is als pianobegeleider verbonden aan de academies van Wilrijk, Borgerhout en Hemiksem, ondersteunt studenten op audities, concerten, wedstrijden en stages. David Van Looveren is verder actief als liedbegeleider en vormt een vast duo met saxofonist Bart Van Beneden.",
        website: "https://www.davidvanlooveren.com/",
      },
      {
        name: "Elise Caluwaerts",
        role: "Sopraan",
        img: "https://symphony-of-giving.be/images/elise-caluwaerts.jpeg",
        bio: "Sopraan Elise Caluwaerts groeide dankzij haar veelzijdigheid en innemende persoonlijkheid uit tot een veelgevraagde soliste in binnen- en buitenland. Ze startte haar zangcarrière als barokzangeres en breidde haar repertoire uit naar de romantische en hedendaagse muziek. Haar voorliefde voor uitdagend repertoire – van opera tot multidisciplinaire projecten – leidde tot talrijke creaties en bijzondere samenwerkingen met internationaal gerenommeerde componisten en ensembles. Zo werd haar vertolking van Lei in Pascal Dusapins kameropera Passion tijdens het Sydneyfestival 2016 vol lof onthaald, en werd ze door het St-Petersburg Symphony Orchestra uitgenodigd voor een cd-opname met spectaculair coloratuurrepertoire.",
        website: "http://www.elisecaluwaerts.com/",
      },
      {
        name: "Timothy Veryser",
        role: "Tenor",
        img: "https://symphony-of-giving.be/images/timothy-veryser.jpeg",
        bio: "Timothy Veryser, Belgische tenor, studeerde aan het Koninklijk Conservatorium van Gent en is sinds 2022 lid van de MM Academy van de Munt. Hij zong diverse rollen, waaronder Gernando, Donald en Malo, en won prijzen op het XIVe Concours Lyrique International Bell'Arte. Veryser debuteerde op de Bregenzer Festspiele en bij Opera Ballet Vlaanderen, en werkt samen met gerenommeerde dirigenten en artiesten.",
        website: "https://timothyveryser.com/",
      },
      {
        name: "Joris Derder",
        role: "Bariton · dirigent",
        img: "https://symphony-of-giving.be/images/joris-derder.jpeg",
        bio: "Joris Derder, een veelzijdige bariton en dirigent, studeerde viool, zang en koordirectie. Hij richtte het Gents Universitair Koor en Kamerkoor Koriolis op en is artistiek leider van Air4Six. Joris werkt samen met diverse ensembles en dirigenten, en heeft een breed repertoire van barok tot romantiek.",
        website: "https://jorisderder.com/",
      },
    ],
  },
  {
    label: "Jong talent",
    artists: [
      {
        name: "Jana Mestdag",
        role: "Violiste",
        img: "https://symphony-of-giving.be/images/jana-mestdag.jpeg",
        bio: "Jana Mestdag, °2007, is een Belgische/Bulgaarse violiste die succesvol deelnam aan (inter)nationale wedstrijden als Belgian Young Soloists, Prinses Christina Concours, Breughel Concours, Crickboom Concours en de Cantus Firmus National Competition. Ze maakte deel uit van het Toyota Youth Orchestra in Japan en is aanvoerder van de tweede violen bij het Mahler Student Festival Orchestra. Nadat ze werd toegelaten tot het Royal Concertgebouw Orchestra Young 2025 mocht ze de functie van concertmeester vervullen onder leiding van de Elim Chan. Ze is lid van de Mannheimer Philharmoniker, speelt in het European Union Youth Orchestra en is concertmeester van de Junge Mahler Philharmonie in Spanje. Momenteel volgt ze haar bacheloropleiding in de vioolklas van prof. Dora Bratchkova aan de Staatliche Hochschule für Musik und Darstellende Kunst Mannheim.",
      },
      {
        name: "Charlotte Van Looveren",
        role: "Altvioliste",
        img: "https://symphony-of-giving.be/images/charlotte-van-looveren.jpeg",
        bio: "Altvioliste Charlotte Van Looveren studeert bij Leo De Neve en Marjolein Dispa en volgt de opleiding Jong Conservatorium in Antwerpen. In 2024 behaalde ze een tweede prijs tijdens de regiofinale van het Prinses Christina Concours te Maastricht en in 2025 de tweede prijs in de Nationale Finale van het Prinses Christina Concours en de eerste prijs op de Wedstrijd voor Jonge Solisten Stringendo. Ze staat zeer vaak op podia in binnen- en buitenland, speelde meermaals live voor radio en televisie en concerteert regelmatig als soliste met orkest.",
        website: "https://www.davidvanlooveren.com/CharlotteVanLooveren.html",
      },
    ],
  },
  {
    label: "Symfonisch koor OCTOPUS",
    artists: [
      {
        name: "Symfonisch koor OCTOPUS",
        role: "Koor",
        img: "https://symphony-of-giving.be/images/octopuskoor.webp",
        bio: "Octopus werkt sinds de oprichting door dirigent Bart Van Reyn op projectbasis, en wist op korte tijd een bevoorrechte positie in Vlaanderen te veroveren. Het ensemble bestaat uit een mix van gedreven semi-professionele en professionele zangers, en biedt conservatoriumstudenten zang een brug naar een professionele carrière.\n\nHun repertoire gaat van laat-barok tot de 21e eeuw. Naast vele a capellaprogramma's zingen ze ook oratoria en symfonische koorwerken van Bach tot MacMillan.\n\nZe werkten samen met orkesten als Brussels Philharmonic, Antwerp Symphony Orchestra, Symfonisch Orkest van de Munt, Symfonieorkest Vlaanderen, Orkest van Opera Vlaanderen, Belgian National Orchestra, Orchestre Philharmonique Royal de Liège, Budapest Festival Orchestra, NDR Radiophilharmonie, Bochumer Symphoniker en barokorkesten B'Rock en Le Concert d'Anvers.",
        website: "http://www.octopusensembles.be/",
      },
    ],
  },
];

type PartnerItem = { name: string; src: string; href?: string; whiteBg?: boolean };

const PARTNERS: Record<"hoofd" | "premium" | "sponsors" | "ambassadeurs", PartnerItem[]> = {
  hoofd: [{ name: "DAS Verzekeringen", src: "https://symphony-of-giving.be/images/logo-das.svg", href: "https://www.das.be/" }],
  premium: [
    { name: "Cepom", src: "https://symphony-of-giving.be/images/logo-cepom.webp", href: "https://www.cepom.be/nl/", whiteBg: true },
    { name: "Brooksmiller", src: "https://symphony-of-giving.be/images/logo-brooksmiller.png", href: "https://brooksmillerpartners.com/home/" },
  ],
  sponsors: [
    { name: "Voya Travel", src: "https://symphony-of-giving.be/images/logo-voya.svg", href: "https://voja.travel/" },
    { name: "De Familiepraktijk", src: "https://symphony-of-giving.be/images/logo-defamiliepraktijk.svg", href: "https://familiepraktijk.be/" },
    { name: "Pro Arte", src: "https://symphony-of-giving.be/images/logo-pro-arte.avif", href: "https://www.proarte.be/" },
    { name: "Just Corals", src: "https://symphony-of-giving.be/images/logo-just-corals.webp", whiteBg: true },
    { name: "Wijnen De Kok", src: "https://symphony-of-giving.be/images/logo-wijnen-dekok.gif", href: "https://wijnen-dekok.com/", whiteBg: true },
  ],
  ambassadeurs: [
    { name: "Harmonie Sint Cecilia Nijlen", src: "https://symphony-of-giving.be/images/logo-harmonie-nijlen.png" },
    { name: "Radio Klara", src: "https://symphony-of-giving.be/images/logo-klara.jpg", whiteBg: true },
    { name: "KBC Private Banking Wilrijk", src: "https://symphony-of-giving.be/images/logo-kbc-private-banking.jpg", whiteBg: true },
    { name: "Vocatio", src: "https://symphony-of-giving.be/images/logo-vocatio.svg", href: "https://www.vocatio.be/nl" },
  ],
};

function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stage text-primary-foreground">
      <SiteHeader open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <Concert />
        <Benefiet />
        <Programma />
        <Artiesten />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-md bg-primary/85 text-primary-foreground border-b border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-lg sm:text-xl tracking-wide">
          Symphony <span className="text-accent italic">of</span> Giving
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </a>
          ))}
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 text-xs tracking-[0.25em] uppercase hover:opacity-90 transition"
          >
            <Ticket className="w-4 h-4" /> Tickets
          </Link>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-primary-foreground/10 bg-primary px-4 py-4 flex flex-col gap-3 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1">
              {n.label}
            </a>
          ))}
          <Link
            to="/tickets"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 text-xs tracking-[0.25em] uppercase w-fit"
          >
            <Ticket className="w-4 h-4" /> Tickets
          </Link>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero relative overflow-hidden">
      {/* Full-width banner — the bear + wordmark live in the image itself.
          The bottom fades into the dark stage below. */}
        <div className="relative">
          <img
            src={heroBanner}
            alt="Symphony of Giving — blauwe pluche beer met gouden strik naast het logo"
            width={1600}
            height={800}
            className="relative z-10 block w-full h-auto"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black calc(100% - 280px), transparent 100%)",
              maskImage: "linear-gradient(to bottom, black calc(100% - 280px), transparent 100%)",
            }}
          />

        </div>
      <div className="relative z-30 -mt-10 sm:-mt-16 pb-2 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-center gap-5 sm:gap-8 text-accent mb-8">
            <span className="flex-1 h-px bg-accent/50" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl tracking-tight text-accent whitespace-nowrap">
              Benefietconcert
            </h1>
            <span className="flex-1 h-px bg-accent/50" />
          </div>
          <div className="flex items-center gap-5">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <p className="text-center font-display italic text-xl sm:text-2xl leading-snug text-primary-foreground/85 whitespace-nowrap">
              Een avond klassieke muziek met groot hart
            </p>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm tracking-[0.35em] uppercase text-primary-foreground/60">
            ten voordele van drie goede doelen
          </p>
        </div>
      </div>

      {/* Big event details + CTAs, on the darkening background */}
      <div className="relative z-10 pb-14 pt-10 sm:pb-24 sm:pt-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Row 1: date (left) — location (right) */}
          <div className="flex flex-row items-end justify-between gap-4 sm:gap-8 pb-8 sm:pb-10 border-b border-accent/25">
            <div className="text-left">
              <div className="text-[10px] tracking-[0.5em] uppercase text-accent/80 mb-3">Datum</div>
              <div className="font-display text-accent text-3xl sm:text-5xl lg:text-6xl leading-none">25.10.2026</div>
              <div className="mt-3 text-primary-foreground/80 text-xs sm:text-sm tracking-[0.3em] uppercase">15:00</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] tracking-[0.5em] uppercase text-accent/80 mb-3">Locatie</div>
              <div className="font-display text-primary-foreground text-2xl sm:text-4xl lg:text-5xl leading-tight">
                Koningin<br className="sm:hidden" /> Elisabethzaal
              </div>
              <div className="mt-3 text-primary-foreground/70 text-xs sm:text-sm tracking-[0.3em] uppercase">Antwerpen</div>
            </div>
          </div>

          {/* Row 2: main works, centered, refined serif treatment */}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            <div>
              <div className="font-display text-primary-foreground text-4xl sm:text-5xl lg:text-6xl leading-none italic">Carmina Burana</div>
              <div className="mt-3 text-accent text-[10px] sm:text-xs tracking-[0.5em] uppercase">Carl Orff</div>
            </div>
            <span aria-hidden className="hidden sm:block text-accent/50 text-2xl font-display">·</span>
            <div>
              <div className="font-display text-primary-foreground text-4xl sm:text-5xl lg:text-6xl leading-none italic">Koorfantasie</div>
              <div className="mt-3 text-accent text-[10px] sm:text-xs tracking-[0.5em] uppercase">L. v. Beethoven</div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 flex flex-wrap gap-3 justify-center px-4">
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 rounded-none bg-accent text-primary px-8 py-3.5 text-xs tracking-[0.3em] uppercase hover:opacity-90 transition"
          >
            <Ticket className="w-4 h-4" /> Koop tickets
          </Link>
          <a
            href="#concert"
            className="inline-flex items-center gap-2 rounded-none border border-primary-foreground/25 px-8 py-3.5 text-xs tracking-[0.3em] uppercase hover:bg-primary-foreground/5 transition"
          >
            Ontdek het concert
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, lead, center = false }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <header className={`section-header max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <div className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">{eyebrow}</div>
      <h2 className="font-sans text-3xl sm:text-5xl text-primary-foreground font-bold tracking-tight">{title}</h2>
      {lead && <p className="mt-5 text-primary-foreground/65 text-base sm:text-lg leading-relaxed max-w-2xl">{lead}</p>}
      <div className={`mt-7 h-px w-16 bg-accent/60 ${center ? "mx-auto" : ""}`} />
    </header>
  );
}

function Concert() {
  return (
    <section id="concert" className="py-9 sm:py-27">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Het concert" title="Muziek als smeekbede om vrede" />
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <blockquote className="md:col-span-2 font-display text-2xl sm:text-3xl text-primary-foreground leading-snug">
            “Februari 2022, Rusland valt Oekraïne binnen. Verbijstering, onmacht!
            Misschien kan muziek wat troost bieden. Symphony of Giving was geboren.”
            <footer className="mt-6 text-sm font-sans not-italic text-primary-foreground/60">
              — Walter Maes, voorzitter
            </footer>
          </blockquote>
          <div className="text-primary-foreground/75 space-y-4 text-base">
            <p>
              In november 2023 vulden koren, orkesten en solisten de Elisabethzaal
              voor een heerlijk benefietconcert. Drie jaar later staat
              <strong className="text-accent"> Symphony of Giving 2.0</strong> in de
              steigers, met het nieuwe professionele orkest <em>Vivanto</em>.
            </p>
            <p>
              Artsen Zonder Grenzen, Mercy Ships en Hart voor Handicap rekenen op
              de vele mensen die deugen in onze wereld.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefiet() {
  return (
    <section id="benefiet" className="py-9 sm:py-27 bg-primary-foreground/[0.03] border-y border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Ten voordele van"
          title="Drie goede doelen"
          lead="De volledige opbrengst van het concert gaat naar projecten die het verschil maken — dichtbij en ver weg."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {BENEFICIARIES.map((b) => (
            <article key={b.name} className="beneficiary-card border border-primary-foreground/15 p-7 flex flex-col text-primary-foreground">
              <div className="h-24 flex items-center justify-center">
                <img
                  src={b.logo}
                  alt={`Logo ${b.name}`}
                  className="w-full max-h-20 object-contain partner-logo"
                />
              </div>
              <h3 className="font-display text-2xl text-accent mt-6 tracking-tight">{b.name}</h3>
              <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed flex-1">{b.text}</p>
              <div className="mt-5 pt-4 border-t border-primary-foreground/15 text-sm space-y-1">
                {b.iban && (
                  <p>
                    <span className="text-primary-foreground/60">Steunen: </span>
                    <span className="font-mono">{b.iban}</span>
                  </p>
                )}
                {b.link && (
                  <a href={b.link.href} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4 hover:opacity-80">
                    {b.link.label} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programma() {
  const [showMoreDirigent, setShowMoreDirigent] = useState(false);

  return (
    <section id="programma" className="py-9 sm:py-27">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow=""
          title="Programma"
          lead="Een rijk programma dat barok, romantiek en het iconische Carmina Burana van Carl Orff verenigt."
        />

        <ol className="program-list divide-y divide-primary-foreground/10">
          {PROGRAM.map((p, i) => {
            const isPause = p.composer.includes("Pauze");
            if (isPause) {
              return (
                <li key={i} className="flex items-center gap-4 py-5 text-accent">
                  <span className="flex-1 h-px bg-accent/40" />
                  <span className="text-xs uppercase tracking-[0.4em]">Pauze</span>
                  <span className="flex-1 h-px bg-accent/40" />
                </li>
              );
            }
            return (
              <li key={i} className="program-item py-5 flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                <h3 className="font-display text-2xl sm:text-3xl text-accent leading-tight sm:w-56 shrink-0">
                  {p.composer}
                </h3>
                <p className="text-primary-foreground/85 text-base sm:text-lg">{p.work}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <article className="border border-primary-foreground/15 p-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-4">Orkest</p>
            <h3 className="font-display text-3xl text-primary-foreground mb-4">Symfonisch orkest Vivanto</h3>
            <img
              src={orkestImage}
              alt="Symfonisch orkest Vivanto"
              className="float-left w-48 h-64 mr-6 mb-4 grayscale object-cover"
              loading="lazy"
            />
            <p className="text-primary-foreground/75 leading-relaxed">
              Vivanto is een nieuw, dynamisch symfonisch orkest dat traditie en
              vernieuwing samenbrengt. De missie: klassieke muziek toegankelijk,
              inspirerend en relevant maken voor een breed publiek. Vivanto staat
              voor leven, energie en beweging.
            </p>
          </article>
          <article className="border border-primary-foreground/15 p-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-4">Dirigent</p>
            <h3 className="font-display text-3xl text-primary-foreground mb-4">Joris Decolvenaer</h3>
            <img
              src="https://symphony-of-giving.be/images/joris-decolvenaer.jpeg"
              alt="Joris Decolvenaer"
              className="float-left w-48 h-64 mr-6 mb-4 grayscale object-cover"
              loading="lazy"
            />
            <div className="text-primary-foreground/75 leading-relaxed space-y-3 text-sm">
              <p>
                Voor de Belgische dirigent en violist Joris Decolvenaer is de zoektocht naar dialoog en verbondenheid door muziek de rode draad van zijn muzikale carrière. Joris is dirigent en artistiek leider van het symfonisch orkest Vivanto. Hij is ook dirigent en medeoprichter van het Bangalore City Chamber Orchestra, het eerste professionele kamerorkest in Indië, alsook de dirigent van het Alumni Arenbergorkest te Leuven.
              </p>
              {showMoreDirigent && (
                <>
                  <p>
                    Hij dirigeerde reeds tal van orkesten in binnen- en buitenland, zoals het Symfonieorkest Vlaanderen, Orchestre Philharmonique de Liège, Kiev Symphonic Orchestra (Oekraïne)…
                  </p>
                  <p>
                    Joris Decolvenaer is laureaat van verscheidene prijzen in muziekwedstrijden, zoals de Supernova-wedstrijd en de International Leos Janacek Competition. Hij is ook laureaat van de VOCATIO-beurs. Sinds 2022 is Joris viooldocent aan het Emanuel Feuermann Konzervatorium van de Kronberg Academy (Duitsland) en is hij professor in vakdidactiek viool aan het Koninklijk Conservatorium van Antwerpen.
                  </p>
                </>
              )}
              <button
                onClick={() => setShowMoreDirigent(!showMoreDirigent)}
                className="text-accent text-xs tracking-[0.3em] uppercase underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {showMoreDirigent ? "Lees minder" : "Lees meer"} →
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist, active, onClick }: { artist: Artist; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center text-center focus:outline-none transition-all ${active ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
    >
      <div
        className={`aspect-square overflow-hidden rounded-full border-2 transition-all w-28 sm:w-36 md:w-40 ${
          active ? "border-accent shadow-[0_0_0_4px_rgba(var(--accent-rgb,180,144,78)/0.25)]" : "border-primary-foreground/20 group-hover:border-accent/50"
        }`}
      >
        <img
          src={artist.img}
          alt={`Portret van ${artist.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-3 font-display text-base sm:text-lg text-primary-foreground leading-tight">{artist.name}</p>
      <p className="font-rounded text-[10px] uppercase tracking-widest text-primary-foreground/55 mt-1">{artist.role}</p>
    </button>
  );
}

function AllArtistsSlider() {
  // Flatten all artists into a single array, preserving order
  const allArtists = ARTIST_GROUPS.flatMap(group => group.artists);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = allArtists[activeIdx];

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  }

  return (
    <div>
      {/* Horizontal artist scroll */}
      <div className="relative">
        {allArtists.length > 3 && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 sm:-ml-6 bg-primary/80 border border-primary-foreground/15 p-1.5 hover:bg-primary transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 sm:-mr-6 bg-primary/80 border border-primary-foreground/15 p-1.5 hover:bg-primary transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {allArtists.map((artist, i) => (
            <div key={artist.name} className="flex-shrink-0">
              <ArtistCard
                artist={artist}
                active={activeIdx === i}
                onClick={() => setActiveIdx(i)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bio panel */}
      <div className="mt-10 border border-primary-foreground/15 grid md:grid-cols-[30%_1fr] gap-0 items-stretch overflow-hidden">
        <div className="hidden md:block w-full h-full">
          <img
            src={active.img}
            alt={`Portret van ${active.name}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-8">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-1">{active.role}</p>
          <h3 className="font-display text-2xl sm:text-3xl text-primary-foreground">{active.name}</h3>
          <div className="mt-5 text-primary-foreground/75 leading-relaxed space-y-3 text-sm sm:text-base">
            {active.bio.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {active.website && (
            <a
              href={active.website}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-accent text-xs tracking-[0.3em] uppercase underline underline-offset-4 hover:opacity-80"
            >
              Website →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Artiesten() {
  return (
    <section id="artiesten" className="py-9 sm:py-19 bg-primary-foreground/[0.03] border-y border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow=""
          title="Artiesten"
          lead="Ontdek de musici die Symphony of Giving 2.0 tot leven brengen — van solist tot jong talent tot een meesterlijk koor."
        />
        <AllArtistsSlider />
      </div>
    </section>
  );
}

function PartnerTier({ title, items, size = "md" }: { title: string; items: PartnerItem[]; size?: "lg" | "md" | "sm" }) {
  const h = size === "lg" ? "h-20 sm:h-24" : size === "md" ? "h-14 sm:h-16" : "h-12 sm:h-14";
  return (
    <div className="partner-tier">
      <h3 className="text-[10px] uppercase tracking-[0.5em] text-accent text-left mb-8">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-10 items-center justify-items-start">
        {items.map((p) => {
          const img = (
            <img
              src={p.src}
              alt={`Logo ${p.name}`}
              className={`${h} max-w-[180px] object-contain ${p.whiteBg ? "partner-logo--whitebg" : "partner-logo"}`}
              loading="lazy"
            />
          );
          return p.href ? (
            <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="block">
              {img}
            </a>
          ) : (
            <div key={p.name}>{img}</div>
          );
        })}
      </div>
    </div>
  );
}

function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Create a flat list with tier info for each partner
  type PartnerWithTier = PartnerItem & { tier: string; size: "lg" | "md" | "sm"; isFirstInTier: boolean };
  const allPartners: PartnerWithTier[] = [];
  
  const tiers = [
    { title: "Hoofdsponsor", items: PARTNERS.hoofd, size: "lg" as const },
    { title: "Premium sponsors", items: PARTNERS.premium, size: "md" as const },
    { title: "Sponsors", items: PARTNERS.sponsors, size: "sm" as const },
    { title: "Ambassadeurs", items: PARTNERS.ambassadeurs, size: "sm" as const },
  ];
  
  tiers.forEach((tier) => {
    tier.items.forEach((item, idx) => {
      allPartners.push({
        ...item,
        tier: tier.title,
        size: tier.size,
        isFirstInTier: idx === 0,
      });
    });
  });
  
  // Auto-scroll effect
  useEffect(() => {
    if (isHovering || !scrollRef.current) return;
    
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // If reached the end, reset to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 1, behavior: "auto" });
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovering]);
  
  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  }
  
  return (
    <section id="partners" className="py-9 sm:py-27 bg-primary-foreground/[0.03] border-y border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Met dank aan"
          title="Partners & sponsors"
          lead="Symphony of Giving wordt mogelijk gemaakt door bedrijven en organisaties die mee hun schouders onder dit project zetten."
        />
        
        {/* Continuous carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 sm:-ml-6 bg-primary/80 border border-primary-foreground/15 p-1.5 hover:bg-primary transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 sm:-mr-6 bg-primary/80 border border-primary-foreground/15 p-1.5 hover:bg-primary transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
          {/* Scrollable partner stream */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-8 sm:gap-12 overflow-x-auto pb-4 scrollbar-none items-start"
            style={{ scrollbarWidth: "none" }}
          >
            {allPartners.map((p) => {
              const h = p.size === "lg" ? "h-20 sm:h-24" : p.size === "md" ? "h-14 sm:h-16" : "h-12 sm:h-14";
              const img = (
                <img
                  src={p.src}
                  alt={`Logo ${p.name}`}
                  className={`${h} max-w-[180px] object-contain ${p.whiteBg ? "partner-logo--whitebg" : "partner-logo"}`}
                  loading="lazy"
                />
              );
              
              return (
                <div key={p.name} className="flex-shrink-0 flex flex-col items-start">
                  {/* Tier label above first item of each tier - fixed height container for alignment */}
                  <div className="h-8 mb-4">
                    {p.isFirstInTier && (
                      <h3 className="text-[10px] uppercase tracking-[0.5em] text-accent">
                        {p.tier}
                      </h3>
                    )}
                  </div>
                  {/* Logo */}
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="block">
                      {img}
                    </a>
                  ) : (
                    <div>{img}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-2xl">Symphony of Giving</p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Benefietconcert · 25 oktober 2026<br />
            Koningin Elisabethzaal, Antwerpen
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="uppercase tracking-widest text-xs text-accent mb-2">Contact</p>
          <p className="text-primary-foreground/80">Walter Maes — voorzitter</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:maes.wrc@telenet.be" className="hover:text-accent">maes.wrc@telenet.be</a></p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+32475537839" className="hover:text-accent">0475 53 78 39</a></p>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-widest text-xs text-accent mb-2">Met de steun van</p>
          <img
            src="https://symphony-of-giving.be/images/logo-das.svg"
            alt="Logo DAS Verzekeringen"
            className="h-12 partner-logo w-fit"
          />
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Symphony of Giving — Vivanto vzw
      </div>
    </footer>
  );
}
