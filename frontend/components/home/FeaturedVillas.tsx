import { villas } from "@/data/villas";
import { Container } from "@/components/ui/Container";
import { VillaCard } from "@/components/villas/VillaCard";

export function FeaturedVillas() {
  return (
    <section id="villas" className="bg-[#f4efe7] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-[#a98442]">
            Featured villas
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-black sm:text-5xl">
            Refined homes for slow mornings, warm evenings and total privacy.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {villas.map((villa) => (
            <VillaCard key={villa.slug} villa={villa} />
          ))}
        </div>
      </Container>
    </section>
  );
}
