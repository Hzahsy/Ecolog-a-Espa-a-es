import { Button } from "@/components/ui/button";
import { Phone, ClipboardCheck, Hammer, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contacto Inicial",
    description: "Llámanos o rellena el formulario. Te respondemos en menos de 2 horas.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Inspección Gratuita",
    description: "Visitamos tu hogar, evaluamos necesidades y preparamos presupuesto sin compromiso.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Instalación Profesional",
    description: "Nuestro equipo experto realiza el trabajo en 24-48h con materiales premium.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Garantía y Seguimiento",
    description: "Verificamos resultados y te entregamos certificado con 10 años de garantía.",
  },
];

const Process = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Proceso Simple y Transparente
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde el primer contacto hasta la garantía, te acompañamos en cada paso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
                
                <div className="relative bg-card rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-primary/20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Comenzar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
