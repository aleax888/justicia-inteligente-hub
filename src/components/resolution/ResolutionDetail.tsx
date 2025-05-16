
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Resolution } from '@/data/resolutionTypes';
import { getSchemaByType } from '@/data/resolutionSchemas';
import { ResolutionSummary } from './ResolutionSummary';
import { ResolutionContent } from './ResolutionContent';
import { ResolutionCriteria } from './ResolutionCriteria';
import { RelatedRegulations } from './RelatedRegulations';

interface ResolutionDetailProps {
  resolution: Resolution;
}

export const ResolutionDetail: React.FC<ResolutionDetailProps> = ({ resolution }) => {
  const schema = getSchemaByType(resolution.type);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="summary">Resumen</TabsTrigger>
            <TabsTrigger value="content">Documento</TabsTrigger>
            <TabsTrigger value="criteria">Criterios</TabsTrigger>
          </TabsList>

          <TabsContent value="summary">
            <ResolutionSummary resolution={resolution} />
          </TabsContent>
          
          <TabsContent value="content">
            <ResolutionContent resolution={resolution} />
          </TabsContent>
          
          <TabsContent value="criteria">
            <ResolutionCriteria resolution={resolution} />
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <RelatedRegulations resolution={resolution} />
      </div>
    </div>
  );
};
