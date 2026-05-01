import Link from "next/link";
import type { Tournament, Match } from "@/mocks/tournaments";

type Props = { tournament: Tournament };

function MatchCard({ m, tournament }: { m: Match; tournament: Tournament }) {
  const leftName = m.a?.name ?? "TBD";
  const rightName = m.b?.name ?? "TBD";

  return (
    <Link
      href={`/tournaments/${tournament.slug}/battle/${m.id}`}
      className="block bg-surface-container rounded-xl p-3 hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-lg object-cover"
            alt={leftName}
            src={m.a?.avatar ?? ""}
          />
          <span className="font-body text-sm font-semibold">{leftName}</span>
        </div>
        <div className="font-mono text-sm">{m.aScore ?? ""}</div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-lg object-cover"
            alt={rightName}
            src={m.b?.avatar ?? ""}
          />
          <span className="font-body text-sm font-semibold">{rightName}</span>
        </div>
        <div className="font-mono text-sm">{m.bScore ?? ""}</div>
      </div>
    </Link>
  );
}

export default function TournamentBracket({ tournament }: Props) {
  const rounds = tournament.bracket?.rounds ?? [];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-8 min-w-[900px]">
        {rounds.map((round) => (
          <div key={round.id} className="flex-1">
            <h3 className="font-label text-xs uppercase mb-4">{round.name}</h3>
            <div className="flex flex-col gap-3">
              {round.matches.map((m) => (
                <MatchCard key={m.id} m={m} tournament={tournament} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
