import Navbar from "@/components/Section/Navbar";
import HeroSection from "@/components/Section/Herosection";
import CardsGrid from "@/components/Section/CardGrid";
import Pricing from "@/components/Section/Pricing";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="container px-8 py-8">
            <Navbar />
            <HeroSection />
            <CardsGrid />
          </div>
        </div>
      </section>
      <Pricing />
    </>
  );
}
