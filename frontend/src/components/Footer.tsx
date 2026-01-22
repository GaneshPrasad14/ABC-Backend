import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lo.png" alt="Arctic Breeze Logo" className="h-24 w-auto object-contain mb-4" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional HVAC manpower and project execution with 7+ years of experience
              in industrial and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Manpower", path: "/manpower" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:8754383730"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                8754383730
              </a>
              <a
                href="https://wa.me/918754590322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
                8754590322 (WhatsApp)
              </a>
              <a
                href="mailto:arcticbreezecs@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                arcticbreezecs@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display text-xl mb-4">Office Address</h4>
            <a
              href="https://maps.app.goo.gl/C4GoY8vq3XDkvjYo6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <span>
                #9, Jr Enclave, Phase 1, Nova Pavillio, Thiruvallur, Chennai – 600077
              </span>
            </a>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/arctic_breeze_cs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 px-4">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2026 ARCTIC BREEZE COMFORT SOLUTIONS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
