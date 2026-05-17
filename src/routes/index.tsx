import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Ticket, Mail, Phone, MapPin, Calendar } from "lucide-react";
import bearImg from "@/assets/bear.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NAV = [
  { href: "#concert", label: "Concert" },
  { href: "#benefiet", label: "Benefiet" },
  { href: "#programma", label: "Programma" },
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

const PARTNERS = {
  hoofd: [{ name: "DAS Verzekeringen", src: "https://symphony-of-giving.be/images/logo-das.svg", href: "https://www.das.be/" }],
  premium: [
    { name: "Cepom", src: "https://symphony-of-giving.be/images/logo-cepom.webp", href: "https://www.cepom.be/nl/" },
    { name: "Brooksmiller", src: "https://symphony-of-giving.be/images/logo-brooksmiller.png", href: "https://brooksmillerpartners.com/home/" },
  ],
  sponsors: [
    { name: "Voya Travel", src: "https://symphony-of-giving.be/images/logo-voya.svg", href: "https://voja.travel/" },
    { name: "De Familiepraktijk", src: "https://symphony-of-giving.be/images/logo-defamiliepraktijk.svg", href: "https://familiepraktijk.be/" },
    { name: "Pro Arte", src: "https://symphony-of-giving.be/images/logo-pro-arte.avif", href: "https://www.proarte.be/" },
    { name: "Just Corals", src: "https://symphony-of-giving.be/images/logo-just-corals.webp" },
    { name: "Wijnen De Kok", src: "https://symphony-of-giving.be/images/logo-wijnen-dekok.gif", href: "https://wijnen-dekok.com/" },
  ],
  ambassadeurs: [
    { name: "Harmonie Sint Cecilia Nijlen", src: "https://symphony-of-giving.be/images/logo-harmonie-nijlen.png" },
    { name: "Radio Klara", src: "https://symphony-of-giving.be/images/logo-klara.jpg" },
    { name: "KBC Private Banking Wilrijk", src: "https://symphony-of-giving.be/images/logo-kbc-private-banking.jpg" },
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
        <Partners />
        <TicketsCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-md bg-primary/85 text-primary-foreground border-b border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-sans text-base sm:text-lg font-bold tracking-tight uppercase">
          Symphony <span className="text-accent">of</span> Giving
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </a>
          ))}
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
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
            className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-2 font-semibold w-fit"
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
    <section id="hero" className="hero relative overflow-hidden bg-parchment text-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 sm:pt-24 pb-[42vh] sm:pb-[40vh] text-center relative z-10">
        <div className="flex items-center justify-center gap-3 text-accent text-xs sm:text-sm tracking-[0.4em] uppercase mb-8 font-semibold">
          <span className="h-px w-10 bg-accent" />
          Benefietconcert
          <span className="h-px w-10 bg-accent" />
        </div>
        <h1 className="font-sans font-black uppercase text-primary leading-[0.88] tracking-tight text-[15vw] sm:text-[12vw] lg:text-[10rem]">
          Symphony
          <br />
          <span className="font-light italic lowercase">of</span> Giving
        </h1>
        <div className="gold-rule my-8 mx-auto max-w-xs" />
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Carmina Burana van Orff en Beethovens Koorfantasie — een avond
          klassieke muziek met groot hart, ten voordele van drie goede doelen.
        </p>
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <InfoItem icon={<Calendar className="w-4 h-4" />} label="Datum" value="25.10.2026 — 15:00" />
          <InfoItem icon={<MapPin className="w-4 h-4" />} label="Locatie" value="Koningin Elisabethzaal" hint="Antwerpen" />
          <InfoItem icon={<Ticket className="w-4 h-4" />} label="Werken" value="Carmina Burana" hint="Koorfantasie" />
        </dl>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            <Ticket className="w-4 h-4" /> Koop tickets
          </Link>
          <a
            href="#concert"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold hover:bg-primary/5 transition"
          >
            Ontdek het concert
          </a>
        </div>
      </div>

      {/* Dark stage floor + smooth transition into the rest of the page */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[38vh] sm:h-[34vh] bg-stage z-0" />
      <div aria-hidden className="absolute inset-x-0 bottom-[34vh] sm:bottom-[30vh] h-[14vh] parchment-to-stage z-0" />

      {/* Bear sitting on the dark floor, slightly left and tilted */}
      <img
        src={bearImg}
        alt="Blauwe pluche beer met gouden strik — mascotte van Symphony of Giving"
        width={1024}
        height={1024}
        className="pointer-events-none select-none absolute left-2 sm:left-6 md:left-12 bottom-0 w-[58%] sm:w-[36%] md:w-[30%] max-w-[420px] z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] -rotate-[6deg] origin-bottom"
      />
    </section>
  );
}

function InfoItem({ icon, label, value, hint }: { icon: React.ReactNode; label: string; value: string; hint?: string }) {
  return (
    <div className="info-item text-center sm:text-left">
      <dt className="flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-widest text-primary/60">
        <span className="text-accent">{icon}</span> {label}
      </dt>
      <dd className="mt-1 font-display text-xl text-primary">{value}</dd>
      {hint && <dd className="text-sm text-muted-foreground">{hint}</dd>}
    </div>
  );
}

function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="section-header max-w-3xl mb-12">
      <div className="text-accent text-xs tracking-[0.3em] uppercase mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl sm:text-5xl text-primary font-semibold">{title}</h2>
      {lead && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{lead}</p>}
      <div className="gold-rule mt-6 max-w-[8rem]" />
    </header>
  );
}

function Concert() {
  return (
    <section id="concert" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Het concert"
          title="Muziek als smeekbede om vrede"
        />
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <blockquote className="md:col-span-2 font-display text-2xl sm:text-3xl text-primary leading-snug">
            “Februari 2022, Rusland valt Oekraïne binnen. Verbijstering, onmacht!
            Misschien kan muziek wat troost bieden. Symphony of Giving was geboren.”
            <footer className="mt-6 text-sm font-sans not-italic text-muted-foreground">
              — Walter Maes, voorzitter
            </footer>
          </blockquote>
          <div className="text-muted-foreground space-y-4 text-base">
            <p>
              In november 2023 vulden koren, orkesten en solisten de Elisabethzaal
              voor een heerlijk benefietconcert. Drie jaar later staat
              <strong className="text-foreground"> Symphony of Giving 2.0</strong> in de
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
    <section id="benefiet" className="py-24 sm:py-32 bg-muted/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Ten voordele van"
          title="Drie goede doelen"
          lead="De volledige opbrengst van het concert gaat naar projecten die het verschil maken — dichtbij en ver weg."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {BENEFICIARIES.map((b) => (
            <article key={b.name} className="beneficiary-card bg-card rounded-xl border border-border p-6 flex flex-col">
              <div className="h-20 flex items-center">
                <img src={b.logo} alt={`Logo ${b.name}`} className="max-h-16 max-w-[180px] object-contain" />
              </div>
              <h3 className="font-display text-2xl text-primary mt-4">{b.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{b.text}</p>
              <div className="mt-5 pt-4 border-t border-border/60 text-sm space-y-1">
                {b.iban && (
                  <p>
                    <span className="text-muted-foreground">Steunen: </span>
                    <span className="font-mono text-foreground">{b.iban}</span>
                  </p>
                )}
                {b.link && (
                  <a href={b.link.href} target="_blank" rel="noreferrer" className="text-accent-foreground underline underline-offset-4 decoration-accent hover:text-primary">
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
  return (
    <section id="programma" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Programma"
          title="Wat u te horen krijgt"
          lead="Een rijk programma dat barok, romantiek en het iconische Carmina Burana van Carl Orff verenigt."
        />

        <ol className="program-list divide-y divide-border border-y border-border max-w-3xl">
          {PROGRAM.map((p, i) => (
            <li key={i} className="flex items-baseline justify-between gap-6 py-5">
              <span className="font-display text-xl sm:text-2xl text-primary">{p.composer}</span>
              <span className="text-right text-sm sm:text-base text-muted-foreground">{p.work}</span>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <article>
            <h3 className="font-display text-3xl text-primary">Symfonisch orkest Vivanto</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vivanto is een nieuw, dynamisch symfonisch orkest dat traditie en
              vernieuwing samenbrengt. De missie: klassieke muziek toegankelijk,
              inspirerend en relevant maken voor een breed publiek. Vivanto staat
              voor leven, energie en beweging.
            </p>
          </article>
          <article>
            <h3 className="font-display text-3xl text-primary">Joris Decolvenaer</h3>
            <p className="text-sm uppercase tracking-widest text-accent mt-1">Dirigent</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Belgisch dirigent en violist, artistiek leider van Vivanto.
              Hij dirigeerde reeds o.a. Symfonieorkest Vlaanderen, Orchestre
              Philharmonique de Liège en Kiev Symphonic Orchestra. Sinds 2022
              professor vakdidactiek viool aan het Koninklijk Conservatorium
              van Antwerpen.
            </p>
          </article>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl text-primary mb-6">Solisten</h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SOLOISTS.map((s) => (
              <li key={s.name} className="soloist-card text-center">
                <div className="aspect-square overflow-hidden rounded-full border-2 border-accent/40 mx-auto max-w-[180px]">
                  <img src={s.img} alt={`Portret van ${s.name}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="mt-4 font-display text-lg text-primary">{s.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PartnerTier({ title, items, size = "md" }: { title: string; items: { name: string; src: string; href?: string }[]; size?: "lg" | "md" | "sm" }) {
  const h = size === "lg" ? "h-24" : size === "md" ? "h-16" : "h-12";
  return (
    <div className="partner-tier">
      <h3 className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70 text-center mb-6">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {items.map((p) => {
          const img = (
            <img
              src={p.src}
              alt={`Logo ${p.name}`}
              className={`${h} max-w-[200px] object-contain opacity-80 hover:opacity-100 transition`}
              loading="lazy"
            />
          );
          return p.href ? (
            <a key={p.name} href={p.href} target="_blank" rel="noreferrer">
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
  return (
    <section id="partners" className="py-24 sm:py-32 bg-muted/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Met dank aan"
          title="Partners & sponsors"
          lead="Symphony of Giving wordt mogelijk gemaakt door bedrijven en organisaties die mee hun schouders onder dit project zetten."
        />
        <div className="space-y-16">
          <PartnerTier title="Hoofdsponsor" items={PARTNERS.hoofd} size="lg" />
          <PartnerTier title="Premium sponsors" items={PARTNERS.premium} size="md" />
          <PartnerTier title="Sponsors" items={PARTNERS.sponsors} size="sm" />
          <PartnerTier title="Ambassadeurs" items={PARTNERS.ambassadeurs} size="sm" />
        </div>
      </div>
    </section>
  );
}

function TicketsCTA() {
  return (
    <section id="tickets" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Mis het niet</div>
        <h2 className="font-display text-4xl sm:text-6xl text-primary font-semibold">
          25.10.2026 — 15:00
        </h2>
        <p className="mt-3 text-muted-foreground">Koningin Elisabethzaal, Antwerpen</p>
        <div className="gold-rule my-8 mx-auto max-w-[8rem]" />
        <Link
          to="/tickets"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition"
        >
          <Ticket className="w-5 h-5" /> Koop tickets
        </Link>
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
            className="h-14 bg-white/95 rounded p-2 w-fit"
          />
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Symphony of Giving — Vivanto vzw
      </div>
    </footer>
  );
}
