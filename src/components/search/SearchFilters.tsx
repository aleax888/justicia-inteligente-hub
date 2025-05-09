
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { HierarchicalFilter } from "./HierarchicalFilter";
import { hierarchicalFilterData } from "@/data/filterData";

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [keyword, setKeyword] = useState("");
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = () => {
    onSearch({
      keyword,
      selectedFilters: selectedFilterOptions,
      dateRange
    });
  };
  
  const handleClear = () => {
    setKeyword("");
    setSelectedFilterOptions([]);
    setDateRange({ from: undefined, to: undefined });
  };

  const handleFilterSelectionChange = (selectedIds: string[]) => {
    setSelectedFilterOptions(selectedIds);
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
          <Button onClick={handleSearch} className="bg-legal-blue hover:bg-legal-darkBlue">
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
        
        <div className={`${isExpanded ? 'block' : 'hidden md:block'}`}>
          {/* Hierarchical Filter */}
          <div className="mb-4">
            <HierarchicalFilter 
              filterData={hierarchicalFilterData}
              selectedOptions={selectedFilterOptions}
              onSelectionChange={handleFilterSelectionChange}
            />
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
          
          <div className="flex justify-end mt-4">
            <Button variant="ghost" onClick={handleClear} className="text-muted-foreground">
              Limpiar filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
