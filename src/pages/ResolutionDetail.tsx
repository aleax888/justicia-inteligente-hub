
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { mockResolutions, Resolution } from "@/data/mockData";
import { Calendar, ChevronLeft, FilePlus, Star, BookOpen, History } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const ResolutionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [resolution, setResolution] = useState<Resolution | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundResolution = mockResolutions.find(res => res.id === id);
      setResolution(foundResolution || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="legal-container py-8">
          <p className="text-center py-12">Cargando resolución...</p>
        </div>
      </MainLayout>
    );
  }

  if (!resolution) {
    return (
      <MainLayout>
        <div className="legal-container py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Resolución no encontrada</h2>
            <Button asChild>
              <Link to="/search">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Volver a la búsqueda
              </Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="legal-container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/search" className="text-muted-foreground hover:text-foreground">
            Búsqueda
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Resolución</span>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline">{resolution.entity}</Badge>
              {resolution.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-legal-lightPurple text-legal-darkPurple">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {resolution.date}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3">{resolution.title}</h1>
          
          <p className="text-muted-foreground">{resolution.summary}</p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className={isFavorite 
                      ? "flex items-center gap-2 text-yellow-500" 
                      : "flex items-center gap-2"
                    }
                    onClick={toggleFavorite}
                  >
                    <Star className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? "Guardado" : "Guardar"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Agregar a favoritos</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Button variant="outline" className="flex items-center gap-2">
              <FilePlus className="h-4 w-4" />
              Agregar nota
            </Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="summary">Resumen</TabsTrigger>
                <TabsTrigger value="content">Documento</TabsTrigger>
                <TabsTrigger value="criteria">Criterios</TabsTrigger>
              </TabsList>

              <TabsContent value="summary">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen ejecutivo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{resolution.summary}</p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li>Establecimiento de nuevos criterios de evaluación</li>
                      <li>Plazos y responsabilidades para entidades reguladas</li>
                      <li>Consideraciones especiales para el sector</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Documento completo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md p-6 bg-gray-50 whitespace-pre-line">
                      {resolution.content}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="criteria">
                <Card>
                  <CardHeader>
                    <CardTitle>Criterios relevantes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-medium mb-2">Criterio principal</h3>
                        <p className="text-sm">
                          {resolution.content.split('\n').filter(line => line.includes('Artículo 1°'))[0]?.replace('Artículo 1°.-', '').trim()}
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-medium mb-2">Aplicabilidad</h3>
                        <p className="text-sm">
                          {resolution.content.split('\n').filter(line => line.includes('Artículo 2°'))[0]?.replace('Artículo 2°.-', '').trim()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Normativa relacionada
            </h2>
            
            {resolution.relatedRegulations.map((regulation, index) => (
              <div key={index} className="mb-6 border rounded-md p-4 bg-white shadow-sm">
                <h3 className="font-medium mb-2">{regulation.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{regulation.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <History className="h-4 w-4 mr-1" /> 
                    Historial de cambios
                  </h4>
                  <div className="space-y-2 text-sm">
                    {regulation.changes.map((change, i) => (
                      <div key={i} className="border-l-2 border-legal-purple pl-3 py-1">
                        <p className="font-medium">{change.date}</p>
                        <p className="text-muted-foreground">{change.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Artículos relacionados</h4>
                  <div className="flex flex-wrap gap-2">
                    {regulation.articles.map((article, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-50">
                        {article}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResolutionDetail;
