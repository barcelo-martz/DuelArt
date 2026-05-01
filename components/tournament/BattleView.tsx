import type { Tournament } from "@/mocks/tournaments";

type Props = { tournament: Tournament; match?: any; battleId: string };

export default function BattleView({ tournament, match, battleId }: Props) {
  const left = match?.a ??
    tournament.participantsList?.[0] ?? {
      id: "left",
      name: "Left Artist",
      avatar: "",
    };
  const right = match?.b ??
    tournament.participantsList?.[1] ?? {
      id: "right",
      name: "Right Artist",
      avatar: "",
    };

  const leftScore = match?.aScore ?? 48291;
  const rightScore = match?.bScore ?? 44102;
  const total = (leftScore || 0) + (rightScore || 0);
  const leftPct = total > 0 ? Math.round((leftScore / total) * 100) : 52;
  const rightPct = 100 - leftPct;

  return (
    <main className="flex h-screen w-screen pt-16 bg-surface text-on-surface font-body overflow-hidden">
      <section className="relative w-1/2 h-full overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={left.name}
            src={left.avatar}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.6), transparent)",
            }}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between p-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary-container p-0.5">
              <img
                className="w-full h-full rounded-full object-cover"
                alt={left.name}
                src={left.avatar}
              />
            </div>
            <div>
              <p className="text-xs tracking-widest text-primary/70 font-label">
                ARTIST
              </p>
              <p className="text-sm font-semibold text-on-surface">
                @{left.name.replace(/\s+/g, "_")}
              </p>
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="text-6xl font-serif-display italic text-white leading-tight mb-4 drop-shadow-2xl">
              {left.name}
            </h2>
            <div className="flex items-end space-x-6">
              <div className="flex flex-col">
                <span className="text-xs font-label tracking-widest text-primary mb-1">
                  CURRENT SCORE
                </span>
                <span className="text-5xl font-mono-stat font-bold text-white tracking-tighter">
                  {leftScore.toLocaleString()}
                </span>
              </div>
              <button className="mb-1 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-lg font-bold tracking-widest hover:bg-primary hover:text-black transition-all duration-300">
                VOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className="absolute left-1/2 top-16 bottom-0 w-px z-40 flex items-center justify-center"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #f5c842 50%, transparent 100%)",
            width: 1,
            height: "100%",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-20 h-20 bg-surface border border-primary/30 rounded-full flex items-center justify-center z-50 shadow-[0_0_40px_rgba(245,200,66,0.2)]">
          <span className="text-primary font-serif-display italic text-3xl">
            VS
          </span>
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 w-[80vw] h-1 flex justify-center items-center pointer-events-none"
          style={{ left: "-40vw" }}
        >
          <div className="w-full h-0.5 bg-white/10 relative overflow-hidden flex">
            <div
              className="h-full bg-primary-container shadow-[0_0_15px_rgba(245,200,66,0.5)]"
              style={{ width: `${leftPct}%` }}
            />
            <div style={{ width: 80 }} />
            <div
              className="h-full bg-primary/30"
              style={{ width: `${rightPct}%` }}
            />
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center whitespace-nowrap">
          <div className="bg-surface-container-highest/80 backdrop-blur-xl px-8 py-3 rounded-full border border-outline-variant/30 flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-error shadow-[0_0_10px_#ffb4ab] animate-pulse" />
            <span className="text-xs font-label tracking-widest text-on-surface">
              VOTING ENDS IN{" "}
              <span className="font-mono-stat text-primary ml-2">00:42:15</span>
            </span>
          </div>
        </div>
      </div>

      <section className="relative w-1/2 h-full overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={right.name}
            src={right.avatar}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.6), transparent)",
            }}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between p-12 text-right items-end">
          <div className="flex items-center space-x-4 flex-row-reverse">
            <div className="w-12 h-12 rounded-full border-2 border-primary-container p-0.5">
              <img
                className="w-full h-full rounded-full object-cover"
                alt={right.name}
                src={right.avatar}
              />
            </div>
            <div>
              <p className="text-xs tracking-widest text-primary/70 font-label">
                ARTIST
              </p>
              <p className="text-sm font-semibold text-on-surface">
                @{right.name.replace(/\s+/g, "_")}
              </p>
            </div>
          </div>

          <div className="max-w-md flex flex-col items-end">
            <h2 className="text-6xl font-serif-display italic text-white leading-tight mb-4 drop-shadow-2xl">
              {right.name}
            </h2>
            <div className="flex items-end space-x-6 flex-row-reverse">
              <div className="flex flex-col items-end">
                <span className="text-xs font-label tracking-widest text-primary mb-1 text-right">
                  CURRENT SCORE
                </span>
                <span className="text-5xl font-mono-stat font-bold text-white tracking-tighter">
                  {rightScore.toLocaleString()}
                </span>
              </div>
              <button className="mb-1 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-lg font-bold tracking-widest hover:bg-primary hover:text-black transition-all duration-300">
                VOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      <aside className="fixed right-6 top-24 bottom-24 w-80 bg-surface-container-low/40 backdrop-blur-2xl border-l border-white/5 z-50 flex flex-col rounded-xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-primary text-sm">
              sensors
            </span>
            <h3 className="text-xs font-label tracking-widest text-on-surface/80 uppercase">
              Arena Feed
            </h3>
          </div>
          <span className="text-[10px] font-mono-stat text-primary/60">
            LIVE
          </span>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          <div className="flex space-x-3 items-start">
            <div className="w-1 h-8 bg-primary rounded-full mt-1" />
            <div>
              <p className="text-[11px] font-label text-primary tracking-wider uppercase mb-1">
                VOTE REGISTERED
              </p>
              <p className="text-xs text-on-surface/70 leading-relaxed">
                <span className="text-on-surface font-semibold">@User_291</span>{" "}
                just cast a vote for {left.name}.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-surface-container-highest" />
              <span className="text-[11px] font-semibold text-on-surface/90">
                @CryptoCurator
              </span>
            </div>
            <p className="text-xs text-on-surface/60 italic font-headline px-1">
              "The lighting on the shards in {right.name} is just next level.
              Close race!"
            </p>
          </div>
        </div>
        <div className="p-4 bg-surface-container-lowest/50 border-t border-outline-variant/10">
          <div className="relative">
            <input
              className="w-full bg-surface-container-high/50 border-none rounded-lg py-2.5 px-4 text-xs focus:ring-1 focus:ring-primary/40 placeholder:text-on-surface/30"
              placeholder="Add to the conversation..."
              type="text"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/60 text-lg">
              send
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
