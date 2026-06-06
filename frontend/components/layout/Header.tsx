import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 bg-black/20 text-white backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Canarias Luxury home">
          <Image
            src="/logo/logo-light-simple.png"
            alt="Canarias Luxury"
            width={220}
            height={80}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-lg font-medium lg:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/82 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="#contact" variant="secondary" className="hidden lg:inline-flex">
          Enquire
        </Button>
      </Container>
    </header>
  );
}
