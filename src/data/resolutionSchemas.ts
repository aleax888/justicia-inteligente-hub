
// Define types for our schema system
export interface FieldSchema {
  id: string;
  label: string;
  type: 'text' | 'date' | 'array' | 'object' | 'tags';
  isRequired?: boolean;
  isDisplayedInCard?: boolean;
  maxLength?: number;
  section?: string;
}

export interface ResolutionSchema {
  id: string;
  name: string;
  entity: string;
  color: string;
  fields: FieldSchema[];
  cardFields: string[]; // Fields to show in card
  summaryFields: string[]; // Fields to show in summary tab
  detailFields: string[]; // Fields to show in detail tab
}

export interface SchemaRegistry {
  [key: string]: ResolutionSchema;
}

// Define schemas for each resolution type
export const resolutionSchemas: SchemaRegistry = {
  "SUNAFIL": {
    id: "SUNAFIL",
    name: "Resolución SUNAFIL",
    entity: "SUNAFIL",
    color: "legal-blue",
    fields: [
      { id: "n_resolucion", label: "Número de Resolución", type: "text", isRequired: true, isDisplayedInCard: true },
      { id: "fecha_emision", label: "Fecha de Emisión", type: "date", isRequired: true, isDisplayedInCard: true },
      { id: "acto_impugnado", label: "Acto Impugnado", type: "text", isRequired: true, section: "general" },
      { id: "infracciones", label: "Infracciones", type: "array", section: "details" },
      { id: "medidas_administrativas", label: "Medidas Administrativas", type: "array", section: "admin" },
      { id: "sancion_final", label: "Sanción Final", type: "text", section: "admin" },
      { id: "palabras_clave", label: "Palabras Clave", type: "tags", isDisplayedInCard: true },
      { id: "sentido", label: "Sentido", type: "text", section: "details" },
      { id: "resumen", label: "Resumen", type: "text", maxLength: 300, isDisplayedInCard: true },
      { id: "normas_vinculadas", label: "Normas Vinculadas", type: "array", section: "related" },
      { id: "jurisprudencia_citada", label: "Jurisprudencia Citada", type: "array", section: "related" },
      { id: "noticias_relacionadas", label: "Noticias Relacionadas", type: "array", section: "related" }
    ],
    cardFields: ["n_resolucion", "fecha_emision", "palabras_clave", "resumen"],
    summaryFields: ["n_resolucion", "fecha_emision", "acto_impugnado", "resumen", "sentido", "sancion_final"],
    detailFields: ["acto_impugnado", "infracciones", "medidas_administrativas", "sancion_final", "sentido"]
  },
  "TASTEM": {
    id: "TASTEM",
    name: "Resolución TASTEM",
    entity: "OSINERGMIN",
    color: "legal-darkBlue",
    fields: [
      { id: "n_resolucion", label: "Número de Resolución", type: "text", isRequired: true, isDisplayedInCard: true },
      { id: "fecha_emision", label: "Fecha de Emisión", type: "date", isRequired: true, isDisplayedInCard: true },
      { id: "acto_impugnado", label: "Acto Impugnado", type: "text", isRequired: true, section: "general" },
      { id: "infracciones", label: "Infracciones", type: "array", section: "details" },
      { id: "medidas_administrativas", label: "Medidas Administrativas", type: "array", section: "admin" },
      { id: "sancion_final", label: "Sanción Final", type: "text", section: "admin" },
      { id: "palabra_clave", label: "Palabras Clave", type: "tags", isDisplayedInCard: true },
      { id: "sentido", label: "Sentido", type: "text", section: "details" },
      { id: "resumen", label: "Resumen", type: "text", maxLength: 300, isDisplayedInCard: true },
      { id: "normas_vinculadas", label: "Normas Vinculadas", type: "array", section: "related" },
      { id: "jurisprudencia_citada", label: "Jurisprudencia Citada", type: "array", section: "related" },
      { id: "noticias_relacionadas", label: "Noticias Relacionadas", type: "array", section: "related" }
    ],
    cardFields: ["n_resolucion", "fecha_emision", "palabra_clave", "resumen"],
    summaryFields: ["n_resolucion", "fecha_emision", "acto_impugnado", "resumen", "sentido", "sancion_final"],
    detailFields: ["acto_impugnado", "infracciones", "medidas_administrativas", "sancion_final", "sentido"]
  },
  "TFA": {
    id: "TFA",
    name: "Resolución TFA",
    entity: "OEFA",
    color: "legal-purple",
    fields: [
      { id: "n_resolucion", label: "Número de Resolución", type: "text", isRequired: true, isDisplayedInCard: true },
      { id: "fecha_emision", label: "Fecha de Emisión", type: "date", isRequired: true, isDisplayedInCard: true },
      { id: "acto_impugnado", label: "Acto Impugnado", type: "text", isRequired: true, section: "general" },
      { id: "infracciones", label: "Infracciones", type: "array", section: "details" },
      { id: "medidas_administrativas", label: "Medidas Administrativas", type: "array", section: "admin" },
      { id: "sancion_final", label: "Sanción Final", type: "text", section: "admin" },
      { id: "palabras_clave", label: "Palabras Clave", type: "tags", isDisplayedInCard: true },
      { id: "sentido", label: "Sentido", type: "text", section: "details" },
      { id: "resumen", label: "Resumen", type: "text", maxLength: 300, isDisplayedInCard: true },
      { id: "normas_vinculadas", label: "Normas Vinculadas", type: "array", section: "related" },
      { id: "jurisprudencia_citada", label: "Jurisprudencia Citada", type: "array", section: "related" },
      { id: "noticias_relacionadas", label: "Noticias Relacionadas", type: "array", section: "related" }
    ],
    cardFields: ["n_resolucion", "fecha_emision", "palabras_clave", "resumen"],
    summaryFields: ["n_resolucion", "fecha_emision", "acto_impugnado", "resumen", "sentido", "sancion_final"],
    detailFields: ["acto_impugnado", "infracciones", "medidas_administrativas", "sancion_final", "sentido"]
  },
  "CM": {
    id: "CM",
    name: "Resolución CM",
    entity: "CM",
    color: "legal-teal",
    fields: [
      { id: "n_resolucion", label: "Número de Resolución", type: "text", isRequired: true, isDisplayedInCard: true },
      { id: "fecha_emision", label: "Fecha de Emisión", type: "date", isRequired: true, isDisplayedInCard: true },
      { id: "acto_impugnado", label: "Acto Impugnado", type: "text", isRequired: true, section: "general" },
      { id: "cuestiones_controvertidas", label: "Cuestiones Controvertidas", type: "array", section: "details" },
      { id: "palabras_clave", label: "Palabras Clave", type: "tags", isDisplayedInCard: true },
      { id: "sentido", label: "Sentido", type: "text", section: "details" },
      { id: "resumen", label: "Resumen", type: "text", maxLength: 300, isDisplayedInCard: true },
      { id: "normas_vinculadas", label: "Normas Vinculadas", type: "array", section: "related" },
      { id: "cuestiones_adicionales", label: "Cuestiones Adicionales", type: "array", section: "details" },
      { id: "jurisprudencia_citada", label: "Jurisprudencia Citada", type: "array", section: "related" },
      { id: "persona_natural", label: "Persona Natural", type: "text", section: "general" }
    ],
    cardFields: ["n_resolucion", "fecha_emision", "palabras_clave", "resumen"],
    summaryFields: ["n_resolucion", "fecha_emision", "acto_impugnado", "resumen", "sentido", "persona_natural"],
    detailFields: ["acto_impugnado", "cuestiones_controvertidas", "sentido", "cuestiones_adicionales", "persona_natural"]
  }
};

// Helper function to get schema by type
export const getSchemaByType = (type: string): ResolutionSchema => {
  const schema = resolutionSchemas[type];
  if (!schema) {
    throw new Error(`Schema for resolution type ${type} not found`);
  }
  return schema;
};

// Get field schema by id within a resolution schema
export const getFieldSchema = (schema: ResolutionSchema, fieldId: string): FieldSchema | undefined => {
  return schema.fields.find(field => field.id === fieldId);
};
