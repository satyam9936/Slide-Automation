import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-white" />
        <span className="text-xl font-semibold text-white">Slide</span>
      </div>
      <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#about">About</Link>
      </nav>
    </div>
  );
}
