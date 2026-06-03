import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Hero() {
  const trustBadges = [
    "Documentation Support",
    "Visa Experts",
    "Fast Response",
    "WhatsApp Assistance"
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#EEF4FF] via-[#DDE9FF] to-[#C7DCFF]">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#233B87]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm mb-8">
            Pass Your Port With Us
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-extrabold leading-[1.05] tracking-tight mb-6">
            <span style={{ WebkitTextStroke: "2px #233B87", color: "transparent" }}>Visa Assistance</span>
            <br />
            <span className="text-primary">Made Simple.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#374151] mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Expert visa guidance, appointment booking, documentation support, travel insurance, financial documentation assistance, and complete application preparation.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-semibold px-10 h-14 rounded-md shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
              asChild
            >
              <a
                href="https://wa.me/919660521774?text=Hi%20Sort%20My%20Visa%2C%20I%20would%20like%20assistance%20with%20my%20visa%20application."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white text-lg font-semibold px-10 h-14 rounded-md shadow-sm transition-transform hover:-translate-y-1"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-x-8 gap-y-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#374151]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
