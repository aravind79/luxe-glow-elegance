import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone must be less than 20 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "6ec21afa-1119-4301-9188-1e904f0aebb0",
          subject: "New Booking Request - Rain Vibes Salon",
          from_name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! We'll contact you soon to confirm your booking.");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Shop #404, Dr Saeed Al Yousuf Building, Next to York International Hotel, Sharaf DG Metro Exit 3, Al Suq Al Kabeer, Bur Dubai, UAE",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+971 50 772 1465",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@rainvibessalon.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Daily: 10:00 AM - 10:00 PM",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-24 px-4 mt-20">
        <div className="container mx-auto text-center max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Visit Us in Bur Dubai
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            We're conveniently located near Sharaf DG Metro Station. Reach out to book your appointment or inquire about our services.
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+971 50 772 1465" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about the service you're interested in..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full gradient-primary text-lg py-6" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const isPhone = info.title === "Phone";
                  const isEmail = info.title === "Email";
                  const content = (
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
                  );
                  
                  if (isPhone) {
                    return <a key={index} href="tel:+971507721465" className="block">{content}</a>;
                  }
                  if (isEmail) {
                    return <a key={index} href="mailto:info@rainvibessalon.com" className="block">{content}</a>;
                  }
                  return content;
                })}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5447845289987!2d55.29686931500829!3d25.25926098387891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBur%20Dubai%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1637000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Rain Vibes Salon Location - Bur Dubai"
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
