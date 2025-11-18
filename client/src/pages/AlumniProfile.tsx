import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Alumni } from "@shared/schema";

export default function AlumniProfile() {
  const [, params] = useRoute("/alumni/:id");
  const alumniId = params?.id || "";

  const { data: alumni, isLoading } = useQuery<Alumni>({
    queryKey: ["/api/alumni", alumniId],
    enabled: !!alumniId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="bg-primary/40 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <Skeleton className="aspect-[3/4] w-full max-w-sm mx-auto" />
            </div>
            <div className="md:col-span-3 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="aspect-square" />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!alumni) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600">Alumni non trouvé</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="bg-primary/40 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{alumni.name}</h1>
          <p className="text-lg text-gray-800">{alumni.title}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] w-full max-w-sm mx-auto">
              <img
                src={alumni.imageUrl}
                alt={alumni.name}
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-justify" data-testid="text-bio">
              {alumni.bio}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {alumni.galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover-elevate transition-all"
              data-testid={`img-gallery-${index}`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
