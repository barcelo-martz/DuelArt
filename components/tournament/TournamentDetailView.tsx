import TournamentHero from "@/components/tournament/TournamentHero";
import TournamentBracket from "@/components/tournament/TournamentBracket";
import ParticipantCard from "@/components/tournament/ParticipantCard";
import type { Tournament } from "@/mocks/tournaments";

type Props = { tournament: Tournament };

export default function TournamentDetailView({ tournament }: Props) {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <TournamentHero tournament={tournament} />

      <main className="w-full bg-surface py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline italic text-3xl text-on-surface mb-6">
            Bracket
          </h2>
          <div className="bg-surface-container rounded-xl p-6">
            <TournamentBracket tournament={tournament} />
          </div>
        </div>
      </main>

      <section className="w-full bg-surface-container-low py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline italic text-4xl text-on-surface mb-2">
                The Combatants
              </h2>
              <p className="font-body text-on-surface-variant max-w-lg">
                A roster of the artists competing in this tournament.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {tournament.participantsList.map((p) => (
              <ParticipantCard key={p.id} artist={p} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="font-label text-xs tracking-widest text-on-surface-variant uppercase border-b border-outline-variant pb-2 hover:text-primary hover:border-primary transition-all">
              View All Participants
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
