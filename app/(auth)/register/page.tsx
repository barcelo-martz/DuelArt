"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, isArtist }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Registration failed");
      // Redirect to login after successful registration
      router.push("/login");
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-h-7xl overflow-hidden flex flex-col md:flex-row">
      <section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-surface-container-lowest h-screen">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-4 opacity-40 h-full box-border">
          <div
            className="w-full h-full rounded-xl bg-cover bg-center"
            data-alt="Dark abstract acrylic painting with aggressive gold leaf strokes and deep charcoal textures on a large canvas"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzb1Upa_rTMxCSfr3KcL5N7dl465ItVDPiCBHKoL_sJk3YAdK0yZCKXMO4CRjOqNo5x9JYUIweO0J_R5vdBaUMGD4Wci-dfZ98t2Vjv935WtfHuYu-JCEz6EOB4JzTui3WdtWqZb8KiV5Lot3WUUNLwkwW0I7P_fWbK02S3BdSpjGEauvas_zBga332XBOronxna-gRnPbyzGqNn0r9NY8dQyXamIX2vh6lVh960-hHLA6wpnafsY1ojy6w1k3PrjTKCjaHj00xexV')",
            }}
          />
          <div
            className="w-full h-full rounded-xl bg-cover bg-center"
            data-alt="Cinematic close-up of golden liquid metal flowing over black marble obsidian with dramatic side lighting and shadows"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHiE2HxRzNAuqEiqVcsSUxjkQyGRXkOD0LJy1XTnW-o8tHvN2zD-IkiBMU0AXHmMKA1KI7hsxSK5lH5pJHes4wv0jAp3azX0uZhKPlsIH8sNHpQhyyp1jghjsVYbEYXPY1rj-A0FM3c5xGiLuM5g-WhVokvF9kzGRpmQUXoENYNfk8aKYqh61DII3dJlcPVkXHdEqRQl-vXYKg_y7MSk1K1vx9zOfNGettKhDis3kZqXjRFSXcRSyVwS01bYO0tBbPbCtcCn4b9FXz')",
            }}
          />
          <div
            className="w-full h-full rounded-xl bg-cover bg-center"
            data-alt="High fashion editorial abstract background with textured oil paint in shades of amber and volcanic black"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKFVMD7aa1UtBUJlbh5gsGmkVjCUjSOKtUmKx7VyXxr5ggi2ioPUVSVGSBvzNc_T-XeeDidZ3DiKjjG5_SWyglx91X5C2ngwdeROHtTmw8K6q4XTpZKnbx69-fcEIxZNc6NQ3Uw0dyyj1FQwv9xKKoB9f6DWKc9uqzgU2qO05lkhqlDBXgyRywzpNOBpzVDcaBzmzXTTmKbiK1wljlJU9R4EzVZ7zZ49QYJU7Tx-jaE7O19blSSxmb0LCBBOJPv8NJS2xtkwhYqaLS')",
            }}
          />
          <div
            className="w-full h-full rounded-xl bg-cover bg-center"
            data-alt="Minimalist architectural void with a single shaft of warm golden light hitting a dark textured concrete wall"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB77v5DwzzOEpcazGpZ4VqcENsmVXoWTbLP9BUY8jOESI8rfNHq9g8J9ml_NKRemWMCZhi7hM3ZKb9hnWB4llie1Rj8AlV_ddUb6ZL5rSYnrA8b-9g0sXiAHc0yHbymHHD-FbCSUGTGrfxPKbbyLFRUcA7TnOe0xZ_mK8oqoVIL9MSWpy6ypAyotpWZSxe-MZF6mpliQRwbQXUF_e-YUTSn2TF2FdwUZ2663roox_4nvRnWXYA4cEjttK09P8xlE5o_YBUsoxchLEvX')",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full px-6 text-center">
          <div className="mb-4">
            <span className="text-4xl md:text-6xl font-headline italic font-bold tracking-widest text-primary leading-none">
              DuelArt
            </span>
          </div>
          <h2 className="text-tertiary font-headline italic text-lg md:text-2xl max-w-sm">
            The arena where mastery meets mystery.
          </h2>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </section>

      <section className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 vanguard-noir-bg h-screen">
        <div className="w-full max-w-md space-y-6 py-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-headline italic font-bold text-on-surface tracking-tight mb-2">
              Join the battle
            </h1>
            <p className="text-on-surface-variant font-body">
              Create your identity in the Grand Arena.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-2 px-3 rounded-lg bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-all duration-300 group"
              onClick={() => (window.location.href = "/api/auth/oauth/google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-label text-xs uppercase tracking-wider">
                Google
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 py-2 px-3 rounded-lg bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-all duration-300"
              onClick={() => (window.location.href = "/api/auth/oauth/discord")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01a13.525 13.525 0 0 0 10.986 0a.074.074 0 0 1 .077.01c.124.097.248.192.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107a14.372 14.372 0 0 0 1.226 1.994a.078.078 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-label text-xs uppercase tracking-wider">
                Discord
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 py-2">
            <div className="h-[1px] flex-1 bg-outline-variant/30" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
              or
            </span>
            <div className="h-[1px] flex-1 bg-outline-variant/30" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div className="group">
                <label
                  className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1 ml-1 group-focus-within:text-primary transition-colors"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-md py-2 px-3 text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="Your full name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="group">
                <label
                  className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1 ml-1 group-focus-within:text-primary transition-colors"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-md py-2 px-3 text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="@combatant"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="group">
                <label
                  className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1 ml-1 group-focus-within:text-primary transition-colors"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-md py-2 px-3 text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="champion@duelart.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="group relative">
                <label
                  className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1 ml-1 group-focus-within:text-primary transition-colors"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-md py-2 px-3 text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="••••••••"
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant cursor-pointer hover:text-primary transition-colors material-symbols-outlined"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? "visibility_off" : "visibility"}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  className="peer appearance-none w-4 h-4 rounded border border-outline-variant bg-surface-container-lowest checked:bg-primary-container checked:border-primary-container transition-all"
                  type="checkbox"
                  checked={isArtist}
                  onChange={(e) => setIsArtist(e.target.checked)}
                />
                <span className="material-symbols-outlined absolute text-[14px] text-on-primary-container opacity-0 peer-checked:opacity-100 transition-opacity">
                  check
                </span>
              </div>
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                I'm joining as an artist{" "}
                <span className="text-xs text-outline italic ml-1">
                  (I want to compete)
                </span>
              </span>
            </label>

            {error && <div className="text-sm text-red-400">{error}</div>}

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-gradient-to-r from-primary-fixed-dim to-primary-container text-on-primary-fixed font-label font-bold uppercase tracking-widest rounded-md shadow-md shadow-primary-container/10 hover:scale-[1.02] active:scale-95 transition-all"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div className="text-center pt-3">
            <p className="text-sm text-on-surface-variant">
              Already have an account?{" "}
              <a
                className="text-primary-fixed-dim hover:text-primary font-semibold underline underline-offset-4 decoration-primary-container/30 hover:decoration-primary transition-all"
                href="/login"
              >
                Log In
              </a>
            </p>
          </div>

          <div className="flex justify-center gap-6 pt-6">
            <a
              className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
              href="#"
            >
              Terms
            </a>
            <a
              className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
              href="#"
            >
              Privacy
            </a>
            <a
              className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
              href="#"
            >
              Rules
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
