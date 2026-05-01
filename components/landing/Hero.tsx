"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Hero() {
  const locale = useLanguageStore((state) => state.locale);
  const t = useTranslations(locale);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 hero-grid"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-7xl md:text-8xl font-serif font-black leading-[0.9] text-on-surface">
            {t("DualArt.Landing.Hero.Title")}
            <br />
            <span className="gold-gradient-text italic font-normal">
              {t("DualArt.Landing.Hero.Subtitle")}
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-light">
            {t("DualArt.Landing.Hero.Description")}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-bold tracking-widest transition-all hover:scale-105">
              {t("DualArt.Landing.Hero.StartCompeting")}
            </button>
            <button className="border border-outline-variant/30 text-primary px-8 py-4 rounded-lg font-bold tracking-widest hover:bg-white/5 transition-all">
              {t("DualArt.Landing.Hero.ExploreArt")}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant/10">
            <div>
              <p className="font-mono text-primary-container text-2xl">12.4k</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase">
                {t("DualArt.Landing.Hero.Artists")}
              </p>
            </div>
            <div>
              <p className="font-mono text-primary-container text-2xl">340</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase">
                {t("DualArt.Landing.Hero.Tournaments")}
              </p>
            </div>
            <div>
              <p className="font-mono text-primary-container text-2xl">89k</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase">
                {t("DualArt.Landing.Hero.VotesCast")}
              </p>
            </div>
          </div>
        </div>
        {/* Parallax Art Stack */}
        <div className="relative h-[600px] hidden lg:block">
          <div
            className="absolute top-0 right-0 w-80 h-96 rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-700 bg-surface-container"
            style={{ transform: "rotate(6deg) translateY(20px)" }}
          >
            <img
              className="w-full h-full object-cover"
              alt="dramatic oil painting of a cybernetic warrior with gold accents standing in a rainy neon-lit street in a futuristic city"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfjNgqpDiFHJmqW7zPm83KSZhPNcR3gMmp0m3ZiA_gHZ2HlOLX5Y6wP7jRS_tfkhKTL5KSZYEWPXLs-niPhg4qWdZk2rDYCFE72kQg1-OP6iSsFSHInAeyMk4uNM7nC1bAQ2sYzmO_GdeAkrL8b3sw4RGUgHyX687w75K8TKxvcAMBKbI63lCOSb6jiREr4yJqe2mE6vr2ZTQoCv96bE8XHZH9NwZW3VPdvZlWtWJ8RjK5sK0bUiqu88HhjTpsuqmBT-JV4_j95k3"
            />
          </div>
          <div
            className="absolute top-20 right-40 w-80 h-96 rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-700 bg-surface-container-high"
            style={{ transform: "rotate(-4deg) translateX(-20px)" }}
          >
            <img
              className="w-full h-full object-cover"
              alt="vibrant abstract digital illustration featuring sharp geometric shapes and flowing golden lines against a charcoal black background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVDIRnz9IUDV_IBBq2lEZqrChbvINtT889-Gv8QZ8VotErvoO_bWjUxvioQkEXBgdDoc4h4U8gVIBCRL7d24d9XOFS03AyZzay5g4DEOdulUd7kzjfW32W0U9WDEwvdHrv_RrQ8rgFWUzXoiqjwOWAaeOwmCzDzz75R7mdq7PCzSrOg8w5EOJUlIVM2sYhAbfleRtdjRXqhqSHoQU45hSYfP7TG75uh0nHPNBd-8nxkftfN_gQha3Zl9OHauAp9qV3TuAU9suRabO"
            />
          </div>
          <div
            className="absolute top-40 right-20 w-80 h-96 rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-700 border-4 border-primary-container/20"
            style={{ transform: "rotate(2deg) translateY(40px)" }}
          >
            <img
              className="w-full h-full object-cover"
              alt="black and white fine art portrait of a fencer with a gold-leafed mask, highly detailed textures and cinematic lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9HtouEkMKhiO7slwFWJq7ObdIRls8oO2563XpdbzlO-2Qjru5cA0M-qQdVqrX8nAkyExhTqsznP2AzMZHzJBuudmr34hjgdBrS2L8KuHrjngohLpPz7IRAFza_-a1ldWWcN0mFez_EdMetLPymsQLuog_UaYRoTLkv-wkqPCKL634uzaFgPFjWCRGcUVEjfAX9Qiqgy4O9ZWLzqZipMHtO7JjCDxWaxpJPyJsFoLiHH9YRUioc02KpFaICJZnF6IS2KjoHiWP6uFC"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
