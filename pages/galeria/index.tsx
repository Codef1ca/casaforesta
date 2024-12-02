import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import DefaultLayout from "@/layouts/default";
import Acordion from "@/components/accordion";
import Dividermio from "@/components/divider";
import {Image} from "@nextui-org/react";
import Animacion from "@/components/animacion"



export default function GalePage() {
   return (
     <DefaultLayout>
       <section className="section-galeria">
        <div className="hero-galeria">
          <div className="texto-hero-galeria">
          <Animacion delay={0.1}>
            <h1 className="titulo-galeria">Galería de fotos</h1>
            <p className="p-galeria">NUESTRAS INSTALACIONES Y SERVICIOS</p>
          </Animacion>
        </div>
        </div>

        <div className="container-fotos-galeria">
        <Animacion delay={0.3}>
          <div className="primercontenedor-galeria">
          <Dividermio/>
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c1.png"
          className="no-rounded img-larga"
          />
          </div>

          <div className="segundocontenedor-galeria">
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c2.png"
          className="no-rounded img-larga"
          />
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c3.png"
          className="no-rounded img-larga"
          />
          </div>
          </Animacion>
          <Animacion delay={0.5}>
          <div className="segundocontenedor-galeria">
          <Image
          width={1000}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c4.png"
          className="no-rounded img-ancha"
          />
          </div>
        
          <div className="segundocontenedor-galeria">
          <Image
          width={450}
          height={300}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c5.png"
          className="no-rounded img-corta"
          />
          <Image
          width={450}
          height={300}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c6.png"
          className="no-rounded img-corta"
          />
          </div>
          </Animacion>
        
          <Animacion delay={0.5}>
          <div className="segundocontenedor-galeria">
          <Image
          width={1000}
          height={550}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c7.png"
          className="no-rounded img-ancha"
          />
          </div>
          <div className="segundocontenedor-galeria">
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c8.png"
          className="no-rounded img-larga"
          />
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c9.png"
          className="no-rounded img-larga"
          />
          </div>
          </Animacion>

          <Animacion delay={0.5}>
          <div className="segundocontenedor-galeria">
          <Image
          width={1000}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c10.png"
          className="no-rounded img-ancha"
          />
          </div>

          <div className="segundocontenedor-galeria">
          <Image
          width={450}
          height={300}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c11.png"
          className="no-rounded img-corta"
          />
          <Image
          width={450}
          height={300}
          alt="NextUI hero Image with delay"
          src="/assets/galeria-c12.png"
          className="no-rounded img-corta"
          />
          </div>
          </Animacion>
        
        </div>
       </section>
     </DefaultLayout>
   );
 }