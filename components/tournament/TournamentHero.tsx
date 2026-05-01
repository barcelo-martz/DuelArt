import type { Tournament } from "@/mocks/tournaments";

type Props = { tournament: Tournament };

export default function TournamentHero({ tournament }: Props) {
  const participants = tournament.participantsList?.length ?? 0;

  return (
    <header className="relative w-full h-[360px] flex flex-col justify-end pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt={tournament.title}
          src={tournament.heroImage}
          className="w-full h-full object-cover grayscale-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="font-headline italic text-4xl md:text-5xl lg:text-6xl leading-tight text-on-surface">
          {tournament.title}
        </h1>

        <div className="flex gap-8 mt-4 items-center">
          <div>
            <span className="font-label text-xs uppercase text-on-surface-variant">
              Participants
            </span>
            <div className="font-mono text-xl font-bold">
              {participants} Artists
            </div>
          </div>

          <div>
            <span className="font-label text-xs uppercase text-on-surface-variant">
              Status
            </span>
            <div className="font-mono text-xl text-primary font-bold">LIVE</div>
          </div>
        </div>
      </div>
    </header>
  );
}
