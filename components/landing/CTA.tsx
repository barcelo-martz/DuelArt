export default function CTA() {
  return (
    <section className="py-32 px-8 bg-surface-dim">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl font-serif mb-12 leading-tight">
          Ready to fight for your art?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-12 py-5 rounded-lg font-bold tracking-widest text-lg transition-all hover:shadow-[0_0_30px_rgba(245,200,66,0.2)]">
            ENTER THE ARENA
          </button>
          <button className="border border-outline-variant/20 text-on-surface px-12 py-5 rounded-lg font-bold tracking-widest text-lg hover:bg-white/5 transition-all">
            VIEW LIVE DUELS
          </button>
        </div>
      </div>
    </section>
  );
}
