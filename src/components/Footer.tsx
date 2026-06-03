import { SiWhatsapp, SiInstagram, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0F1F4D] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Sort My Visa" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium visa assistance concierge ensuring a seamless and confident global travel experience. Pass your port with us.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sortmyvisa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#0F1F4D] transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#0F1F4D] transition-colors">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#why-choose-us" className="text-white/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#reviews" className="text-white/70 hover:text-secondary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-secondary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Top Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">Schengen Area</a></li>
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">United Kingdom</a></li>
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">United States</a></li>
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">Canada</a></li>
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">Australia</a></li>
              <li><a href="#countries" className="text-white/70 hover:text-secondary transition-colors">Singapore</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 mb-6">
              <li className="text-white/70">
                <strong className="block text-white mb-1">WhatsApp / Phone:</strong>
                +91 9660521774
              </li>
              <li className="text-white/70">
                <strong className="block text-white mb-1">Email:</strong>
                hellosortmyvisa@gmail.com
              </li>
            </ul>
            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold flex items-center gap-2" asChild>
              <a href="https://wa.me/919660521774?text=Hi%20Sort%20My%20Visa%2C%20I%20would%20like%20assistance%20with%20my%20visa%20application." target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5" />
                Chat With Us
              </a>
            </Button>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Sort My Visa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
