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

const Home = () => {
  const services = [
    {
      title: "Facial Treatments",
      description: "Rejuvenate your skin with our premium facial services",
      image: facialImage,
    },
    {
      title: "Pedicure",
      description: "Pamper your feet with our luxurious pedicure treatments",
      image: pedicureImage,
    },
    {
      title: "Manicure",
      description: "Perfect nails with our expert manicure services",
      image: manicureImage,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The most relaxing and professional salon experience I've ever had. The attention to detail is incredible!",
    },
    {
      name: "Emily Chen",
      text: "Luxe Glow Salon has become my sanctuary. The staff is amazing and the results are always perfect.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Where Beauty Meets Relaxation
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Experience the ultimate in luxury beauty treatments
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
            Welcome to Luxe Glow
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up">
            Step into a world where luxury meets expertise. At Luxe Glow Salon, we believe that
            beauty is more than skin deep—it's about feeling confident, refreshed, and pampered.
            Our team of expert professionals is dedicated to providing you with an unparalleled
            experience in our serene, elegant environment.
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
                Founded with a vision to redefine beauty and wellness, Luxe Glow Salon has been
                a sanctuary for those seeking premium care and relaxation. Our journey began with
                a simple belief: everyone deserves to feel beautiful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our carefully curated treatments to our tranquil atmosphere, every detail
                is designed to transport you to a world of elegance and serenity. We combine
                traditional techniques with modern innovations to deliver results that exceed
                expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Premium Products</h3>
                    <p className="text-sm text-muted-foreground">
                      We use only the finest, carefully selected products for optimal results
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
                    <h3 className="font-display font-semibold mb-2">Personalized Care</h3>
                    <p className="text-sm text-muted-foreground">
                      Every treatment is tailored to your unique needs and preferences
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
                    <h3 className="font-display font-semibold mb-2">Expert Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team of certified specialists brings years of experience
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
