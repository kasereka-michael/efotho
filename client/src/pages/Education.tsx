import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const heroImage = "/heroImage.jpg";

type TabKey = "cours" | "intervenant" | "alumni";

function TabsHeader({ active, onChange }: { active: TabKey; onChange: (v: TabKey) => void }) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "cours", label: "COURS" },
    { key: "intervenant", label: "INTERVENANT" },
    { key: "alumni", label: "ALUMNI" },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => onChange(t.key)} className="group">
            <div className={`text-[13px] font-semibold tracking-widest ${active === t.key ? "text-[#5E7F4B]" : "text-black"}`}>{t.label}</div>
            <div
              className={`mt-2 h-[3px] rounded-full w-1/3 mx-auto ${
                active === t.key ? "bg-[#5E7F4B]" : "bg-black"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function IntroSplit() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative order-2 md:order-1">
          <div className="bg-[#9FBB86] text-white rounded-md px-6 py-5 shadow-md inline-block relative z-10">
            <p className="text-[14px] leading-6">
              Efothô propose des parcours éducatifs, du mentorat et des ateliers — pour beaucoup gratuits — couvrant un large spectre de pratiques médiatiques : photographie, éthique, réalisation cinématographique, recherche, écriture et entrepreneuriat des médias.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl overflow-hidden">
            <img src="/1.JPG" alt="intro" className="w-full h-[320px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

type CourseCardProps = {
  title: string;
  mode: string;
  status: "EN COURS" | "TERMINÉ";
  place: string;
  date: string;
  img: string;
};

function CourseCard({ title, mode, status, place, date, img }: CourseCardProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="rounded-2xl border-2 border-black px-6 py-6 md:pr-40 relative overflow-visible">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#5E7F4B]">{title}</h3>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <span className="text-[11px] font-semibold tracking-wider bg-black text-white px-3 py-1 rounded">
            {mode}
          </span>
          <span className="text-[11px] font-semibold tracking-wider flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${status === "EN COURS" ? "bg-red-600" : "bg-black"}`} />
            {status.toLowerCase()}
          </span>
        </div>
        <div className="mt-4 text-sm text-black/80">
          <div>{place}</div>
          <div>{date}</div>
        </div>
        <div className="mt-4 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:translate-x-6">
          <img src={img} alt="course" className="w-full h-40 object-cover rounded-xl shadow-sm md:w-[200px] md:h-[140px]" />
        </div>
      </div>
    </div>
  );
}

function IntervenantSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Chip header */}
      <div className="inline-flex items-start bg-[#D6E3C6] px-5 py-3 rounded-lg mb-6">
        <div>
          <div className="font-bold text-[18px]">Moses Sawsaswa</div>
          <div className="text-sm text-black/70 -mt-1">Photojournaliste</div>
        </div>
      </div>

      <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
        <div>
          <img src="/3.JPG" alt="portrait" className="w-full h-[380px] object-cover rounded-2xl" />
        </div>
        <div>
          <p className="text-[14px] leading-7 text-black/80">
            Moses Sawsaswa est né à Goma, en septembre 1997. Membre de APJD /WORLD PRESS PHOTO, il débute la photographie en 2015 juste pour lui. Très vite, il s'est rendu compte que cet outil permettrait de dénoncer certaines choses. Alors il a voulu articuler sa passion autour de la photo engagée, sociale. Les photos d'art ou les shootings ça ne le passionne pas tellement, même s'il lui arrive d'en faire...pour manger.
          </p>
          <p className="text-[14px] leading-7 text-black/80 mt-4">
            Il a grandi dans un environnement de guerre en ne photographiant pas que la guerre, mais il s'efforce de capturer le quotidien de la population dans sa région. Car, malgré les conflits qui règnent dans sa communauté, il y a des personnes qui travaillent, qui étudient et qui entreprennent. Ce qui l'intéresse et le fascine dans la photographie, c'est l'humain et surtout les femmes et les enfants, qui sont omniprésents dans ses clichés.
          </p>

          <div className="mt-6 flex gap-3">
            <div className="h-5 w-5 bg-black/15" />
            <div className="h-5 w-5 bg-black/15" />
            <div className="h-5 w-5 bg-black/15" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AlumniSection() {
  const imgs = ["/7.JPG", "/2.JPG", "/3.JPG", "/1.JPG", "/5.JPG", "/6.JPG", "/2.JPG", "/1.JPG", "/7.JPG"];
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Chip header */}
      <div className="inline-flex items-start bg-[#D6E3C6] px-5 py-3 rounded-lg mb-6">
        <div>
          <div className="font-bold text-[18px]">Aubin Mukoni</div>
          <div className="text-sm text-black/70 -mt-1">Photographe</div>
        </div>
      </div>

      <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
        <div>
          <img src="/2.JPG" alt="portrait" className="w-full h-[380px] object-cover rounded-2xl" />
        </div>
        <div>
          <p className="text-[14px] leading-7 text-black/80">
            Aubin Mukoni, un jeune photographe et vidéographe congolais né en 2002 et basé à Goma, à l’est de la République démocratique du Congo. Aubin utilise la photographie comme un moyen de communication et de sensibilisation pour promouvoir la paix et la réconciliation. Inspiré par son grand-père photographe amateur, il est tombé amoureux de la photographie dès son jeune âge. En collaborant avec des organisations internationales et des agences de presse renommées, Aubin a couvert des événements marquants tels que la guerre en RDC, les commémorations du génocide rwandais et la crise des déplacés de guerre. Son approche axée sur l’expression émotionnelle et sentimentale lui permet de raconter les histoires des personnes de sa région et de sensibiliser le public aux problèmes locaux. En rêvant d’utiliser l’art comme catalyseur pour le changement et la résolution des conflits, Aubin aspire à être un acteur de changement pour sa communauté en mettant en lumière la réalité de sa région à travers son art.
          </p>

          <div className="mt-6 flex gap-3">
            <div className="h-5 w-5 bg-black/15" />
            <div className="h-5 w-5 bg-black/15" />
            <div className="h-5 w-5 bg-black/15" />
          </div>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {imgs.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden">
            <img src={src} alt={`alumni-${i}`} className="w-full h-[220px] md:h-[240px] object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Education() {
  const [active, setActive] = useState<TabKey>("cours");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <div className="relative h-[420px] md:h-[560px] w-full">
        <img src={heroImage} alt="Education Hero" className="w-full h-full object-cover" />
      </div>

      {/* Tabs */}
      <TabsHeader active={active} onChange={setActive} />

      {active === "cours" && (
        <>
          {/* Intro split */}
          <IntroSplit />

          {/* Course list */}
          <section className="space-y-8 py-12">
            <CourseCard
              title="MUSIKA NA KIPAJI"
              mode="FRANÇAIS • FORMATION EN PRÉSENTIEL"
              status="EN COURS"
              place="Vichwa Gallery - Goma Congo RD"
              date="10 au 17 Janvier 2026"
              img="/1.JPG"
            />
            <CourseCard
              title="MENTORAT 2025"
              mode="EN LIGNE"
              status="EN COURS"
              place="Vichwa Gallery - Goma Congo RD"
              date="10 au 17 Janvier 2026"
              img="/2.JPG"
            />
            <CourseCard
              title="MUSIKA NA KIPAJI"
              mode="FRANÇAIS • FORMATION EN PRÉSENTIEL"
              status="TERMINÉ"
              place="Institut Français de Goma - Congo RD"
              date="10 au 17 Janvier 2025"
              img="/3.JPG"
            />
            <CourseCard
              title="MUSIKA NA KIPAJI"
              mode="FRANÇAIS • FORMATION EN PRÉSENTIEL"
              status="TERMINÉ"
              place="Institut Français de Goma - Congo RD"
              date="10 au 17 Janvier 2025"
              img="/6.JPG"
            />
          </section>

          {/* Stats grid on light green background */}
          <section className="bg-[#DAE5CF] py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Connecter jeunes talents et mentors à l'échelle mondiale renouvelle l'apprentissage" },
                { t: "05 INTERVENANT", s: "La formation se déroule en ligne ou en présentiel." },
                { t: "03 À TRAVERS LE PAYS", s: "La formation se déroule en ligne ou en pr��sentiel selon le pays." },
                { t: "05 LANGUES LOCALES & INTERNATIONAL", s: "Formation adaptée à la langue du milieu." },
                { t: "6 PARTENAIRES", s: "Ils croient en notre mission et nous soutiennent." },
                { t: "32 ALUMNI", s: "Ils/elles ont participé à nos formations." },
              ].map((b, i) => (
                <div key={i} className="bg-transparent border border-black rounded p-5">
                  <div className="h-1 w-16 bg-black mb-4" />
                  <div className="font-semibold text-sm">{b.t}</div>
                  {b.s && <div className="text-sm text-black/70 mt-2">{b.s}</div>}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {active === "intervenant" && <IntervenantSection />}

      {active === "alumni" && <AlumniSection />}

      <Footer />
    </div>
  );
}
