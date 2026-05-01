import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LiveBattles from "@/components/landing/LiveBattles";
import FeaturedArtists from "@/components/landing/FeaturedArtists";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <LiveBattles />
        <FeaturedArtists />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
