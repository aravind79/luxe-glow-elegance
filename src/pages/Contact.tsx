import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon to confirm your booking.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "123 Beauty Street, Suite 100",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@luxeglowsalon.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-8PM, Sat: 10AM-6PM",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-24 px-4 mt-20">
        <div className="container mx-auto text-center max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            We'd love to hear from you. Reach out to book your appointment or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="p-8 shadow-large">
                <h2 className="text-3xl font-display font-bold mb-6 text-primary">
                  Book Your Appointment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about the service you're interested in..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-medium hover:shadow-large transition-smooth">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="p-6 shadow-medium">
                <h3 className="font-display font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </Card>

              {/* Map */}
              <Card className="mt-6 overflow-hidden shadow-medium">
                <div className="aspect-video bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Salon Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
