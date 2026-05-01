import Link from "next/link";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import { artworks as artworksMock } from "@/mocks/artworks";

export const metadata = {
  title: "Marketplace | DuelArt",
};

export default function Marketplace() {
  return (
    <>
      <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
        {/* Header & Stats Section */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-headline italic tracking-tighter text-on-surface mb-4">
              Marketplace
            </h1>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed max-w-xl">
              Acquire original pieces from the masters of the arena. Each stroke
              carries the legacy of combat and the precision of the elite.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="font-label text-xs tracking-widest text-primary uppercase">
                Live Auctions
              </span>
              <span className="text-3xl font-headline italic text-on-surface">
                142
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label text-xs tracking-widest text-primary uppercase">
                Creators
              </span>
              <span className="text-3xl font-headline italic text-on-surface">
                89
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label text-xs tracking-widest text-primary uppercase">
                Grand Volume
              </span>
              <span className="text-3xl font-headline italic text-on-surface">
                12.4k
              </span>
            </div>
          </div>
        </header>

        {/* Filters Section */}
        <section className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-6 py-8 border-y border-outline-variant/10">
          <div className="flex items-center gap-4">
            <span className="text-xs font-label tracking-widest uppercase opacity-40">
              Filter by
            </span>
            <select className="bg-surface-container border-none text-on-surface text-sm font-body px-4 py-2 rounded-lg focus:ring-1 focus:ring-primary/40 appearance-none min-w-[140px]">
              <option>Category</option>
              <option>Digital Painting</option>
              <option>Sculpture</option>
              <option>Mixed Media</option>
            </select>
            <select className="bg-surface-container border-none text-on-surface text-sm font-body px-4 py-2 rounded-lg focus:ring-1 focus:ring-primary/40 appearance-none min-w-[140px]">
              <option>Medium</option>
              <option>Oil</option>
              <option>Ink</option>
              <option>Ethereal</option>
            </select>
          </div>
          <div className="flex items-center gap-4 flex-1 max-w-xs">
            <span className="text-xs font-label tracking-widest uppercase opacity-40">
              Price Range
            </span>
            <input
              className="w-full accent-primary h-1 bg-surface-container-highest rounded-full"
              type="range"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" value="" />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
              <span className="ml-3 text-xs font-label tracking-widest uppercase text-on-surface">
                Tournament Winners only
              </span>
            </label>
          </div>
          <button className="ml-auto text-on-surface/50 text-xs font-label tracking-widest uppercase hover:text-on-surface transition-colors">
            Clear all
          </button>
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artworksMock.map((a) => (
            <ArtworkCard key={a.id} artwork={a} />
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <button className="px-12 py-4 rounded-full border border-outline-variant/30 text-on-surface font-label tracking-[0.2em] uppercase text-xs hover:bg-surface-container-high transition-all">
            Load more masterpieces
          </button>
          <p className="text-on-surface-variant/40 text-[10px] font-label tracking-widest uppercase">
            Displaying 6 of 142 items
          </p>
        </div>
      </main>
    </>
  );
}
