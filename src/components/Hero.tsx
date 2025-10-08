import { useState } from "react";
import { Award, Users, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    casaUnifamiliar: "",
    desvan: "",
    tipoDesvan: "",
    acceso: "",
    calefaccion: "",
    direccion: "",
    poblacion: "",
    cp: "",
    nombreTitular: "",
    phone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "¡Solicitud Enviada!",
          description: "Nos pondremos en contacto contigo en menos de 2 horas para tu presupuesto personalizado.",
        });
        setFormData({
          casaUnifamiliar: "",
          desvan: "",
          tipoDesvan: "",
          acceso: "",
          calefaccion: "",
          direccion: "",
          poblacion: "",
          cp: "",
          nombreTitular: "",
          phone: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar la solicitud. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo conectar al servidor. Verifica tu conexión.",
        variant: "destructive",
      });
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hogar moderno con aislamiento eficiente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Certificados ISO 9001 - Materiales Premium
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ahorra hasta un <span className="text-primary">40%</span> en tu Factura Energética
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Aislamiento térmico y acústico profesional que transforma tu hogar en un espacio más confortable, silencioso y eficiente.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Instalación rápida - Garantía de 10 años - Materiales ecológicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up mb-12">
              <button
                onClick={scrollToContact}
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded"
              >
                Solicitar Presupuesto Gratis
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-lg px-8 py-6 border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300 rounded"
              >
                Ver Servicios
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center animate-scale-in">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bold text-2xl text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bold text-2xl text-foreground">2000+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="flex justify-center mb-2">
                  <ThumbsUp className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bold text-2xl text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Quick Quote Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Solicitar mi evaluación gratuita
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="casaUnifamiliar" className="text-foreground mb-2 block">
                  Tipo de Vivienda *
                </Label>
                <Select value={formData.casaUnifamiliar} onValueChange={(value) => handleInputChange("casaUnifamiliar", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unifamiliar">Casa Unifamiliar</SelectItem>
                    <SelectItem value="piso">Piso</SelectItem>
                    <SelectItem value="atico">Ático</SelectItem>
                    <SelectItem value="local">Local Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="desvan" className="text-foreground mb-2 block">
                  ¿Tiene Desván? *
                </Label>
                <Select value={formData.desvan} onValueChange={(value) => handleInputChange("desvan", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="si">Sí</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tipoDesvan" className="text-foreground mb-2 block">
                  Tipo de Desván
                </Label>
                <Select value={formData.tipoDesvan} onValueChange={(value) => handleInputChange("tipoDesvan", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="habitable">Habitable</SelectItem>
                    <SelectItem value="no-habitable">No Habitable</SelectItem>
                    <SelectItem value="trastero">Trastero</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="acceso" className="text-foreground mb-2 block">
                  Acceso al Desván
                </Label>
                <Select value={formData.acceso} onValueChange={(value) => handleInputChange("acceso", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de acceso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="escalera">Escalera Interior</SelectItem>
                    <SelectItem value="trampilla">Trampilla</SelectItem>
                    <SelectItem value="exterior">Acceso Exterior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="calefaccion" className="text-foreground mb-2 block">
                  Sistema de Calefacción
                </Label>
                <Select value={formData.calefaccion} onValueChange={(value) => handleInputChange("calefaccion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gas">Gas Natural</SelectItem>
                    <SelectItem value="electrica">Eléctrica</SelectItem>
                    <SelectItem value="gasoleo">Gasóleo</SelectItem>
                    <SelectItem value="biomasa">Biomasa</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cp" className="text-foreground mb-2 block">
                  Código Postal *
                </Label>
                <Input
                  id="cp"
                  placeholder="28001"
                  value={formData.cp}
                  onChange={(e) => handleInputChange("cp", e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="direccion" className="text-foreground mb-2 block">
                  Dirección
                </Label>
                <Input
                  id="direccion"
                  placeholder="Calle Mayor, 123"
                  value={formData.direccion}
                  onChange={(e) => handleInputChange("direccion", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="poblacion" className="text-foreground mb-2 block">
                  Población
                </Label>
                <Input
                  id="poblacion"
                  placeholder="Madrid"
                  value={formData.poblacion}
                  onChange={(e) => handleInputChange("poblacion", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="nombreTitular" className="text-foreground mb-2 block">
                  Nombre Completo *
                </Label>
                <Input
                  id="nombreTitular"
                  placeholder="Juan Pérez"
                  value={formData.nombreTitular}
                  onChange={(e) => handleInputChange("nombreTitular", e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar mi evaluación gratuita
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Hero;
