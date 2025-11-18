import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "wouter";
import type { Course, Intervenant, Alumni } from "@shared/schema";
import heroImage from "@assets/EDUCATION_1763466326947.png";

export default function Education() {
  const [activeTab, setActiveTab] = useState("cours");

  const { data: courses = [], isLoading: coursesLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const { data: intervenants = [], isLoading: intervenantsLoading } = useQuery<Intervenant[]>({
    queryKey: ["/api/intervenants"],
  });

  const { data: alumni = [], isLoading: alumniLoading } = useQuery<Alumni[]>({
    queryKey: ["/api/alumni"],
  });

  const stats = [
    {
      label: "Convaincu jeunes talents",
      description: "de poursuivre leur apprentissage",
      value: "200+",
    },
    {
      label: "INTERVENANTS",
      description: "La formation de jeunes photographes en présentiel.",
      value: "15",
    },
    {
      label: "5 SEPTEMBRE",
      description: "Date de fondation",
      value: "2020",
    },
    {
      label: "LANGUES",
      description: "à travers le monde",
      value: "3",
    },
    {
      label: "ALUMNI",
      description: "Depuis la fondation",
      value: "32",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="relative h-[400px] md:h-[500px] w-full">
        <img
          src={heroImage}
          alt="Education Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ÉDUCATION</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent h-auto p-0 rounded-none mb-8">
            <TabsTrigger
              value="cours"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 data-[state=active]:bg-transparent"
              data-testid="tab-cours"
            >
              <span className="font-semibold text-base">COURS</span>
            </TabsTrigger>
            <TabsTrigger
              value="intervenant"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 data-[state=active]:bg-transparent"
              data-testid="tab-intervenant"
            >
              <span className="font-semibold text-base">INTERVENANT</span>
            </TabsTrigger>
            <TabsTrigger
              value="alumni"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 data-[state=active]:bg-transparent"
              data-testid="tab-alumni"
            >
              <span className="font-semibold text-base">ALUMNI</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cours" className="mt-8">
            <div className="mb-8">
              <p className="text-gray-700 max-w-3xl leading-relaxed">
                Efothe propose des parcours éducatifs, qui associent l'art et le journalisme — pour
                favoriser la créativité et la sensibilisation au pouvoir de la photographie. Afin
                de soutenir ce travail, les artistes de la photographie, Afrique, réalisation
                cinematographique acoustique, écrivain et entrepreneuriat pour les métiers.
              </p>
            </div>

            {coursesLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <Skeleton className="md:w-1/3 h-48 md:h-64" />
                      <div className="flex-1 p-6 space-y-4">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : courses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun cours disponible pour le moment.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover-elevate transition-all"
                    data-testid={`card-course-${index}`}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img
                          src={course.imageUrl || heroImage}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                            {course.category === "cours" && index === 0 && (
                              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                Session en conference ouverte
                              </span>
                            )}
                            {course.category === "cours" && index === 1 && (
                              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                Exclusif
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-gray-600 mb-4">
                            {course.instructor}
                          </p>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>{course.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              <span>{course.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="intervenant" className="mt-8">
            {intervenantsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6">
                    <Skeleton className="h-48 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </Card>
                ))}
              </div>
            ) : intervenants.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun intervenant disponible pour le moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {intervenants.map((intervenant) => (
                  <Link key={intervenant.id} href={`/intervenant/${intervenant.id}`}>
                    <Card className="p-6 hover-elevate transition-all cursor-pointer" data-testid={`card-intervenant-${intervenant.id}`}>
                      <div className="aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                        <img
                          src={intervenant.imageUrl}
                          alt={intervenant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{intervenant.name}</h3>
                      <p className="text-sm text-gray-600">{intervenant.title}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="alumni" className="mt-8">
            {alumniLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6">
                    <Skeleton className="h-48 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </Card>
                ))}
              </div>
            ) : alumni.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun alumni disponible pour le moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((alum) => (
                  <Link key={alum.id} href={`/alumni/${alum.id}`}>
                    <Card className="p-6 hover-elevate transition-all cursor-pointer" data-testid={`card-alumni-${alum.id}`}>
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img
                          src={alum.imageUrl}
                          alt={alum.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{alum.name}</h3>
                      <p className="text-sm text-gray-600">{alum.title}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center border-2 border-gray-300"
              data-testid={`card-stat-${index}`}
            >
              {stat.value && (
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              )}
              <h3 className="text-xs font-semibold text-gray-900 mb-1 uppercase">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-xs text-gray-600">{stat.description}</p>
              )}
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
