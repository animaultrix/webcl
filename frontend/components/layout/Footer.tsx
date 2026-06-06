import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <Container>
        <div className="grid gap-10 border-t border-white/15 pt-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/logo/seal-gold.png"
              alt="Canarias Luxury"
              width={440}
              height={200}
              className="h-30 w-auto"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Luxury holiday villa stays in Gran Canaria, curated with care and
              supported by a discreet local team.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-[#c8a45d]">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {site.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-[#c8a45d]">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <a href={`tel:${site.contact.phone}`} className="hover:text-white">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
              <a href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`} className="hover:text-white">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Canarias Luxury. All rights reserved.</p>
          <p>Gran Canaria, Canary Islands.</p>
        </div>
      </Container>
    </footer>
  );
}
