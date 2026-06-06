import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Advantages } from "@/components/home/Advantages";
import { ContactCta } from "@/components/home/ContactCta";
import { FeaturedVillas } from "@/components/home/FeaturedVillas";
import { Hero } from "@/components/home/Hero";
import { PremiumExperience } from "@/components/home/PremiumExperience";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedVillas />
        <Advantages />
        <PremiumExperience />
        <ContactCta />
    </main>
      <Footer />
    </>
  );
}
