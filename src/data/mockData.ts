
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
  // TFA Resolutions (OEFA)
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
    id: "res-006",
    title: "Resolución N° 128-2023-OEFA/TFA-SE sobre vertimientos industriales",
    entity: "OEFA",
    tags: ["Industria", "Recursos Hídricos", "Contaminación"],
    date: "22/08/2023",
    summary: "Establece nuevos parámetros y restricciones para los vertimientos industriales en fuentes de agua natural, con énfasis en la protección de ecosistemas acuáticos.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29325, se crea el Sistema Nacional de Evaluación y Fiscalización Ambiental, el cual está a cargo del Organismo de Evaluación y Fiscalización Ambiental - OEFA como ente rector;

      Que, el Tribunal de Fiscalización Ambiental ha evaluado el recurso de apelación presentado por la empresa industrial sobre los parámetros de vertimiento;

      SE RESUELVE:

      Artículo 1°.- Los parámetros para vertimientos industriales deberán considerar: (i) la capacidad de dilución del cuerpo receptor, (ii) los estándares nacionales de calidad ambiental para agua, y (iii) el impacto en ecosistemas acuáticos.

      Artículo 2°.- Las empresas industriales deberán implementar sistemas de tratamiento avanzado en un plazo no mayor a 180 días calendario.
    `,
    pdfUrl: "/documents/res-006.pdf",
    relatedRegulations: [
      {
        id: "reg-006",
        title: "D.S. N° 010-2019-MINAM - Límites Máximos Permisibles para efluentes de actividades industriales",
        description: "Establece los límites máximos permisibles para efluentes de actividades industriales vertidos a cuerpos de agua.",
        changes: [
          {
            date: "15/05/2022",
            description: "Actualización de los parámetros para metales pesados"
          }
        ],
        articles: ["Artículo 3", "Artículo 5", "Anexo 1"]
      }
    ]
  },
  {
    id: "res-007",
    title: "Resolución N° 202-2023-OEFA/TFA-SE sobre monitoreo en actividades petroleras",
    entity: "OEFA",
    tags: ["Hidrocarburos", "Monitoreo", "Amazonía"],
    date: "03/10/2023",
    summary: "Define los criterios técnicos para el monitoreo ambiental en actividades de exploración y explotación petrolera en la Amazonía peruana, con énfasis en ecosistemas sensibles.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29325, se crea el Sistema Nacional de Evaluación y Fiscalización Ambiental, el cual está a cargo del Organismo de Evaluación y Fiscalización Ambiental - OEFA como ente rector;

      Que, el Tribunal de Fiscalización Ambiental ha evaluado el recurso de apelación sobre los criterios de monitoreo ambiental;

      SE RESUELVE:

      Artículo 1°.- Los criterios técnicos para el monitoreo ambiental en la Amazonía incluyen: (i) frecuencia trimestral obligatoria, (ii) puntos de monitoreo en cuerpos de agua superficial y subterránea, y (iii) análisis de biodiversidad.

      Artículo 2°.- Las empresas petroleras deberán presentar informes trimestrales de monitoreo a partir del primer trimestre de 2024.
    `,
    pdfUrl: "/documents/res-007.pdf",
    relatedRegulations: [
      {
        id: "reg-007",
        title: "R.M. N° 120-2021-MINAM - Protocolo de Monitoreo de Calidad Ambiental",
        description: "Establece los protocolos estandarizados para el monitoreo de calidad ambiental.",
        changes: [
          {
            date: "22/02/2023",
            description: "Actualización de protocolos para ecosistemas amazónicos"
          }
        ],
        articles: ["Sección II", "Sección IV", "Anexo 3"]
      }
    ]
  },

  // SUNAFIL Resolutions
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
    id: "res-008",
    title: "Resolución N° 045-2023-SUNAFIL/TFL sobre teletrabajo y fiscalización laboral",
    entity: "SUNAFIL",
    tags: ["Teletrabajo", "Fiscalización", "Laboral"],
    date: "17/03/2023",
    summary: "Establece criterios para la fiscalización laboral en modalidades de teletrabajo y trabajo remoto, adaptándose a las nuevas realidades laborales post-pandemia.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29981, se crea la Superintendencia Nacional de Fiscalización Laboral - SUNAFIL;

      Que, el Tribunal de Fiscalización Laboral ha evaluado el recurso de revisión sobre fiscalización en teletrabajo;

      SE RESUELVE:

      Artículo 1°.- Los criterios para la fiscalización en modalidades de teletrabajo incluyen: (i) verificación de jornada laboral, (ii) condiciones ergonómicas, y (iii) derecho a la desconexión digital.

      Artículo 2°.- Los empleadores deberán implementar registros digitales de cumplimiento de jornada en un plazo no mayor a 60 días calendario.
    `,
    pdfUrl: "/documents/res-008.pdf",
    relatedRegulations: [
      {
        id: "reg-008",
        title: "Ley N° 31572 - Ley del Teletrabajo",
        description: "Establece el marco normativo para el teletrabajo como modalidad especial de prestación de servicios.",
        changes: [
          {
            date: "03/02/2023",
            description: "Promulgación de la nueva ley de teletrabajo"
          }
        ],
        articles: ["Artículo 5", "Artículo 6", "Artículo 9"]
      }
    ]
  },
  {
    id: "res-009",
    title: "Resolución N° 183-2023-SUNAFIL/TFL sobre derechos sindicales en empresas de servicios",
    entity: "SUNAFIL",
    tags: ["Sindical", "Servicios", "Derechos Laborales"],
    date: "28/07/2023",
    summary: "Resuelve controversia sobre la aplicación de derechos sindicales en empresas de intermediación laboral, estableciendo criterios para determinar la representatividad sindical.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 29981, se crea la Superintendencia Nacional de Fiscalización Laboral - SUNAFIL;

      Que, el Tribunal de Fiscalización Laboral ha evaluado el recurso de revisión sobre derechos sindicales;

      SE RESUELVE:

      Artículo 1°.- Los criterios para determinar la representatividad sindical en empresas de intermediación incluyen: (i) número de afiliados efectivos, (ii) antigüedad del sindicato, y (iii) participación en negociaciones colectivas previas.

      Artículo 2°.- Las empresas de intermediación laboral deberán reconocer la representatividad sindical conforme a estos criterios en un plazo no mayor a 30 días calendario.
    `,
    pdfUrl: "/documents/res-009.pdf",
    relatedRegulations: [
      {
        id: "reg-009",
        title: "D.S. N° 010-2003-TR - TUO de la Ley de Relaciones Colectivas de Trabajo",
        description: "Establece el marco normativo para las relaciones colectivas de trabajo.",
        changes: [
          {
            date: "18/04/2022",
            description: "Modificación sobre negociación colectiva por rama de actividad"
          }
        ],
        articles: ["Artículo 4", "Artículo 9", "Artículo 46"]
      }
    ]
  },

  // TASTEM Resolutions (OSINERGMIN)
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
    id: "res-010",
    title: "Resolución N° 078-2023-OSINERGMIN/TASTEM sobre distribución de gas natural",
    entity: "OSINERGMIN",
    tags: ["Gas Natural", "Distribución", "Regulación"],
    date: "12/04/2023",
    summary: "Establece criterios técnicos para la expansión de redes de distribución de gas natural en zonas urbanas, priorizando la seguridad y el acceso equitativo al servicio.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 26734, se crea el Organismo Supervisor de la Inversión en Energía y Minería - OSINERGMIN;

      Que, el Tribunal de Apelaciones de Sanciones en Temas de Energía y Minería ha evaluado el recurso de apelación sobre distribución de gas natural;

      SE RESUELVE:

      Artículo 1°.- Los criterios técnicos para la expansión de redes de gas natural incluyen: (i) estudios de demanda potencial, (ii) análisis de riesgos geográficos, y (iii) programas de capacitación comunitaria.

      Artículo 2°.- Las empresas concesionarias deberán presentar planes quinquenales de expansión siguiendo estos criterios en un plazo no mayor a 90 días calendario.
    `,
    pdfUrl: "/documents/res-010.pdf",
    relatedRegulations: [
      {
        id: "reg-010",
        title: "Ley N° 29496 - Ley de Promoción del Desarrollo de la Industria del Gas Natural",
        description: "Establece el marco normativo para promover el desarrollo de la industria del gas natural.",
        changes: [
          {
            date: "05/03/2023",
            description: "Modificación sobre zonas prioritarias de masificación"
          }
        ],
        articles: ["Artículo 3", "Artículo 7", "Artículo 12"]
      }
    ]
  },
  {
    id: "res-011",
    title: "Resolución N° 125-2023-OSINERGMIN/TASTEM sobre generación eléctrica renovable",
    entity: "OSINERGMIN",
    tags: ["Energía Renovable", "Generación", "Inversión"],
    date: "30/06/2023",
    summary: "Define criterios regulatorios para facilitar la inversión en proyectos de generación eléctrica con fuentes renovables no convencionales, con enfoque en la reducción de emisiones.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 26734, se crea el Organismo Supervisor de la Inversión en Energía y Minería - OSINERGMIN;

      Que, el Tribunal de Apelaciones de Sanciones en Temas de Energía y Minería ha evaluado el recurso de apelación sobre generación renovable;

      SE RESUELVE:

      Artículo 1°.- Los criterios regulatorios para proyectos de generación renovable incluyen: (i) simplificación de trámites administrativos, (ii) incentivos para reducción de emisiones verificables, y (iii) prioridad en el despacho eléctrico.

      Artículo 2°.- Se establece un procedimiento simplificado para la autorización de instalaciones de generación renovable de hasta 20 MW.
    `,
    pdfUrl: "/documents/res-011.pdf",
    relatedRegulations: [
      {
        id: "reg-011",
        title: "D.L. N° 1002 - Decreto Legislativo de promoción de la inversión para la generación de electricidad con energías renovables",
        description: "Establece el marco normativo para promover la inversión en generación eléctrica con recursos renovables.",
        changes: [
          {
            date: "10/05/2022",
            description: "Actualización de mecanismos de promoción"
          }
        ],
        articles: ["Artículo 4", "Artículo 7", "Artículo 11"]
      }
    ]
  },

  // CM Resolutions (INDECOPI)
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
  {
    id: "res-004",
    title: "Resolución N° 089-2022-SUNAT/TF sobre tributación en el sector comercial",
    entity: "INDECOPI",
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
    id: "res-012",
    title: "Resolución N° 103-2023-INDECOPI/CPC sobre prácticas comerciales en comercio electrónico",
    entity: "INDECOPI",
    tags: ["E-commerce", "Publicidad", "Consumidor"],
    date: "15/05/2023",
    summary: "Establece estándares sobre prácticas comerciales en plataformas de comercio electrónico, enfatizando la transparencia en precios, promociones y políticas de devolución.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 25868, se crea el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual - INDECOPI;

      Que, la Comisión de Protección al Consumidor ha evaluado las denuncias presentadas sobre prácticas en comercio electrónico;

      SE RESUELVE:

      Artículo 1°.- Los estándares sobre prácticas comerciales en e-commerce incluyen: (i) visualización clara del precio final incluyendo cargos adicionales, (ii) información sobre stock disponible, y (iii) políticas de cancelación y devolución accesibles.

      Artículo 2°.- Las plataformas de comercio electrónico deberán implementar estas prácticas en un plazo no mayor a 60 días calendario.
    `,
    pdfUrl: "/documents/res-012.pdf",
    relatedRegulations: [
      {
        id: "reg-012",
        title: "Ley N° 29571 - Código de Protección y Defensa del Consumidor",
        description: "Establece las normas de protección y defensa de los consumidores.",
        changes: [
          {
            date: "14/02/2023",
            description: "Modificación del artículo 58 sobre servicios públicos regulados"
          }
        ],
        articles: ["Artículo 1", "Artículo 2", "Artículo 3"]
      }
    ]
  },
  {
    id: "res-013",
    title: "Resolución N° 154-2023-INDECOPI/CPC sobre propiedad intelectual en contenido digital",
    entity: "INDECOPI",
    tags: ["Propiedad Intelectual", "Digital", "Derechos de Autor"],
    date: "08/08/2023",
    summary: "Resuelve controversia sobre derechos de autor en contenidos generados por algoritmos de inteligencia artificial, estableciendo criterios para determinar la autoría y protección.",
    content: `
      CONSIDERANDO:

      Que, mediante la Ley N° 25868, se crea el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual - INDECOPI;

      Que, la Comisión de Derechos de Autor ha evaluado la controversia sobre contenido generado por IA;

      SE RESUELVE:

      Artículo 1°.- Los criterios para determinar la autoría en contenidos generados por IA incluyen: (i) grado de intervención humana en la creación, (ii) originalidad de los parámetros de entrada, y (iii) nivel de predictibilidad del resultado.

      Artículo 2°.- Se establece que los contenidos generados íntegramente por IA sin intervención humana significativa no son susceptibles de protección por derechos de autor.
    `,
    pdfUrl: "/documents/res-013.pdf",
    relatedRegulations: [
      {
        id: "reg-013",
        title: "Decreto Legislativo N° 822 - Ley sobre el Derecho de Autor",
        description: "Establece el régimen de protección de los derechos de autor y derechos conexos.",
        changes: [
          {
            date: "25/11/2022",
            description: "Actualización sobre obras en entorno digital"
          }
        ],
        articles: ["Artículo 2", "Artículo 5", "Artículo 31"]
      }
    ]
  },
];

