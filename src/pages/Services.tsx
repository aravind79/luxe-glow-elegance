import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import facialImage from "@/assets/service-facial.jpg";
import pedicureImage from "@/assets/service-pedicure.jpg";
import manicureImage from "@/assets/service-manicure.jpg";
import footSpaImage from "@/assets/service-foot-spa.jpg";
import hotOilImage from "@/assets/service-hot-oil.jpg";
import footReflexologyImage from "@/assets/service-foot-reflexology.jpg";
import hardSkinImage from "@/assets/service-hard-skin.jpg";
import bodyTreatmentImage from "@/assets/service-body-treatment.jpg";

const Services = () => {
  const services = [
    {
      title: "Foot Reflexology",
      image: footReflexologyImage,
      description: "Therapeutic foot reflexology promoting relaxation and wellness through pressure point massage.",
      details: [
        "Targeted pressure point therapy",
        "Stress relief and circulation improvement",
        "Traditional reflexology techniques",
        "Customized session duration",
      ],
    },
    {
      title: "Hand Reflexology",
      image: manicureImage,
      description: "Rejuvenating hand reflexology to release tension and promote overall wellbeing.",
      details: [
        "Pressure point stimulation",
        "Relaxation of hand and wrist muscles",
        "Improved energy flow",
        "Stress reduction therapy",
      ],
    },
    {
      title: "Foot Spa",
      image: footSpaImage,
      description: "Luxurious foot spa treatment with aromatherapy in our signature calming ambiance.",
      details: [
        "Warm water soak with essential oils",
        "Deep cleansing and exfoliation",
        "Soothing massage and moisturizing",
        "Complete relaxation experience",
      ],
    },
    {
      title: "Pedicure & Manicure",
      image: pedicureImage,
      description: "Professional nail care services designed specifically for men's grooming needs.",
      details: [
        "Nail shaping and buffing",
        "Cuticle care and treatment",
        "Exfoliation and moisturizing",
        "Optional polish application",
      ],
    },
    {
      title: "Hard Skin Removal (Foot)",
      image: hardSkinImage,
      description: "Expert removal of calluses and hard skin for smooth, refreshed feet.",
      details: [
        "Professional callus removal",
        "Gentle exfoliation techniques",
        "Smoothing and softening treatment",
        "Long-lasting results",
      ],
    },
    {
      title: "Hot Oil Treatment",
      image: hotOilImage,
      description: "Premium hot oil therapy to nourish scalp and strengthen hair with deep conditioning.",
      details: [
        "Scalp analysis and preparation",
        "Premium natural oil selection",
        "Deep conditioning treatment",
        "Relaxing head and scalp massage",
      ],
    },
    {
      title: "Whole Body Dry Skin Treatment",
      image: bodyTreatmentImage,
      description: "Comprehensive full-body treatment targeting dry skin with intensive moisturization.",
      details: [
        "Full body exfoliation",
        "Deep moisturizing therapy",
        "Skin texture improvement",
        "Hydration restoration",
      ],
    },
    {
      title: "Head, Shoulder & Leg Massage",
      image: hotOilImage,
      description: "Therapeutic massage focusing on key tension areas for complete body relaxation.",
      details: [
        "Targeted muscle tension relief",
        "Improved blood circulation",
        "Stress and fatigue reduction",
        "Professional massage techniques",
      ],
    },
    {
      title: "Facial Treatment",
      image: facialImage,
      description: "Rejuvenating facial treatments designed for men's skin, promoting clarity and freshness.",
      details: [
        "Deep cleansing and exfoliation",
        "Customized facial masks",
        "Skin tone improvement",
        "Anti-aging and hydration therapy",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-24 px-4 mt-20">
        <div className="container mx-auto text-center max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Discover our comprehensive range of men's grooming and wellness treatments in a tranquil sanctuary
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-medium hover:shadow-large transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to schedule your appointment and begin your journey to beauty
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary text-lg px-8 py-6">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
