"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Login failed");
      // On success, redirect based on role
      const user = data?.user;
      if (user?.role === "admin") {
        router.push("/admin/admin");
      } else if (user?.role === "artist") {
        router.push(`/artist/${user.username}`);
      } else {
        router.push("/dashboard/dashboard");
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-h-screen flex flex-col md:flex-row">
      <section className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 md:hidden" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            data-alt="Cinematic painting of a dark knight in ornate gold armor standing in a misty landscape with dramatic rim lighting and moody atmosphere"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUd8V9_aXJE5tKTLKgQyKjz3lElycxtiOGzOxGrM8AM5sOVuy4Za9r2J-F2MPjRjAmlZSVmPtbylxXQlmohO729GhfTgapNICIFGunHKMgOc6l5v4vk3Wh51OIB6RNO-czEXCZXcE0RIVClRjmjbkeg9Z5s71EHcE_ypR0kuAzgk68milKfnpSve4NXufDQf079fY_Fh7qjsVobCrqvd9oFKULPfmpgirS2KDHX8cV5gkewL2AGX2vMhxrTOn7ZDs3hrTFl9mq3b2J"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-16">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-2xl font-serif text-on-surface tracking-tighter"
            >
              <span className="text-3xl font-headline italic font-bold tracking-widest text-primary">
                DuelArt
              </span>
            </Link>
          </div>
          <div className="max-w-lg">
            <blockquote className="font-headline italic text-2xl md:text-4xl text-primary leading-tight editorial-shadow">
              "In the heat of the duel, the artist finds their truest
              expression."
            </blockquote>
            <cite className="block mt-6 font-label uppercase tracking-widest text-on-surface-variant text-sm border-l-2 border-primary-container pl-4">
              Miyamoto Musashi
            </cite>
          </div>
        </div>
      </section>

      <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-surface-container-lowest">
        <div className="w-full max-w-md space-y-10">
          <header className="text-center md:text-left">
            <h1 className="font-headline text-[32px] text-on-surface leading-none mb-2">
              Welcome back
            </h1>
            <p className="text-on-surface-variant font-body">
              Step into the arena and claim your glory.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant/30 rounded-lg hover:bg-white/5 transition-all duration-300 group"
              onClick={() => (window.location.href = "/api/auth/oauth/google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.28-2.06 4.44-1.16 1.16-2.92 2.36-5.78 2.36-4.56 0-8.16-3.68-8.16-8.24s3.6-8.24 8.16-8.24c2.48 0 4.28.96 5.6 2.24l2.32-2.32C18.48 2.48 15.84 1 12.48 1 6.48 1 1.6 5.84 1.6 11.84s4.88 10.84 10.88 10.84c3.24 0 5.68-1.08 7.6-3.08 2-2 2.64-4.8 2.64-7.16 0-.68-.04-1.32-.16-1.92h-8.48z"
                  fill="#EA4335"
                />
              </svg>
              <span className="font-label text-xs uppercase tracking-wider text-on-surface">
                Continue with Google
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 bg-[#5865F2] hover:bg-[#4752C4] transition-all duration-300 rounded-lg group"
              onClick={() => (window.location.href = "/api/auth/oauth/discord")}
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.199-1.99a.076.076 0 0 0-.041-.105 13.097 13.097 0 0 1-1.872-.89.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.89.077.077 0 0 0-.041.106c.34.693.738 1.36 1.2 1.99a.078.078 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
              </svg>
              <span className="font-label text-xs uppercase tracking-wider text-white">
                Continue with Discord
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-outline-variant/20" />
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              or
            </span>
            <div className="h-[1px] flex-1 bg-outline-variant/20" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label
                  className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary-container focus:bg-surface-container transition-all"
                  id="email"
                  name="email"
                  placeholder="name@arena.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="font-label text-[10px] uppercase tracking-widest text-primary-container hover:text-primary transition-colors"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary-container focus:bg-surface-container transition-all"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {showPwd ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 rounded border-outline-variant/40 bg-surface-container-low text-primary-container focus:ring-primary-container/20"
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label
                className="font-body text-xs text-on-surface-variant"
                htmlFor="remember"
              >
                Keep me authenticated for 30 days
              </label>
            </div>

            {error && <div className="text-sm text-red-400">{error}</div>}

            <button
              className="w-full py-4 bg-linear-to-r from-primary-container to-primary-fixed-dim text-on-primary-fixed font-label uppercase tracking-[0.2em] font-bold rounded-lg shadow-xl shadow-primary-container/10 hover:shadow-primary-container/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <footer className="text-center pt-4">
            <p className="font-body text-sm text-on-surface-variant">
              Don't have an account?{" "}
              <Link
                className="text-primary-container font-bold hover:text-primary transition-colors underline underline-offset-4 decoration-primary-container/30"
                href="/register"
              >
                Join DuelArt
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
