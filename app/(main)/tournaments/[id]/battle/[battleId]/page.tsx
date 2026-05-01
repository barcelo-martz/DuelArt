import { notFound } from "next/navigation";
import BattleView from "@/components/tournament/BattleView";
import tournaments from "@/mocks/tournaments";

export default async function BattlePage({
  params,
}: {
  params:
    | { id: string; battleId: string }
    | Promise<{ id: string; battleId: string }>;
}) {
  const { id, battleId } = await params;

  const tournament = tournaments.find((t) => t.slug === id || t.id === id);
  if (!tournament) return notFound();

  let match: any | undefined = undefined;
  for (const round of tournament.bracket?.rounds ?? []) {
    const found = round.matches.find((m) => m.id === battleId);
    if (found) {
      match = found as any;
      break;
    }
  }

  return (
    <BattleView tournament={tournament} match={match} battleId={battleId} />
  );
}
