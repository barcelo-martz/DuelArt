import Link from "next/link";
import type { Tournament } from "@/mocks/tournaments";

type Props = { tournament: Tournament };

export default function TournamentCard({ tournament }: Props) {
  const participants = tournament.participantsList?.length ?? 0;

  return (
    <Link
      href={`/tournaments/${tournament.slug}`}
      className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover blur-[2px] scale-110 group-hover:blur-0 transition-all duration-500"
          alt={tournament.title}
          src={
            tournament.heroImage ?? "https://picsum.photos/seed/default/800/400"
          }
        />
        <div className="absolute inset-0 bg-surface/40" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded font-label text-[10px] tracking-widest">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-[#111114]">
        <h3 className="font-headline italic text-2xl text-on-surface mb-6">
          {tournament.title}
        </h3>
        <div className="grid grid-cols-2 gap-y-6 mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface/40 font-label mb-1">
              Participants
            </p>
            <p className="font-mono text-on-surface">{participants}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface/40 font-label mb-1">
              Bracket
            </p>
            <p className="font-mono text-on-surface">
              {tournament.bracket ? "Live" : "TBA"}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] uppercase tracking-widest text-on-surface/40 font-label">
              Slots Filled
            </p>
            <p className="text-[10px] font-mono text-primary">
              {Math.min(100, Math.round((participants / 256) * 100))}%
            </p>
          </div>
          <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{
                width: `${Math.min(100, Math.round((participants / 256) * 100))}%`,
              }}
            />
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold py-3 rounded-lg hover:opacity-90 transition-opacity mb-6">
          Join Tournament
        </button>

        <div className="flex items-center mt-auto pt-4 border-t border-outline-variant/10">
          <div className="flex -space-x-3 overflow-hidden">
            {tournament.participantsList?.slice(0, 3).map((p) => (
              <img
                key={p.id}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-surface-container-lowest"
                alt={p.name}
                src={p.avatar}
              />
            ))}
          </div>
          <p className="text-[11px] text-on-surface/40 font-label tracking-wide ml-4">
            +{participants} joined
          </p>
        </div>
      </div>
    </Link>
  );
}
