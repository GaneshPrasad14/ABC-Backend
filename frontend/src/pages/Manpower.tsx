import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Wrench, HardHat, Shield, Award, CheckCircle, UserCheck, Clock } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import bannerImage from "@/assets/banner-manpower.jpg";

const workforce = [
  { title: "HVAC Technicians", icon: Wrench },
  { title: "Duct Fabricators", icon: HardHat },
  { title: "Pipe Fitters", icon: Wrench },
  { title: "Insulation Technicians", icon: HardHat },
  { title: "Helpers", icon: Users },
  { title: "Site Supervisors", icon: Award },
];

const qualifications = [
  "Site safety training and certification",
  "Professional tools handling expertise",
  "Quality execution standards",
  "Industry best practices knowledge",
  "Emergency response preparedness",
  "Continuous skills development",
];

const benefits = [
  {
    icon: Shield,
    title: "Safety Trained",
    description: "All personnel undergo comprehensive safety training before deployment",
  },
  {
    icon: UserCheck,
    title: "Certified Skills",
    description: "Skilled workers with relevant certifications and experience",
  },
  {
    icon: Clock,
    title: "Team Coordination",
    description: "Experienced supervisors ensure smooth project execution",
  },
];

export default function Manpower() {
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
            Manpower Strength
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Skilled workforce trained for quality and safety
          </p>
        </div>
      </section>

      {/* Workforce Types */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Our Skilled Workforce
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trained professionals ready for your HVAC project needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workforce.map((worker, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <worker.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm">
                  {worker.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo & Qualifications */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={teamPhoto}
                alt="Our HVAC Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Training & Qualifications
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                All our manpower is trained for <strong className="text-foreground">site safety, tools handling, and quality execution</strong>. We ensure every team member meets our high standards before deployment.
              </p>
              <ul className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Why Our Manpower?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Reliability and expertise you can count on
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur rounded-lg p-8 border border-primary-foreground/10"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl text-primary-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Need Manpower for Your Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get skilled HVAC technicians and supervisors for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8754383730">
              <Button variant="accent" size="xl">
                Call: 8754383730
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="xl">
                Submit Requirement
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
