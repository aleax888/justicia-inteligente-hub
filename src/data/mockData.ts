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

  // Solo para TASTEM (singular)
  jurisprudencia_citada?: string[];

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
    palabras_clave: [
      "Legalidad",
      "Debido procedimiento",
      "Motivación",
      "Tipicidad",
      "Presunción de Licitud",
      "Carga de la Prueba",
      "Multicausalidad",
      "Nexo Causal",
      "Deber de vigilancia",
      "IPER (Identificación de Peligros y Evaluación de Riesgos)",
      "Actos Sub Estándar",
      "Obstrucción labor inspectiva",
      "(SCTR) Seguro Complementario de Trabajo de Riesgo"
    ],
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
        articles: ["Artículo 1", "Artículo 7", "Artículo 15"]
      }
    ]
  },
  {
    id: "res-sunafil-001",
    title: "Resolución N° 001-2025-SUNAFIL/TFL-Primera Sala",
    entity: "SUNAFIL",
    tags: ["Seguridad y Salud en el Trabajo", "Accidente Laboral"],
    date: "10/01/2025",
    n_resolucion: "001-2025-SUNAFIL/TFL-Primera Sala",
    fecha_emision: "10.01.2025",
    acto_impugnado: "Resolución de Intendencia 873-2022-SUNAFIL/ILM",
    infracciones: [
      "Incumplimiento de la normativa SST relativa a la supervisión eficiente",
      "Incumplimiento de la normativa SST relativa al PETS",
      "Incumplimiento de la normativa SST relativa al IPER",
      "Incumplimiento por no contar con el registro de accidente de trabajo conforme a ley",
      "Incumplimiento de medida inspectiva"
    ],
    medidas_administrativas: [],
    sancion_final: "",
    palabras_clave: [
      "Recurso de revisión",
      "Inspección laboral",
      "Seguridad y Salud en el Trabajo",
      "Accidente de trabajo",
      "Identificación de Peligros y Evaluación de Riesgos Continuo (IPERC)",
      "Procedimiento Escrito de Trabajo Seguro (PETS)",
      "Nexo causal",
      "Non Bis In Ídem",
      "Debido procedimiento",
      "Medida inspectiva de requerimiento",
      "Condición subestándar",
      "Estallido de rocas"
    ],
    sentido: "Fundado EN PARTE el recurso de revisión interpuesto contra la Resolución de Intendencia N° 873-2022-SUNAFIL/ILM",
    summary: "1. Delimitación de 'accidente de trabajo' y las causas que lo originan (numerales 6.1 a 6.5)",
    content: "1. Delimitación de 'accidente de trabajo' y las causas que lo originan (numerales 6.1 a 6.5)\n2. Alcances de la normativa en materia de seguridad y salud en el trabajo y la prevención de riesgos laborales (numerales 6.6 a 6.11)\n3. Incumplimiento de la normativa SST que ocasiona un accidente mortal.\n3.1 Tipo infractor (numeral 6.12)\n3.2 Causas de un accidente y evaluación de nexo causal (numerales 6.13 a 6.18)\n3.3 Teorías sobre atribución de responsabilidad en caso de accidente mortal (6.19)\n4. Se confirma nexo causal entre la infracción relacionada con identificación de Peligros y Evaluación de Riesgos y el accidente de trabajo (6.21 a 6.31)\n5. Se confirma la relación de causalidad entre la infracción referida al Procedimiento Escrito de Trabajo Seguro (PETS) y el accidente de trabajo (6.32 a 6.36)\n6. Se deja sin efecto la infracción referida a la supervisión efectiva de las labores de los trabajadores (numerales 6.37 a 6.43)\n7. Inobservancia del plazo legal para emisión del informe final de instrucción y debido procedimiento (numerales 6.47 - 6.48)\n8. Principio non bis in ídem (6.49 a 6.51)",
    relatedRegulations: [
      {
        id: "reg-sunafil-003",
        title: "Ley N° 29783, Ley de Seguridad y Salud en el Trabajo (LSST)",
        description: "Normas sobre seguridad y salud en el trabajo",
        changes: [],
        articles: ["Artículos 21", "36", "41", "50", "57"]
      },
      {
        id: "reg-sunafil-004",
        title: "Ley N° 28806, Ley General de Inspección del Trabajo (LGIT)",
        description: "Normas sobre inspección laboral",
        changes: [],
        articles: ["Artículo 41", "Artículo 44", "Artículo 49"]
      }
    ]
  },
  {
    id: "res-tastem-004",
    title: "Resolución N° 4-2024-OS/TASTEM-S2",
    entity: "OSINERGMIN",
    tags: ["Minería", "Seguridad", "Refugios mineros"],
    date: "15/01/2024",
    n_resolucion: "4-2024-OS/TASTEM-S2",
    fecha_emision: "15.01.2024",
    acto_impugnado: "",
    infracciones: [],
    medidas_administrativas: [],
    sancion_final: "",
    palabra_clave: ["Refugios mineros"],
    sentido: "Infundado recurso de apelación. Confirma en todos los extremos",
    summary: "Nulidad o revocación cálculo de multa. Señala que no ha incurrido en un incumplimiento al art. 151 del RSSO dado que la instalación de refugios en las labores, observadas durante la supervisión, se realizó de acuerdo con el Estudio de Riesgos previsto en el Anexo 19 del RSSO.",
    content: "1. Señala que no ha incurrido en un incumplimiento al art. 151 del RSSO dado que la instalación de refugios en las labores, observadas durante la supervisión, se realizó de acuerdo con el Estudio de Riesgos previsto en el Anexo 19 del RSSO, según el cual justifica técnicamente por qué no se consideró la implementación de refugios mineros en ciertas zonas. TASTEM: En el Acta quedó acreditado el incumplimiento a partir de la supervisión; el estudio de riesgo no limita lo dispuesto en la norma respecto a la ubicación de refugios mineros a distancias no mayores a 500 metros de los frentes de trabajo, sin condición alguna (xej bajo riesgo).\n2. Además, en cuanto a la multa, indica que no corresponde considerar el costo del Ingeniero de seguridad para el cálculo, dado que su función es ajena a la especialidad relacionada con la implementación de un refugio. Lo mismo ocurriría con el Jefe de Guardia de Mina y el Superintendente de Mina. Además indica que sí cuenta en planilla con dichos trabajadores, por lo cual no habría un CE en ese extremo.\nTASTEM: En un escenario de cumplimiento normativo, sí corresponde considerar todos los recursos (humanos y materiales) necesarios para garantizar la vigencia y observancia de las normas de seguridad; la identificación del escenario de cumplimiento y los recursos necesarios a tal efecto se determina en base a las normas incumplidas; la inclusión del responsable de seguridad responde al aseguramiento del cumplimiento de la norma (RSSO); el costo de 1 mes de suelo, es un periodo mínimo razonable; la determinación de los costos se relacionan con el escenario de cumplimiento, con independencia de si el administrado contaba o no con los profesionales en su planilla.",
    relatedRegulations: [
      {
        id: "reg-tastem-001",
        title: "RSSO",
        description: "Reglamento de Seguridad y Salud Ocupacional",
        changes: [],
        articles: ["Artículo 151"]
      }
    ]
  },
  {
    id: "res-tastem-060",
    title: "Resolución N° 60-2024-OS/TASTEM-S2",
    entity: "OSINERGMIN",
    tags: ["Minería", "Seguridad", "Accidente mortal"],
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
    palabra_clave: [
      "Accidente mortal",
      "Derecho de defensa",
      "Legalidad",
      "Tipicidad",
      "Causalidad",
      "Non bis in ídem",
      "Primacía de la realidad",
      "Nulidad del procedimiento",
      "Caso fortuito o fuerza mayor",
      "Hecho determinante de tercero",
      "Interpretación extensiva",
      "Acceso a la asistencia legal",
      "PETS (procedimiento escrito de trabajo seguro)",
      "IPERC continuo",
      "Costo evitado",
      "Beneficio ilegalmente obtenido",
      "Incompetencia de Osinergmin"
    ],
    sentido: "Se declara infundado el recurso de apelación interpuesto contra la Resolución de Gerencia de Supervisión Minera 558-2024 y se confirma la citada resolución en todos sus extremos",
    summary: "Sobre los vicios de nulidad del procedimiento y la competencia de Osinergmin: Las competencias de Osinergmin en el sector minero se encuentran previstas en la Ley 29901 y el Decreto Supremo 088-2013-PCM.",
    content: "Sobre los vicios de nulidad del procedimiento y la competencia de Osinergmin: Las competencias de Osinergmin en el sector minero se encuentran previstas en la Ley 29901 y el Decreto Supremo 088-2013-PCM, las cuales establecen las disposiciones legales y técnicas en la actividad minera materia de competencia de Osinergmin, referidas a los aspectos de seguridad de la infraestructura, las instalaciones y la gestión de seguridad de sus operaciones. Teniendo ello en cuenta, en cuanto al incumplimiento del numeral 4 del artículo 38 del RSSO, el hecho se refiere a la no verificación del cumplimiento del PETS 'CARGUÍO Y VOLADURA EN LAS LABORES MECANIZADAS', durante la realización de la tarea de disparo, lo cual constituye un aspecto vinculado con la gestión de la seguridad de las operaciones. En cuanto al artículo 95 del RSSO, el hecho referido a que el supervisor no ratificó o modificó el IPERC Continuo de la actividad o tarea 'Carguío de frente' el día del accidente, constituye un aspecto vinculado con la gestión de la seguridad de las operaciones. Por ende, los hechos imputados sí son competencia de Osinergmin.\nSobre las manifestaciones de los trabajadores: La toma de manifestaciones en la fiscalización se realizó de conformidad con la normativa vigente, no verificándose vulneración alguna a los principios de legalidad y el debido procedimiento, ni del derecho de defensa.\nSobre la infracción 1: Los recurrenes incumplieron el numeral 4 del artículo 38 del RSSO dado que no se veeificó que los trabajadores cumplan con el PETS 'Carguío y voladuras en labores mecanizadas', toda vez que la realización del disparo no se había coordinado con el Jefe de Guardia y/o supervisor técnico. Las acciones de los trabajadores del titular minero o de la contratista minera no eximen de responsabilidad a las recurrentes, al ser responsables del cumplimiento de la norma. Los trabajadorors no son terceros ajenos a los recurrentes, dado que ejecutan in situ las tareas encargadas y justamente es respecto de ellos que los recurrentes, a fin de cumplir con la norma, deben verificar que cumplan el PETS al realizar la labor. Por ende, no se vulnera el principio de causalidad, siendo que la acción del trabajador accidentado no constituye un supuesto de caso fortuitoo fuerza mayor.\nSobre la infracción 2: De la revisión del IPERC Continuo elaborado para la actividad de 'Carguío de frente', se verifica que dicho documento no contiene la firma del supervisor, lo que evidencia que el supervisor no ratificó ni modificó el IPERC Continuo. En cuanto a la declaración jurada del supervisor respecto a que sí habría ratificado el IPERC, de conformidad con el artículo 95 del RSSO Y aNEXO 7, la ratificación o modificación debe ejecutarse en el mismo formato de IPERC; por lo cual, dicha declaración no desvirtúa lo verificado en el formato del IPERC, el cual no fue suscrito por el supervisor. Por ende, se acredita el incumplimiento al artículo 95 del RSSO, no verificándose vulneración alguna a los Principios de Legalidad y Tipicidad, dado que no se ha realizado una interpretación extensiva de la norma y el hecho imputado se condice con el supuesto previsto en la norma.\nSobre las multas impuestas: Para la determinación del beneficio económico se consderó el escenario de cumplimiento de cada una de las conducts infractoras, escenario que supone la inclusión de la valorización de la labor desarrollada por los responsables de seguridad y los especialisistas encargados. No se trata del mismo escenario de cumplimiento, dado que son 2 hechos e infracciones distintas, por lo cual el escenario de cumplimiento es distinto e independiente para cada infracción. Se aplicó la metodología del costo evitado asociado atribuyendo el valor a las inversiones que debieron realizar para contar con los responsables y especialistas que cumplan con la obligación normativa, lo cual no ocurrió, puesto que, si bien el recurrente alega que sí contaba con dichos profesionales, lo cierto es que no se cumplió la norma. Por lo cual es correcta la aplicación del costo evitado, dado que dicho costo incluye la inversión para contar con profesionales que, en el ejercicio de sus funciones, coadyuven al cumplimiento normativo. Por ende, no se vulnera el principio de razonabilidad, habiendose motivado debidamente el sustento para la inclusión del costo por los responsables de seguridad y especialistas encargados.",
    relatedRegulations: [
      {
        id: "reg-tastem-002",
        title: "Constitución",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículo 139"]
      },
      {
        id: "reg-tastem-003",
        title: "Decreto Supremo 024-2016-EM",
        description: "Reglamento de Seguridad y Salud Ocupacional",
        changes: [],
        articles: ["Artículo 9", "Artículo 38 (numeral 4)", "Artículo 95"]
      },
      {
        id: "reg-tastem-004",
        title: "Decreto Supremo 004-2019-JUS (TUO de la Ley del Procedimiento Administrativo General)",
        description: "Normas sobre procedimiento administrativo",
        changes: [],
        articles: ["Artículo 248 (numeral 8)", "257 (numeral 1, literal a)", "Artículo IV del Título Preliminar"]
      }
    ]
  },
  {
    id: "res-tastem-066",
    title: "Resolución N° 66-2024-OS/TASTEM-S2",
    entity: "OSINERGMIN",
    tags: ["Minería", "Depósito de relaves", "Infracciones"],
    date: "17/05/2024",
    n_resolucion: "66-2024-OS/TASTEM-S2",
    fecha_emision: "17.05.2024",
    acto_impugnado: "Resolución de Gerencia de Supervisión Minera 981-2024 por la cual se le sancionó por incumplir el Reglamento de Procedimientos Mineros, aprobado por Decreto Supremo N° 020-2020-EM",
    infracciones: [
      "Por construir el depósito de relaves Tajo Sur (Contenedor de Relaves N° 8), con un área aproximada de vaso de 21 139 m2, sin contar con la autorización de construcción de la Dirección General de Minería (artículo 87 del D.S. 020-2020-EM)",
      "Por operar el depósito de relaves Tajo Sur (Contenedor de Relaves N° 8) para la disposición de un volumen de 51 400.00 m3 hasta la cota promedio 4 340 msnm, sin contar con la autorización de funcionamiento de la Dirección General de Minería (artículo 86 del D.S. 020-2020-EM)"
    ],
    medidas_administrativas: [],
    sancion_final: "150.88 UIT",
    palabra_clave: [
      "Costo por responsables y especialistas",
      "Costo por abogado",
      "Pago mínimo referencial",
      "Salary Pack",
      "Costo de estudio de diseño de depósito de relaves",
      "Periodo de capitalización",
      "Elevar apelación dentro del plazo",
      "Reconocimiento de responsabilidad sin efecto",
      "Razonabilidad",
      "Beneficio ilícito",
      "Graduación de multas"
    ],
    sentido: "1. Se deja sin efecto el beneficio por reconocimiento de responsabilidad otorgado mediante Resolución N° 981-2024. 2. Se declara infundado el recurso de apelación interpuesto contra la Resolución N° 981-2024, confirmándola. 3. Se establece un nuevo monto de multa por las 2 infracciones (incrementa de 59.17 a 150.88 UIT)",
    summary: "CUESTIÓN PREVIA: 1. Se exhorta a la autoridad sancionadora observar el plazo previsto en el RFS para la elevación de los recursos de apelación. (numeral 4) 2. Se deja sin efecto el beneficio por reconocimiento de responsabilidad, lo cual determina el incremento de la multa. (numeral 5)",
    content: "CUESTIÓN PREVIA:\n1. Se exhorta a la autoridad sancionadora observar el plazo previsto en el RFS para la elevación de los recursos de apelación. (numeral 4)\n2. Se deja sin efecto el beneficio por reconocimiento de responsabilidad, lo cual determina el incremento de la multa. (numeral 5)\nCÁLCULO DE LA SANCIÓN POR LAS INFRACCIONES 1 Y 2\n- Fundamentos respecto al cálculo de la sanción: marco legal (numeral 6: párrafos 1 a 8).\n- Costo por responsable de seguridad y especialistas encargados (numeral 6: literal i)\n- Costo del estudio de diseño de depósito de relaves: costo por equipo de especialistas (numeral 6, literal ii)\n- Periodo de capitalización (numeral 6, literal iii)",
    relatedRegulations: [
      {
        id: "reg-tastem-005",
        title: "Decreto Supremo N° 020-2020-EM - Reglamento de Procedimientos Mineros",
        description: "Normas sobre procedimientos mineros",
        changes: [],
        articles: ["Artículos 86 y 87"]
      }
    ]
  },
  {
    id: "res-tfa-005",
    title: "Resolución N° 005-2024-OEFA/TFA-SE",
    entity: "OEFA",
    tags: ["Medio Ambiente", "Fiscalización", "Debido procedimiento"],
    date: "04/01/2024",
    n_resolucion: "005-2024-OEFA/TFA-SE",
    fecha_emision: "04.01.2024",
    acto_impugnado: "Resolución N° 041-2023-OEFA/DSEM que declaró infundado el recurso de reconsideración interpuesto contra la Resolución N° 0101-2022-OEFA/DSEM que ordenó el cumplimiento de mandatos de carácter particular y medida preventiva",
    cuestiones_controvertidas: ["Determinar si correspondía ordenar los mandatos de carácter particular y la medida preventiva"],
    infracciones: [],
    medidas_administrativas: ["Medida preventiva", "Mandato de carácter particular"],
    sancion_final: "",
    palabras_clave: [
      "Notificación defectuosa",
      "Debido procedimiento",
      "Derecho de defensa",
      "Mandato de carácter particular",
      "Medida preventiva",
      "Puntos de monitoreo",
      "Evaluación ambiental de causalidad",
      "Prevención"
    ],
    sentido: "Se confirma resolución N° 041-OEFA/DSEM y se declara infundado el recurso de apelación",
    summary: "Transgresión al derecho de defensa y debido procedimiento: El derecho al debido procedimiento implica conocer los cargos o cuestiones imputadas a las conductas de los administrados.",
    content: "Transgresión al derecho de defensa y debido procedimiento:\n- El derecho al debido procedimiento implica conocer los cargos o cuestiones imputadas a las conductas de los administrados para luego expresar las posiciones, argumentos y alegatos que sean posibles para lograr una decisión que se ajuste a la legalidad vigente. Es un principio-derecho que concede a los administrados derechos y garantías implícitos a un procedimientos regular y justo, el cual debe ser observado por la Administración pública en la tramitación de los procedimientos administrativos que conduzcan a la creación, modificación o extinción de un derecho o la imposición de una obligación o sanción.\n- El derecho de defensa se encuentra estrechamente vinculado a que se realice una debida notificación de los diferentes actos procedimientales que puedan afectar el ejercicio del mismo. Este derecho se vincula a una debida notificación de los diferentes actos procedimientales. La notificación es una garantía inherente al debido procedimiento.\nEl Reglamento de Supervisión (RCD 006-2019-OEFA/CD) no establece que para el dictado de un mandato de carácter particular y/o de una medida preventiva deba efectuarse previamente la notificación del Informe de Supervisión.\n\nDe acuerdo al art. 26 del Reglamento de Supervisión, para el dictado de mandatos de carácter particular se requiere la concurrencia de 3 elementos. A través del mandato de carácter particular 1 (inventario de emisiones SO2) se busca obtener información a partir de la cual sea posible evaluar los controles ambientales que permitan mitigar y/o reducir las concentraciones de SO2",
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
    ],
    jurisprudencia_citada: []
  },
  {
    id: "res-tfa-016",
    title: "Resolución N° 016-2024-OEFA/TFA-SE",
    entity: "OEFA",
    tags: ["Medio Ambiente", "Pasivos ambientales", "Responsabilidad administrativa"],
    date: "08/01/2024",
    n_resolucion: "016-2024-OEFA/TFA-SE",
    fecha_emision: "08.01.2024",
    acto_impugnado: "Resolución Directoral 1449-2023-OEFA/DFAI que declaró responsabilidad administrativa y la imposición de una multa",
    cuestiones_controvertidas: [],
    infracciones: ["Incumplimiento de medidas preventivas (4 conductas infractoras)"],
    medidas_administrativas: [],
    sancion_final: "320,741 UIT",
    palabras_clave: [
      "Legalidad",
      "Debido procedimiento",
      "Razonabilidad",
      "Causalidad",
      "Responsabilidad objetiva",
      "Caso fortuito / fuerza mayor",
      "Pasivo ambiental minero",
      "Límites Máximos Permisibles",
      "Medida preventiva",
      "Valor de la UIT",
      "Tipo de cambio"
    ],
    sentido: "Se confirma la responsabilidad administrativa. Se confirma la multa impuesta.",
    summary: "1. Delimitación del pronunciamiento: El cuestionamiento de medidas preventivas incumplidas no determina un nuevo pronunciamiento en segunda instancia.",
    content: "1. Delimitación del pronunciamiento: El cuestionamiento de medidas preventivas incumplidas no determina un nuevo pronunciamiento en segunda instancia. A tal efecto, el administrado debió cuestionar dichas medidas dentro del plazo legal establecido, posterior a su dictado.\n2. Análisis de cuestiones controvertidas:\n2.1 Determinación de responsabilidad administrativa por las conductas infractoras 1 a 4. El TFA indica que las medidas preventivas dictadas buscaban prevenir un daño irreparable al ambiente. En tal sentido, se describen las 4 conductas infractoras por el incumplimiento de medidas preventivas relacionadas con la captación y tratamiento de efluentes de bocaminas y escorrentía superficial, la captación y derivación de agua de afloramiento y la remediación de suelos y de una laguna, afectados por los pasivos ambientales mineros. Al respecto, el TFA señala que el titular minero, al ser responsable de la ejecuciónde proyectos de remediación de pasivos ambientales y planes de cierre, está sujeto a fiscalización; en esa línea, precisa que el procedimiento Invierte.pe no exime al titular de cumplir con la normativa ambiental, siendo que la prevención del daño es exigible a toda entidad. Asimismo, en cuanto al muestreo ambiental, se desestima el argumento ya que el titular minero no presentó observaciones durante la supervisión. En cuanto a la falta de transferencia de fondos alegada como un hecho determinante de tercero, el TFA señala que no se considera un hecho extraordinario, imprevisible e irresistible. Lo mismo se menciona respecto a la problemática social y climática alegada por el titular, lo cual le habría impedido cumplir con las medidas preventivas dictadas.\n2.2 Determinacion del cálculo de la multa impuesta\nEl TFA considera que la primera instancia utilizó correctamente el valor de la UIT y el tipo de cambio, desestimando el alegato del titular.",
    relatedRegulations: [
      {
        id: "reg-tfa-003",
        title: "Constitución",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículos 2 (inciso 24)", "60", "139.1"]
      },
      {
        id: "reg-tfa-004",
        title: "RCD 007-2015-OEFA/CD",
        description: "Reglamento de Medidas Administrativas",
        changes: [],
        articles: ["Artículos 39", "40"]
      }
    ],
    jurisprudencia_citada: []
  },
  {
    id: "res-tfa-031",
    title: "Resolución N° 031-2024-OEFA/TFA-SE",
    entity: "OEFA",
    tags: ["Medio Ambiente", "Transporte de mineral", "Medidas preventivas"],
    date: "09/01/2024",
    n_resolucion: "031-2024-OEFA/TFA-SE",
    fecha_emision: "09.01.2024",
    acto_impugnado: "Resolución Directoral 1425-2023-OEFA/DFAI que declaró la responsabilidad administrativa y la imposición de multa",
    cuestiones_controvertidas: [],
    infracciones: ["Incumplimiento de medida preventiva: El administrado incumplió la medida preventiva del artículo 1 de la RD 046-2019-DSEM, al transportar camiones de concentrado fuera del horario de partida y llegada establecido en su instrumento de gestión ambiental durante los días 18, 19 y 20 de junio; 3 y 4 julio; y 5 de agosto de 2019."],
    medidas_administrativas: [],
    sancion_final: "112,436 UIT",
    palabras_clave: [
      "Legalidad",
      "Tipicidad",
      "Irretroactividad",
      "Verdad Material",
      "Prohibición de reforma en peor",
      "Fiscalización basada en evidencia",
      "Medida preventiva",
      "Transporte de mineral",
      "Revocación y reformulación de multa"
    ],
    sentido: "Se confirma la responsabilidad administrativa. Se revoca y reformula la multa impuesta en primera instancia.",
    summary: "1. Principio de prohibición de reforma en peor: El titular minero solicita que, en caso se declare nulo todo lo actuado, el TFA disponga que se pronuncie sobre el principio de reforma en peor para que se aplique al nuevo pronunciamiento a emitir.",
    content: "1. Principio de prohibición de reforma en peor: El titular minero solicita que, en caso se declare nulo todo lo actuado, el TFA disponga que se pronuncie sobre el principio de reforma en peor para que se aplique al nuevo pronunciamiento a emitir. Al respecto, el TFA señala que su análisis se basará en la normativa vigente y considerando los principios que orientan el ejercicio de la potestad sancionadora de la Administración Pública.\n2. Análisis de las cuestiones controvertidas:\n2.1 Determinación de responsabilidad administrativa por la conducta infractora.\nEn cuanto a la inexigibilidad de la medida preventiva alegada por el administrado, el TFA analizó el principio de legalidad y tipicidad y concluyó que, si bien la medida preventiva fue levantada, esto se hizo en un periodo posterior al plazo de cumplimiento de dicha medida. En consecuencia, el referido levantamiento no tiene efectos retroactivos, por lo tanto, no exime al titular por el incumplimiento anterior.\nEn cuanto al argumento referido a los puntos de partida y llegada a la unidad minera, el TFA desestimó lo señalado por el titular minero respecto a la distancia entre garitas y la intervención policial, señalando que se debió prever posibles retrasos.\nTambién se alega que no se registraron las placas de rodaje de todos los vehículos en el conteo, lo cual invalidaba la verificación del incumplimiento. Al respecto, el TFA menciona que la forma de registro efectuada por la Autoridad de Supervisión, no alteraba la determinación del incumplimiento, siendo que se obtuvieron fotografías de las unidades fuera del horario.\nFinalmente, se hace referencia a las recomendaciones de la OCDE sobre la fiscalización basada en evidencia. Sobre el particular, el TFA señala que la supervisión efectuada y la documentación obtenida (actas, informes, fotografías), constituían evidencia del presunto incumplimiento, acatando así las recomendaciones de la OCDE, precisando que en un procedimiento administrativo sancionador, el administrado debe desvirtuar las pruebas de la administración para eximirse de responsabilidad.\n2.2 Determinacion del cálculo de la multa impuesta\nDado que se modificó el valor del ítem 1.2 del factor f1, el TFA recalculó la multa, resultando en un monto de 112,436 UIT. En consecuencia, revocó parcialmente la resolución apelada en el extremo del cálculo de la multa y la reformó a este nuevo monto",
    relatedRegulations: [
      {
        id: "reg-tfa-005",
        title: "Constitución",
        description: "Normas constitucionales",
        changes: [],
        articles: ["Artículos 2 (numeral 22)"]
      },
      {
        id: "reg-tfa-006",
        title: "Resolución de Consejo Directivo N° 006-2019-OEFA/CD",
        description: "Reglamento de Supervisión",
        changes: [],
        articles: ["Artículo 22", "27", "34"]
      }
    ],
    jurisprudencia_citada: [
      "Sentencia del Tribunal Constitucional recaída en el Expediente Nº 0048-2004-AI/TC (fundamento jurídico 33)",
      "Sentencia del Tribunal Constitucional recaída en el Expediente Nº 03343-2007-PA/TC (fundamento jurídico 4)",
      "Sentencia T-760/07 de la Corte Constitucional de Colombia"
    ]
  },
  {
    id: "res-cm-1038",
    title: "Resolución N° 1038-2024-MINEM/CM",
    entity: "MINEM",
    tags: ["Minería", "Procedimiento Administrativo"],
    date: "20/12/2024",
    n_resolucion: "1038-2024-MINEM/CM",
    fecha_emision: "20.12.2024",
    acto_impugnado: "Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM",
    cuestiones_controvertidas: [
      "Determinar si la Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM que declara, entre otros, el abandono del petitorio minero 'ING MIN ROJAS' por no efectuar las publicaciones de los carteles de aviso dentro del plazo otorgado, se encuentra conforme a ley."
    ],
    palabras_clave: [
      "Abandono",
      "Notificación defectuosa",
      "Avisos de petitorio minero",
      "Nulidad"
    ],
    sentido: "Se declara la nulidad de oficio de la Resolución de Presidencia N° 2762-2023-INGEMMET/PE/PM. Asimismo, la autoridad minera (INGEMMET) deberá volver a notificar la resolución indicada con los avisos de petitorio de concesión minera y proseguir el procedimiento orginario minero conforme a Ley.",
    summary: "La diligencia de la notificación de los avisos del petitorio minero 'ING MIN ROJAS' evidencian inconsistencias respecto al color de la fachada, por lo cual se considera una notificación defectuosa que no surtió efecto legal alguno.",
    content: "La diligencia de la notificación de los avisos del petitorio minero 'ING MIN ROJAS' evidencian inconsistencias respecto al color de la fachada, por lo cual se considera una notificación defectuosa que no surtió efecto legal alguno, por lo cual corresponde notificar nuevamente la resolución con los avisos de petitorio de concesión minera. En consecuencia, al declarar el abandono del petitorio minero por no publicar los avisos de petitorio minero después de haberse advertido una notificación defectuosa de dichos avisos, se incurrió en causal de nulidad.",
    relatedRegulations: [
      {
        id: "reg-cm-001",
        title: "Decreto Supremo N° 004-2019-JUS, Texto Único Ordenado de la Ley N° 27444 - Ley del Procedimiento Administrativo General",
        description: "Normas sobre procedimiento administrativo general",
        changes: [],
        articles: [
          "Numeral 1.2 del artículo IV del Título Preliminar",
          "numeral 16.1 del artículo 16",
          "numerales 21.1 y 21.5 del artículo 21",
          "numeral 26.1 del artículo 26",
          "numeral 2) del artículo 148",
          "artículo 149"
        ]
      }
    ],
    jurisprudencia_citada: [],
    persona_natural: ""
  },
  {
    id: "res-cm-1036",
    title: "Resolución N° 1036-2024-MINEM/CM",
    entity: "MINEM",
    tags: ["Minería", "Comunidades Campesinas"],
    date: "20/12/2024",
    n_resolucion: "1036-2024-MINEM/CM",
    fecha_emision: "20.12.2024",
    acto_impugnado: "Resolución de fecha 3 de abril de 2024 emitida por la Directora de Concesiones Mineras del INGEMMET que declara improcedente la oposición formulada por la Comunidad Campesina de Urpay contra el petitorio minero CHARODZ 2",
    cuestiones_controvertidas: [
      "Determinar si la Resolución de fecha 3 de abril de 2024 emitida por la Directora de Concesiones Mineras del INGEMMET que declara improcedente la oposición formulada por la Comunidad Campesina de Urpay contra el petitorio minero CHARODZ 2, se emitió conforme a ley."
    ],
    palabras_clave: [
      "Improcedencia",
      "Oposición al trámite del petitorio",
      "Comunidad Campesina",
      "Derecho al predio",
      "Convenio 169 OIT",
      "Consulta previa"
    ],
    sentido: "Se declara infundado el recurso de revisión formulado por la Comunidad Campesina de Urpay contra la resolución de fecha 03 de abril de 2024, de la Directora (e) de Concesiones Mineras del Instituto Geológico, Minero y Metalúrgico- INGEMMET, la que se confirma.",
    summary: "Con el Decreto Supremo N° 020-2020-EM (nuevo Reglamento de Procedimientos Mineros), el titular de una concesión minera con título definitivo es quien puede oponer su mejor derecho a cualquier petitorio minero que se haya formulado sobre todo o parte de un área.",
    content: "Con el Decreto Supremo N° 020-2020-EM (nuevo Reglamento de Procedimientos Mineros), el titular de una concesión minera con título definitivo es quien puede oponer su mejor derecho a cualquier petitorio minero que se haya formulado sobre todo o parte de un área. Por ende, cuando se formula una oposición alegando afectación de predios u otros derechos distintos al que otorga el título de concesión minera, aquella deviene en improcedente. El título de concesión minera no concede la propiedad del terreno superficial donde se ubica; por ende, el derecho al aprovechamiento de los recursos contenidos en el subsuelo, mediante el otorgamiento de una concesión minera, es distinto al derecho de propiedad del terreno superficial, por lo cual, aquella no restringe ni limita los derechos adquiridos por terceros sobre predios que ocupen como propietarios o poseedores.\nLa medida administrativa que determina el título de concesión minera, no es objeto de consulta previa al no ser susceptible de generar afectación alguna a los derechos colectivos de los pueblos indígenas u originarios, siendo que el referido título solo reconoce el derecho sobre el yacimiento mineral y no faculta el inicio de actividades de exploración o explotación.",
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
    ],
    jurisprudencia_citada: [],
    persona_natural: ""
  },
  {
    id: "res-cm-1034",
    title: "Resolución N° 1034-2024-MINEM/CM",
    entity: "MINEM",
    tags: ["Minería", "Formalización minera"],
    date: "20/12/2024",
    n_resolucion: "1034-2024-MINEM/CM",
    fecha_emision: "20.12.2024",
    acto_impugnado: "Auto Directoral N° 061-2024/DREM.M/GMR de la DREM Moquegua que declara inadmisible el procedimiento administrativo presentado por un minero en vías de formalización",
    cuestiones_controvertidas: [
      "Determinar si el Auto Directoral N° 061-2024/DREM.M/GMR de la DREM Moquegua, se encuentra conforme a ley."
    ],
    palabras_clave: [
      "Formalización minera",
      "Contrato de explotación",
      "Inadmisibilidad",
      "Legalidad",
      "Requisitos de validez",
      "Modificación por acumulación (16.7)",
      "Modificación de nombre y código (16.4)"
    ],
    sentido: "Se declara la nulidad de oficio del Auto Directoral N° 061-2024/DREM.M/GMR de la DREM Moquegua.",
    summary: "La solicitud que presenta el administrado para la modificación de nombre y código de derecho minero en el cual desarrolla sus actividades para integrarse en una acumulación de titularidad de Compañía de Minas Buenaventura S.A., no coinciden con lo que se solicita.",
    content: "La solicitud que presenta el administrado para la modificación de nombre y código de derecho minero en el cual desarrolla sus actividades para integrarse en una acumulación de titularidad de Compañía de Minas Buenaventura S.A., no coinciden con lo que se solicita.\nEn el Auto Directoral N° 061-2024/DREM.M/GMR de la DREM Moquegua se declara inadmisible el procedimiento iniciado por el administrado y se le requiere que, en el plazo de 5 días hábiles, acredite la celebración del contrato de explotación inscrito en SUNARP; sin embargo, al ser declarado inadmisible el procedimiento, la solicitud se tiene como no presentada y concluido el referido procedimiento, por lo cual, el Auto Directoral N° 061-2024/DREM.M/GMR de la DREM Moquegua incurre en un vicio de nulidad, debiendo reponerse la causa al estado de evaluar el escrito presentado por el administrado, a la luz del numeral 16.7 del artículo 16 del D.S. 018-2017-EM.\nPara el ejercicio de lo que se señala en el numeral 16.7.1 del artículo 16 del D.S. 018-2017-EM, el administrado deberá cumplir los requisitos que establezcan las normas de formalización, entre ellas, el contrato de explotación, el uso del terreno superficial y otros.",
    relatedRegulations: [
      {
        id: "reg-cm-005",
        title: "Decreto Supremo N° 004-2019-JUS, Texto Único Ordenado de la Ley N° 27444 - Ley del Procedimiento Administrativo General",
        description: "Normas sobre procedimiento administrativo general",
        changes: [],
        articles: [
          "numeral 1.1 del artículo IV del Título Preliminar",
          "numeral 4 del artículo 3"
        ]
      },
      {
        id: "reg-cm-006",
        title: "Decreto Legislativo N° 1336",
        description: "Normas sobre formalización minera",
        changes: [],
        articles: ["Artículo 10"]
      }
    ],
    jurisprudencia_citada: [],
    persona_natural: "Sí (cuidado al subir la resolución)"
  }
];