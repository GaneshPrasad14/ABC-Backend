import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight, Building2, Factory, Hospital, ShoppingBag, Home, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import ductingImage from "@/assets/dc.jpeg";
import pipingImage from "@/assets/cw.jpeg";
import vrfImage from "@/assets/vrf.jpeg";
import balancingImage from "@/assets/air-balancing.jpg";
import supplyImage from "@/assets/supply-materials.jpg";
import Hero from "@/components/Hero";
import { Reveal } from "@/components/Reveal";

const features = [
  "7+ Years Industry Experience",
  "Skilled & Certified Manpower",
  "On-time Project Execution",
  "Safety & Quality Compliance",
  "Industrial & Commercial Expertise",
];

const services = [
  {
    title: "Ducting Work",
    description: "GI / Pre-insulated Duct Installation, Fabrication & Erection",
    image: ductingImage,
  },
  {
    title: "Supply of Ducts & Materials",
    description: "GI Ducts, PUF / XLPE / Nitrile Rubber Insulation",
    image: supplyImage,
  },
  {
    title: "Chilled Water Piping",
    description: "MS / GI / Copper Piping, Valve Installation & Testing",
    image: pipingImage,
  },
  {
    title: "VRF & Ductable Systems",
    description: "Indoor & Outdoor Unit Installation & Commissioning",
    image: vrfImage,
  },
  {
    title: "Air Balancing",
    description: "Airflow Measurement, System Optimization & Handover",
    image: balancingImage,
  },
];

const industries = [
  { name: "Commercial Buildings", icon: Building2 },
  { name: "IT Parks", icon: Cpu },
  { name: "Factories & Warehouses", icon: Factory },
  { name: "Hospitals", icon: Hospital },
  { name: "Shopping Malls", icon: ShoppingBag },
  { name: "Residential Projects", icon: Home },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <Hero />

      {/* Trust Indicators / Stats Bar */}
      <div className="relative z-20 container-custom px-4 lg:-mt-16 mt-8">
        <Reveal width="100%" delay={200}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center hover:shadow-2xl transition-shadow duration-500">
            <div className="text-center md:text-left md:border-r border-gray-100 pr-4 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-display text-brand-blue counting-animation">500+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Projects Completed</p>
            </div>
            <div className="text-center md:text-left md:border-r border-gray-100 pr-4 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-display text-brand-red">100%</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Safety Record</p>
            </div>
            <div className="text-center md:text-left md:border-r border-gray-100 pr-4 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-display text-brand-blue">24/7</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Support Available</p>
            </div>
            <div className="text-center md:text-left hover:scale-105 transition-transform">
              <h3 className="text-4xl font-display text-brand-red">ISO</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Certified Processes</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Why Choose Us - Bento Grid Style */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-red/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Reveal width="100%">
              <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block animate-fade-in">Our Advantage</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Why Leaders Choose <span className="text-gradient hover-shine inline-block">Arctic Comfort</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We define excellence in HVAC manpower solutions through precision, reliability, and unmatched expertise.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Reveal className="md:col-span-1 h-full" delay={100} width="100%">
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-blue hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <div className="bg-brand-blue/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-500 group-hover:rotate-12">
                  <CheckCircle className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-brand-blue transition-colors">Skilled Manpower</h3>
                <p className="text-muted-foreground">Certified technicians with extensive experience in handling complex industrial HVAC systems.</p>
              </div>
            </Reveal>

            {/* Feature 2 & 3 */}
            <div className="md:col-span-1 space-y-8">
              <Reveal width="100%" delay={200}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <h3 className="font-display text-xl mb-2 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-brand-red animate-pulse" />
                    On-Time Execution
                  </h3>
                  <p className="text-sm text-muted-foreground">We value your time. Our project management ensures zero delays and timely handovers.</p>
                </div>
              </Reveal>
              <Reveal width="100%" delay={300}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <h3 className="font-display text-xl mb-2 flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5 text-brand-red" />
                    Quality Assurance
                  </h3>
                  <p className="text-sm text-muted-foreground">Rigorous quality checks at every stage of fabrication, installation, and commissioning.</p>
                </div>
              </Reveal>
            </div>

            {/* Feature 4 */}
            <Reveal className="md:col-span-1 h-full" delay={400} width="100%">
              <div className="h-full bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 rounded-2xl shadow-lg text-white group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-fullblur-3xl -mr-16 -mt-16 animate-pulse"></div>
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 transition-transform">
                  <Factory className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl mb-3">Turnkey Solutions</h3>
                <p className="text-white/80 mb-6">From design to handover, we handle everything efficiently.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" /> Design & Planning
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" /> Material Supply
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" /> Execution & Testing
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <Reveal className="max-w-2xl" width="100%">
              <div>
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                  Comprehensive <br /> HVAC Services
                </h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/services">
                <Button variant="outline" size="lg" className="group border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                  View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={index} delay={index * 150} width="100%">
                <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-1 bg-brand-red mb-4 w-0 group-hover:w-12 transition-all duration-500" />
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-brand-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-x-[-10px] group-hover:translate-x-0">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Marquee Grid */}
      <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 animate-pulse-glow" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                Industries We Power
              </h2>
              <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-brand-red/30">
                  <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-brand-red group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium text-center text-sm tracking-wide group-hover:text-brand-red transition-colors">
                    {industry.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img src={heroImage} alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue/90 to-brand-blue-dark/80" />
        </div>

        <div className="relative container-custom px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <Reveal>
                <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
                  Ready to Upgrade Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 animate-pulse-glow">
                    HVAC Infrastructure?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 font-light">
                  Get a free consultation and quote for your upcoming project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/contact">
                    <Button variant="hero" size="xl" className="rounded-full px-12 h-16 text-lg shadow-2xl shadow-brand-red/20 hover:scale-105 transition-transform duration-300">
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="tel:8754383730">
                    <Button variant="outline" size="xl" className="rounded-full px-10 h-16 text-lg border-white/20 text-white hover:bg-white hover:text-brand-blue hover:scale-105 transition-transform duration-300">
                      <Phone className="w-5 h-5 mr-3" />
                      +91 87543 83730
                    </Button>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Floating Glass Card */}
            <div className="hidden lg:block">
              <Reveal delay={400} className="animate-float-slow">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm rotate-3 hover:rotate-0 transition-transform duration-700 hover:shadow-2xl hover:bg-white/15">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-500 rounded-full p-2 animate-bounce">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Quick Response</h4>
                      <p className="text-gray-300 text-sm">We respond to all inquiries within 2 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 rounded-full p-2 animate-bounce delay-700">
                      <div className="w-6 h-6 flex items-center justify-center text-white font-bold text-xs">24/7</div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Emergency Support</h4>
                      <p className="text-gray-300 text-sm">Round the clock maintenance teams.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icons for the layout
function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
