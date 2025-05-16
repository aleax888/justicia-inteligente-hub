
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BookOpen, History } from "lucide-react";
import { Resolution, RelatedRegulation } from '@/data/resolutionTypes';

interface RelatedRegulationsProps {
  resolution: Resolution;
}

export const RelatedRegulations: React.FC<RelatedRegulationsProps> = ({ resolution }) => {
  if (!resolution.relatedRegulations || resolution.relatedRegulations.length === 0) {
    return (
      <div className="p-4 border rounded-md bg-gray-50 text-center">
        <p className="text-gray-600">No hay normativas relacionadas disponibles.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
        <BookOpen className="h-5 w-5 mr-2" />
        Normativa relacionada
      </h2>
      
      {resolution.relatedRegulations.map((regulation, index) => (
        <div key={index} className="mb-6 border rounded-md p-4 bg-white shadow-sm">
          <h3 className="font-medium mb-2 text-gray-800">{regulation.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{regulation.description}</p>
          
          {regulation.changes && regulation.changes.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium flex items-center mb-2 text-gray-700">
                <History className="h-4 w-4 mr-1" /> 
                Historial de cambios
              </h4>
              <div className="space-y-2 text-sm">
                {regulation.changes.map((change, i) => (
                  <div key={i} className="border-l-2 border-legal-purple pl-3 py-1">
                    <p className="font-medium text-gray-700">{change.date}</p>
                    <p className="text-muted-foreground text-gray-600">{change.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {regulation.articles && regulation.articles.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">Artículos relacionados</h4>
              <div className="flex flex-wrap gap-2">
                {regulation.articles.map((article, i) => (
                  <Badge key={i} variant="outline" className="bg-gray-50 text-gray-700">
                    {article}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
