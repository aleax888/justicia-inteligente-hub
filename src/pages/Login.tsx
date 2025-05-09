
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // This is a mock validation - in a real app, you'd call an authentication API
      if (email && password) {
        toast({
          title: "Inicio de sesión exitoso",
          description: "Redirigiendo al panel de usuario...",
        });
      } else {
        toast({
          title: "Error de inicio de sesión",
          description: "Por favor verifica tus credenciales e intenta nuevamente.",
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
            <CardTitle className="text-2xl font-bold text-gray-900">Iniciar sesión</CardTitle>
            <p className="text-sm text-gray-600">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
                  <Link to="/forgot-password" className="text-sm text-legal-blue hover:text-legal-darkBlue">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-700">Recordarme</Label>
              </div>
              <Button type="submit" className="w-full bg-legal-blue hover:bg-legal-darkBlue" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-4 text-center text-sm text-gray-700">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-legal-blue hover:text-legal-darkBlue font-medium">
                Regístrate
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Login;
