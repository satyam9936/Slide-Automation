import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="mx-auto mt-16 max-w-3xl text-center">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Transform Your Instagram Engagement with{" "}
        <span className="text-white">Slide</span>
      </h1>
      <p className="mt-6 text-lg text-blue-200">
        Slide revolutionizes how you connect with your audience on Instagram and boosts engagement.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </Button>
        <Button size="lg" className="border border-blue-400 text-blue-100 hover:bg-blue-900/50">
          Learn More
        </Button>
      </div>
    </div>
  );
}  