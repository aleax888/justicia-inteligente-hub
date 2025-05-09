
export interface FilterOption {
  id: string;
  label: string;
  children?: FilterOption[];
}

export const hierarchicalFilterData: FilterOption[] = [
  {
    id: "entidad",
    label: "ENTIDAD",
    children: [
      {
        id: "ministerio-energia-minas",
        label: "MINISTERIO DE ENERGÍA Y MINAS",
        children: [
          { id: "consejo-mineria", label: "Consejo de Minería" }
        ]
      },
      {
        id: "oefa",
        label: "ORGANISMO DE EVALUACIÓN Y FISCALIZACIÓN AMBIENTAL (OEFA)",
        children: [
          { id: "tribunal-fiscalizacion-ambiental", label: "Tribunal de Fiscalización Ambiental (TFA)" }
        ]
      },
      {
        id: "osinergmin",
        label: "ORGANISMO SUPERVISOR DE LA INVERSIÓN EN ENERGÍA Y MINERÍA (OSINERGMIN)",
        children: [
          { id: "tastem", label: "Tribunal de Apelaciones de Sanciones en Temas de Energía y Minería (TASTEM)" }
        ]
      },
      {
        id: "sunafil",
        label: "SUPERINTENDENCIA NACIONAL DE FISCALIZACIÓN LABORAL (SUNAFIL)",
        children: [
          { id: "tribunal-fiscalizacion-laboral", label: "Tribunal de Fiscalización Laboral (TFL)" }
        ]
      }
    ]
  },
  {
    id: "precedentes",
    label: "PRECEDENTES Y CRITERIOS RESOLUTIVOS",
    children: [
      { id: "precedentes-consejo-mineria", label: "Consejo de Minería" },
      { id: "precedentes-tfa", label: "Tribunal de Fiscalización Ambiental" },
      { id: "precedentes-tastem", label: "Tribunal de Apelaciones de Sanciones en Temas de Energía y Minería" },
      { id: "precedentes-tfl", label: "Tribunal de Fiscalización Laboral" }
    ]
  },
  {
    id: "materia",
    label: "MATERIA",
    children: [
      {
        id: "evaluacion-permisos",
        label: "EVALUACIÓN Y PERMISOS",
        children: [
          { id: "titulos-mineros", label: "Títulos mineros" },
          { id: "instrumentos-gestion-ambiental", label: "Instrumentos de gestión ambiental" }
        ]
      },
      {
        id: "supervision",
        label: "SUPERVISIÓN",
        children: [
          { id: "medidas-preventivas", label: "Medidas preventivas" },
          { id: "mandatos", label: "Mandatos" },
          { id: "requerimiento-iga", label: "Requerimiento de IGA" },
          { id: "medidas-cautelares", label: "Medidas cautelares" },
          { id: "otras-medidas", label: "Otras medidas" }
        ]
      },
      {
        id: "fiscalizacion-sancion",
        label: "FISCALIZACIÓN Y SANCIÓN",
        children: [
          { id: "infracciones-iga", label: "Infracciones relacionadas con los IGA" },
          { id: "infracciones-norma", label: "Infracciones a la norma" },
          { id: "infracciones-insubsanables", label: "Infracciones insubsanables" },
          { id: "infracciones-formales", label: "Infracciones formales, documentales y generales" },
          { id: "medidas-administrativas", label: "Medidas administrativas" }
        ]
      },
      { id: "formalizacion", label: "FORMALIZACIÓN" }
    ]
  },
  {
    id: "sector",
    label: "SECTOR",
    children: [
      { id: "mineria", label: "Minería" },
      { id: "hidrocarburos", label: "Hidrocarburos" },
      { id: "energia", label: "Energía" }
    ]
  },
  {
    id: "temas",
    label: "TEMAS",
    children: [
      {
        id: "principios",
        label: "PRINCIPIOS",
        children: [
          { id: "legalidad", label: "Legalidad" },
          { id: "debido-procedimiento", label: "Debido procedimiento" },
          { id: "razonabilidad", label: "Razonabilidad" },
          { id: "tipicidad", label: "Tipicidad" },
          { id: "irretroactividad", label: "Irretroactividad" },
          { id: "causalidad", label: "Causalidad" },
          { id: "culpabilidad", label: "Culpabilidad" }
        ]
      }
    ]
  }
];
