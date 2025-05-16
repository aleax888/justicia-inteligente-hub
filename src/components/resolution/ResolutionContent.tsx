
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resolution } from '@/data/resolutionTypes';

interface ResolutionContentProps {
  resolution: Resolution;
}

export const ResolutionContent: React.FC<ResolutionContentProps> = ({ resolution }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documento completo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md p-6 bg-gray-50 whitespace-pre-line text-gray-700">
          {resolution.content}
        </div>
      </CardContent>
    </Card>
  );
};
