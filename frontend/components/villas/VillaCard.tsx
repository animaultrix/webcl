import Image from "next/image";
import type { Villa } from "@/data/villas";

type VillaCardProps = {
  villa: Villa;
};

export function VillaCard({ villa }: VillaCardProps) {
  return (
    <article className="group overflow-hidden rounded-sm bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={villa.image}
          alt={villa.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-[#a98442]">
              {villa.location}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-black">{villa.name}</h3>
          </div>
          <p className="shrink-0 text-sm font-semibold text-black">{villa.price}</p>
        </div>

        <p className="mt-4 text-sm leading-7 text-neutral-600">{villa.shortDescription}</p>

        <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase text-neutral-500">
          <span>{villa.guests}</span>
          <span className="text-[#c8a45d]">/</span>
          <span>{villa.bedrooms}</span>
        </div>
      </div>
    </article>
  );
}
