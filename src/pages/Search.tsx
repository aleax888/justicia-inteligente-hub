
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SearchFilters } from "@/components/search/SearchFilters";
import { ResolutionCard } from "@/components/search/ResolutionCard";
import { mockResolutions } from "@/data/mockData";

const Search = () => {
  const [filteredResolutions, setFilteredResolutions] = useState(mockResolutions);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (filters: any) => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = mockResolutions.filter(resolution => {
        // Filter by keyword in title or summary
        if (filters.keyword && !resolution.title.toLowerCase().includes(filters.keyword.toLowerCase()) && 
            !resolution.summary.toLowerCase().includes(filters.keyword.toLowerCase())) {
          return false;
        }
        
        // Filter by entity
        if (filters.entity && resolution.entity.toLowerCase() !== filters.entity) {
          return false;
        }
        
        // Filter by tag
        if (filters.tag && !resolution.tags.some((tag: string) => 
          tag.toLowerCase() === filters.tag.toLowerCase().replace('-', ' '))) {
          return false;
        }
        
        // Filter by date (based on year and month for simplicity)
        if (filters.date) {
          const resolutionDate = new Date(resolution.date.split('/').reverse().join('-'));
          const filterDate = new Date(filters.date);
          
          if (resolutionDate.getFullYear() !== filterDate.getFullYear() || 
              resolutionDate.getMonth() !== filterDate.getMonth()) {
            return false;
          }
        }
        
        return true;
      });
      
      setFilteredResolutions(results);
      setIsSearching(false);
    }, 500);
  };

  return (
    <MainLayout>
      <div className="legal-container py-8">
        <h1 className="text-3xl font-bold mb-2">Búsqueda de resoluciones</h1>
        <p className="text-muted-foreground mb-6">
          Utiliza los filtros para encontrar resoluciones relevantes para tu caso
        </p>
        
        <SearchFilters onSearch={handleSearch} />
        
        <div className="mt-8">
          {isSearching ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Buscando resoluciones...</p>
            </div>
          ) : filteredResolutions.length > 0 ? (
            <>
              <p className="mb-4 text-sm text-muted-foreground">
                Se encontraron {filteredResolutions.length} resoluciones
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResolutions.map(resolution => (
                  <ResolutionCard 
                    key={resolution.id}
                    id={resolution.id}
                    title={resolution.title}
                    entity={resolution.entity}
                    tags={resolution.tags}
                    date={resolution.date}
                    summary={resolution.summary}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No se encontraron resultados</h3>
              <p className="text-muted-foreground">
                Intenta modificar los filtros de búsqueda para encontrar resoluciones
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
