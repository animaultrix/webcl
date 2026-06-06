import { Container } from "@/components/ui/Container";

const advantages = [
  {
    title: "Curated villa selection",
    text: "Each stay is chosen for privacy, comfort and a sense of place, with real imagery ready to review.",
  },
  {
    title: "Local island knowledge",
    text: "A Gran Canaria focused team can guide guests toward the right property, area and experience.",
  },
  {
    title: "Discreet guest support",
    text: "Clear communication before arrival and practical assistance throughout the stay.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#a98442]">
              Why book with us
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-black sm:text-5xl">
              Luxury without noise, handled by people who know the island.
            </h2>
          </div>

          <div className="grid gap-5">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-4 border-b border-neutral-200 pb-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm font-semibold text-[#a98442]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                  <p className="mt-2 leading-7 text-neutral-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
