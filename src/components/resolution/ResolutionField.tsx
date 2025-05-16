
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { FieldSchema } from '@/data/resolutionSchemas';

interface ResolutionFieldProps {
  field: FieldSchema;
  value: any;
  variant?: 'default' | 'compact' | 'detailed';
}

export const ResolutionField: React.FC<ResolutionFieldProps> = ({ 
  field, 
  value, 
  variant = 'default' 
}) => {
  // Handle empty values
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null;
  }

  // Format date values
  if (field.type === 'date' && typeof value === 'string') {
    // Assuming value is in format 'DD/MM/YYYY'
    // You can add more date formatting if needed
    value = value;
  }

  switch (field.type) {
    case 'tags':
      return (
        <div className="mt-2">
          <div className="flex flex-wrap gap-2">
            {Array.isArray(value) && value.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="bg-legal-lightBlue text-gray-800">
                {tag}
              </Badge>
            ))}
            {!Array.isArray(value) && typeof value === 'string' && (
              <Badge variant="secondary" className="bg-legal-lightBlue text-gray-800">
                {value}
              </Badge>
            )}
          </div>
        </div>
      );

    case 'array':
      return (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-800">{field.label}</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            {Array.isArray(value) && value.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            {!Array.isArray(value) && <li>{value}</li>}
          </ul>
        </div>
      );

    case 'text':
      if (variant === 'compact') {
        return <p className="text-sm text-gray-700">{value}</p>;
      }
      
      if (variant === 'detailed') {
        return (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-800">{field.label}</h3>
            <p className="mt-1 text-gray-700">{value}</p>
          </div>
        );
      }
      
      return (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-800">{field.label}</h3>
          <p className="text-gray-700">{value}</p>
        </div>
      );

    default:
      return <p className="text-gray-700">{value?.toString() || ''}</p>;
  }
};
