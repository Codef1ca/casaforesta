import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import DefaultLayout from "@/layouts/default";
import Acordion from "@/components/accordion";
import Dividermio from "@/components/divider";
import {Image} from "@nextui-org/react";



export default function GalePage() {
   return (
     <DefaultLayout>
       <section className="section-galeria">
        <div className="hero-galeria">
          <div className="texto-hero-galeria">
            <h1 className="titulo-galeria">Galería de fotos</h1>
            <p className="p-galeria">NUESTRAS INSTALACIONES Y SERVICIOS</p>
        </div>
        </div>

        <div className="container-fotos-galeria">
          <div className="primercontenedor-galeria">
          <Dividermio/>
          <Image
          width={400}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/galeria1.png"
          className="no-rounded"
          />
          </div>
        
        
        
        
        
        
        </div>
       </section>
     </DefaultLayout>
   );
 }