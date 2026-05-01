import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { username: string } };

export default async function ArtistProfile({ params }: Props) {
  const cookieStore = cookies();
  const auth = (await cookieStore).get("duelart_dev_auth")?.value;
  let payload: { email?: string; role?: string; username?: string } | null =
    null;
  try {
    payload = auth ? JSON.parse(decodeURIComponent(auth)) : null;
  } catch (e) {
    payload = null;
  }

  const isOwner = payload?.username === params?.username;
  const canEdit = payload?.role === "admin" || isOwner;

  if (!params?.username) {
    notFound();
  }

  // Minimal in-memory sample data for public profiles (replace with DB fetch later)
  const SAMPLE: Record<string, any> = {
    "xavier-thorne": {
      displayName: "Xavier Thorne",
      handle: "@XAVIER_THORNE",
      bio: "Visual storyteller specializing in neo-classical digital oil and dark surrealism. Three-time champion of the Obsidian Veil circuit.",
      banner:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDtELFwm_rBIRTE9gCscZHVNJkApDniix6d4O_4Go3XRUZ-bJJRekohAiugAFMIcIghBRaud6M2TMSVzfaTBDcHk5NS6_5ojHFsFiblrsrXygEgoeuVfNnxG3ENpv6_I472IxAYqShFA-RKGwTk_bHYhC3s5T-UH5ii0D6tjp_5K84vMEE5oxKAFZE4e_RmO6is4MfB3IqPzdaKRKc4qg70zTA8-dpkE20cin3I4uYCemUj89eQ7pZtdqDt0Jje0z8yxhATIK6ZXim",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC668KPA3JykUDcIz-Lzs6ZFKo8y5m0Da3i9atS--qJ2nfWuSNUq2RsS8e0-zOct7D11N4o5S5Uypha9Le3gZHBl-TtDOy1-xWxYruocOz18sTw65H99jaBJvLFGpKx-QFGIIk8p_wBm3RFUXV64S6xx4vyE0eiIYhRU_YT6No8vXigrQOi0F9xI1wGWrjAom1cqO20fwAZv855dXCHLVRqYd7yaklMXJIC-1bg8M3PRIEJ0Vzg2L8_zDTfjW3d_LLA50WiYPwlfUEH",
      stats: {
        followers: 847,
        following: 23,
        tournamentWins: 14,
        winRatio: "63.6%",
        artworksCreated: 31,
        ranking: "#142",
      },
      artworks: [
        {
          title: "The Eternal Echo",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfCg2TdkQXoXVjNNAhMeGIiDirmJSCWDYxC-nawNEkKKAucpWcynNAEvjEqwcPhZQU0pHea7ilWtEbI6vuB_yHuJjAjgp3gHkHqJ203jYiXZThNrXDA8x1e-3D25CwfnDdpC0ZNNP9XVphSZuiZYnBw-UJY_Pytz-eIx4qGbPMVIiIqk8Viho0bOaRxJAjlsniOQfwdspuIQVrteuCZuL9K7tlBNPfb4oZSW9nPf35Jt07jQR5alEleSW509BqlBKAMaXFglXvDV0K",
        },
        {
          title: "Gilded Rage",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzRNNouqJsaPR3piBeFWkT6cbMYJFOl7wed4cGMybtLv_3hM1ed0htpnStUj1imhCeNb1EX_uXM14PV4Uxf-MsWh7LRYf_0I-7aL0YuZE1A5PPzXqbYvQB4Qco9GyqYTx2rn77sC2HWBOauvlezhmMnIJaUCFWAMYOk-kIOscjC-CWyTqK30joHxI_hY7bkg48tXVx9tcx_fLaLZ7loVGEVrgXREhCIOEjjfNWvSkSWTXvP8haMm1Xy8LdTGk2Cv-OHgawh2Rd4iMK",
        },
        {
          title: "Silence in Amber",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVKyEvcOdRxrE-Nq67C0VpEnP2A_MFrhgO4JR5LAvDzr_0ajX6nlp6E1iIu9PZCrYzTiZyrtZMcHoL5GMDPegwDYeZBO6wppwjBzX6GDKVCzTZohtYtbDVtrfuySE8xkSjCT-0k3oqJ3B6UeefJmo6uR2uwn7ZZJD43dNl_m56vLYT4F9Vi_4meGgl_BAXLwjBXzyGw7PevjPPmOymRhvNqu3baRYlAZ_MABiJ0ArSUY3QkCEoLJPaqvXC2gbiM0ie73e7XagNTbTn",
        },
        {
          title: "Surface Tension",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6O4vSIFdano1MDN476wWD6uWFc2UmDMVj_BXG9t2CxL2E8N2P0zuQNu7_9hGEXtVPUjP3aBsPRCxmFz9LgxXKSxof9ywatAVtUrPP1_amCiSUC7RRSxnGCEUVWUI8pgysfcJMiPyBcFkphgWuwewY7RER6QkceLM8veVQkMNwv3SEXfr5m-MZUAfaxI1IhGwkiTtGc2P7d7d43n9COHOm1zXaaQvOTAK3_GPle7vu3rLGHHtyNNIKqF2c3uKfnhjXfG57ZyLBQjw5",
        },
        {
          title: "Marble Decay",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoZ6RGs-Hmir2gfdgEfOYEdSZF09Bxd1gEXmmRBSTqk2GrjtFC63XMNQZb-5FoQyeO8ou7o7Kaa_w87aTbPky2SVzo_fiLVBKf3FowrqutQKD2FMyXtQozh7guJ0suNnp1k2sFt1HNVZcdQrPV2aYou2BwxLO6AFDaG7FSa42rLHl97pM5wtWXfRzKg9J6H5XiEkRrCVJBRTKWj68Pgqhbz1EwWMbe4QjXeTj5QpLv7M4Z_75GZzIT90FYXm44uC8wgypkniCIvgqC",
        },
      ],
    },
  };

  const username = params.username;
  const sample = SAMPLE[username];

  const displayName =
    sample?.displayName ||
    username
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase());
  const handle =
    sample?.handle || `@${username.replace(/[-]/g, "_").toUpperCase()}`;
  const banner = sample?.banner || sample?.artworks?.[0]?.src || "";
  const avatar = sample?.avatar || sample?.artworks?.[0]?.src || "";
  const stats = sample?.stats || {
    followers: 0,
    following: 0,
    tournamentWins: 0,
    winRatio: "0%",
    artworksCreated: 0,
    ranking: "#—",
  };
  const artworks = sample?.artworks || [];

  return (
    <main className="pt-16 min-h-screen">
      {/* Profile Header */}
      <header className="relative w-full">
        <div className="h-[300px] w-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            data-alt={`banner for ${displayName}`}
            src={banner}
            alt={`${displayName} banner`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative -mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-2 border-primary-container p-1 bg-background overflow-hidden shadow-[0_0_30px_rgba(245,200,66,0.2)]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  data-alt={`${displayName} avatar`}
                  src={avatar}
                  alt={`${displayName} avatar`}
                />
              </div>
            </div>
            <div className="flex-1 pb-2">
              <h1 className="text-4xl md:text-5xl font-headline italic tracking-tighter text-on-surface">
                {displayName}
              </h1>
              <p className="text-on-surface-variant font-label tracking-widest text-sm mb-3">
                {handle}
              </p>
              <p className="max-w-xl text-on-surface/70 text-sm leading-relaxed font-body">
                {sample?.bio || "Digital artist and arena competitor."}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 pb-2">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold px-10 py-3 rounded-lg shadow-xl hover:scale-[1.02] transition-transform active:scale-95">
              Follow
            </button>
            <div className="flex items-center gap-4 text-xs font-label tracking-tighter text-on-surface-variant">
              <span className="flex items-center gap-1">
                <b className="text-primary font-stats text-sm">
                  {stats.followers}
                </b>{" "}
                FOLLOWERS
              </span>
              <span className="flex items-center gap-1">
                <b className="text-on-surface font-stats text-sm">
                  {stats.following}
                </b>{" "}
                FOLLOWING
              </span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-8 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-surface-container-low rounded-xl">
            <div className="flex flex-col border-r border-outline-variant/20 last:border-0">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                Tournament Wins
              </span>
              <span className="text-2xl font-stats text-primary-container">
                {stats.tournamentWins}
              </span>
            </div>
            <div className="flex flex-col border-r border-outline-variant/20 last:border-0">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                Win Ratio
              </span>
              <span className="text-2xl font-stats text-on-surface">
                {stats.winRatio}
              </span>
            </div>
            <div className="flex flex-col border-r border-outline-variant/20 last:border-0">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                Artworks Created
              </span>
              <span className="text-2xl font-stats text-on-surface">
                {stats.artworksCreated}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                World Ranking
              </span>
              <span className="text-2xl font-stats text-primary">
                {stats.ranking}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs & Portfolio */}
      <section className="max-w-7xl mx-auto px-8 mt-12">
        <div className="flex space-x-12 border-b border-outline-variant/10 mb-8 overflow-x-auto custom-scrollbar whitespace-nowrap">
          <button className="pb-4 border-b-2 border-primary-container text-primary-container font-label tracking-widest text-sm">
            PORTFOLIO
          </button>
          <button className="pb-4 border-b-2 border-transparent text-on-surface/40 hover:text-on-surface font-label tracking-widest text-sm transition-colors">
            TOURNAMENT HISTORY
          </button>
          <button className="pb-4 border-b-2 border-transparent text-on-surface/40 hover:text-on-surface font-label tracking-widest text-sm transition-colors">
            FOR SALE
          </button>
          <button className="pb-4 border-b-2 border-transparent text-on-surface/40 hover:text-on-surface font-label tracking-widest text-sm transition-colors">
            ABOUT
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <aside className="w-full md:w-48 shrink-0">
            <h3 className="font-label text-[10px] text-on-surface-variant tracking-[0.3em] uppercase mb-4">
              Filters
            </h3>
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              <button className="px-4 py-2 bg-surface-container-high rounded text-xs font-medium text-primary whitespace-nowrap">
                All Works
              </button>
              <button className="px-4 py-2 hover:bg-surface-container-high rounded text-xs font-medium text-on-surface/60 whitespace-nowrap transition-colors">
                Oil Painting
              </button>
              <button className="px-4 py-2 hover:bg-surface-container-high rounded text-xs font-medium text-on-surface/60 whitespace-nowrap transition-colors">
                Surrealism
              </button>
              <button className="px-4 py-2 hover:bg-surface-container-high rounded text-xs font-medium text-on-surface/60 whitespace-nowrap transition-colors">
                Sketches
              </button>
            </div>
          </aside>

          <div className="flex-1 columns-1 sm:columns-2 lg:columns-3 gap-6">
            {artworks.map((art: any, idx: number) => (
              <div
                key={idx}
                className="masonry-item group relative overflow-hidden rounded-xl bg-surface-container"
              >
                <img
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105"
                  data-alt={art.title}
                  src={art.src}
                  alt={art.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                  <p className="font-headline italic text-lg text-primary">
                    {art.title}
                  </p>
                  <p className="text-[10px] font-label text-on-surface/60 tracking-widest mt-1">
                    2024 • SURREALISM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament History & Footer trimmed for brevity (keeps visual parity with design) */}
    </main>
  );
}
