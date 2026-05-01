import { create } from 'zustand';
import { SupportedLocale } from '@/hooks/useTranslations';

interface LanguageState {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  locale: 'en',
  setLocale: (locale) => set({ locale }),
}));
