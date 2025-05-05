
export interface Resolution {
  id: string;
  title: string;
  entity: string;
  tags: string[];
  date: string;
  summary: string;
  content: string;
  pdfUrl: string;
  relatedRegulations: RelatedRegulation[];
}

export interface RelatedRegulation {
  id: string;
  title: string;
  description: string;
  changes: RegulationChange[];
  articles: string[];
}

export interface RegulationChange {
  date: string;
  description: string;
}

export const mockResolutions: Resolution[] = [
  {
    id: "res-001",
    title: "Resolución N° 034-2023-OEFA/TFA-SE sobre impacto ambiental en zona minera",
    entity: "OEFA",
    tags: ["Minería", "Medio Ambiente"],
    date: "15/04/2023",
    summary: "Establece criterios para la evaluación del impacto ambiental en zonas de operación minera, considerando los nuevos estándares internacionales y la normativa nacional actualizada.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29325, se crea el Sistema Nacional de Evaluación y Fiscalización Ambiental, el cual está a cargo del Organismo de Evaluación y Fiscalización Ambiental - OEFA como ente rector;

      Que, el Tribunal de Fiscalización Ambiental ha evaluado el recurso de apelación presentado por la empresa minera sobre los criterios de evaluación ambiental;

      SE RESUELVE:

      Artículo 1°.- Los criterios para determinar el impacto ambiental en zonas mineras deberán considerar: (i) el análisis de la línea base ambiental, (ii) los estándares de calidad ambiental aplicables, y (iii) las mejores prácticas internacionales.

      Artículo 2°.- Las entidades supervisadas deberán implementar estos criterios en un plazo no mayor a 120 días calendario.
    `,
    pdfUrl: "/documents/res-001.pdf",
    relatedRegulations: [
      {
        id: "reg-001",
        title: "Ley N° 29325 - Ley del Sistema Nacional de Evaluación y Fiscalización Ambiental",
        description: "Establece el marco normativo para el Sistema Nacional de Evaluación y Fiscalización Ambiental.",
        changes: [
          {
            date: "10/03/2021",
            description: "Modificación del artículo 17 sobre las infracciones administrativas y sanciones"
          },
          {
            date: "05/07/2019",
            description: "Modificación del artículo 11 sobre funciones generales"
          }
        ],
        articles: ["Artículo 11", "Artículo 17", "Artículo 19"]
      }
    ]
  },
  {
    id: "res-002",
    title: "Resolución N° 127-2022-SUNAFIL/TFL sobre seguridad ocupacional en construcción",
    entity: "SUNAFIL",
    tags: ["Construcción", "Seguridad", "Laboral"],
    date: "23/11/2022",
    summary: "Establece lineamientos para la implementación de medidas de seguridad ocupacional en proyectos de construcción civil, enfatizando la responsabilidad solidaria entre contratistas y subcontratistas.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29981, se crea la Superintendencia Nacional de Fiscalización Laboral - SUNAFIL;

      Que, el Tribunal de Fiscalización Laboral ha evaluado el recurso de revisión presentado por la empresa constructora;

      SE RESUELVE:

      Artículo 1°.- Los lineamientos para la implementación de medidas de seguridad ocupacional en proyectos de construcción incluyen: (i) evaluación de riesgos previa, (ii) capacitación certificada, y (iii) supervisión constante.

      Artículo 2°.- Se establece la responsabilidad solidaria entre contratistas y subcontratistas en materia de seguridad ocupacional.
    `,
    pdfUrl: "/documents/res-002.pdf",
    relatedRegulations: [
      {
        id: "reg-002",
        title: "Ley N° 29783 - Ley de Seguridad y Salud en el Trabajo",
        description: "Ley que establece el marco normativo para la seguridad y salud en el trabajo.",
        changes: [
          {
            date: "12/07/2022",
            description: "Modificación del artículo 49 sobre obligaciones del empleador"
          },
          {
            date: "15/09/2020",
            description: "Modificación del artículo 76 sobre prevención de riesgos"
          }
        ],
        articles: ["Artículo 49", "Artículo 76", "Artículo 82"]
      }
    ]
  },
  {
    id: "res-003",
    title: "Resolución N° 052-2023-OSINERGMIN/TASTEM sobre regulación energética en industria",
    entity: "OSINERGMIN",
    tags: ["Industria", "Energía"],
    date: "07/02/2023",
    summary: "Determina los parámetros de cumplimiento para instalaciones eléctricas en plantas industriales, con énfasis en la eficiencia energética y seguridad operacional.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 26734, se crea el Organismo Supervisor de la Inversión en Energía y Minería - OSINERGMIN;

      Que, el Tribunal de Apelaciones de Sanciones en Temas de Energía y Minería ha evaluado el recurso de apelación presentado;

      SE RESUELVE:

      Artículo 1°.- Los parámetros de cumplimiento para instalaciones eléctricas en plantas industriales deberán incluir: (i) certificación de instalaciones, (ii) auditorías periódicas, y (iii) planes de eficiencia energética.

      Artículo 2°.- Las empresas del sector industrial deberán adecuar sus instalaciones en un plazo no mayor a 180 días calendario.
    `,
    pdfUrl: "/documents/res-003.pdf",
    relatedRegulations: [
      {
        id: "reg-003",
        title: "Ley N° 28749 - Ley General de Electrificación Rural",
        description: "Establece el marco normativo para la electrificación de zonas rurales y urbano-marginales.",
        changes: [
          {
            date: "18/01/2023",
            description: "Modificación del artículo 9 sobre financiamiento"
          },
          {
            date: "03/05/2021",
            description: "Modificación del artículo 4 sobre desarrollo eficiente"
          }
        ],
        articles: ["Artículo 4", "Artículo 9", "Artículo 12"]
      }
    ]
  },
  {
    id: "res-004",
    title: "Resolución N° 089-2022-SUNAT/TF sobre tributación en el sector comercial",
    entity: "SUNAT",
    tags: ["Comercio", "Tributación"],
    date: "12/09/2022",
    summary: "Establece criterios interpretativos para la aplicación de beneficios tributarios en empresas del sector comercial, con especial énfasis en el comercio electrónico.",
    content: `
      CONSIDERANDO:

      Que, mediante el Decreto Legislativo N° 501, se crea la Superintendencia Nacional de Administración Tributaria - SUNAT;

      Que, el Tribunal Fiscal ha evaluado el recurso de apelación presentado por el contribuyente;

      SE RESUELVE:

      Artículo 1°.- Los criterios interpretativos para la aplicación de beneficios tributarios incluyen: (i) verificación de requisitos formales, (ii) sustancia económica de las operaciones, y (iii) documentación fehaciente.

      Artículo 2°.- Para el comercio electrónico, se deberán considerar adicionalmente los lineamientos establecidos en el Informe N° 045-2022-SUNAT/7T0000.
    `,
    pdfUrl: "/documents/res-004.pdf",
    relatedRegulations: [
      {
        id: "reg-004",
        title: "Decreto Legislativo N° 937 - Texto del Nuevo Régimen Único Simplificado",
        description: "Establece el Nuevo Régimen Único Simplificado (Nuevo RUS).",
        changes: [
          {
            date: "20/12/2022",
            description: "Modificación del artículo 6 sobre categorías del Nuevo RUS"
          },
          {
            date: "05/03/2021",
            description: "Modificación del artículo 3 sobre personas no comprendidas"
          }
        ],
        articles: ["Artículo 3", "Artículo 6", "Artículo 8"]
      }
    ]
  },
  {
    id: "res-005",
    title: "Resolución N° 076-2023-INDECOPI/CPC sobre protección al consumidor en servicios digitales",
    entity: "INDECOPI",
    tags: ["Digital", "Consumidor"],
    date: "28/03/2023",
    summary: "Define los estándares de protección al consumidor aplicables a servicios digitales, incluyendo aspectos relacionados con la privacidad de datos y términos de servicio.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 25868, se crea el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual - INDECOPI;

      Que, la Comisión de Protección al Consumidor ha evaluado la denuncia presentada contra un proveedor de servicios digitales;

      SE RESUELVE:

      Artículo 1°.- Los estándares de protección al consumidor aplicables a servicios digitales incluyen: (i) transparencia en la información, (ii) consentimiento informado para uso de datos, y (iii) mecanismos efectivos de reclamo.

      Artículo 2°.- Los proveedores de servicios digitales deberán adecuar sus términos y condiciones en un plazo no mayor a 90 días calendario.
    `,
    pdfUrl: "/documents/res-005.pdf",
    relatedRegulations: [
      {
        id: "reg-005",
        title: "Ley N° 29571 - Código de Protección y Defensa del Consumidor",
        description: "Establece las normas de protección y defensa de los consumidores.",
        changes: [
          {
            date: "14/02/2023",
            description: "Modificación del artículo 58 sobre servicios públicos regulados"
          },
          {
            date: "07/08/2021",
            description: "Modificación del artículo 24 sobre servicio de atención de reclamos"
          }
        ],
        articles: ["Artículo 24", "Artículo 58", "Artículo 104"]
      }
    ]
  },
];
