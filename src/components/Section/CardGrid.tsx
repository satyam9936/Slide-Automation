import Image from "next/image";

export default function CardsGrid() {
  return (
    <div className="mt-20 flex justify-center gap-6 flex-wrap">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="relative h-64 w-[260px] overflow-hidden rounded-tl-[40px] bg-blue-800/50"
        >
          <Image src="/placeholder.svg" alt="Community member" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
