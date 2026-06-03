import { motion } from "framer-motion";
import { 
  Compass, 
  UserCheck, 
  MessageCircle, 
  FileCheck2, 
  Banknote, 
  Plane 
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Compass,
      title: "Experienced Guidance",
      description: "Expert support through every stage of your visa application journey."
    },
    {
      icon: UserCheck,
      title: "Personalized Assistance",
      description: "Customized guidance tailored specifically for every traveler's unique profile."
    },
    {
      icon: MessageCircle,
      title: "Fast Communication",
      description: "Quick and responsive support via WhatsApp and phone when you need it."
    },
    {
      icon: FileCheck2,
      title: "Documentation Review",
      description: "Meticulous review to reduce mistakes and significantly improve readiness."
    },
    {
      icon: Banknote,
      title: "Financial Guidance",
      description: "Clear understanding of what embassies expect for financial documentation."
    },
    {
      icon: Plane,
      title: "Travel Support",
      description: "Assistance with flights, hotels, insurance, and complete travel documentation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
          >
            Why Choose <span className="text-primary">Sort My Visa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We don't just fill forms. We manage your entire visa process with the precision and care of a luxury concierge service.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
