import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { HeroesSection } from "@/components/HeroesSection";
import { BattlefieldSection } from "@/components/BattlefieldSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <HeroesSection />
      <BattlefieldSection />
      <Footer />
    </main>
  );
}
