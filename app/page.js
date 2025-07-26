import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <title>Fametonic</title>
      <PromoBanner />
      <Header />
      <HeroSection />
    </div>
  );
}
