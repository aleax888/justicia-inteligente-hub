
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resolution } from '@/data/resolutionTypes';
import { getFieldSchema, getSchemaByType } from '@/data/resolutionSchemas';
import { ResolutionField } from './ResolutionField';

interface ResolutionSummaryProps {
  resolution: Resolution;
}

export const ResolutionSummary: React.FC<ResolutionSummaryProps> = ({ resolution }) => {
  const schema = getSchemaByType(resolution.type);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen ejecutivo</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{resolution.summary}</p>
        
        <div className="space-y-4">
          {schema.summaryFields.map(fieldId => {
            const fieldSchema = getFieldSchema(schema, fieldId);
            if (!fieldSchema || fieldId === 'resumen') return null; // Skip summary as we already displayed it
            
            return (
              <div key={fieldId} className="mb-3">
                <ResolutionField 
                  field={fieldSchema} 
                  value={resolution[fieldId]} 
                  variant="detailed"
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
