
// Generic resolution model that can handle different types
export interface Resolution {
  id: string;
  type: string; // SUNAFIL, TASTEM, TFA, CM
  title?: string; // optional display title
  entity: string;
  tags: string[];
  date: string;
  summary: string;
  content: string;
  pdfUrl?: string;
  relatedRegulations?: RelatedRegulation[];
  isFavorite?: boolean;
  
  // Dynamic fields - specific to resolution type
  [key: string]: any;
}

export interface RelatedRegulation {
  id: string;
  title: string;
  description: string;
  changes?: RegulationChange[];
  articles?: string[];
}

export interface RegulationChange {
  date: string;
  description: string;
}

// Mapper function to convert our current resolution format to the new format
export const mapToGenericResolution = (res: any, type: string): Resolution => {
  // Base resolution properties
  const genericRes: Resolution = {
    id: res.id,
    type: type,
    title: res.title,
    entity: res.entity,
    tags: res.tags || [],
    date: res.date,
    summary: res.summary,
    content: res.content,
    pdfUrl: res.pdfUrl || undefined,
    relatedRegulations: res.relatedRegulations || []
  };
  
  // Map type-specific fields - extracting data from the resolution object
  // instead of hardcoding values
  switch (type) {
    case 'SUNAFIL':
      genericRes.n_resolucion = res.n_resolucion || res.title.split(' ')[1];
      genericRes.fecha_emision = res.fecha_emision || res.date;
      genericRes.acto_impugnado = res.acto_impugnado || "";
      genericRes.infracciones = res.infracciones || [];
      genericRes.palabras_clave = res.palabras_clave || res.tags;
      genericRes.sentido = res.sentido || "";
      genericRes.medidas_administrativas = res.medidas_administrativas || [];
      genericRes.sancion_final = res.sancion_final || "";
      break;
    case 'TASTEM':
      genericRes.n_resolucion = res.n_resolucion || res.title.split(' ')[1];
      genericRes.fecha_emision = res.fecha_emision || res.date;
      genericRes.acto_impugnado = res.acto_impugnado || "";
      genericRes.infracciones = res.infracciones || [];
      genericRes.palabra_clave = res.palabra_clave || res.tags;
      genericRes.sentido = res.sentido || "";
      genericRes.medidas_administrativas = res.medidas_administrativas || [];
      genericRes.sancion_final = res.sancion_final || "";
      break;
    case 'TFA':
      genericRes.n_resolucion = res.n_resolucion || res.title.split(' ')[1];
      genericRes.fecha_emision = res.fecha_emision || res.date;
      genericRes.acto_impugnado = res.acto_impugnado || "";
      genericRes.infracciones = res.infracciones || [];
      genericRes.palabras_clave = res.palabras_clave || res.tags;
      genericRes.sentido = res.sentido || "";
      genericRes.medidas_administrativas = res.medidas_administrativas || [];
      genericRes.sancion_final = res.sancion_final || "";
      break;
    case 'CM':
      genericRes.n_resolucion = res.n_resolucion || res.title.split(' ')[1];
      genericRes.fecha_emision = res.fecha_emision || res.date;
      genericRes.acto_impugnado = res.acto_impugnado || "";
      genericRes.cuestiones_controvertidas = res.cuestiones_controvertidas || [];
      genericRes.palabras_clave = res.palabras_clave || res.tags;
      genericRes.sentido = res.sentido || "";
      genericRes.cuestiones_adicionales = res.cuestiones_adicionales || [];
      genericRes.persona_natural = res.persona_natural || "";
      break;
  }
  
  return genericRes;
};

// Convert mockResolutions to typed resolutions
export const getResolutionsByType = (resolutions: any[], type: string): Resolution[] => {
  return resolutions
    .filter(res => {
      // Map entity names to resolution types
      const entityToType: {[key: string]: string} = {
        'OEFA': 'TFA',
        'SUNAFIL': 'SUNAFIL',
        'OSINERGMIN': 'TASTEM',
        'INDECOPI': 'CM' // For testing purposes
      };
      
      return entityToType[res.entity] === type;
    })
    .map(res => mapToGenericResolution(res, type));
};
