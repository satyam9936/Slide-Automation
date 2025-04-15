import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-blue-950 py-20 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
            Transform Your Instagram Engagement with{" "}
            <span className="text-blue-400">Slide</span>
          </h1>
          <p className="mt-6 text-lg text-blue-200">
            Slide revolutionizes how you connect with your audience on Instagram and boosts engagement.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
            <Button size="lg" className="border border-blue-400 text-blue-100 hover:bg-blue-900/50">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero-instagram-preview.png" // 👈 Replace this with your actual image path
            alt="Instagram Engagement Preview"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
