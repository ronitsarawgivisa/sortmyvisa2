import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { MapPin, PhoneCall, UserCheck, MessageSquare, FolderCheck, FileOutput, Send } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { icon: MapPin, title: "Choose Destination", desc: "Select your destination and travel dates." },
    { icon: PhoneCall, title: "Contact Us", desc: "Reach out via WhatsApp or our contact form." },
    { icon: UserCheck, title: "Expert Consultation", desc: "Discuss your profile with a Visa Expert." },
    { icon: MessageSquare, title: "Dedicated Support", desc: "Get added to a dedicated WhatsApp group." },
    { icon: FolderCheck, title: "Prepare Documents", desc: "Collect and prepare your documents with our guidance." },
    { icon: FileOutput, title: "Final Review", desc: "Receive reviewed document set 3 days before appointment." },
    { icon: Send, title: "Submit", desc: "Submit documents at VFS or the Embassy." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A seamless, transparent, and guided journey from your first message to your visa approval.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line connector */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/20 md:left-1/2 md:-ml-[1px]" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center gap-6 md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Number / Icon circle */}
                <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-bold shadow-lg z-10">
                  {idx + 1}
                </div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] bg-light p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-semibold px-8 h-14 rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2 mx-auto" asChild>
            <a href="https://wa.me/919660521774?text=Hi%20Sort%20My%20Visa%2C%20I%20would%20like%20assistance%20with%20my%20visa%20application." target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="w-5 h-5" />
              Start Your Process Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
