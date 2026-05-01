import { useLanguageStore } from "@/store/useLanguageStore";
import { SupportedLocale } from "@/hooks/useTranslations";

const LANGUAGES: { code: SupportedLocale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function TranslateButton() {
  const locale = useLanguageStore((s) => s.locale);
  const setLocale = useLanguageStore((s) => s.setLocale);

  return (
    <select
      className="bg-transparent border border-primary-container rounded px-2 py-1 text-primary-container text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/50 transition-all"
      value={locale}
      onChange={(e) => setLocale(e.target.value as SupportedLocale)}
      aria-label="Select language"
    >
      {LANGUAGES.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className="text-on-primary-fixed bg-primary"
        >
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
}
