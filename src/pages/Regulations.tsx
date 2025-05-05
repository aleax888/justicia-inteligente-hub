
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger, 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, Clock, FileText } from "lucide-react";

// Mock data for regulations
const REGULATIONS = [
  {
    id: "reg-001",
    title: "Ley N° 29325",
    subtitle: "Ley del Sistema Nacional de Evaluación y Fiscalización Ambiental",
    category: "Ambiental",
    date: "05/03/2009",
    lastUpdate: "10/03/2021",
    summary: "Establece el marco normativo para el Sistema Nacional de Evaluación y Fiscalización Ambiental.",
    articles: [
      { id: "art-001-11", number: "11", title: "Funciones generales", lastUpdate: "05/07/2019" },
      { id: "art-001-17", number: "17", title: "Infracciones administrativas y sanciones", lastUpdate: "10/03/2021" },
      { id: "art-001-19", number: "19", title: "Clasificación de infracciones y sanciones", lastUpdate: "10/03/2021" }
    ]
  },
  {
    id: "reg-002",
    title: "Ley N° 29783",
    subtitle: "Ley de Seguridad y Salud en el Trabajo",
    category: "Laboral",
    date: "20/08/2011",
    lastUpdate: "12/07/2022",
    summary: "Ley que establece el marco normativo para la seguridad y salud en el trabajo.",
    articles: [
      { id: "art-002-49", number: "49", title: "Obligaciones del empleador", lastUpdate: "12/07/2022" },
      { id: "art-002-76", number: "76", title: "Prevención de riesgos", lastUpdate: "15/09/2020" },
      { id: "art-002-82", number: "82", title: "Deber de información", lastUpdate: "20/08/2011" }
    ]
  },
  {
    id: "reg-003",
    title: "Ley N° 28749",
    subtitle: "Ley General de Electrificación Rural",
    category: "Energía",
    date: "01/06/2006",
    lastUpdate: "18/01/2023",
    summary: "Establece el marco normativo para la electrificación de zonas rurales y urbano-marginales.",
    articles: [
      { id: "art-003-4", number: "4", title: "Desarrollo eficiente", lastUpdate: "03/05/2021" },
      { id: "art-003-9", number: "9", title: "Financiamiento", lastUpdate: "18/01/2023" },
      { id: "art-003-12", number: "12", title: "Transferencia de obras", lastUpdate: "01/06/2006" }
    ]
  },
  {
    id: "reg-004",
    title: "Decreto Legislativo N° 937",
    subtitle: "Texto del Nuevo Régimen Único Simplificado",
    category: "Tributario",
    date: "14/11/2003",
    lastUpdate: "20/12/2022",
    summary: "Establece el Nuevo Régimen Único Simplificado (Nuevo RUS).",
    articles: [
      { id: "art-004-3", number: "3", title: "Personas no comprendidas", lastUpdate: "05/03/2021" },
      { id: "art-004-6", number: "6", title: "Categorías del Nuevo RUS", lastUpdate: "20/12/2022" },
      { id: "art-004-8", number: "8", title: "Forma de pago", lastUpdate: "14/11/2003" }
    ]
  },
  {
    id: "reg-005",
    title: "Ley N° 29571",
    subtitle: "Código de Protección y Defensa del Consumidor",
    category: "Consumidor",
    date: "02/09/2010",
    lastUpdate: "14/02/2023",
    summary: "Establece las normas de protección y defensa de los consumidores.",
    articles: [
      { id: "art-005-24", number: "24", title: "Servicio de atención de reclamos", lastUpdate: "07/08/2021" },
      { id: "art-005-58", number: "58", title: "Servicios públicos regulados", lastUpdate: "14/02/2023" },
      { id: "art-005-104", number: "104", title: "Responsabilidad administrativa", lastUpdate: "02/09/2010" }
    ]
  }
];

const Regulations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter regulations based on search and category
  const filteredRegulations = REGULATIONS.filter(reg => {
    const matchesSearch = reg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         reg.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? reg.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories
  const categories = Array.from(new Set(REGULATIONS.map(reg => reg.category)));

  return (
    <MainLayout>
      <div className="legal-container py-8">
        <h1 className="text-3xl font-bold mb-2">Normativa legal</h1>
        <p className="text-muted-foreground mb-8">
          Consulta las normativas legales vigentes y sus actualizaciones
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar normativa..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-legal-purple hover:bg-legal-darkPurple" : ""}
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-legal-purple hover:bg-legal-darkPurple" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredRegulations.length > 0 ? (
            filteredRegulations.map(regulation => (
              <div key={regulation.id} className="border rounded-lg overflow-hidden bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <Badge>{regulation.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Última actualización: {regulation.lastUpdate}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{regulation.title}</h2>
                  <h3 className="text-muted-foreground mb-3">{regulation.subtitle}</h3>
                  <p className="text-sm mb-4">{regulation.summary}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="articles" className="border-0">
                      <AccordionTrigger className="py-2 px-3 hover:bg-gray-50 rounded-md text-sm">
                        Ver artículos
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 mt-2">
                          {regulation.articles.map(article => (
                            <div 
                              key={article.id} 
                              className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md"
                            >
                              <div className="flex items-center">
                                <div className="bg-gray-100 p-2 rounded-md mr-3">
                                  <FileText className="h-4 w-4 text-legal-purple" />
                                </div>
                                <div>
                                  <p className="font-medium">Artículo {article.number}</p>
                                  <p className="text-xs text-muted-foreground">{article.title}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <span className="text-xs text-muted-foreground mr-2">
                                  Actualizado: {article.lastUpdate}
                                </span>
                                <Button size="icon" variant="ghost" className="h-7 w-7">
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-12 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium mb-2">No se encontraron normativas</h3>
              <p className="text-muted-foreground">
                Intenta modificar tu búsqueda o criterios de filtrado
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Regulations;
