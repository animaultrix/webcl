import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="bg-[#f4efe7] py-20 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-sm bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] bg-neutral-200">
            <Image
              src="/hero/pool-lifestyle.png"
              alt="Relaxed luxury villa stay by the pool"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-sm font-semibold uppercase text-[#a98442]">
              Start your enquiry
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-black sm:text-5xl">
              Tell us what kind of stay you have in mind.
            </h2>
            <p className="mt-5 leading-8 text-neutral-600">
              Share your dates, group size and preferred style of villa. We will
              reply with suitable options and clear next steps.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={whatsappHref} variant="dark">
                WhatsApp
              </Button>
              <Button href={`mailto:${site.contact.email}`} variant="primary">
                Email us
              </Button>
            </div>

            <div className="mt-8 grid gap-2 text-sm text-neutral-600">
              <a href={`tel:${site.contact.phone}`} className="hover:text-black">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="hover:text-black">
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
