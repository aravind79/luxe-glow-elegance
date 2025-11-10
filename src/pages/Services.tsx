import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import facialImage from "@/assets/service-facial.jpg";
import pedicureImage from "@/assets/service-pedicure.jpg";
import manicureImage from "@/assets/service-manicure.jpg";

const Services = () => {
  const services = [
    {
      title: "Facial Treatments",
      image: facialImage,
      description: "Rejuvenate and refresh your skin with our expert facial treatments.",
      details: [
        "Deep cleansing and exfoliation",
        "Customized masks and serums",
        "Anti-aging treatments",
        "Hydration therapy",
      ],
    },
    {
      title: "Pedicure",
      image: pedicureImage,
      description: "Pamper your feet with our luxurious pedicure services.",
      details: [
        "Nail shaping and buffing",
        "Cuticle care and massage",
        "Exfoliation and moisturizing",
        "Polish application",
      ],
    },
    {
      title: "Manicure",
      image: manicureImage,
      description: "Perfect, beautiful nails with our professional manicure treatments.",
      details: [
        "Nail shaping and filing",
        "Cuticle treatment",
        "Hand massage",
        "Premium polish application",
      ],
    },
    {
      title: "Foot Spa",
      image: pedicureImage,
      description: "Indulge in a relaxing foot spa experience with aromatherapy.",
      details: [
        "Warm water soak with essential oils",
        "Foot scrub and exfoliation",
        "Pressure point massage",
        "Moisturizing treatment",
      ],
    },
    {
      title: "Whole Body Skin Treatment",
      image: facialImage,
      description: "Complete body care with our comprehensive skin treatment packages.",
      details: [
        "Full body exfoliation",
        "Deep moisturizing therapy",
        "Skin brightening treatment",
        "Relaxation massage",
      ],
    },
    {
      title: "Hot Oil Treatment",
      image: manicureImage,
      description: "Nourish and strengthen your hair with our premium hot oil therapy.",
      details: [
        "Scalp analysis and preparation",
        "Premium oil selection",
        "Deep conditioning treatment",
        "Relaxing head massage",
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Discover our range of premium beauty and wellness treatments
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
