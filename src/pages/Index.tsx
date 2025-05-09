
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { FileText, Search, BookOpen } from "lucide-react";
import { ResolutionCard } from "@/components/search/ResolutionCard";
import { mockResolutions } from "@/data/mockData";

const Index = () => {
  // Tomar solo las 3 primeras resoluciones para mostrar
  const featuredResolutions = mockResolutions.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-legal-blue to-legal-darkBlue text-white py-20">
        <div className="legal-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                Soluciones legales inteligentes para una justicia más eficiente
              </h1>
              <p className="text-lg opacity-90">
                Accede a resoluciones legales, normativas y herramientas de análisis para potenciar tu trabajo jurídico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-white text-legal-darkBlue hover:bg-opacity-90">
                  <Link to="/search">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar resoluciones
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-legal-darkBlue">
                  <Link to="/register">
                    Crear cuenta
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80" 
                alt="LegalTech platform" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="legal-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nuestras características principales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre todas las herramientas que LegalTech tiene para optimizar tu trabajo legal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover">
              <div className="h-14 w-14 rounded-full bg-legal-lightBlue flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-legal-darkBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Búsqueda avanzada</h3>
              <p className="text-gray-700">
                Encuentra rápidamente resoluciones por entidad, etiqueta o fecha con nuestros filtros especializados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover">
              <div className="h-14 w-14 rounded-full bg-legal-lightBlue flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-darkBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Visualización de documentos</h3>
              <p className="text-gray-700">
                Accede al contenido completo de resoluciones con resúmenes y secciones destacadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover">
              <div className="h-14 w-14 rounded-full bg-legal-lightBlue flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-legal-darkBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Normativa relacionada</h3>
              <p className="text-gray-700">
                Explora la normativa vinculada a cada resolución, con historial de cambios y artículos relevantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resolutions Section */}
      {/*<section className="py-20 bg-white">
        <div className="legal-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Resoluciones que Deberías Conocer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consulta estas importantes resoluciones legales seleccionadas por nuestros expertos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResolutions.map((resolution) => (
              <ResolutionCard 
                key={resolution.id}
                id={resolution.id}
                title={resolution.title}
                entity={resolution.entity}
                tags={resolution.tags}
                date={resolution.date}
                summary={resolution.summary}
                isFavorite={false}
                onToggleFavorite={() => {}}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-legal-blue hover:bg-legal-darkBlue">
              <Link to="/search">
                Ver más resoluciones
              </Link>
            </Button>
          </div>
        </div>
      </section>*/}

      {/* Call to action */}
      <section className="py-16 bg-white">
        <div className="legal-container">
          <div className="bg-legal-lightBlue rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              ¿Listo para optimizar tu trabajo legal?
            </h2>
            <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
              Regístrate hoy y comienza a utilizar todas nuestras herramientas especializadas para el sector legal.
            </p>
            <Button asChild size="lg" className="bg-legal-blue hover:bg-legal-darkBlue">
              <Link to="/register">
                Comenzar ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
