import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "/logo.png";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ACCUEIL", path: "/" },
    { name: "À PROPOS", path: "/apropos" },
    { name: "EDUCATION", path: "/education" },
    { name: "EFOTHO GALLERY", path: "/gallery" },
    { name: "EFOTHO PHOTO-FILM", path: "/photo-film" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 mt-4 sm:mt-5">
        <div className="backdrop-blur bg-white/30 rounded-full border border-black/10 shadow-sm pointer-events-auto">
          <div className="flex items-center justify-between h-18 px-4">
            <Link href="/" className="flex items-center gap-3" data-testid="link-home">
              <div className="h-12 w-25 rounded-md flex items-center justify-center overflow-hidden">
                <img src={logo} alt="efothô" className="h-11 w-auto object-contain block" />
              </div>
              {/* <span className="text-xl font-semibold text-gray-900">efothô</span> */}
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`text-[13px] font-semibold tracking-wide transition-colors hover:text-[#5E7F4B] ${
                    location === link.path ? "text-[#5E7F4B]" : "text-gray-800"
                  }`}
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="sm" 
                className="bg-[#C9D8BE] text-black hover:bg-[#b9cba9] rounded-full px-5"
                data-testid="button-donate"
              >
                Donate
              </Button>
            </div>

            <button
              className="md:hidden p-2 pointer-events-auto z-[70]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow border rounded-xl mx-4 mt-2 p-4 relative z-[60] pointer-events-auto">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block text-sm font-medium py-2 ${
                  location === link.path ? "text-[#5E7F4B]" : "text-gray-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-[#C9D8BE] text-black hover:bg-[#b9cba9] rounded-full"
              data-testid="button-donate-mobile"
            >
              Donate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
