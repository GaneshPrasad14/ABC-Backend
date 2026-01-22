import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Package, Droplets, Thermometer, Gauge } from "lucide-react";
import bannerImage from "@/assets/banner-services.jpg";
import ductingImage from "@/assets/dc.jpeg";
import pipingImage from "@/assets/cw.jpeg";
import vrfImage from "@/assets/vrf.jpeg";
import balancingImage from "@/assets/air-balancing.jpg";
import supplyImage from "@/assets/supply-materials.jpg";

const services = [
  {
    id: "ducting",
    icon: Wind,
    title: "Ducting Work",
    description: "Professional GI and pre-insulated duct installation for industrial and commercial projects.",
    image: ductingImage,
    features: [
      "GI / Pre-insulated Duct Installation",
      "Fabrication & Erection",
      "Industrial & Commercial Projects",
      "Custom duct design and sizing",
      "Quality welding and sealing",
    ],
  },
  {
    id: "supply",
    icon: Package,
    title: "Supply of Ducts & Insulation Material",
    description: "High-quality ducts and insulation materials for all HVAC requirements.",
    image: supplyImage,
    features: [
      "GI Ducts supply",
      "PUF / XLPE / Nitrile Rubber Insulation",
      "Quality-tested materials",
      "Competitive pricing",
      "Timely delivery",
    ],
  },
  {
    id: "piping",
    icon: Droplets,
    title: "Chilled Water Piping Work",
    description: "Expert piping installation and testing for chilled water systems.",
    image: pipingImage,
    features: [
      "MS / GI / Copper Piping",
      "Valve Installation",
      "Pressure Testing",
      "Leak-proof joints",
      "Insulation work",
    ],
  },
  {
    id: "vrf",
    icon: Thermometer,
    title: "VRF & Ductable Supply & Erection",
    description: "Complete VRF and ductable AC installation and commissioning services.",
    image: vrfImage,
    features: [
      "Indoor & Outdoor Unit Installation",
      "Copper Piping & Insulation",
      "Support & Commissioning Assistance",
      "System configuration",
      "Performance testing",
    ],
  },
  {
    id: "balancing",
    icon: Gauge,
    title: "Air Balancing & Commissioning",
    description: "Precise air balancing and system optimization for optimal performance.",
    image: balancingImage,
    features: [
      "Airflow Measurement",
      "System Optimization",
      "Final Testing & Handover Support",
      "Documentation",
      "Performance reports",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container-custom px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Comprehensive HVAC solutions from ducting to commissioning
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="accent">
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            Need Custom HVAC Solutions?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team can provide tailored solutions for your specific project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8754383730">
              <Button variant="accent" size="xl">
                Call Us Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
