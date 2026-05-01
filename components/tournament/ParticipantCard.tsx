import type { Artist } from "@/mocks/tournaments";

type Props = { artist: Artist };

export default function ParticipantCard({ artist }: Props) {
  return (
    <div className="bg-surface rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <img
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
          alt={artist.name}
          src={artist.avatar ?? ""}
        />
        <div>
          <h4 className="font-body font-bold text-lg">{artist.name}</h4>
          <p className="font-label text-[10px] text-on-surface-variant uppercase">
            {artist.handle ?? ""}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-6">
        <div className="flex flex-col">
          <span className="font-label text-[10px] text-on-surface-variant uppercase">
            Record
          </span>
          <span className="font-mono text-base font-bold">
            {artist.record ?? "0 - 0"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label text-[10px] text-on-surface-variant uppercase">
            Win Rate
          </span>
          <span className="font-mono text-base font-bold text-primary">
            {artist.winRate ?? "0%"}
          </span>
        </div>
      </div>
    </div>
  );
}
