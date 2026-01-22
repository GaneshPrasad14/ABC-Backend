import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, CheckCircle, Award, Shield, Clock, X } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import bannerImage from "@/assets/banner-about.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Commitment to highest standards in every project we undertake",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict adherence to safety protocols and industry standards",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable project execution with timely completion",
  },
];

const milestones = [
  { number: "7+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "50+", label: "Skilled Workers" },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Chennai's trusted HVAC manpower and project execution partner
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">ARCTIC BREEZE COMFORT SOLUTIONS</strong> is a Chennai-based HVAC manpower and project execution company with over <strong className="text-accent">7 years of hands-on experience</strong>.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in deploying skilled technicians and supervisors for HVAC installations, ducting, piping, and commissioning works. Our strength lies in <strong className="text-foreground">experienced manpower</strong>, precision execution, and strict adherence to safety and quality standards.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Skilled Workforce", "Quality Materials", "Expert Supervision"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/team (5).jpeg"
                alt="Arctic Breeze Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experts behind our quality service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 2, name: "Praveen", role: "Founder" },
              { id: 1, name: "Team Members", role: "Technical Expert" },
              { id: 3, name: "Team Members", role: "Technical Expert" },
              { id: 4, name: "Team Members", role: "Technical Expert" },
            ].map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedImage(`/team (${member.id}).jpeg`)}
              >
                <img
                  src={`/team (${member.id}).jpeg`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-display text-xl mb-1">{member.name}</p>
                  <p className="text-white/80 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mission & Vision */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/5 backdrop-blur rounded-lg p-8 border border-primary-foreground/10">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-3xl text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To deliver reliable HVAC manpower and comfort solutions with quality workmanship, safety compliance, and customer satisfaction at the core of everything we do.
              </p>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur rounded-lg p-8 border border-primary-foreground/10">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-3xl text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To become a trusted HVAC manpower partner across South India, known for reliability, expertise, and excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl md:text-6xl text-accent-foreground mb-2">
                  {stat.number}
                </div>
                <p className="text-accent-foreground/80 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 text-center card-hover border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-display text-2xl text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to work with a reliable HVAC partner? Let's discuss your project requirements.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
