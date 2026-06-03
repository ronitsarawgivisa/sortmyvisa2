import { motion } from "framer-motion";

const destinations = [
  { name: "Europe", image: "/countries/europe.png" },
  { name: "United Kingdom", image: "/countries/uk.png" },
  { name: "Singapore", image: "/countries/singapore.png" },
  { name: "Turkey", image: "/countries/turkey.png" },
  { name: "Azerbaijan", image: "/countries/azerbaijan.png" },
  { name: "Bali", image: "/countries/bali.png" },
  { name: "Sri Lanka", image: "/countries/srilanka.png" },
  { name: "Thailand", image: "/countries/thailand.png" },
  { name: "Vietnam", image: "/countries/vietnam.png" },
  { name: "New Zealand", image: "/countries/new-zealand.png" },
  { name: "Australia", image: "/countries/australia.png" },
  { name: "USA", image: "/countries/usa.png" },
  { name: "Canada", image: "/countries/canada.png" },
  { name: "Mozambique", image: "/countries/mozambique.png" },
  { name: "China", image: "/countries/china.png" },
];

export function Countries() {
  return (
    <section id="countries" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
            >
              Destinations <br/><span className="text-primary">We Assist With.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              We handle tourist visa applications for the world's most sought-after destinations, ensuring a smooth and hassle-free process.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((country, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${country.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-heading font-bold text-white mb-1">{country.name}</h3>
                <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Tourist Visa Assistance
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
