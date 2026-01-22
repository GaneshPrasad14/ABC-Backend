import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import heroVideo from "@/assets/hero-video.mp4";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ducting Work",
      subtitle: "Industrial Fabrication",
      description: "Professional GI and pre-insulated duct installation for industrial and commercial projects."
    },
    {
      title: "Supply of Ducts & Materals",
      subtitle: "High Quality Materials",
      description: "High-quality ducts and insulation materials for all HVAC requirements."
    },
    {
      title: "Chilled Water Piping",
      subtitle: "Expert Installation",
      description: "Expert piping installation and testing for chilled water systems."
    },
    {
      title: "VRF Systems",
      subtitle: "Supply & Erection",
      description: "Complete VRF and ductable AC installation and commissioning services."
    },
    {
      title: "Air Balancing",
      subtitle: "System Optimization",
      description: "Precise air balancing and system optimization for optimal performance."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center lg:pt-0 pt-32 pb-20 overflow-hidden group">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          {/* Video file is currently missing/placeholder, but code is ready. Poster will show. */}
          <source
            src={heroVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative container-custom px-4 z-10 w-full h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">

          {/* Dynamic Content */}
          <div key={currentSlide} className="space-y-6">
            <h2 className="text-brand-red font-display text-2xl md:text-3xl uppercase tracking-wider animate-slide-up">
              {slides[currentSlide].subtitle}
            </h2>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] md:leading-[1] drop-shadow-2xl animate-slide-up delay-200">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 animate-slide-up delay-300 font-light leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 animate-slide-up delay-500 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto h-16 px-8 text-lg rounded-full group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto h-16 px-8 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20 hidden md:flex">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-brand-red" : "w-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
