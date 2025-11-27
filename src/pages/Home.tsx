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
      name: "Ahmed Al-Mansoori",
      text: "The foot spa and reflexology service is exceptional. The rain-themed ambiance creates such a peaceful atmosphere - truly a sanctuary in the heart of Dubai.",
    },
    {
      name: "Rahul Sharma",
      text: "Finally, an elite salon that understands men's wellness needs. Professional staff, focused treatments, and complete relaxation without any distractions. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
        </div>
        
        <RainAnimation />
        <LeafAnimation />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            You are Elite you deserve more than an ordinary salon experience!
          </h1>
          <p className="text-lg md:text-xl mb-4 font-light max-w-3xl mx-auto">
            You seek true relaxation for your body, mind, and soul, where every detail makes you feel royally pampered.
          </p>
          <p className="text-lg md:text-xl mb-4 font-light max-w-3xl mx-auto">
            Imagine a space where a professional touch perfects your nails every week, keeping your hands clean, neat, and elegant all while you unwind in comfort.
          </p>
          <p className="text-lg md:text-xl mb-8 font-light max-w-3xl mx-auto">
            At our salon, we promise warm, personalized service that makes every visit unforgettable and keeps you coming back for more.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-accent text-lg px-8 py-6">
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
            Welcome to our newly opened facility in the heart of Bur Dubai, where we offer focused salon services 
            exclusively for gentlemen. Experience premium foot care and spa, pedicure, hot oil treatments, and facial 
            services—all delivered in a tranquil, nature-inspired environment. Our personalized approach ensures you receive 
            individual attention without distractions, allowing you to fully relax and rejuvenate. Whether you're 
            VIP, professional, or luxury clientele seeking quality pampering, Rain Vibes Salon is your destination 
            for exceptional wellness.
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
                      Luxury wellness accessible to VIP, professional, or Elite clientele
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
