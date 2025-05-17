export interface Resolution {
  id: string;
  title: string;
  entity: string;
  tags: string[];
  date: string;
  summary: string;
  content: string;
  pdfUrl?: string;
  relatedRegulations?: RelatedRegulation[];

  // Campos específicos por tipo de resolución
  // SUNAFIL
  n_resolucion?: string;
  fecha_emision?: string;
  acto_impugnado?: string;
  infracciones?: string[];
  medidas_administrativas?: string[];
  sancion_final?: string;
  palabras_clave?: string[];
  sentido?: string;

  // Solo para TASTEM (singular)
  palabra_clave?: string[];

  // Solo para CM
  cuestiones_controvertidas?: string[];
  cuestiones_adicionales?: string[];
  persona_natural?: string;
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
  // Resoluciones CM (Minería)
  {
    id: "res-cm-1038",
    title: "Resolución N° 1038-2024-MINEM/CM",
    entity: "MINEM",
    tags: ["Minería", "Procedimiento Administrativo"],
    date: "20/12/2024",
    n_resolucion: "1038-2024-MINEM/CM",
    fecha_emision: "20.12.2024",
    acto_impugnado: "Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM",
    cuestiones_controvertidas: ["Determinar si la Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM que declara, entre otros, el abandono del petitorio minero 'ING MIN ROJAS' por no efectuar las publicaciones de los carteles de aviso dentro del plazo otorgado, se encuentra conforme a ley."],
    palabras_clave: ["Abandono", "Notificación defectuosa", "Avisos de petitorio minero", "Nulidad"],
    sentido: "Se declara la nulidad de oficio de la Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM",
    summary: "La diligencia de la notificación de los avisos del petitorio minero 'ING MIN ROJAS' evidencian inconsistencias respecto al color de la fachada, por lo cual se considera una notificación defectuosa que no surtió efecto legal alguno, por lo cual corresponde notificar nuevamente la resolución con los avisos de petitorio de concesión minera.",
    content: "La diligencia de la notificación de los avisos del petitorio minero 'ING MIN ROJAS' evidencian inconsistencias respecto al color de la fachada, por lo cual se considera una notificación defectuosa que no surtió efecto legal alguno, por lo cual corresponde notificar nuevamente la resolución con los avisos de petitorio de concesión minera. En consecuencia, al declarar el abandono del petitorio minero por no publicar los avisos de petitorio minero después de haberse advertido una notificación defectuosa de dichos avisos, se incurrió en causal de nulidad.",
    relatedRegulations: [
      {
        id: "reg-cm-001",
        title: "Decreto Supremo N° 004-2019-JUS, Texto Único Ordenado de la Ley N° 27444 - Ley del Procedimiento Administrativo General",
        description: "Normas sobre procedimiento administrativo general",
        changes: [],
        articles: ["Numeral 1.2 del artículo IV del Título Preliminar", "numeral 16.1 del artículo 16", "numerales 21.1 y 21.5 del artículo 21", "numeral 26.1 del artículo 26", "numeral 2) del artículo 148", "artículo 149"]
      }
    ]
  },
  {
    id: "res-cm-1036",
    title: "Resolución N° 1036-2024-MINEM/CM",
    entity: "MINEM",
    tags: ["Minería", "Comunidades Campesinas"],
    date: "20/12/2024",
    n_resolucion: "1036-2024-MINEM/CM",
    fecha_emision: "20.12.2024",
    acto_impugnado: "Resolución de fecha 3 de abril de 2024 emitida por la Directora de Concesiones Mineras del INGEMMET que declara improcedente la oposición formulada por la Comunidad Campesina de Urpay contra el petitorio minero CHARODZ 2.",
    cuestiones_controvertidas: ["Determinar si la Resolución de fecha 3 de abril de 2024 emitida por la Directora de Concesiones Mineras del INGEMMET que declara improcedente la oposición formulada por la Comunidad Campesina de Urpay contra el petitorio minero CHARODZ 2, se emitió conforme a ley."],
    palabras_clave: ["Improcedencia", "Oposición al trámite del petitorio", "Comunidad Campesina", "Derecho al predio", "Convenio 169 OIT", "Consulta previa"],
    sentido: "Se declara infundado el recurso de revisión formulado por la Comunidad Campesina de Urpay",
    summary: "El título de concesión minera no concede la propiedad del terreno superficial donde se ubica; por ende, el derecho al aprovechamiento de los recursos contenidos en el subsuelo, mediante el otorgamiento de una concesión minera, es distinto al derecho de propiedad del terreno superficial.",
    content: "Con el Decreto Supremo N° 020-2020-EM (nuevo Reglamento de Procedimientos Mineros), el titular de una concesión minera con título definitivo es quien puede oponer su mejor derecho a cualquier petitorio minero que se haya formulado sobre todo o parte de un área. Por ende, cuando se formula una oposición alegando afectación de predios u otros derechos distintos al que otorga el título de concesión minera, aquella deviene en improcedente. El título de concesión minera no concede la propiedad del terreno superficial donde se ubica; por ende, el derecho al aprovechamiento de los recursos contenidos en el subsuelo, mediante el otorgamiento de una concesión minera, es distinto al derecho de propiedad del terreno superficial, por lo cual, aquella no restringe ni limita los derechos adquiridos por terceros sobre predios que ocupen como propietarios o poseedores.",
    relatedRegulations: [
      {
        id: "reg-cm-002",
        title: "Constitución",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículo 70"]
      },
      {
        id: "reg-cm-003",
        title: "Ley N° 26821, Ley Orgánica para el Aprovechamiento Sostenible de los Recursos Naturales",
        description: "Normas sobre aprovechamiento de recursos naturales",
        changes: [],
        articles: ["Artículo 19"]
      },
      {
        id: "reg-cm-004",
        title: "Decreto Supremo N° 014-92-EM, Texto Único Ordenado de la Ley General de Minería",
        description: "Normas generales de minería",
        changes: [],
        articles: ["Artículos 9 y 144"]
      }
    ]
  },

  // Resoluciones SUNAFIL
  {
    id: "res-sunafil-182",
    title: "Resolución N° 182-2024-SUNAFIL/TFL-Primera Sala",
    entity: "SUNAFIL",
    tags: ["Seguridad y Salud en el Trabajo", "Accidente Laboral"],
    date: "23/02/2024",
    n_resolucion: "182-2024-SUNAFIL/TFL-Primera Sala",
    fecha_emision: "23.02.2024",
    acto_impugnado: "Resolución de Intendencia 702-2022-SUNAFIL/ILM",
    infracciones: [
      "Incumplimiento de la normativa sobre seguridad y salud en el trabajo relativa al deber de vigilancia",
      "Incumplimiento de la normativa sobre seguridad y salud en el trabajo en materia de identificación de peligros y evaluación de riesgos",
      "Infracción a la labor inspectiva, por negarse injustificadamente al recorrido y constatación, por parte de los inspectores comisionados, del lugar del accidente mortal"
    ],
    medidas_administrativas: [],
    sancion_final: "Se dejó sin efecto la multa inicial de S/. 840,000.00",
    palabras_clave: ["Legalidad", "Debido procedimiento", "Motivación", "Tipicidad", "Presunción de Licitud", "Carga de la Prueba", "Multicausalidad", "Nexo Causal", "Deber de vigilancia", "IPER (Identificación de Peligros y Evaluación de Riesgos)", "Actos Sub Estándar", "Obstrucción labor inspectiva", "(SCTR) Seguro Complementario de Trabajo de Riesgo"],
    sentido: "Fundado el recurso de revisión y se deja sin efecto la sanción impuesta mediante la Resolución de Sub Intendencia 228-2021-SUNAFIL/ILM/SIRE4, confirmada por Resolución de Intendencia 702-2022-SUNAFIL/ILM",
    summary: "La empresa señala que se vulneraron los principios de legalidad, debido procedimiento (falta de motivación) y tipicidad, dado que se le sanciona con dos hechos que configuran una misma conducta infractora.",
    content: "1. Fundamentos del recurso de revisión: La empresa señala que se vulneraron los principios de legalidad, debido procedimiento (falta de motivación) y tipicidad, dado que se le sanciona con dos hechos que configuran una misma conducta infractora (incumplimiento del artículo 28.10 del RLGIT), siendo que tampoco se motiva debidamente las razones por las que la empresa había incurrido en la infracción, obviando la relación causal entre los supuestos incumplimientos y el accidente de trabajo. Asimismo, precisa que no se acreditó el nexo causal exigido entre el incumplimiento y el accidente mortal, siendo que el accidente se debió a actos sub estándar del trabajador, indicando que la empresa sí cumplió con su deber de vigilancia sobre la contratista. En cuanto a la identificación de peligros y evaluación de riesgos, menciona que el IPERC de la empresa contratista sí contemplaba el peligro de golpes por equipos, causa real de la muerte del trabajador. En cuanto a la negativa al ingreso de los inspectores al centro de trabajo, se debió a que dichos inspectores no contaban con la cobertura del SCTR necesaria para ingresar a la zona del accidente (interior mina). Por lo cual, no habría negado el ingreso, siendo que solo se solicitó verificar la cobertura.",
    relatedRegulations: [
      {
        id: "reg-sunafil-001",
        title: "Constitución Política del Perú de 1993",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículos 2 (inciso 24, literal e)", "22", "139 (numeral 9)"]
      },
      {
        id: "reg-sunafil-002",
        title: "Ley N° 29981, Ley que crea la Superintendencia Nacional de Fiscalización Laboral (SUNAFIL)",
        description: "Normas sobre fiscalización laboral",
        changes: [],
        articles: ["Artículos 1", "7", "15"]
      }
    ]
  },

  // Resoluciones TASTEM
  {
    id: "res-tastem-60",
    title: "Resolución N° 60-2024-OS/TASTEM-S2",
    entity: "OSINERGMIN",
    tags: ["Minería", "Seguridad", "Accidente Laboral"],
    date: "30/04/2024",
    n_resolucion: "60-2024-OS/TASTEM-S2",
    fecha_emision: "30.04.2024",
    acto_impugnado: "Resolución de Gerencia de Supervisión Minera 558-2024 por la cual se sancionó por incumplir el Reglamento de Seguridad y Salud Ocupacional, aprobado por D.S. 024-2016-EM",
    infracciones: [
      "La supervisión no verificó el cumplimiento del punto 5 del numeral 5.9 del PETS 'Carguío y voladura en las labores mecanizadas' que señala 'Nunca realizar un disparo sin coordinar con el jefe de guardia y/o supervisor técnico'",
      "La supervisión no ratificó o modificó el IPER continuo de la actividad o tarea: 'carguío de frente' el día del accidente en la labor SN 203"
    ],
    medidas_administrativas: [],
    sancion_final: "21.74 UIT",
    palabra_clave: ["Accidente mortal", "Derecho de defensa", "Legalidad", "Tipicidad", "Causalidad", "Non bis in ídem", "Primacía de la realidad", "Nulidad del procedimiento", "Caso fortuito o fuerza mayor", "Hecho determinante de tercero", "Interpretación extensiva", "Acceso a la asistencia legal", "PETS (procedimiento escrito de trabajo seguro)", "IPERC continuo", "Costo evitado", "Beneficio ilegalmente obtenido", "Incompetencia de Osinergmin"],
    sentido: "Se declara infundado el recurso de apelación interpuesto contra la Resolución de Gerencia de Supervisión Minera 558-2024 y se confirma la citada resolución en todos sus extremos",
    summary: "Los recurrenes incumplieron el numeral 4 del artículo 38 del RSSO dado que no se verificó que los trabajadores cumplan con el PETS 'Carguío y voladuras en labores mecanizadas', toda vez que la realización del disparo no se había coordinado con el Jefe de Guardia y/o supervisor técnico.",
    content: "Sobre los vicios de nulidad del procedimiento y la competencia de Osinergmin: Las competencias de Osinergmin en el sector minero se encuentran previstas en la Ley 29901 y el Decreto Supremo 088-2013-PCM, las cuales establecen las disposiciones legales y técnicas en la actividad minera materia de competencia de Osinergmin, referidas a los aspectos de seguridad de la infraestructura, las instalaciones y la gestión de seguridad de sus operaciones. Teniendo ello en cuenta, en cuanto al incumplimiento del numeral 4 del artículo 38 del RSSO, el hecho se refiere a la no verificación del cumplimiento del PETS 'CARGUÍO Y VOLADURA EN LAS LABORES MECANIZADAS', durante la realización de la tarea de disparo, lo cual constituye un aspecto vinculado con la gestión de la seguridad de las operaciones.",
    relatedRegulations: [
      {
        id: "reg-tastem-001",
        title: "Constitución",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículo 139"]
      },
      {
        id: "reg-tastem-002",
        title: "Decreto Supremo 024-2016-EM",
        description: "Reglamento de Seguridad y Salud Ocupacional",
        changes: [],
        articles: ["Artículo 9", "Artículo 38 (numeral 4)", "Artículo 95"]
      }
    ]
  },

  // Resoluciones TFA
  {
    id: "res-tfa-005",
    title: "Resolución N° 005-2024-OEFA/TFA-SE",
    entity: "OEFA",
    tags: ["Medio Ambiente", "Fiscalización"],
    date: "04/01/2024",
    n_resolucion: "005-2024-OEFA/TFA-SE",
    fecha_emision: "04.01.2024",
    acto_impugnado: "Resolución N° 041-2023-OEFA/DSEM que declaró infundado el recurso de reconsideración interpuesto contra la Resolución N° 0101-2022-OEFA/DSEM que ordenó el cumplimiento de mandatos de carácter particular y medida preventiva",
    cuestiones_controvertidas: ["Determinar si correspondía ordenar los mandatos de carácter particular y la medida preventiva"],
    medidas_administrativas: ["Medida preventiva", "Mandato de carácter particular"],
    palabras_clave: ["Notificación defectuosa", "Debido procedimiento", "Derecho de defensa", "Mandato de carácter particular", "Medida preventiva", "Puntos de monitoreo", "Evaluación ambiental de causalidad", "Prevención"],
    sentido: "Se confirma resolución N° 041-OEFA/DSEM y se declara infundado el recurso de apelación",
    summary: "Transgresión al derecho de defensa y debido procedimiento: El derecho al debido procedimiento implica conocer los cargos o cuestiones imputadas a las conductas de los administrados para luego expresar las posiciones, argumentos y alegatos que sean posibles para lograr una decisión que se ajuste a la legalidad vigente.",
    content: "Transgresión al derecho de defensa y debido procedimiento: El derecho al debido procedimiento implica conocer los cargos o cuestiones imputadas a las conductas de los administrados para luego expresar las posiciones, argumentos y alegatos que sean posibles para lograr una decisión que se ajuste a la legalidad vigente. Es un principio-derecho que concede a los administrados derechos y garantías implícitos a un procedimientos regular y justo, el cual debe ser observado por la Administración pública en la tramitación de los procedimientos administrativos que conduzcan a la creación, modificación o extinción de un derecho o la imposición de una obligación o sanción. El derecho de defensa se encuentra estrechamente vinculado a que se realice una debida notificación de los diferentes actos procedimientales que puedan afectar el ejercicio del mismo. Este derecho se vincula a una debida notificación de los diferentes actos procedimientales. La notificación es una garantía inherente al debido procedimiento.",
    relatedRegulations: [
      {
        id: "reg-tfa-001",
        title: "RCD 006-2019-OEFA/CD",
        description: "Reglamento de Supervisión",
        changes: [],
        articles: ["Art. 25", "26", "art. 4 literal e)"]
      },
      {
        id: "reg-tfa-002",
        title: "Ley del SINEFA",
        description: "Ley del Sistema Nacional de Evaluación y Fiscalización Ambiental",
        changes: [],
        articles: ["Literal b)", "numeral 11.1", "art. 11"]
      }
    ]
  }
];