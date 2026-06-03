import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";

const WA_LINK = "https://wa.me/919660521774?text=Hi%20Sort%20My%20Visa%2C%20I%20would%20like%20assistance%20with%20my%20visa%20application.";

export function Contact() {
  const contactItems = [
    {
      icon: Phone,
      label: "WhatsApp & Phone",
      value: "+91 9660521774",
      sub: "Tap to open WhatsApp",
      href: WA_LINK,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hellosortmyvisa@gmail.com",
      sub: "We reply within 24 hours",
      href: "mailto:hellosortmyvisa@gmail.com",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat, 10 AM – 7 PM",
      sub: "Indian Standard Time",
      href: null,
    },
    {
      icon: MessageCircle,
      label: "Instagram",
      value: "@sortmyvisa",
      sub: "DM us anytime",
      href: "https://www.instagram.com/sortmyvisa",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
            Ready to <span className="text-primary">Pass Your Port?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reach out to our visa experts directly. The fastest way to get started is a quick WhatsApp message — we typically respond within minutes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-[#F8FAFC] hover:border-primary hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold text-foreground text-base mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-[#F8FAFC] h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold text-foreground text-base mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-[#1a2d6e] rounded-3xl p-10 md:p-14 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Start Your Visa Journey Today
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Send us a WhatsApp message and a visa expert will guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-semibold px-10 h-14 rounded-md shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
              asChild
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-6 h-6" />
                WhatsApp Now
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-semibold px-10 h-14 rounded-md shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
              asChild
            >
              <a href="https://www.instagram.com/sortmyvisa" target="_blank" rel="noopener noreferrer">
                <SiInstagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
