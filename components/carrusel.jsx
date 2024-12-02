import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Animacion from "@/components/animacion"


export function CarouselDemo() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalItems = 3; // Número total de imágenes en el carrusel
  const intervalTime = 4000; // Tiempo en milisegundos para el autoplay (3 segundos)

  // Lista de imágenes para el carrusel
  const images = [
    "/assets/carru-cambio1.png",
    "/assets/carru-cambio2.png",
    "/assets/carru-cambio3.png",
    "/assets/carru-cambio4.png",
  ];

  // Autoplay con useEffect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, intervalTime);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <Carousel className="w-full max-w-full">
      <Animacion delay={0.3}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className={index === activeIndex ? 'block' : 'hidden'}>
            <div className="p-1">
              {/* Imagen del Carrusel */}
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-606 object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </Animacion>

      {/* Controles manuales (si se desean) */}
    </Carousel>
  );
}
