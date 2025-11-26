import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";

// Hero assets (can be extended later if more slides are added)
const heroImages = ["/heroImage.jpg"];

function Dots({ count, index }: { count: number; index: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
        />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[12px] tracking-[0.2em] text-black/70 uppercase mb-4">
      {children}
    </div>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  const current = useMemo(() => heroImages[idx], [idx]);
  const next = () => setIdx((i) => (i + 1) % heroImages.length);

  return (
    <section className="relative">
      <img
        src={current}
        alt="Hero"
        className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover"
      />

      {/* bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-5">
            <p className="text-white/90 text-[13px] sm:text-sm md:text-base leading-relaxed max-w-3xl">
              Chaque image est une trace, chaque regard un témoignage. Chez Efothô, nous photographions pour que <span className="font-semibold">la mémoire des peuples ne s'efface jamais.</span>
            </p>
          </div>
        </div>
      </div>

      {/* pagination dots */}
      <div className="absolute left-0 right-0 flex justify-center bottom-[90px] sm:bottom-[110px]">
        <Dots count={heroImages.length || 3} index={idx} />
      </div>

      {/* allow click to advance in case of multiple hero images */}
      <button aria-label="next" onClick={next} className="absolute inset-0" />
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <SectionLabel>À propos</SectionLabel>
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-2xl md:text-[32px] font-extrabold leading-tight text-black">
            Efothô accompagne les jeunes passionnés de l'image en Afrique à travers des parcours gratuits de formation, du mentorat et des rencontres professionnelles.
          </h2>
          <div className="mt-6">
            <Link href="/about">
              <Button className="bg-[#5E7F4B] hover:bg-[#4a673c] text-white rounded-full px-6">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/intro.jpg"
            alt="À propos"
            className="w-full h-[300px] md:h-[360px] object-cover rounded-2xl md:rounded-3xl shadow-sm"
          />
          {/* decorative dots mimic */}
          <div className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 gap-2">
            <span className="h-2 w-2 rounded-full bg-black/20" />
            <span className="h-2 w-2 rounded-full bg-black/60" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <SectionLabel>PROJETS EN COURS</SectionLabel>

      {/* Desktop layout matching the reference */}
      <div className="hidden lg:grid grid-cols-[1fr_180px_180px_42px]">
        {/* Left feature panel */}
        <div className="bg-[#E9EDE5] rounded-tl-2xl rounded-bl-2xl p-5 border border-black/10 border-r-0">
          <div className="rounded-xl overflow-hidden">
            <img src="/1.JPG" alt="Formation" className="w-full h-56 object-cover" />
          </div>
          <div className="mt-4">
            <div className="text-[12px] tracking-[0.2em] font-semibold">FORMATION</div>
            <p className="mt-3 text-[13px] leading-relaxed text-black/80">
              La Formation d'Efothô est un parcours complet et gratuit qui allie apprentissages techniques, accompagnement personnalisé et insertion professionnelle. À travers des ateliers pratiques, des modules de narration visuelle et des sessions de mentorat individuel, nous aidons les jeunes créateurs à structurer un projet solide et éthique. Les participant·e·s bénéficient de revues de portfolio, de coaching de carrière et d'occasions concrètes de diffusion — expositions, publications et résidences — pour transformer une pratique passionnelle en trajectoire durable.
            </p>
          </div>
        </div>

        {/* Middle slim card: EFOTHÔ TALK */}
        <div className="relative border border-black/10 border-l bg-white">
          <div className="h-28 w-full overflow-hidden">
            <img src="/2.JPG" alt="Efothô Talk" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12px] tracking-[0.2em] font-semibold text-black/80 [writing-mode:vertical-rl] rotate-180">
              EFOTHÔ TALK
            </div>
          </div>
        </div>

        {/* Right slim card: COMMUNITY */}
        <div className="relative border border-black/10 border-l bg-white">
          <div className="h-28 w-full overflow-hidden">
            <img src="/3.JPG" alt="Community" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12px] tracking-[0.2em] font-semibold text-black/80 [writing-mode:vertical-rl] rotate-180">
              COMMUNITY
            </div>
          </div>
        </div>

        {/* Arrow column */}
        <div className="border border-black/10 border-l rounded-tr-2xl rounded-br-2xl bg-[#E9EDE5] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E7F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Mobile / tablet stacked layout */}
      <div className="lg:hidden space-y-4">
        <div className="bg-[#E9EDE5] rounded-2xl p-4 border border-black/10">
          <div className="rounded-xl overflow-hidden">
            <img src="/1.JPG" alt="Formation" className="w-full h-48 object-cover" />
          </div>
          <div className="mt-3">
            <div className="text-[12px] tracking-[0.2em] font-semibold">FORMATION</div>
            <p className="mt-2 text-[13px] leading-relaxed text-black/80">
              La Formation d'Efothô est un parcours complet et gratuit qui allie apprentissages techniques, accompagnement personnalisé et insertion professionnelle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative border border-black/10 rounded-xl overflow-hidden">
            <img src="/2.JPG" className="h-24 w-full object-cover" alt="Efothô Talk" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[12px] tracking-[0.2em] font-semibold text-black/80">EFOTHÔ TALK</div>
            </div>
          </div>
          <div className="relative border border-black/10 rounded-xl overflow-hidden">
            <img src="/3.JPG" className="h-24 w-full object-cover" alt="Community" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[12px] tracking-[0.2em] font-semibold text-black/80">COMMUNITY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialGrid() {
  const imgs = ["/11.png", "/22.png", "/33.png", "/44.png", "/55.png", "/22.png"];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionLabel>Suivez-nous</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-black/5">
              <img src={src} alt={`social-${i}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F6F4]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionLabel>Calendrier des activités</SectionLabel>
          <div className="space-y-6">
            {[
              { n: "01", t: "Survivre – Exposition photo", s: "Académie des Beaux-Arts de Kinshasa – Congo DR" },
              { n: "02", t: "Soirée de la Photographie", s: "Avec Ariette Bashizi – Institut Français de Goma – 17 Décembre 2024" },
              { n: "03", t: "Musika na Kipaji", s: "Institut Français de Goma – 17 Novembre 2025" },
              { n: "04", t: "Mentorat 2025", s: "Institut Français de Goma – Programme en cours" },
            ].map((e, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
                <div className="text-xl font-semibold text-black/60 leading-none pt-1">{e.n}</div>
                <div>
                  <div className={`text-sm md:text-base ${i === 0 ? "font-semibold text-black" : "text-black/60"}`}>{e.t}</div>
                  <div className={`text-xs md:text-sm ${i === 0 ? "text-black" : "text-black/50"}`}>{e.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden bg-white p-6 border border-black/10">
            <div className="text-xl font-extrabold">Survivre – Exposition photo</div>
            <div className="text-sm text-black/70 mt-1">Académie des Beaux-Arts de Kinshasa – Congo DR</div>
            <div className="text-sm text-black/70 mt-1">29 Novembre au 06 Décembre 2025</div>
            <div className="mt-4 rounded-xl overflow-hidden">
              <img src="/5.JPG" alt="featured" className="w-full h-56 md:h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SocialGrid />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
