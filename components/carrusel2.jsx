import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Animacion from "@/components/animacion"

export function CarouselDemo2() {
  const images = [
    "/assets/carru2-cambio1.png",
    "/assets/carru2-cambio2.png",
    "/assets/carru3-cambio3.png",
    "/assets/carru4-cambio4.png",
  ];

  return (
    <Carousel className="w-full max-w-2xl carru">
        <Animacion delay={0.3}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover card-home1"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </Animacion>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
