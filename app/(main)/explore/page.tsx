"use client";

import React from "react";
import ArtworkCard from "@/components/explore/ArtworkCard";
import { artworks as artworksMock } from "@/mocks/artworks";

const categories = [
  "ALL",
  "PHOTOGRAPHY",
  "ILLUSTRATION",
  "3D ART",
  "FASHION",
  "TRADITIONAL",
] as const;

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("ALL");
  const filteredArtworks =
    selectedCategory === "ALL"
      ? artworksMock
      : artworksMock.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container/30 min-h-screen">
      <main className="pb-20 px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-serif-alt italic tracking-tight text-on-surface mb-2">
              Explore
            </h1>
            <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant/60 uppercase">
              12,847 artworks across all categories
            </p>
          </div>
          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <span
              className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg py-4 pl-12 pr-4 font-label text-xs tracking-widest focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-outline/50"
              placeholder="SEARCH PIECES OR ARTISTS..."
              type="text"
            />
          </div>
        </header>
        {/* Sticky Filter Bar */}
        <section className="sticky top-16 z-40 bg-surface/95 backdrop-blur-md py-6 mb-8 -mx-8 px-8 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-label text-xs tracking-widest whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-primary text-on-primary font-bold"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <button className="flex items-center justify-between gap-2 bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/20 w-full">
                <span className="font-label text-xs tracking-widest">
                  SORT BY: RECENT
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* Masonry Gallery Grid */}
        <section className="gallery-grid">
          {filteredArtworks.map((art) => (
            <ArtworkCard key={art.id} {...art} />
          ))}
        </section>
        {/* Infinite Scroll Spinner */}
        <section className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 font-label text-[10px] tracking-[0.3em] text-primary/60 uppercase">
            Loading more masterworks
          </p>
        </section>
      </main>
    </div>
  );
};

export default ExplorePage;
