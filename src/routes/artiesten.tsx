import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Menu, X, Ticket } from "lucide-react";

export const Route = createFileRoute("/artiesten")({
  component: ArtiestenPage,
  head: () => ({
    meta: [
      { title: "Artiesten — Symphony of Giving" },
      {
        name: "description",
        content:
          "Ontdek de artiesten van Symphony of Giving: dirigent Joris Decolvenaer, solisten, jong talent en het Symfonisch koor OCTOPUS.",
      },
    ],
  }),
});

// ─── Data ────────────────────────────────────────────────────────────────────

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
    label: "Dirigent",
    artists: [
      {
        name: "Joris Decolvenaer",
        role: "Dirigent",
        img: "https://symphony-of-giving.be/images/joris-decolvenaer.jpeg",
        bio: "Voor de Belgische dirigent en violist Joris Decolvenaer is de zoektocht naar dialoog en verbondenheid door muziek de rode draad van zijn muzikale carrière. Joris is dirigent en artistiek leider van het symfonisch orkest Vivanto. Hij is ook dirigent en medeoprichter van het Bangalore City Chamber Orchestra, het eerste professionele kamerorkest in Indië, alsook de dirigent van het Alumni Arenbergorkest te Leuven.\n\nHij dirigeerde reeds tal van orkesten in binnen- en buitenland, zoals het Symfonieorkest Vlaanderen, Orchestre Philharmonique de Liège, Kiev Symphonic Orchestra (Oekraïne)…\n\nJoris Decolvenaer is laureaat van verscheidene prijzen in muziekwedstrijden, zoals de Supernova-wedstrijd en de International Leos Janacek Competition. Hij is ook laureaat van de VOCATIO-beurs. Sinds 2022 is Joris viooldocent aan het Emanuel Feuermann Konzervatorium van de Kronberg Academy (Duitsland) en is hij professor in vakdidactiek viool aan het Koninklijk Conservatorium van Antwerpen.",
      },
    ],
  },
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

// ─── Components ──────────────────────────────────────────────────────────────

const BASE_URL = import.meta.env.BASE_URL || "/";

const NAV = [
  { href: `${BASE_URL}`, label: "Home" },
  { href: `${BASE_URL}#concert`, label: "Concert" },
  { href: `${BASE_URL}#programma`, label: "Programma" },
  { href: `${BASE_URL}#partners`, label: "Partners" },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-md bg-primary/85 text-primary-foreground border-b border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-lg sm:text-xl tracking-wide">
          Symphony <span className="text-accent italic">of</span> Giving
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </a>
          ))}
          <Link
            to="/artiesten"
            className="text-accent hover:opacity-80 transition-colors text-xs tracking-[0.25em] uppercase"
          >
            Artiesten
          </Link>
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
            to="/artiesten"
            onClick={() => setOpen(false)}
            className="py-1 text-accent"
          >
            Artiesten
          </Link>
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
      <div className="mt-10 border border-primary-foreground/15 grid md:grid-cols-[30%_1fr] gap-0 items-start overflow-hidden">
        <div className="hidden md:block w-full">
          <img
            src={active.img}
            alt={`Portret van ${active.name}`}
            className="w-full h-full object-cover object-top"
            style={{ minHeight: "320px", maxHeight: "480px" }}
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

function ArtiestenPage() {
  return (
    <div className="min-h-screen bg-stage text-primary-foreground">
      <SiteHeader />
      <main>
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Section header — same style as index page */}
            <header className="section-header max-w-3xl mb-14">
              <div className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">De artiesten</div>
              <h1 className="font-sans text-3xl sm:text-5xl text-primary-foreground font-bold tracking-tight">Artiesten</h1>
              <p className="mt-5 text-primary-foreground/65 text-base sm:text-lg leading-relaxed max-w-2xl">
                Ontdek de musici die Symphony of Giving 2.0 tot leven brengen — van dirigent tot solist, van jong talent tot een meesterlijk koor.
              </p>
              <div className="mt-7 h-px w-16 bg-accent/60" />
            </header>

            <AllArtistsSlider />
          </div>
        </section>
      </main>

      {/* Footer — same as index */}
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
            <p>
              <a href="mailto:maes.wrc@telenet.be" className="hover:text-accent">maes.wrc@telenet.be</a>
            </p>
            <p>
              <a href="tel:+32475537839" className="hover:text-accent">0475 53 78 39</a>
            </p>
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
    </div>
  );
}
