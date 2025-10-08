const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/imgs/logo Ecología España rb.png"
              alt="Logo Ecología España"
              className="w-[70%] mb-4"
            />
            <p className="text-background/80">
              Expertos en soluciones de aislamiento térmico y acústico para tu hogar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>Aislamiento Térmico</li>
              <li>Aislamiento Acústico</li>
              <li>Impermeabilización</li>
              <li>Eficiencia Energética</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>+34 674 93 96 43</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Aislamiento Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
