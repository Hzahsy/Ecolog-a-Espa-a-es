import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { name: "Inicio", id: "hero" },
    { name: "Servicios", id: "services" },
    { name: "Beneficios", id: "benefits" },
    { name: "Proceso", id: "process" },
    { name: "Sobre Nosotros", id: "about" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <header className="bg-background py-2 border-b border-border sticky top-0 z-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            src="/imgs/logo Ecología España rb.png"
            alt="Logo Ecología España"
            className="h-28 w-auto max-w-xs cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;