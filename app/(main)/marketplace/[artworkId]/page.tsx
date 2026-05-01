import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { artworks } from "@/mocks/artworks";

export async function generateMetadata({
  params,
}: {
  params: { artworkId: string };
}) {
  const art = artworks.find((a) => a.id === params.artworkId);
  return { title: art ? `${art.title} | DuelArt` : "Artwork | DuelArt" };
}

export default function ArtworkPage({
  params,
}: {
  params: { artworkId: string };
}) {
  const art = artworks.find((a) => a.id === params.artworkId);
  if (!art) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
        <div className="pt-16 min-h-screen flex flex-col md:flex-row">
          {/* Left: Large Artwork View (60%) */}
          <section className="w-full md:w-3/5 bg-surface-container-lowest flex items-center justify-center p-4 md:p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent pointer-events-none" />
            <div className="relative w-full aspect-[4/5] max-h-[870px] overflow-hidden rounded-xl editorial-shadow">
              <img
                alt={art.alt}
                className="w-full h-full object-cover"
                src={art.image}
              />
              <div className="absolute bottom-8 right-8 flex flex-col gap-4">
                <button className="w-12 h-12 bg-surface/50 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">zoom_in</span>
                </button>
                <button className="w-12 h-12 bg-surface/50 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">fullscreen</span>
                </button>
              </div>
            </div>
          </section>

          {/* Right: Info Panel (40%) */}
          <section className="w-full md:w-2/5 bg-surface p-8 md:p-16 overflow-y-auto max-h-screen custom-scrollbar">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary-container mb-4">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="font-label text-xs uppercase tracking-[0.2em]">
                  Grand Finalist • Season 04
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-on-surface leading-tight tracking-tight italic mb-8">
                {art.title}
              </h1>
              <div className="flex items-center justify-between py-6 border-y border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-primary/20">
                    <img
                      alt="Artist Avatar"
                      className="w-full h-full object-cover"
                      src={`https://avatars.dicebear.com/api/identicon/${encodeURIComponent(art.author)}.svg`}
                    />
                  </div>
                  <div>
                    <p className="font-body text-xs text-on-surface/50 uppercase tracking-widest mb-1">
                      Created by
                    </p>
                    <Link
                      href={`/artist/${encodeURIComponent(art.author)}`}
                      className="font-headline font-bold text-xl hover:text-primary"
                    >
                      {art.author}
                    </Link>
                  </div>
                </div>
                <Link
                  href={`/artist/${encodeURIComponent(art.author)}`}
                  className="border border-outline-variant/30 px-6 py-2 rounded-lg font-body text-sm hover:border-primary/50 hover:text-primary transition-all"
                >
                  Follow
                </Link>
              </div>
            </div>

            <div className="mb-12 space-y-6">
              <p className="font-body text-on-surface/70 leading-relaxed text-lg">
                {art.title} — {art.author}.
                {art.price ? ` Priced at ${art.price}.` : ""} A piece from our
                curated arena collection.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/marketplace"
                  className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-label text-on-surface/60 hover:text-primary transition-colors"
                >
                  #MARKETPLACE
                </Link>
                <span className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-label text-on-surface/60">
                  #ART
                </span>
                <span className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-label text-on-surface/60">
                  #DUEL
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-surface-container-low p-5 rounded-xl text-center">
                <p className="font-label text-xs text-on-surface/40 mb-2 uppercase tracking-widest">
                  Views
                </p>
                <p className="font-label text-xl font-bold">
                  {art.views ?? "0"}
                </p>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl text-center">
                <p className="font-label text-xs text-on-surface/40 mb-2 uppercase tracking-widest">
                  Likes
                </p>
                <p className="font-label text-xl font-bold">
                  {art.likes ?? "0"}
                </p>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl text-center">
                <p className="font-label text-xs text-primary-container mb-2 uppercase tracking-widest">
                  Duel Wins
                </p>
                <p className="font-label text-xl font-bold text-primary-container">
                  12-0
                </p>
              </div>
            </div>

            <div className="bg-surface-container p-8 rounded-xl mb-12 relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-label text-xs text-primary mb-2 uppercase tracking-[0.3em]">
                  Exclusive Original
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-label text-4xl font-bold text-primary-container tracking-tighter">
                    {art.price ? art.price.replace(/\s*ETH/, "") : "—"}
                  </span>
                  <span className="font-label text-xl text-primary/70">
                    ETH
                  </span>
                </div>
                <Link
                  href={`/marketplace/${encodeURIComponent(art.id)}/buy`}
                  className="w-full block bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed py-4 rounded-lg font-bold text-lg tracking-tight hover:brightness-110 transition-all text-center mb-4"
                >
                  <span className="material-symbols-outlined align-middle">
                    shopping_bag
                  </span>
                  <span className="ml-2">Buy Original</span>
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 border border-outline-variant/10 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface/50">
                        copyright
                      </span>
                      <span className="text-sm font-body">
                        Personal License
                      </span>
                    </div>
                    <span className="text-sm font-label">0.05 ETH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-outline-variant/10 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface/50">
                        verified_user
                      </span>
                      <span className="text-sm font-body">
                        Commercial Rights
                      </span>
                    </div>
                    <span className="text-sm font-label">0.85 ETH</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-serif text-2xl italic mb-6">Battle Record</h3>
              <div className="space-y-4">
                <Link
                  href="/tournaments"
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 border-primary-container"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-container">
                        trophy
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">
                        Defeated "Neon Samurai"
                      </p>
                      <p className="text-xs text-on-surface/40">
                        Tournament Round 3 • Mar 12, 2024
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-label text-primary-container font-bold">
                    +250 RP
                  </span>
                </Link>
                <Link
                  href="/tournaments"
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 border-primary-container"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-container">
                        trophy
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">
                        Defeated "The Void Oracle"
                      </p>
                      <p className="text-xs text-on-surface/40">
                        Exhibition Duel • Feb 28, 2024
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-label text-primary-container font-bold">
                    +180 RP
                  </span>
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="font-serif text-2xl italic mb-6">
                Audience Response
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high shrink-0 overflow-hidden">
                    <img
                      alt="User Avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rX8i6H3BOjecLIOKijajgjo8Ki4KsOPANFNm5IUnQDeEZO9OG6x-VO7SdGPn_sbDQIXwRwANJqGmBJwsHom8Sn2mA_ijEY8tUCPwnqkyzAswTAWoJvG02B1DvVv7lte65PZosTb5fBIM2bzMLq-w7kS__uovf_4n8j3I0nNF8gmeB1GHVxmvCUm-Btn4SFPVnu9E_afhYS6AyywG7PKyJgaz4T4Bu1n58RioDGQ8i2U2dp4zF0hlkpuctni5sf1QkuUyAG2O6qII"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold">Collector_09</span>
                      <span className="text-[10px] text-on-surface/30 uppercase tracking-widest">
                        2h ago
                      </span>
                    </div>
                    <p className="text-sm text-on-surface/70 leading-snug">
                      The way the light catches the gold edge is absolutely
                      breathtaking. This is definitely winning the finals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high shrink-0 overflow-hidden">
                    <img
                      alt="User Avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1qhNA5lblkiheRRFt-YWuLMiK0-U4zJBan3-zcFZubkMxLReyY6KRy4SnNZbgiUcM3wRVmM-xCw4P2DMRKOq3MhueVO6XlLE6N_51MxeeRzRE0jyhaJttXoX-P7mh2G5tgZr29HvOWQcz_XpzYPfRZ9PN-8GH6bNT_TIdw7pmGHgZe7Q49oCXVpMhcffZIL56WSoDOpDrCEXtNkXP6U5uYFVYvvyoUqFPKqk_hb5KINKNZNMSoIFPhIn339IMbVygcoJxY08nOfky"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold">Elena.Art</span>
                      <span className="text-[10px] text-on-surface/30 uppercase tracking-widest">
                        5h ago
                      </span>
                    </div>
                    <p className="text-sm text-on-surface/70 leading-snug">
                      Incredible brushwork on the obsidian swirls. The texture
                      is so tangible.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-on-surface/20"
                      placeholder="Add your perspective..."
                      type="text"
                    />
                    <button className="absolute right-3 top-2.5 text-primary-container">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
