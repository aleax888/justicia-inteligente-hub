
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="legal-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-legal-purple">LegalTech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Plataforma líder en soluciones digitales para el sector legal.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Búsqueda
                </Link>
              </li>
              <li>
                <Link to="/regulations" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Normativa
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Ayuda
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-legal-purple transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LegalTech. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-legal-purple transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-legal-purple transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-legal-purple transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
