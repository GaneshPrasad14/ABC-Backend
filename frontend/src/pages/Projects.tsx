import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, Star, MapPin, Calendar, ArrowRight, X } from "lucide-react";
import bannerImage from "@/assets/banner-projects.jpg";
import axios from "axios";

interface Project {
  _id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  services: string[];
}

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Facility Manager",
    company: "Prestige Tech Park",
    quote: "Arctic Breeze delivered exceptional quality on our IT park project. Their skilled manpower and attention to detail exceeded our expectations. Project completed ahead of schedule!",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Hospital Administrator",
    company: "Apollo Hospital",
    quote: "The clean room ventilation installation was flawless. Their team understood the critical requirements of hospital HVAC systems. Highly professional and safety-conscious.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Salim",
    role: "Operations Director",
    company: "Phoenix Mall",
    quote: "We've worked with many HVAC contractors, but Arctic Breeze stands out for their reliability and expertise. Their manpower is well-trained and the execution was perfect.",
    rating: 5,
  },
  {
    id: 4,
    name: "Venkat Raman",
    role: "Plant Manager",
    company: "Logix Industries",
    quote: "Our warehouse ventilation project was completed on time despite challenging conditions. Their supervisors ensured quality at every step. Excellent service!",
    rating: 5,
  },
];

const categories = ["All", "IT Park", "Hospital", "Shopping Mall", "Factory & Warehouse", "Commercial Building", "Residential"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getImageUrl = (image: string) => {
    if (image.startsWith("http")) {
      return image;
    }
    const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace("/api", "") || "";
    return `${baseUrl}${image}`;
  };

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
            Our Projects
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Showcasing our completed HVAC installations across industries
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse through our successfully completed HVAC projects
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="group bg-card rounded-lg overflow-hidden border border-border card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getImageUrl(selectedProject.image)}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-3xl text-card-foreground mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedProject.year}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-2">Services Provided:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/contact" onClick={() => setSelectedProject(null)}>
                <Button variant="accent" className="w-full">
                  Get Similar Project Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              What our clients say about our work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-primary-foreground/5 backdrop-blur rounded-lg p-6 border border-primary-foreground/10"
              >
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-primary-foreground/90 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary-foreground/70">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "7+", label: "Years Experience" },
              { number: "100+", label: "Happy Clients" },
              { number: "50+", label: "Skilled Workers" },
            ].map((stat, index) => (
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Start Your Project Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to work with a trusted HVAC partner? Let's discuss your requirements.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl">
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
