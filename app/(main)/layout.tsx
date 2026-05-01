"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mt-16">{children}</main>
      <Footer />
    </>
  );
}
