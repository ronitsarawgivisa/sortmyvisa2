import { motion } from "framer-motion";
import { 
  CalendarDays, 
  FileText, 
  PlaneTakeoff, 
  Building2, 
  ShieldCheck, 
  Wallet, 
  ClipboardCheck, 
  Briefcase
} from "lucide-react";
export function Services() {
  const services = [
    { icon: CalendarDays, title: "Visa Appointment Booking" },
    { icon: FileText, title: "Cover Letter Preparation" },
    { icon: PlaneTakeoff, title: "Flight Reservations" },
    { icon: Building2, title: "Hotel Reservations" },
    { icon: ShieldCheck, title: "Travel Insurance (ICICI Lombard)" },
    { icon: Wallet, title: "Financial Documentation Guidance" },
    { icon: ClipboardCheck, title: "Application Review" },
    { icon: Briefcase, title: "End-to-End Assistance" }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
            >
              Comprehensive <br/><span className="text-secondary">Visa Services.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              From the first consultation to the final document submission, we handle every detail of your application.
            </motion.p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-6 rounded-2xl bg-light border border-border hover:bg-primary hover:border-primary transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm text-primary group-hover:text-primary transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-white transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
