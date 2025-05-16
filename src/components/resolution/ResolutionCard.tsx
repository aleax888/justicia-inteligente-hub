
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Resolution } from '@/data/resolutionTypes';
import { getFieldSchema, getSchemaByType } from '@/data/resolutionSchemas';
import { ResolutionField } from './ResolutionField';

interface ResolutionCardProps {
  resolution: Resolution;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const ResolutionCard: React.FC<ResolutionCardProps> = ({ 
  resolution,
  isFavorite = false,
  onToggleFavorite 
}) => {
  const schema = getSchemaByType(resolution.type);
  const titleField = getFieldSchema(schema, 'n_resolucion');
  const dateField = getFieldSchema(schema, 'fecha_emision');
  
  // Determine correct tags field based on resolution type
  const tagsFieldId = resolution.type === 'TASTEM' ? 'palabra_clave' : 'palabras_clave';
  const tagsField = getFieldSchema(schema, tagsFieldId);
  const summaryField = getFieldSchema(schema, 'resumen');

  const handleFavoriteToggle = () => {
    if (onToggleFavorite) {
      onToggleFavorite(resolution.id);
    }
  };

  return (
    <Card className="card-hover">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2 text-gray-800">{resolution.entity}</Badge>
          {dateField && resolution[dateField.id] && (
            <span className="text-sm text-gray-600">{resolution[dateField.id]}</span>
          )}
        </div>
        {titleField && resolution[titleField.id] && (
          <div className="line-clamp-2 text-gray-900 text-xl font-semibold">
            {resolution[titleField.id]}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {/* Tags section */}
        {tagsField && resolution[tagsFieldId] && (
          <div className="flex flex-wrap gap-2 mb-3">
            {Array.isArray(resolution[tagsFieldId]) ? 
              resolution[tagsFieldId].map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-legal-lightBlue text-gray-800">
                  {tag}
                </Badge>
              )) : 
              <Badge variant="secondary" className="bg-legal-lightBlue text-gray-800">
                {resolution[tagsFieldId]}
              </Badge>
            }
          </div>
        )}
        
        {/* Summary section */}
        {summaryField && resolution.summary && (
          <p className="text-sm text-gray-700 line-clamp-3">{resolution.summary}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleFavoriteToggle}
                className={isFavorite 
                  ? "text-yellow-500 hover:text-yellow-600" 
                  : "text-gray-500 hover:text-yellow-500"
                }
              >
                <Star className="h-5 w-5 fill-current" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-gray-800">Agregar a favoritos</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Button asChild size="sm" className="bg-legal-blue hover:bg-legal-darkBlue text-white">
          <Link to={`/resolutions/${resolution.id}`}>
            <FileText className="h-4 w-4 mr-2" />
            Ver documento
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
