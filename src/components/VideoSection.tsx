const VideoSection = () => {
  return (
    <section className="py-24 bg-muted/50 relative">
      <div
        className="absolute inset-0 bg-white bg-cover bg-center opacity-20"
      ></div>
      <div className="relative z-10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Video de Presentación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre más sobre nuestros servicios de aislamiento térmico y acústico.
          </p>
        </div>
        <div className="flex justify-center">
          <video
            controls
            className="w-full max-w-[70%] md:max-w-[40%] h-auto rounded-lg shadow-lg"
            src="/videos/WhatsApp Video 2025-10-01 at 20.37.34_e9e719c6_3_1.mp4"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
      </div>
    </section>
  );
};

export default VideoSection;