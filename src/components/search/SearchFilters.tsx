
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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
  const [entity, setEntity] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = () => {
    onSearch({
      keyword,
      entity,
      tag,
      date
    });
  };
  
  const handleClear = () => {
    setKeyword("");
    setEntity("");
    setTag("");
    setDate(undefined);
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
          <div className="space-y-2">
            <Label htmlFor="entity">Entidad fiscalizadora</Label>
            <Select value={entity} onValueChange={setEntity}>
              <SelectTrigger id="entity">
                <SelectValue placeholder="Seleccionar entidad" />
              </SelectTrigger>
              <SelectContent>
                {ENTITY_OPTIONS.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tag">Etiqueta</Label>
            <Select value={tag} onValueChange={setTag}>
              <SelectTrigger id="tag">
                <SelectValue placeholder="Seleccionar etiqueta" />
              </SelectTrigger>
              <SelectContent>
                {TAG_OPTIONS.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Fecha</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PP', { locale: es }) : <span>Seleccionar fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
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
