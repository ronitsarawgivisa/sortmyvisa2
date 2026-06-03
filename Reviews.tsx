import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

export function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  const reviews = [
    {
      name: "Arjun Mehta",
      destination: "UK Tourist Visa",
      review: "The Sort My Visa team made my UK visa process incredibly smooth. Their documentation review is top-notch. Highly recommend for anyone looking for peace of mind.",
      avatar: "/avatars/avatar-1.png"
    },
    {
      name: "Priya Sharma",
      destination: "Schengen Visa (France)",
      review: "I was extremely anxious about my Schengen visa, but their WhatsApp support was always there to answer my silly questions. Got my visa in record time!",
      avatar: "/avatars/avatar-2.png"
    },
    {
      name: "Rahul Desai",
      destination: "US B1/B2 Visa",
      review: "Very professional and precise. They guided me perfectly on what financial documents to present. The interview prep was incredibly helpful.",
      avatar: "/avatars/avatar-3.png"
    },
    {
      name: "Neha Gupta",
      destination: "Australia Tourist Visa",
      review: "Exceptional service from start to finish. They handled the flight and hotel reservations too, which took a huge load off my shoulders.",
      avatar: "/avatars/avatar-4.png"
    },
    {
      name: "Vikram Singh",
      destination: "Canada Visitor Visa",
      review: "Their cover letter drafting is brilliant. They really know how to present a profile to the embassy. A truly luxury concierge experience.",
      avatar: "/avatars/avatar-1.png"
    },
    {
      name: "Anjali Verma",
      destination: "Singapore Visa",
      review: "Fast, efficient, and transparent. The dedicated WhatsApp group makes communication so easy. Will definitely use them for all my future travels.",
      avatar: "/avatars/avatar-2.png"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-extrabold mb-6"
          >
            Loved by Travelers.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Don't just take our word for it. Read what our clients have to say about their visa application experience.
          </motion.p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pb-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl h-full flex flex-col hover:bg-white/15 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 mb-8 flex-1 italic leading-relaxed">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${review.name}&background=random`; }} />
                    <div>
                      <h4 className="font-bold font-heading">{review.name}</h4>
                      <p className="text-sm text-secondary">{review.destination}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
