
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Responderemos a tu mensaje pronto.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="legal-container py-12">
        <h1 className="text-3xl font-bold mb-2 text-center">Contáctanos</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestra plataforma o necesitas asistencia? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="nombre@ejemplo.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Select value={subject} onValueChange={setSubject} required>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulta">Consulta general</SelectItem>
                      <SelectItem value="soporte">Soporte técnico</SelectItem>
                      <SelectItem value="ventas">Información de ventas</SelectItem>
                      <SelectItem value="sugerencia">Sugerencia</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escribe tu mensaje aquí..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-legal-purple hover:bg-legal-darkPurple"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Card>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6">Información de contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-legal-lightPurple p-2 rounded-full text-legal-darkPurple">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Correo electrónico</h3>
                  <p className="text-muted-foreground">info@legaltech.com</p>
                  <p className="text-muted-foreground">soporte@legaltech.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-legal-lightPurple p-2 rounded-full text-legal-darkPurple">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">+51 (01) 123-4567</p>
                  <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-legal-lightPurple p-2 rounded-full text-legal-darkPurple">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Oficina</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123<br />
                    Piso 15, Oficina 1502<br />
                    Lima, Perú
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <h3 className="font-medium mb-2">Horario de atención</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span> 
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span> 
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span> 
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
