import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Rain Vibes Salon</h3>
            <p className="text-sm opacity-90 mb-4">
              Dubai's premier men's salon offering focused grooming services in a tranquil nature-inspired environment. 
              Experience the perfect blend of relaxation and professional care.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+971 50 772 1465</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@rainvibessalon.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Shop #404, Dr Saeed Al Yousuf Building, Next to York International Hotel, Sharaf DG Metro Station Exit 3, Bur Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Hours</h4>
            <div className="text-sm opacity-90 space-y-2">
              <p>Open Daily</p>
              <p className="font-semibold">10:00 AM - 10:00 PM</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:opacity-80 transition-fast" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-fast" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>© 2024 Rain Vibes Salon Dubai. All rights reserved.</p>
          <p className="mt-2 text-xs italic">Premium men's salon services in Bur Dubai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
