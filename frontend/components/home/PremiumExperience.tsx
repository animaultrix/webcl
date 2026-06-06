import Image from "next/image";
import { Container } from "@/components/ui/Container";

const services = [
  "Villa matching and tailored recommendations",
  "Arrival guidance and local coordination",
  "Optional premium experiences on request",
  "Clear, personal communication from enquiry to departure",
];

export function PremiumExperience() {
  return (
    <section id="services" className="bg-black py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-sm">
            <Image
              src="/hero/patio-pool.png"
              alt="Private villa terrace and pool"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-[#d7b56d]">
              Premium experience
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              A stay shaped around privacy, comfort and ease.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              From the first enquiry, the focus is simple: understand the trip,
              recommend the right villa and keep every step calm, clear and
              personal.
            </p>

            <ul className="mt-8 grid gap-4">
              {services.map((service) => (
                <li key={service} className="flex gap-3 text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b56d]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
