
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockResolutions } from "@/data/mockData";
import { Calendar, ChevronLeft, FilePlus, Star } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Resolution, mapToGenericResolution } from "@/data/resolutionTypes";
import { ResolutionDetail as ResolutionDetailComponent } from "@/components/resolution/ResolutionDetail";
import { getSchemaByType } from "@/data/resolutionSchemas";

const ResolutionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [resolution, setResolution] = useState<Resolution | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundResolution = mockResolutions.find(res => res.id === id);
      
      if (foundResolution) {
        // Map entity names to resolution types
        const entityToType: {[key: string]: string} = {
          'OEFA': 'TFA',
          'SUNAFIL': 'SUNAFIL',
          'OSINERGMIN': 'TASTEM',
          'INDECOPI': 'CM'
        };
        
        const type = entityToType[foundResolution.entity] || 'TFA';
        const mappedResolution = mapToGenericResolution(foundResolution, type);
        setResolution(mappedResolution);
      } else {
        setResolution(null);
      }
      
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
          <p className="text-center py-12 text-gray-700">Cargando resolución...</p>
        </div>
      </MainLayout>
    );
  }

  if (!resolution) {
    return (
      <MainLayout>
        <div className="legal-container py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Resolución no encontrada</h2>
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

  const schema = getSchemaByType(resolution.type);
  const tagsFieldId = resolution.type === 'TASTEM' ? 'palabra_clave' : 'palabras_clave';

  return (
    <MainLayout>
      <div className="legal-container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/search" className="text-muted-foreground hover:text-foreground">
            Búsqueda
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-700">Resolución</span>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline" className="text-gray-800">{resolution.entity}</Badge>
              {resolution[tagsFieldId] && (
                Array.isArray(resolution[tagsFieldId]) ? 
                  resolution[tagsFieldId].map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-legal-lightBlue text-gray-800">
                      {tag}
                    </Badge>
                  )) : 
                  <Badge variant="secondary" className="bg-legal-lightBlue text-gray-800">
                    {resolution[tagsFieldId]}
                  </Badge>
              )}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {resolution.date}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 text-gray-800">{resolution.title}</h1>
          
          <p className="text-muted-foreground text-gray-700">{resolution.summary}</p>
          
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
                  <p className="text-gray-800">Agregar a favoritos</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Button variant="outline" className="flex items-center gap-2">
              <FilePlus className="h-4 w-4" />
              Agregar nota
            </Button>
          </div>
        </div>
        
        {/* Resolution Detail Component */}
        <ResolutionDetailComponent resolution={resolution} />
      </div>
    </MainLayout>
  );
};

export default ResolutionDetail;
