"use client";

import { useEffect, useMemo, useState } from "react";
import ArtworkCard from "../artwork/ArtworkCard";
import { artworks as allArtworks, type Artwork } from "../../mocks/artworks";

function parsePrice(price?: string) {
  if (!price) return undefined;
  const m = price.match(/[\d,.]+/);
  if (!m) return undefined;
  return Number(m[0].replace(/,/g, ""));
}

export default function MarketplaceClient() {
  const categories = useMemo(
    () => Array.from(new Set(allArtworks.map((a) => a.category))),
    [],
  );

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [filterForSale, setFilterForSale] = useState(false);
  const [filterInBattle, setFilterInBattle] = useState(false);
  const [winnersOnly, setWinnersOnly] = useState(false);

  useEffect(() => {
    setSelectedCategories(categories);
  }, [categories]);

  const priceBounds = useMemo(() => {
    const nums = allArtworks
      .map((a) => parsePrice(a.price))
      .filter((n): n is number => typeof n === "number");
    if (!nums.length) return { min: 0, max: 0 };
    return { min: Math.min(...nums), max: Math.max(...nums) };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allArtworks.filter((a) => {
      if (q) {
        const hay = `${a.title} ${a.author}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      if (
        selectedCategories.length &&
        !selectedCategories.includes(a.category)
      ) {
        return false;
      }

      if (winnersOnly && !a.isWinner) return false;

      if (filterForSale && !(a.status === "FOR SALE" || !!a.price))
        return false;
      if (filterInBattle && a.status !== "IN BATTLE") return false;

      const p = parsePrice(a.price);
      if (minPrice !== "" && (p === undefined || p < Number(minPrice)))
        return false;
      if (maxPrice !== "" && (p === undefined || p > Number(maxPrice)))
        return false;

      return true;
    });
  }, [
    search,
    selectedCategories,
    winnersOnly,
    filterForSale,
    filterInBattle,
    minPrice,
    maxPrice,
  ]);

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  }

  function clearFilters() {
    setSearch("");
    setSelectedCategories(categories);
    setMinPrice("");
    setMaxPrice("");
    setFilterForSale(false);
    setFilterInBattle(false);
    setWinnersOnly(false);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
        <div className="sticky top-24 space-y-6">
          <div>
            <label className="relative block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-sm">
                search
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface-container-lowest border-none rounded-lg py-3 pl-10 text-sm focus:ring-1 focus:ring-primary/40 transition-all text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="Search masterworks..."
              />
            </label>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-container">
                Category
              </h3>
              <button
                onClick={() => setSelectedCategories(categories)}
                className="text-xs text-on-surface-variant underline"
              >
                All
              </button>
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="rounded border-outline-variant bg-surface text-primary-container focus:ring-0 focus:ring-offset-0"
                    type="checkbox"
                  />
                  <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-container">
                Price (numeric)
              </h3>
              <span className="stat-font text-[10px] text-on-surface-variant">
                {priceBounds.min} — {priceBounds.max}
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                step="0.01"
                placeholder={String(priceBounds.min)}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                className="w-1/2 bg-surface-container-lowest rounded-lg py-2 px-3 text-sm"
              />
              <input
                type="number"
                step="0.01"
                placeholder={String(priceBounds.max)}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                className="w-1/2 bg-surface-container-lowest rounded-lg py-2 px-3 text-sm"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-lg">
                  emoji_events
                </span>
                <span className="text-sm font-semibold text-on-surface">
                  Tournament Winners
                </span>
              </div>
              <input
                type="checkbox"
                checked={winnersOnly}
                onChange={(e) => setWinnersOnly(e.target.checked)}
                className="ml-2"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">For Sale</span>
              <input
                type="checkbox"
                checked={filterForSale}
                onChange={(e) => setFilterForSale(e.target.checked)}
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">In Battle</span>
              <input
                type="checkbox"
                checked={filterInBattle}
                onChange={(e) => setFilterInBattle(e.target.checked)}
              />
            </label>
          </div>

          <div className="flex gap-2">
            <button
              onClick={clearFilters}
              className="flex-1 px-4 py-2 rounded-lg bg-surface-container-low text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      </aside>

      <section className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-on-surface-variant">
            {filtered.length} results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((a: Artwork) => (
            <ArtworkCard key={a.id} artwork={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
