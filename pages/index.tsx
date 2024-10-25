 
 import { Link } from "@nextui-org/link";
 import { button as buttonStyles } from "@nextui-org/theme";
 import DefaultLayout from "@/layouts/default";
 import Dividermio3 from "@/components/divider3";
 import { CarouselDemo } from "@/components/carrusel";
 import { CarouselDemo2 } from "@/components/carrusel2";
 import { CarouselSize } from "@/components/carrusel3";
 import {Divider} from "@nextui-org/react";
 import Animacion from "@/components/animacion"



 export default function IndexPage() {
   return (
     <DefaultLayout>
       <section className="section-home">
       <CarouselDemo/>
         <div className="seccion2-home">
         <Animacion delay={0.1}>
           <h1 className="titulo-seccion2">
           Casa foresta. Una estadía de<br></br> 
           confort y encanto natural
           </h1>
           </Animacion>
           <div className="container-acordeon-carru">
           <Dividermio3/>
             <CarouselDemo2/>
           </div>
         </div>

        
         
       </section>
       <div className="container-linea">
       <Divider className="my-4 linea-gral" orientation="horizontal"/>
       </div>
       <div className="container-section3">
       <Animacion delay={0.1}>
        <h4 className="titulo-1-h2">
        SUITES DE CATEGORÍA, EN CADA DETALLE
        </h4>
        </Animacion>
        <Animacion delay={0.3}>
        <p className="p-2-h2">Contamos con 27 habitaciones de destacada calidad, equipadas con Colchones Springwall, wifi de Starlink, TV Streaming con más de 1200 canales y vidrios de doble insonorización. Confort y excelencia para una estadía superior.</p>
        </Animacion>
       <div className="carru-3">
       <CarouselSize/>
       </div>
       <a href="https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=19539">
       <button className="contacto-ppp">
        Reservar ahora
        </button>
        </a>
       </div>
       <div className="container-linea">
       <Divider className="my-4 linea-gral" orientation="horizontal"/>
       </div>

       <Animacion delay={0.3}>
       <div className="ultimo-divider">
        <h2 className="titulo-container-ultimo">SERVICIOS QUE ENRIQUECEN CADA MOMENTO</h2>
       <div className="max-w-xl contenedor-ultimodivider">
          <div className="space-y-1 contenedor-texto-ultimodiv">
            <h4 className="text-medium font-medium titulo-ultimo">DESAYUNO BUFFET</h4>
            <p className="text-small txt-ultimo">Con ingredientes variados y saludables, para comenzar el día con energía y sabor. </p>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1 contenedor-texto-ultimodiv">
            <h4 className="text-medium font-medium titulo-ultimo">PILETA CLIMATIZADA</h4>
            <p className="text-small txt-ultimo">Diversión, relax y recreación en un espacio exclusivo, con acceso todo el año.</p>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1 contenedor-texto-ultimodiv">
            <h4 className="text-medium font-medium titulo-ultimo">ESTACIONAMIENTO INCLUIDO</h4>
            <p className="text-small txt-ultimo">Tranquilidad y comodidad que mejora tu viaje, al tener tu vehículo más seguro y disponible.</p>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1 contenedor-texto-ultimodiv">
            <h4 className="text-medium font-medium titulo-ultimo">AIRE ACONDICIONADO</h4>
            <p className="text-small txt-ultimo">En todos los ambientes del hotel vas a encontrar el clima ideal, para gozar de tu estadía de principio a fin.</p>
          </div>
        </div>
       </div>
       </Animacion>
       <div className="container-linea">
       <Divider className="my-4 linea-gral" orientation="horizontal"/>
       </div>
     </DefaultLayout>
   );
 }

// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import DefaultLayout from "@/layouts/default";
// import {Image} from "@nextui-org/react";
// import { Button, ButtonGroup } from '@chakra-ui/react'



// export default function IndexPage() {
//     return (

//         <section className="section-container">
         
//           <div className="inline-block max-w-xl text-center justify-center">
//             <br />
//             <h1 className={title({ class: "tit-color" })}>Web en construcción</h1>
//             <div className="container-img">
            
//             </div>
//             <h4 className={subtitle({ class: "mt-4 text-color" })}>
//               ESTAMOS REMODELADO NUESTRA PÁGINA
//             </h4>
//             <h4 className={subtitle({ class: "mt-4 font-thin par-color" })}>
//             Si querés reservar una habitación, podés hacerlo desde nuestro motor de reservas.
//             </h4>
//             <a href="https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=19539">
//             <Button colorScheme='#5B5745;' size='sm' className="boton-navbar2">
//           RESERVAR AHORA
//           </Button>
//           </a>
//           </div>
          

     
//           <div className="redes">
         
//           <h4 className="p-chiquito">
//           Si necesitás contactarte con nosotros escribinos por cualquiera de estos medios que vamos a estar encantados de ayudarte.
//             </h4>
//             <hr className="thin-divider" />
//             <div className="redes-esp">
              
//   <Link isExternal href="https://www.instagram.com/casaforesta.salta/">
//     <Image
//       width={23}
//       height={23}
//       alt="NextUI hero Image with delay"
//       src="/assets/ig-casa.png"
//       className="no-rounded"
//     />
//   </Link>
//   <Link isExternal href="mailto:reservas@casaforesta.com.ar">
//     <Image
//       width={25}
//       height={23}
//       alt="NextUI hero Image with delay"
//       src="/assets/mail-casa.png"
//       className="no-rounded"
//     />
//   </Link>
//   <Link isExternal href="https://wa.me/5493875888611">
//     <Image
//       width={25}
//       height={23}
//       alt="NextUI hero Image with delay"
//       src="/assets/wpp-casa.png"
//       className="no-rounded"
//     />
//   </Link>
//   </div>
// </div>
// <Image
//       width={139}
//       height={18}
//       alt="NextUI hero Image with delay"
//       src="/assets/logo-fica.png"
//       className="logo-fic"
//     />
//         </section>

//   );
// }

