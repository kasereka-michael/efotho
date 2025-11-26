import { Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background band with overlay */}
      <div className="absolute inset-0">
        <img src="/heroImage.jpg" alt="footer bg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: Logo + Links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="efothô" className="h-10 w-auto" />
            </div>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="/education" className="hover:opacity-90">Education</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-90">Gallery</Link>
              </li>
              <li>
                <Link href="/apropos" className="hover:opacity-90">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Middle: Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Nous Contacter</h3>
            <div className="space-y-3 text-[14px] leading-6">
              <div>infos@efotho.org</div>
              <div>
                30, Avenue Kabare, Quartier Murara<br />
                Commune de Karisimbi, Ville de Goma<br />
                République démocratique du Congo
              </div>
            </div>
          </div>

          {/* Right: Social */}
          <div>
            <h3 className="text-base font-semibold mb-4">Nous Suivre</h3>
            <div className="flex items-center gap-6">
              <a aria-label="LinkedIn" href="#" className="h-12 w-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="X" href="#" className="h-12 w-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 3H22l-7.1 8.1L22.6 21H16l-4.7-6-5.4 6H2l7.6-8.5L1.7 3H8l4.3 5.7L18.9 3z"></path></svg>
              </a>
              <a aria-label="Instagram" href="#" className="h-12 w-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/25" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px]">
          <div className="opacity-90">Conditions générales et protection des données</div>
          <div className="opacity-90">© {new Date().getFullYear()} efothô. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
}
