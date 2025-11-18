import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Intervenant } from "@shared/schema";

export default function IntervenantProfile() {
  const [, params] = useRoute("/intervenant/:id");
  const intervenantId = params?.id || "";

  const { data: intervenant, isLoading } = useQuery<Intervenant>({
    queryKey: ["/api/intervenants", intervenantId],
    enabled: !!intervenantId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="bg-[#C5D5B0] px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Skeleton className="aspect-[3/4] w-full max-w-sm mx-auto" />
            </div>
            <div className="md:col-span-3 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!intervenant) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600">Intervenant non trouvé</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="bg-primary/40 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{intervenant.name}</h1>
          <p className="text-lg text-gray-800">{intervenant.title}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-[3/4] w-full max-w-sm mx-auto">
              <img
                src={intervenant.imageUrl}
                alt={intervenant.name}
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-justify" data-testid="text-bio">
              {intervenant.bio}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-400" data-testid="indicator-dot-0"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300" data-testid="indicator-dot-1"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300" data-testid="indicator-dot-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
