import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import DefaultLayout from "@/layouts/default";
import Acordion from "@/components/accordion";
import Dividermio2 from "@/components/divider2";
import {Image} from "@nextui-org/react";
import Animacion from "@/components/animacion"



export default function NosPage() {
   return (
     <DefaultLayout>
       <section className="section-galeria">
        <div className="hero-nosotros">
        
          <div className="texto-hero-galeria">
          <Animacion delay={0.1}>
            <h1 className="titulo-galeria">Sobre nosotros</h1>
            <p className="p-galeria">CONOCÉ CASA FORESTA</p>
          </Animacion>
        </div>
        
        </div>

        <div className="container-nosotros">
        <Animacion delay={0.3}>
          <div className="primercontenedor-about">
         <h2 className="texto-about">Casa Foresta se gesta con una impronta familiar, con el hermoso desafío de crear un espacio que ofrezca una experiencia única y acogedora en el corazón de Salta.</h2>
         <h2 className="texto-about">Calidad, diseño y honestidad se destacan como centro del proyecto, buscando transmitir una hospitalidad que supere expectativas y quede impregnada en la memoria afectiva de cada uno de nuestros visitantes. </h2>
         <h2 className="texto-about">Porque no somos un lugar de paso. Somos una casa a la que siempre se quiere volver.</h2>
         </div>
         </Animacion>
         
         <div className="segundocontenedor-about">
          <Dividermio2/>
          <Animacion delay={0.5}>
          <Image
          width={450}
          height={600}
          alt="NextUI hero Image with delay"
          src="/assets/foto-about.png"
          className="no-rounded img-larga"
          />
          </Animacion>
          </div>
          </div>
      
       </section>
     </DefaultLayout>
   );
 }
