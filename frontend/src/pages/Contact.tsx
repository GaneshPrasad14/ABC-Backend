import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import bannerImage from "@/assets/banner-contact.jpg";

const services = [
  "Ducting Work",
  "Supply of Ducts & Insulation Material",
  "Chilled Water Piping Work",
  "VRF & Ductable Supply & Erection",
  "Air Balancing & Commissioning",
  "Manpower Supply",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
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
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Get in touch for reliable HVAC solutions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:8754383730"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Phone</h3>
                    <p className="text-muted-foreground">8754383730</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918754590322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">8754590322</p>
                  </div>
                </a>

                <a
                  href="mailto:arcticbreezecs@gmail.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">arcticbreezecs@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/C4GoY8vq3XDkvjYo6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Office Address</h3>
                    <p className="text-muted-foreground">
                      #9, Jr Enclave, Phase 1, Nova Pavillio, Thiruvallur, Chennai – 600077
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium">Follow Us:</span>
                <a
                  href="https://www.instagram.com/arctic_breeze_cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 border border-border shadow-md">
              <h2 className="font-display text-3xl text-card-foreground mb-2">
                Submit Enquiry
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">
                    Site Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Project location"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.889547876543!2d79.89684731482344!3d13.14234299073123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA4JzMyLjQiTiA3OcKwNTMnNTYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arctic Breeze Location"
        />
      </section>
    </div>
  );
}
