import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Award, Shield, Users, Zap } from "lucide-react";
// import aboutImage from "@/assets/about-team.jpg";

const benefits = [
  "Más de 15 años de experiencia en el sector",
  "Materiales certificados y de máxima calidad",
  "Equipo profesional altamente cualificado",
  "Garantía de satisfacción en todos nuestros trabajos",
  "Certificaciones ISO 9001 y ISO 14001",
  "Más de 2000 proyectos completados con éxito",
];

const certifications = [
  { icon: Award, text: "ISO 9001" },
  { icon: Shield, text: "Garantía 10 años" },
  { icon: Users, text: "2000+ Clientes" },
  { icon: Zap, text: "Instalación 24-48h" },
];

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Column */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/professional-builder-installing-attic-thermal-insulation-effective-home-heat-protection_1014870-20980.jpg"
                alt="Equipo profesional de aislamiento trabajando"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold font-heading">15+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-slide-up">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Líderes en Aislamiento Profesional
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Tu Socio de Confianza en{" "}
              <span className="text-primary">Eficiencia Energética</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde 2008, ayudamos a miles de familias a reducir sus facturas energéticas 
              y mejorar el confort de sus hogares. Somos especialistas en aislamiento 
              térmico y acústico con un equipo de profesionales certificados.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Utilizamos exclusivamente materiales premium con certificación europea 
              y técnicas de instalación que garantizan resultados duraderos. 
              Tu satisfacción es nuestra prioridad.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-foreground font-semibold text-center">
                  {cert.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
