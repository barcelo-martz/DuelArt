import TournamentCard from "@/components/tournament/TournamentCard";
import tournaments from "@/mocks/tournaments";

export default function Tournaments() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container/30 min-h-screen">
      <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="font-serif-display text-6xl md:text-7xl lg:text-8xl leading-tight text-on-surface italic mb-8">
            Tournaments
          </h1>
          <div className="flex gap-10 border-b border-outline-variant/20">
            <button className="pb-4 text-primary border-b-2 border-primary font-label text-sm tracking-[0.1em]">
              Active ({tournaments.length})
            </button>
            <button className="pb-4 text-on-surface/50 hover:text-on-surface transition-colors font-label text-sm tracking-[0.1em]">
              Upcoming
            </button>
            <button className="pb-4 text-on-surface/50 hover:text-on-surface transition-colors font-label text-sm tracking-[0.1em]">
              Completed
            </button>
          </div>
        </header>

        <section className="mb-16">
          <div className="relative overflow-hidden rounded-xl h-[480px] group bg-surface-container-low">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                alt="abstract expressionist digital art battle"
                src={tournaments[0].heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary-container text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full font-label">
                  Grand Prix
                </span>
                <span className="text-primary font-mono text-sm tracking-widest">
                  Ongoing
                </span>
              </div>
              <h2 className="font-headline italic text-6xl text-primary-fixed-dim mb-6 leading-tight">
                {tournaments[0].title}
              </h2>
              <div className="flex gap-12 mb-8">
                <div>
                  <p className="text-on-surface/50 text-[10px] uppercase tracking-widest font-label mb-1">
                    Prize Pool
                  </p>
                  <p className="text-primary text-2xl font-mono">12.5 ETH</p>
                </div>
                <div>
                  <p className="text-on-surface/50 text-[10px] uppercase tracking-widest font-label mb-1">
                    Ends In
                  </p>
                  <p className="text-on-surface text-2xl font-mono tracking-tighter">
                    04:12:45:12
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold py-3 px-8 rounded-lg hover:shadow-gold transition-all">
                  Enter Arena
                </button>
                <button className="border border-outline-variant/30 text-on-surface hover:bg-surface-container-high py-3 px-8 rounded-lg transition-all">
                  View Rules
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((t) => (
            <TournamentCard key={t.id} tournament={t} />
          ))}
        </section>
      </main>
    </div>
  );
}
