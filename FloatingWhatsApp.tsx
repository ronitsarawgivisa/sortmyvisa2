import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold text-foreground relative hidden md:block">
          Need help? Chat with us!
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
        </div>
        <a
          href="https://wa.me/919660521774?text=Hi%20Sort%20My%20Visa%2C%20I%20would%20like%20assistance%20with%20my%20visa%20application."
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 relative"
          aria-label="Contact us on WhatsApp"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          <SiWhatsapp className="w-8 h-8 relative z-10" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
