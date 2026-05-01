"use client";

import { useMemo } from "react";
import en from "@/lib/i18n/en.json";
import es from "@/lib/i18n/es.json";

export type SupportedLocale = "en" | "es";

type NestedDictionary = Record<string, any>;

const DICTIONARIES: Record<SupportedLocale, NestedDictionary> = {
  en,
  es,
};

export const i18nDictionaries = DICTIONARIES;

const interpolate = (template: string, vars?: Record<string, string | number>) => {
  if (!vars) {
    return template;
  }
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    template
  );
};

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export const useTranslations = (locale: SupportedLocale) => {
  return useMemo(() => {
    const dictionary = DICTIONARIES[locale] ?? DICTIONARIES.en;
    const fallback = DICTIONARIES.en;

    return (key: string, vars?: Record<string, string | number>) => {
      let template = getNestedValue(dictionary, key);
      if (template === undefined) {
        template = getNestedValue(fallback, key);
      }
      if (typeof template !== 'string') {
        return key;
      }
      return interpolate(template, vars);
    };
  }, [locale]);
};
