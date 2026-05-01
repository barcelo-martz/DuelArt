import { notFound } from "next/navigation";
import TournamentDetailView from "@/components/tournament/TournamentDetailView";
import tournaments from "@/mocks/tournaments";
export default async function TournamentDetail({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const tournament = tournaments.find((t) => t.slug === slug || t.id === slug);
  if (!tournament) return notFound();
  return <TournamentDetailView tournament={tournament} />;
}
