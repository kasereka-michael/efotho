import { Link } from "wouter";

export default function Intervenant() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-24">
        {/* Back to home */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-black/70 hover:underline">← Accueil</Link>
        </div>

        {/* Nameplate */}
        <div className="inline-block bg-[#C9D8BE] rounded-xl px-5 py-3 mb-6">
          <div className="text-[18px] font-bold leading-tight">Moses Sawasawa</div>
          <div className="text-xs text-black/70 mt-1">Photojournaliste</div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Portrait */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src="/ndebo.png" alt="Portrait" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Biography */}
          <div>
            <div className="text-[14.5px] leading-[1.6] text-black space-y-4">
              <p>
                Moses Sawasawa est né à Goma, en septembre 1997. Membre de APJD /WORLD PRESS PHOTO,
                Il débute la photographie en 2015 juste pour lui. Très vite, il s'est rendu compte que cet outil
                permettrait de dénoncer certaines choses. Alors il a voulu articuler sa passion autour de la photo engagée,
                sociale. Les photos d'art ou les shootings ça ne le passionne pas tellement, même s'il lui arrive d'en faire...pour manger.
              </p>
              <p>
                Il a grandi dans un environnement de guerre en ne photographiant pas que la guerre,
                mais il s'efforce de capturer le quotidien de la population dans sa région.
                Car, malgré les conflits qui règnent dans sa communauté, il y a des personnes qui travaillent,
                qui étudient et qui entreprennent. Ce qui l'intéresse et le fascine dans la photographie,
                c'est l'humain et surtout les femmes et les enfants, qui sont omniprésents dans ses clichés.
              </p>
            </div>

            {/* Pagination indicators */}
            <div className="flex items-center gap-3 mt-6">
              <span className="h-3 w-3 rounded-[4px] bg-black/30 inline-block" />
              <span className="h-3 w-3 rounded-[4px] bg-black/15 inline-block" />
              <span className="h-3 w-3 rounded-[4px] bg-black/15 inline-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
