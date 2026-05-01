export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="font-label text-primary tracking-[0.3em] uppercase text-xs">
            The Code of Honor
          </span>
          <h2 className="text-5xl font-headline italic mt-2">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Steps with connecting lines (visual only) */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/20 to-transparent hidden md:block"></div>
          <div className="relative z-10">
            <span className="text-6xl font-serif text-primary-container italic mb-6 block">
              01
            </span>
            <h4 className="text-xl font-bold mb-4">Upload Your Masterpiece</h4>
            <p className="text-sm text-on-surface/60 leading-relaxed">
              Submit your best work to an open tournament category. Quality is
              the only prerequisite.
            </p>
          </div>
          <div className="relative z-10">
            <span className="text-6xl font-serif text-primary-container italic mb-6 block">
              02
            </span>
            <h4 className="text-xl font-bold mb-4">Enter the Bracket</h4>
            <p className="text-sm text-on-surface/60 leading-relaxed">
              Our curation engine pairs you against a rival. The arena gates
              open for 24 hours.
            </p>
          </div>
          <div className="relative z-10">
            <span className="text-6xl font-serif text-primary-container italic mb-6 block">
              03
            </span>
            <h4 className="text-xl font-bold mb-4">The Public Decides</h4>
            <p className="text-sm text-on-surface/60 leading-relaxed">
              Voters determine the victor. Real-time stats keep the tension high
              until the final bell.
            </p>
          </div>
          <div className="relative z-10">
            <span className="text-6xl font-serif text-primary-container italic mb-6 block">
              04
            </span>
            <h4 className="text-xl font-bold mb-4">Collect Your Glory</h4>
            <p className="text-sm text-on-surface/60 leading-relaxed">
              Winners earn trophies, visibility, and direct sales opportunities
              in the Marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
