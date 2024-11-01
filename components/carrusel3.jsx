import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const cards = [
    {
      imgSrc: "/assets/carru3-1.png",
      title: "SUPERIOR DOUBLE QUEEN",
      description: "Vistas a nuestro jardín interno. Superficie de 22 m2 con capacidad para 2 adultos + 2 menores, en 2 camas Queen. Posibilidad de conectar con Superior King.",
    },
    {
        imgSrc: "/assets/carru3-2.png",
      title: "SUPERIOR TRIPLE",
      description: "Vistas a nuestro jardín interno. Superficie de 22 m2 con capacidad para 3 pax, en cama King. Permite una persona adicional agregando una cama extra (sommier 90cm).",
    },
    {
        imgSrc: "/assets/carru3-3.png",
      title: "DEPTO. FORESTA",
      description: "Vistas a nuestros cerros. Superficie de 50 m2 con capacidad para 5 pax en dos dormitorios, equipados con cama King + 2 Twin + 1 sofá cama. Dispone de microondas y vajilla.",
    },
    {
        imgSrc: "/assets/carru3-4.png",
      title: "STANDARD QUEEN/TWIN",
      description: "Vistas a nuestro jardín interno. Superficie de 20 m2 con capacidad para 2 pax, en cama Queen o Twin.",
    },
    {
        imgSrc: "/assets/carru3-5.png",
      title: "SUPERIOR KING",
      description: "Vistas a nuestro jardín interno. Superficie de 20 m2 con capacidad para 2 pax, en cama King. Posibilidad de conectar con Superior Double Queen.",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="card-carru">
                <CardContent className="flex flex-col items-center p-4">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-auto mb-2"
                  />
                 
                  <h3 className="text-medium font-medium titulo-2-h">{card.title}</h3>
             
                  <hr className="w-full my-2" style={{ borderColor: '#AF9C84' }} />
                  <p className="text-sm p-card-carru3" style={{ color: '#1D1D1D' }}>
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
