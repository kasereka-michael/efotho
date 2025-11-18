import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ACCUEIL", path: "/" },
    { name: "À PROPOS", path: "/apropos" },
    { name: "ÉDUCATION", path: "/education" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">efothe</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary" : "text-gray-700"
                }`}
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="bg-primary text-white"
              data-testid="button-donate"
            >
              DONNER
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block text-sm font-medium py-2 ${
                  location === link.path ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-primary text-white"
              data-testid="button-donate-mobile"
            >
              DONNER
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
