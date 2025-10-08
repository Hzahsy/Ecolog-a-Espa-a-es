import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud Enviada!",
      description: "Nos pondremos en contacto contigo en menos de 2 horas.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Presupuesto sin Compromiso
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Solicita tu Presupuesto Gratis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respuesta en menos de 2 horas · Visita gratuita · Presupuesto sin compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Formulario de Solicitud
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ej: Juan Pérez"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="text-foreground mb-2 block">
                    Tipo de Servicio *
                  </Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    required
                    className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="termico">Aislamiento Térmico</option>
                    <option value="acustico">Aislamiento Acústico</option>
                    <option value="impermeabilizacion">Impermeabilización</option>
                    <option value="eficiencia">Eficiencia Energética</option>
                    <option value="consulta">Consulta General</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Cuéntanos sobre tu proyecto *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe tu proyecto: tipo de vivienda, superficie aproximada, objetivos..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Solicitud de Presupuesto
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario aceptas nuestra política de privacidad
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+34674939643"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Llámanos Ahora
                    </div>
                    <div className="text-primary text-lg font-bold">
                      +34 674 93 96 43
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Atención inmediata
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Nuestra Ubicación
                    </div>
                    <p className="text-muted-foreground">
                      Madrid, España
                      <br />
                      <span className="text-xs">Servicio en toda la Comunidad de Madrid</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="font-heading text-xl font-bold">
                  Horario de Atención
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-primary-foreground/80">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-card rounded-2xl p-6 shadow-xl border border-border">
              <h4 className="font-heading font-bold text-foreground mb-4">
                Nuestro Compromiso
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Presupuesto sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Visita e inspección gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Respuesta en menos de 2 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Garantía de 10 años incluida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
