
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      
      // This is a mock validation - in a real app, you'd call an authentication API
      if (name && email && password) {
        toast({
          title: "Registro exitoso",
          description: "Tu cuenta ha sido creada. Por favor, inicia sesión.",
        });
      } else {
        toast({
          title: "Error en el registro",
          description: "Por favor completa todos los campos requeridos.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="legal-container py-12 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Crear una cuenta</CardTitle>
            <p className="text-sm text-muted-foreground">
              Completa tus datos para registrarte en la plataforma
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input 
                  id="name" 
                  placeholder="María López" 
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
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Mínimo 8 caracteres, incluyendo una letra mayúscula y un número
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  Acepto los{" "}
                  <Link to="/terms" className="text-legal-purple hover:text-legal-darkPurple">
                    términos y condiciones
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-legal-purple hover:bg-legal-darkPurple" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrarse"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-4 text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-legal-purple hover:text-legal-darkPurple font-medium">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Register;
