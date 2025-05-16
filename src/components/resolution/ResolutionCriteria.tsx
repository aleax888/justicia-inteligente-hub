
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resolution } from '@/data/resolutionTypes';
import { getFieldSchema, getSchemaByType } from '@/data/resolutionSchemas';
import { ResolutionField } from './ResolutionField';

interface ResolutionCriteriaProps {
  resolution: Resolution;
}

export const ResolutionCriteria: React.FC<ResolutionCriteriaProps> = ({ resolution }) => {
  const schema = getSchemaByType(resolution.type);
  const detailFields = schema.detailFields;

  // Extract criteria parts from the content
  let mainCriteria = "";
  let applicability = "";
  
  const contentLines = resolution.content.split('\n');
  const article1Line = contentLines.find(line => line.includes('Artículo 1°'));
  const article2Line = contentLines.find(line => line.includes('Artículo 2°'));
  
  if (article1Line) {
    mainCriteria = article1Line.replace('Artículo 1°.-', '').trim();
  }
  
  if (article2Line) {
    applicability = article2Line.replace('Artículo 2°.-', '').trim();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criterios relevantes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-md bg-gray-50">
            <h3 className="font-medium mb-2 text-gray-800">Criterio principal</h3>
            <p className="text-sm text-gray-700">
              {mainCriteria || "No se encontró el criterio principal en el documento."}
            </p>
          </div>
          
          <div className="p-4 border rounded-md bg-gray-50">
            <h3 className="font-medium mb-2 text-gray-800">Aplicabilidad</h3>
            <p className="text-sm text-gray-700">
              {applicability || "No se encontró información de aplicabilidad en el documento."}
            </p>
          </div>
          
          {/* Display type-specific detail fields */}
          {detailFields.map(fieldId => {
            const fieldSchema = getFieldSchema(schema, fieldId);
            if (!fieldSchema || 
                fieldId === 'acto_impugnado' || // Skip these as we already handled them
                !resolution[fieldId] ||
                (Array.isArray(resolution[fieldId]) && resolution[fieldId].length === 0)) {
              return null;
            }
            
            return (
              <div key={fieldId} className="p-4 border rounded-md bg-gray-50">
                <h3 className="font-medium mb-2 text-gray-800">{fieldSchema.label}</h3>
                <ResolutionField 
                  field={fieldSchema} 
                  value={resolution[fieldId]} 
                  variant="compact"
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
