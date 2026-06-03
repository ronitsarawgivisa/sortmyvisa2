import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smoother counter
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-extrabold text-primary">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Applications Assisted" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 15, suffix: "+", label: "Destinations Assisted" },
    { value: 4.9, suffix: "", label: "Average Rating" },
  ];

  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className={`text-center ${idx % 2 === 0 ? 'border-none md:border-solid' : 'border-none md:border-solid'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="mb-2">
                {stat.value === 4.9 ? (
                  <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary">4.9</span>
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
