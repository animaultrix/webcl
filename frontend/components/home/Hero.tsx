import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-black text-white">
      <Image
        src="/hero/luxury-pool.png"
        alt="Luxury villa pool in Gran Canaria"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />

      <Container className="relative z-10 flex min-h-[92svh] items-center pb-14 pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#d7b56d]">
            Private luxury villas in Gran Canaria
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Elevated island stays, curated with quiet precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            Canarias Luxury brings together refined private villas, personal
            service and the calm rhythm of Gran Canaria&apos;s most desirable stays.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Plan your stay</Button>
            <Button href="#villas" variant="secondary">
              View villas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
