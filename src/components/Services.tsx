import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    image: "/services img/sistemas de poliuretano como aislamiento termico .webp",
    title: "Aislamiento Térmico",
    description:
      "Mantén tu hogar a la temperatura perfecta durante todo el año sin desperdiciar energía.",
    benefits: [
      "Hasta 40% menos en calefacción",
      "Confort térmico garantizado",
      "Instalación en 24-48h",
      "Sin obras invasivas"
    ],
    savings: "Ahorra hasta 600€/año"
  },
  {
    image: "/services img/aislamiento-acústico-para-paredes.webp",
    title: "Aislamiento Acústico",
    description:
      "Disfruta del silencio y la tranquilidad que mereces en tu hogar.",
    benefits: [
      "Reduce ruido hasta 45dB",
      "Ambiente tranquilo",
      "Mejora calidad del sueño",
      "Ideal para zonas urbanas"
    ],
    savings: "Silencio total"
  },
  {
    image: "/services img/tipos-imper.jpg",
    title: "Impermeabilización",
    description:
      "Protección duradera contra humedades que dañan tu vivienda.",
    benefits: [
      "Elimina humedades",
      "Previene moho",
      "Protección 10 años",
      "Techos, paredes, sótanos"
    ],
    savings: "Evita costosas reparaciones"
  },
  {
    image: "/services img/Sabes-que-es-la-eficiencia-energetica-01.jpg",
    title: "Eficiencia Energética",
    description:
      "Mejora la calificación energética y aumenta el valor de tu propiedad.",
    benefits: [
      "Certificación energética",
      "Mayor valor inmobiliario",
      "Materiales ecológicos",
      "Subvenciones disponibles"
    ],
    savings: "Aumenta valor +15%"
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Servicios de Aislamiento Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Soluciones completas que transforman tu hogar en un espacio más eficiente y confortable
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Solicitar Presupuesto Gratis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border bg-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {service.savings}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas? Contáctanos para soluciones personalizadas
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border-2"
          >
            Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
