"use client";
import "./globals.css";
import Head from "next/head";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect, useState } from "react";
import { SupportedLocale } from "@/hooks/useTranslations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState<SupportedLocale>("en");
  useEffect(() => {
    import("@/store/useLanguageStore").then((mod) => {
      setLocale(mod.useLanguageStore.getState().locale);
      mod.useLanguageStore.subscribe((state: any) => setLocale(state.locale));
    });
  }, []);
  return (
    <html lang={locale} className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DuelArt | The Grand Arena of Elegance</title>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-background text-on-background font-body min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
