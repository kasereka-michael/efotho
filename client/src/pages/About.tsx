import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import hero from "@/../public/about-image.png";
import { useMemo, useState } from "react";

export default function About() {
  // Interactive Mission / Vision / Valeur content
  const tabs = ["Mission", "Vision", "Valeur"] as const;
  type Tab = typeof tabs[number];
  const [active, setActive] = useState<Tab>("Mission");
  const text = useMemo(() => {
    switch (active) {
      case "Mission":
        return "Chez Efothô, nous défendons une Éthique du regard, l'Accessibilité par la gratuité des formations et l'Autonomie des créateur·rice·s via compétences techniques et entrepreneuriales. Nous cultivons la Solidarité par le mentorat et les réseaux, la Rigueur créative comme exigence artistique, et la Mémoire partagée à travers la conservation d'archives qui transmettent les histoires collectives.";
      case "Vision":
        return "Notre vision est celle d'un écosystème de l'image solidaire et durable en Afrique, où la formation, le mentorat et les archives visuelles permettent aux communautés de se représenter et d'éclairer les débats publics. Nous œuvrons pour une presse visuelle indépendante, exigeante et accessible, qui renforce la responsabilité citoyenne et impulse des transformations sociales concrètes.";
      case "Valeur":
        return "Nos valeurs : Éthique du regard, Accessibilité, Autonomie, Solidarité, Rigueur créative et Mémoire partagée. Elles guident nos choix pédagogiques, la structure de nos parcours, la circulation des archives et les partenariats que nous construisons avec les communautés locales et les institutions culturelles.";
    }
  }, [active]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[420px] md:h-[560px] w-full">
        <img src={hero} alt="About Hero" className="w-full h-full object-cover" />
      </div>

      {/* Intro paragraph */}
      <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <p className="text-center text-[15px] leading-7 text-black/80">
          En centrant nos actions sur la transformation des politiques culturelles et sur la formation des jeunes, Efothô porte des projets d'envergure qui racontent des expériences vécues et documentent des enjeux sociaux locaux. Par l'éducation, le mentorat et la production d'archives visuelles, nous cherchons à éclairer les débats publics, à nourrir les politiques culturelles et à renforcer la capacité des communautés à se représenter elles-mêmes.
        </p>
      </section>

      {/* Mission / Vision / Valeur timeline */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative select-none">
            <div className="h-1 bg-black rounded-full" />
            <div className="flex justify-between -mt-3">
              {tabs.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className="relative flex flex-col items-center w-1/3 focus:outline-none"
                  aria-pressed={active === label}
                >
                  <div
                    className={`h-6 w-6 rounded-full bg-white border-4 transition-colors ${
                      active === label ? "border-[#5E7F4B]" : "border-black"
                    }`}
                  />
                  <div
                    className={`mt-3 text-sm transition-colors ${
                      active === label ? "text-[#5E7F4B]" : "text-black/70"
                    }`}
                  >
                    {label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Black band statement (dynamic) */}
      <section className="bg-black text-white py-10 md:py-12 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-[14px] leading-7">{text}</div>
      </section>

      {/* Why sections */}
      <section className="bg-[#E3ECD5] py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-10">
            <div>
              <h2 className="text-[18px] md:text-[20px] font-extrabold tracking-wide mb-3">POURQUOI NOUS AVONS CRÉÉ EFOTHÔ</h2>
              <div className="bg-white p-0"></div>
              <p className="text-[14px] leading-7 text-black/80">
                Efothô naît face à une réalité simple et urgente : sur le continent, l'accès aux formations professionnelles en image reste souvent restreint — géographiquement, financièrement et institutionnellement — et de nombreux talents restent sans les outils pour structurer une pratique durable. Nous avons créé des parcours gratuits et accessibles pour combler ce manque, transmettre un regard critique et éthique, développer des pratiques, et permettre aux jeunes créateur·rice·s de gagner en autonomie, en regard propre et en perspectives professionnelles.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                Parallèlement, nous sommes convaincus que les images sont des archives vivantes. En créant des outils de collecte, de conservation et de circulation des photographies produites localement, Efothô protège des mémoires trop souvent fragiles, documente des histoires absentes des récits officiels et donne aux communautés des traceurs visuels pour leur propre histoire.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                Donner la parole aux communautés est au cœur de notre projet : il s'agit de produire des représentations qui partent des vécus locaux, respectent les contextes et restituent la dignité des personnes filmées et photographiées. Enfin, nous croyons fermement que la liberté de la presse et la pluralité des voix sont des piliers de la démocratie et du changement social. En formant des praticien·ne·s de l'image indépendants et éthiques, Efothô soutient une presse visuelle capable d'éclairer les débats publics, de renforcer la responsabilité citoyenne et d'impulser des transformations sociales concrètes.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[20px] font-extrabold tracking-wide mb-3">POURQUOI NOUS SOUTENIR</h2>
              <p className="text-[14px] leading-7 text-black/80">
                Soutenir Efothô, c'est investir dans l'accès équitable à la formation en image sur le continent : vos appuis permettent de maintenir la gratuité des parcours, d'étendre les ateliers hors des centres urbains et d'offrir à des jeunes talents les compétences techniques et critiques nécessaires pour bâtir des carrières durables.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                C'est aussi contribuer à la préservation de la mémoire collective. Vos ressources financent la collecte, la conservation et la diffusion d'archives visuelles locales — des traces indispensables pour que les communautés racontent elles-mêmes leur histoire et que les chercheur·euse·s, journalistes et institutions disposent de matériaux authentiques.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                Soutenir Efothô, c'est donner de la voix aux communautés. Par nos programmes, les récits locaux gagnent en visibilité, en dignité et en influence ; cela renforce la pluralité des voix, améliore la représentativité culturelle et protège contre les récits imposés de l'extérieur.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                Enfin, votre soutien renforce la liberté de la presse et la vitalité démocratique : en formant des photographes indépendants et éthiques, nous contribuons à une presse visuelle capable d'éclairer les débats publics, de demander des comptes et de promouvoir des changements sociaux concrets.
              </p>
              <p className="text-[14px] leading-7 text-black/80 mt-4">
                Concrètement, votre contribution permet de financer des cours, des bourses, des ateliers de formation, d'équiper des ateliers mobiles, de numériser et préserver des archives, de créer des bourses d'édition et des plateformes de diffusion pour les projets des alumni.
              </p>
              <div className="mt-6">
                <Button className="bg-[#5E7F4B] hover:bg-[#4a673c] text-white rounded-full px-6">Donner</Button>
              </div>
              <p className="text-[14px] text-black/80 mt-6">
                Rejoignez-nous en tant que donateur·rice, mécène ou bénévole — ou contactez-nous pour un partenariat institutionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual report bar */}
      <section className="bg-white py-6 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-sm font-semibold">RAPPORT ANNUEL</div>
          <div className="mt-4 text-[14px]">• Rapport Annuel 2025 - En cours .pdf</div>
        </div>
      </section>

      {/* Contact band with photo background (under footer area) */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-6">
                <input className="col-span-3 md:col-span-1 bg-transparent border-b border-white/60 outline-none placeholder:text-white/70 py-2" placeholder="Votre mail" />
                <input className="col-span-3 md:col-span-1 bg-transparent border-b border-white/60 outline-none placeholder:text-white/70 py-2" placeholder="Nom" />
                <input className="col-span-3 md:col-span-1 bg-transparent border-b border-white/60 outline-none placeholder:text-white/70 py-2" placeholder="Pays" />
              </div>
              <div className="rounded-xl border border-white/60 p-4 h-36">
                <textarea className="w-full h-full bg-transparent outline-none placeholder:text-white/70" placeholder="Message" />
              </div>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 w-min">Envoyer</Button>
            </form>
            <div className="space-y-2 text-sm">
              <div>info@efotho.org</div>
              <div>+243898642218</div>
              <div>www.efotho.org</div>
              <div className="mt-4">30, Avenue Kabare, Quartier Murara<br/>Commune de Karisimbi, Ville de Goma<br/>République démocratique du Congo</div>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/70">Conditions générales et protection des données</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
