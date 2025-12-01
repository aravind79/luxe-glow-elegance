import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import facialImage from "@/assets/service-facial.jpg";
import pedicureImage from "@/assets/service-pedicure.jpg";
import manicureImage from "@/assets/service-manicure.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RainAnimation from "@/components/RainAnimation";
import LeafAnimation from "@/components/LeafAnimation";

const Home = () => {
  const services = [
    {
      title: "Foot Spa & Reflexology",
      description: "Indulge in our signature foot spa experience with therapeutic reflexology in a calming environment",
      image: pedicureImage,
    },
    {
      title: "Pedicure & Manicure",
      description: "Expert nail care and grooming services tailored for the modern gentleman",
      image: manicureImage,
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenate and refresh your skin with our professional facial treatments designed for men",
      image: facialImage,
    },
  ];

  const testimonials = [
    {
      name: "Peter Hage",
      text: "The foot spa and reflexology service was exceptional. The rain-themed ambiance created such a peaceful atmosphere.",
    },
    {
      name: "Rahul Sharma",
      text: "Finally, an elite wellness center that understood men's wellness needs. Professional staff, focused treatments, and complete relaxation without any distractions. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16 md:mt-20 py-12 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
        </div>
        
        <RainAnimation />
        <LeafAnimation />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 animate-fade-up max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            Hey Man! You are unique, and you deserve to be pampered after stressful days!
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 font-light max-w-4xl mx-auto leading-relaxed">
            Seeking relaxation for your body, mind, and soul is an investment in your own wellness, so you can continue to lead and support the people who depend on you.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 font-light max-w-4xl mx-auto leading-relaxed">
            Imagine a personal space where a professional keeps your nails clean and neat every week, while you freely enjoy a foot or hand spa package.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            At our Dubai center, we have created personal spaces where we promise warm and royal treatment that makes every visit an unforgettable experience — and for sure, you will come back for more.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-accent text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7">
              Book Your Session
            </Button>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary animate-fade-up">
            Welcome to Rain Vibes Salon
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up">
            Welcome to our newly opened facility in the heart of Bur Dubai, where we offer personal care and cosmetic spa and salon services 
            exclusively for gentlemen. Experience premium foot care and spa, pedicure, hot oil treatments, and facial 
            services—all delivered in a tranquil, nature-inspired environment. Our personalized approach ensures you receive 
            individual attention without distractions, allowing you to fully relax and rejuvenate.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-display font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Rain Vibes Salon has been founded with a vision to create a unique sanctuary for men's 
                wellness in Dubai. We understand that modern gentlemen deserve a space where they can 
                relax, rejuvenate, and receive focused attention without the hustle of traditional salons.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our serene ambiance isn't just aesthetic—it's designed to transport you 
                away from the city's bustle into a peaceful oasis. From therapeutic foot reflexology to 
                premium skin treatments, every service is delivered with precision and care by our expert 
                team. We cater to the needs of residents as well as incoming tourists.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Focused Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Individual attention in a distraction-free environment for complete relaxation
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Tranquil Atmosphere</h3>
                    <p className="text-sm text-muted-foreground">
                      Immerse yourself in our unique rain inspired soothing environment
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Premium for Everyone</h3>
                    <p className="text-sm text-muted-foreground">
                      Luxury wellness accessible to VIP, professional, or Elite clients
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary">
            Our Signature Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-medium hover:shadow-large transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 shadow-medium animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <p className="font-display font-semibold text-primary">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Glow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience the difference luxury makes
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
