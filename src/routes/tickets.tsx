import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Ticket } from "lucide-react";

export const Route = createFileRoute("/tickets")({
  component: TicketsPage,
  head: () => ({
    meta: [
      { title: "Tickets — Symphony of Giving" },
      {
        name: "description",
        content:
          "Tickets voor het benefietconcert Symphony of Giving op 25 oktober 2026 in de Koningin Elisabethzaal Antwerpen.",
      },
    ],
  }),
});

function TicketsPage() {
  return (
    <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Tickets</div>
        <h1 className="font-display text-5xl sm:text-6xl text-primary font-semibold">
          Binnenkort beschikbaar
        </h1>
        <div className="gold-rule my-8 mx-auto max-w-[8rem]" />
        <p className="text-muted-foreground">
          De ticketverkoop voor Symphony of Giving — 25 oktober 2026, Koningin
          Elisabethzaal Antwerpen — opent binnenkort. Hou deze pagina in de
          gaten of laat uw interesse weten via
          {" "}
          <a href="mailto:maes.wrc@telenet.be" className="underline decoration-accent underline-offset-4 hover:text-primary">
            maes.wrc@telenet.be
          </a>.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-medium hover:bg-primary/5 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar de site
          </Link>
          <a
            href="mailto:maes.wrc@telenet.be?subject=Tickets%20Symphony%20of%20Giving"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Ticket className="w-4 h-4" /> Hou mij op de hoogte
          </a>
        </div>
      </div>
    </div>
  );
}
