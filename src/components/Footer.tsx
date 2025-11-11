import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Rain Vibes Salon</h3>
            <p className="text-sm opacity-90 mb-4">
              Where beauty meets relaxation. Experience premium treatments in our luxurious atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@rainvibessalon.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Beauty Street, Suite 100</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Hours</h4>
            <div className="text-sm opacity-90 space-y-2">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:opacity-80 transition-fast">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-fast">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>© 2024 Rain Vibes Salon. All rights reserved.</p>
          <p className="mt-2 text-xs italic">Men's salon services available.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
