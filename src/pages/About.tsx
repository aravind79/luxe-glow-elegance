import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Star } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every service we provide",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Your wellbeing and satisfaction are our top priorities",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our valued clients",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Staying ahead with the latest beauty treatments and techniques",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Dedicated to Your Beauty and Wellness
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-8 text-primary animate-fade-up">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8 animate-fade-up">
            At Rain Vibes Salon, our mission is to provide an unparalleled beauty experience that
            combines expert care, premium products, and a tranquil atmosphere. We believe that
            every client deserves to feel pampered, confident, and beautiful.
          </p>
          <p className="text-lg text-muted-foreground text-center leading-relaxed animate-fade-up">
            Our team of certified professionals is passionate about delivering exceptional results
            while ensuring your comfort and satisfaction. From the moment you step through our
            doors, you'll experience the difference that true luxury and personalized care can make.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center shadow-medium hover:shadow-large transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <value.icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                The Rain Vibes Experience
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When you visit Rain Vibes Salon, you're not just getting a treatment—you're
                embarking on a journey of transformation and relaxation. Our salon is designed
                to be your personal sanctuary, a place where stress melts away and beauty
                flourishes.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We've created an atmosphere that engages all your senses. From the soothing
                ambiance and gentle music to the aromatherapy and luxurious treatments, every
                detail is carefully curated to provide you with a truly memorable experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence extends beyond our services. We use only premium,
                carefully selected products that are safe, effective, and environmentally
                conscious. Your satisfaction and wellbeing are our highest priorities.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8 shadow-large animate-fade-in">
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Certified and experienced professionals",
                  "State-of-the-art facilities and equipment",
                  "Premium, eco-friendly products",
                  "Personalized treatment plans",
                  "Relaxing, luxurious atmosphere",
                  "Flexible scheduling and appointments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
