"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TranslateButton from "../ui/TranslateButton";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLanguageStore((state) => state.locale);
  const t = useTranslations(locale);
  const navLinks = [
    { label: t("DualArt.Landing.Navbar.Explore"), href: "/explore" },
    { label: t("DualArt.Landing.Navbar.Tournaments"), href: "/tournaments" },
    { label: t("DualArt.Landing.Navbar.Marketplace"), href: "/marketplace" },
    { label: t("DualArt.Landing.Navbar.Artists"), href: "/artist" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-8 max-w-full">
        <div className="flex items-center gap-8">
          <Link
            className="text-2xl font-serif text-on-surface tracking-tighter"
            href="/"
          >
            DuelArt
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/artist"
                  ? pathname.startsWith("/artist")
                  : pathname === link.href ||
                    (link.href === "/" && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    isActive
                      ? "text-primary-container border-b-2 border-primary-container pb-1 font-sans text-sm tracking-widest hover:text-primary-container transition-colors duration-300"
                      : "text-on-surface/70 font-sans text-sm tracking-widest hover:text-primary-container transition-colors duration-300"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/battle">
            <img src="/icons/swords.svg" alt="Battle" />
          </Link>
          <TranslateButton />
          <button className="text-on-surface/70 text-sm tracking-widest hover:text-primary-container transition-colors">
            <Link rel="stylesheet" href="/login">
              {t("DualArt.Landing.Navbar.Login")}
            </Link>
          </button>
          <button className="bg-linear-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-2 rounded-lg font-bold text-sm tracking-wider uppercase transition-all hover:shadow-[0_0_15px_rgba(245,200,66,0.3)] active:scale-95">
            <Link rel="stylesheet" href="/register">
              {t("DualArt.Landing.Navbar.Join")}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
