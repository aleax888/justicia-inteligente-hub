
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="legal-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-legal-purple">LegalTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/search" className="text-foreground hover:text-legal-purple transition-colors">
              Búsqueda
            </Link>
            <Link to="/regulations" className="text-foreground hover:text-legal-purple transition-colors">
              Normativa
            </Link>
            <Link to="/contact" className="text-foreground hover:text-legal-purple transition-colors">
              Contacto
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild>
              <Link to="/login">
                <User className="h-4 w-4 mr-2" />
                Ingresar
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2"
            aria-label="Menú"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="legal-container py-4 flex flex-col space-y-4">
            <Link 
              to="/search" 
              className="px-2 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Búsqueda
            </Link>
            <Link 
              to="/regulations" 
              className="px-2 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Normativa
            </Link>
            <Link 
              to="/contact" 
              className="px-2 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="w-full">
              <Link to="/login">
                <User className="h-4 w-4 mr-2" />
                Ingresar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
