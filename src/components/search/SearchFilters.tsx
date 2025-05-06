
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ENTITY_OPTIONS = [
  { label: "OEFA", value: "oefa" },
  { label: "OSINERGMIN", value: "osinergmin" },
  { label: "SUNAFIL", value: "sunafil" },
  { label: "SUNAT", value: "sunat" },
  { label: "INDECOPI", value: "indecopi" }
];

const TAG_OPTIONS = [
  { label: "Minería", value: "mineria" },
  { label: "Industria", value: "industria" },
  { label: "Construcción", value: "construccion" },
  { label: "Medio Ambiente", value: "medio-ambiente" },
  { label: "Seguridad", value: "seguridad" },
  { label: "Laboral", value: "laboral" }
];

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [keyword, setKeyword] = useState("");
  const [selectedEntities, setSelectedEntities] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined
  });
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = () => {
    onSearch({
      keyword,
      entities: selectedEntities,
      tags: selectedTags,
      dateRange
    });
  };
  
  const handleClear = () => {
    setKeyword("");
    setSelectedEntities([]);
    setSelectedTags([]);
    setDateRange({ from: undefined, to: undefined });
  };

  const toggleEntity = (value: string) => {
    setSelectedEntities(prev => 
      prev.includes(value)
        ? prev.filter(e => e !== value)
        : [...prev, value]
    );
  };

  const toggleTag = (value: string) => {
    setSelectedTags(prev => 
      prev.includes(value)
        ? prev.filter(t => t !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Buscar por palabra clave..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleSearch} className="bg-legal-purple hover:bg-legal-darkPurple">
            Buscar
          </Button>
        </div>
        
        {/* Mobile filter toggle button */}
        <Button 
          variant="outline" 
          className="flex items-center justify-between md:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Filtros</span>
          {isExpanded ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
        </Button>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isExpanded ? 'block' : 'hidden md:grid'}`}>
          {/* Entidades - Selección múltiple */}
          <div className="space-y-2">
            <Label htmlFor="entity">Entidades fiscalizadoras</Label>
            <div className="border rounded-md p-3 max-h-48 overflow-y-auto">
              {ENTITY_OPTIONS.map(option => (
                <div key={option.value} className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id={`entity-${option.value}`} 
                    checked={selectedEntities.includes(option.value)}
                    onCheckedChange={() => toggleEntity(option.value)}
                  />
                  <label 
                    htmlFor={`entity-${option.value}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Etiquetas - Selección múltiple */}
          <div className="space-y-2">
            <Label htmlFor="tag">Etiquetas</Label>
            <div className="border rounded-md p-3 max-h-48 overflow-y-auto">
              {TAG_OPTIONS.map(option => (
                <div key={option.value} className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id={`tag-${option.value}`} 
                    checked={selectedTags.includes(option.value)}
                    onCheckedChange={() => toggleTag(option.value)}
                  />
                  <label 
                    htmlFor={`tag-${option.value}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rango de fechas */}
          <div className="space-y-2">
            <Label htmlFor="date-range">Rango de fechas</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date-range"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "dd/MM/yyyy", { locale: es })} - {format(dateRange.to, "dd/MM/yyyy", { locale: es })}
                      </>
                    ) : (
                      format(dateRange.from, "dd/MM/yyyy", { locale: es })
                    )
                  ) : (
                    <span>Seleccionar rango de fechas</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  initialFocus
                  locale={es}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className={`flex justify-end ${isExpanded ? 'block' : 'hidden md:block'}`}>
          <Button variant="ghost" onClick={handleClear} className="text-muted-foreground">
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}
