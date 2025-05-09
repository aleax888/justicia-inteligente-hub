
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SearchFilters } from "@/components/search/SearchFilters";
import { ResolutionCard } from "@/components/search/ResolutionCard";
import { mockResolutions } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ClockIcon } from "lucide-react";
import { hierarchicalFilterData } from "@/data/filterData";

// Helper function to get all leaf node IDs from the filter data
const getAllLeafNodeIds = (options: any[]): string[] => {
  let leafIds: string[] = [];
  
  const extractLeafIds = (options: any[]) => {
    for (const option of options) {
      if (option.children && option.children.length > 0) {
        extractLeafIds(option.children);
      } else {
        leafIds.push(option.id);
      }
    }
  };
  
  for (const category of options) {
    if (category.children) {
      extractLeafIds(category.children);
    }
  }
  
  return leafIds;
};

// Flattened map of all filter options for easy lookup
const buildFilterOptionsMap = () => {
  const map = new Map();
  
  const addOptionsToMap = (options: any[]) => {
    for (const option of options) {
      map.set(option.id, option);
      if (option.children && option.children.length > 0) {
        addOptionsToMap(option.children);
      }
    }
  };
  
  hierarchicalFilterData.forEach(category => {
    map.set(category.id, category);
    if (category.children && category.children.length > 0) {
      addOptionsToMap(category.children);
    }
  });
  
  return map;
};

const filterOptionsMap = buildFilterOptionsMap();
const allLeafNodeIds = getAllLeafNodeIds(hierarchicalFilterData);

const Search = () => {
  const [filteredResolutions, setFilteredResolutions] = useState(mockResolutions);
  const [favoriteResolutions, setFavoriteResolutions] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
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
        
        // Filter by selected hierarchical filters
        if (filters.selectedFilters && filters.selectedFilters.length > 0) {
          // This is a simplified approach; in a real app, you would have relationships between
          // resolutions and filter options stored in your database
          const hasMatchingFilter = resolution.tags.some((tag: string) => {
            // Map tags to potential filter IDs (simplified for demo)
            const tagId = tag.toLowerCase().replace(/\s+/g, '-');
            return filters.selectedFilters.includes(tagId);
          }) || resolution.entity.toLowerCase().includes(
            filters.selectedFilters.some((id: string) => id.includes(resolution.entity.toLowerCase()))
          );
          
          if (!hasMatchingFilter) {
            return false;
          }
        }
        
        // Filter by date range
        if (filters.dateRange && (filters.dateRange.from || filters.dateRange.to)) {
          const resolutionDate = new Date(resolution.date.split('/').reverse().join('-'));
          
          if (filters.dateRange.from && resolutionDate < filters.dateRange.from) {
            return false;
          }
          
          if (filters.dateRange.to && resolutionDate > filters.dateRange.to) {
            return false;
          }
        }
        
        return true;
      });
      
      setFilteredResolutions(results);
      setIsSearching(false);
    }, 500);
  };

  const handleToggleFavorite = (id: string) => {
    setFavoriteResolutions(prev => 
      prev.includes(id)
        ? prev.filter(resId => resId !== id)
        : [...prev, id]
    );
  };

  const getFavoriteResolutions = () => {
    return mockResolutions.filter(res => favoriteResolutions.includes(res.id));
  };

  const getRecentlyViewedResolutions = () => {
    // En una implementación real, esto vendría de una base de datos
    // Para este frontend, mostramos algunos elementos de ejemplo
    return mockResolutions.filter(res => recentlyViewed.includes(res.id));
  };

  return (
    <MainLayout>
      <div className="legal-container py-8">
        <h1 className="text-3xl font-bold mb-2">Búsqueda de resoluciones</h1>
        <p className="text-muted-foreground mb-6">
          Utiliza los filtros para encontrar resoluciones relevantes para tu caso
        </p>
        
        <SearchFilters onSearch={handleSearch} />
        
        <Tabs defaultValue="search" className="mt-8">
          <TabsList>
            <TabsTrigger value="search">Resultados de búsqueda</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-1">
              <Star className="h-4 w-4" /> Favoritos
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" /> Vistos recientemente
            </TabsTrigger>
            <TabsTrigger value="relevant">Resoluciones que Deberías Conocer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="search">
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
                      isFavorite={favoriteResolutions.includes(resolution.id)}
                      onToggleFavorite={() => handleToggleFavorite(resolution.id)}
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
          </TabsContent>
          
          <TabsContent value="favorites">
            {favoriteResolutions.length > 0 ? (
              <>
                <p className="mb-4 text-sm text-muted-foreground">
                  Tienes {favoriteResolutions.length} resoluciones guardadas en favoritos
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFavoriteResolutions().map(resolution => (
                    <ResolutionCard 
                      key={resolution.id}
                      id={resolution.id}
                      title={resolution.title}
                      entity={resolution.entity}
                      tags={resolution.tags}
                      date={resolution.date}
                      summary={resolution.summary}
                      isFavorite={true}
                      onToggleFavorite={() => handleToggleFavorite(resolution.id)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No tienes resoluciones favoritas</h3>
                <p className="text-muted-foreground">
                  Agrega resoluciones a favoritos para verlas aquí
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Resoluciones vistas recientemente</h3>
              <p className="text-muted-foreground mb-4">
                Aquí podrás ver las resoluciones que has consultado recientemente
              </p>
              <p className="text-sm text-muted-foreground">
                Esta funcionalidad estará disponible próximamente con la implementación del backend
              </p>
            </div>
          </TabsContent>

          <TabsContent value="relevant">
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
                      isFavorite={favoriteResolutions.includes(resolution.id)}
                      onToggleFavorite={() => handleToggleFavorite(resolution.id)}
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
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Search;
