import { Button } from "@/components/ui/button";
import { TrendingDown, Home, Leaf, Shield, Clock, Award, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce tu Factura",
    description: "Ahorra hasta un 40% en costes de calefacción y climatización cada mes.",
  },
  {
    icon: Home,
    title: "Mayor Confort",
    description: "Temperatura ideal en invierno y verano sin corrientes de aire.",
  },
  {
    icon: Leaf,
    title: "Eco-Sostenible",
    description: "Reduce tu huella de carbono con materiales 100% reciclables.",
  },
  {
    icon: Shield,
    title: "Protección Duradera",
    description: "Garantía de 10 años en todos nuestros trabajos de aislamiento.",
  },
  {
    icon: Clock,
    title: "Instalación Rápida",
    description: "Trabajo completo en 24-48 horas sin interrumpir tu rutina diaria.",
  },
  {
    icon: Award,
    title: "Certificado Oficial",
    description: "Mejora la calificación energética de tu vivienda oficialmente.",
  },
];

const Benefits = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir Nuestro Aislamiento?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beneficios reales que marcan la diferencia en tu hogar y tu bolsillo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Empieza a Ahorrar Hoy Mismo
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Presupuesto gratuito sin compromiso. Estudiamos tu caso y te ofrecemos la mejor solución.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Solicitar Presupuesto Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
