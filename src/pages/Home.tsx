import { Navbar } from "../components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Countries } from "@/components/Countries";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Countries />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
