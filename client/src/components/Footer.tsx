import { Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">efothe</h3>
            <p className="text-gray-400 text-sm">
              Plateforme d'éducation photographique et de sensibilisation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">LIENS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/apropos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-400 hover:text-white transition-colors">
                  Éducation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  Dr. Bangui Kabwe, Quartier Musohi<br />
                  Commune de Kadutu, Ville de Bukavu<br />
                  Province du Sud-Kivu, RDC
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@efothe.org" className="hover:text-white transition-colors">
                  info@efothe.org
                </a>
              </div>
              <p>+243898582326</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Efothe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
