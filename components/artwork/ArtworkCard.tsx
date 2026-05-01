import Link from "next/link";
import type { Artwork } from "../../mocks/artworks";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="group relative bg-surface-container rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-black/50">
      <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
        <Link href={`/marketplace/${artwork.id}`}>
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={artwork.image}
            alt={artwork.alt ?? artwork.title}
          />
        </Link>

        {artwork.isWinner ? (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#0A0A0B]/80 backdrop-blur-md border border-[#F5C842]/30 px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-[#F5C842] text-sm">
              trophy
            </span>
            <span className="font-label text-[9px] uppercase tracking-wider text-[#F0EFE8]">
              Tournament Winner
            </span>
          </div>
        ) : null}

        {artwork.status ? (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-medium bg-black/50 text-on-surface-variant">
            {artwork.status}
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-headline italic text-xl text-[#F0EFE8]">
              {artwork.title}
            </h3>
            <p className="text-on-surface-variant/70 text-sm">
              by{" "}
              <span className="text-on-surface font-medium">
                {artwork.author}
              </span>
            </p>
          </div>
          <p className="stat-font text-lg text-primary-container">
            {artwork.price ?? "—"}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/marketplace/${artwork.id}`}
            className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 text-center"
          >
            View
          </Link>

          <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
}
