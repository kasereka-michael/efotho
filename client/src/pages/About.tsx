import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import aboutHero from "@assets/ABOUT_1763466326941.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="relative h-[400px] md:h-[500px] w-full">
        <img
          src={aboutHero}
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">À PROPOS</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="text-gray-700 leading-relaxed">
            En emporte une section de la transformation des politiques culturelle et sur la
            formation des jeunes. Efothe porte des projets innovateurs qui reviennent des nouveaux
            talents visuels et journalistes à déclencher leur apprentissage professionnel, à
            devenir des agents de changement pour la communauté et à raconter des histoires de
            manière visuelle et narrative.
          </p>
        </div>

        <ul className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 relative list-none before:content-[''] before:absolute before:top-8 before:left-0 before:right-0 before:h-0.5 before:bg-gray-300 before:-z-10 md:before:block before:hidden">
          <li className="text-center flex-1">
            <div className="w-16 h-16 rounded-full border-4 border-primary/60 bg-white mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/60"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission</h3>
            <p className="text-sm text-gray-600">Former et accompagner les jeunes talents visuels</p>
          </li>

          <li className="text-center flex-1">
            <div className="w-16 h-16 rounded-full border-4 border-primary/60 bg-white mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/60"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision</h3>
            <p className="text-sm text-gray-600">Développer l'écosystème artistique local</p>
          </li>

          <li className="text-center flex-1">
            <div className="w-16 h-16 rounded-full border-4 border-primary/60 bg-white mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/60"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Valeur</h3>
            <p className="text-sm text-gray-600">Innovation, excellence et impact communautaire</p>
          </li>
        </ul>
      </div>

      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-justify">
            Efothe forme et accompagne durablement de jeunes congolais de l'image en Efothe plus de
            la ville durablement les jeunes personnes équipés de compétence technique, d'une
            connaissance marché de Goma a développé des outils importants qu'à construire et
            connecter des talents visuels et journaliste auprès cette école de la formation culture
            qui propose critiques et soutient, sécurité culturale il fondement en chef de la
            recherche et développement d'investissement.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              POURQUOI NOUS AVONS CRÉÉ EFOTHE
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Efothe est né face à une nette crise et urgence: le vu contraire façons les
              formations professionnelles en image soit a accompagné d'innovation, les cultures par
              la voix de jeunes talents visuels de créer un travail qui, à longévité et fructueux
              et responsable dans d'un pays fortement marqués par les conflits. Un portés
              d'écriture, un d'espoir et un processus qui jouent indubitables en croisance de la
              région qui compte de lieux palais auteurs et vidéos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              POURQUOI NOUS SOUTENNS
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Parceque Efothe, c'est donné dans l'école de-selle à la formation et image et le
              culturesse, qui donnait partenaire de connexion de photographes et vidéographe. Sur
              développer leur partenaire, réseau collaborators et compétence technique et critique
              nécessaire pour faire des centres durables.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mt-4">
              Soutenir Efothe, c'est investir dans une jeunesse proactive et la connexion, la
              conservation et la transformation de l'écosystème artistique de la région. Ensemble,
              donnez équipés un soutien financier et technique et réseau qui encourage jeunes
              entrepreneurs à réaliser leur en développer une société équipe, lancer ce projet
              entrepreneurs et artistes collaborateurs dans en développer culturels artistique
              d'action et talents genre, de déveloper une compte et et concrète d'actions et talents
              visuels et journalistes capable de compter un de compter et de compter.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mt-12 text-center">
          <p className="text-gray-700 mb-6 italic">
            Rejoignez-nous en tant que partenaire, mécène, ou bénévole pour faire<br />
            plus de différence.
          </p>
        </div>

        <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">RAPPORT ANNUEL</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-sm text-gray-300">
                Rapport Annuel 2020 - En cours .pdf
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-white text-black border-white"
              data-testid="button-download-report"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
