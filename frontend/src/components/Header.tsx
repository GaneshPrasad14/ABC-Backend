import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Manpower", path: "/manpower" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/lo.png" alt="Arctic Breeze Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-accent ${location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/90"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8754383730"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">8754383730</span>
            </a>
            <a
              href="https://wa.me/918754590322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="sm">
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container-custom py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-sm uppercase tracking-wider py-3 px-4 rounded transition-colors ${location.pathname === link.path
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-primary-foreground/10">
              <a
                href="tel:8754383730"
                className="flex items-center gap-2 text-primary-foreground py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">8754383730</span>
              </a>
              <a
                href="https://wa.me/918754590322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" className="w-full">
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
