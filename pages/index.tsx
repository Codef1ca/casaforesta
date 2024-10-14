// import { Link } from "@nextui-org/link";
// import { button as buttonStyles } from "@nextui-org/theme";
// import DefaultLayout from "@/layouts/default";
// import Acordion from "@/components/accordion";
// import Carrusel from "@/components/carrusel-home";

// export default function IndexPage() {
//   return (
//     <DefaultLayout>
//       <section className="section-home">
//           <Carrusel/>

//         <div className="seccion2-home">
//           <h1 className="titulo-seccion2">
//           Casa foresta. Una estadía de<br></br> 
//           confort y encanto natural
//           </h1>
//           <div className="container-acordeon-carru">
//             <Acordion/>
//           </div>
//         </div>


  
//       </section>
//     </DefaultLayout>
//   );
// }

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/react";
import { Button, ButtonGroup } from '@chakra-ui/react'



export default function IndexPage() {
    return (

        <section className="section-container">
         
          <div className="inline-block max-w-xl text-center justify-center">
            <br />
            <h1 className={title({ class: "tit-color" })}>Web en construcción</h1>
            <div className="container-img">
            
            </div>
            <h4 className={subtitle({ class: "mt-4 text-color" })}>
              ESTAMOS REMODELADO NUESTRA PÁGINA
            </h4>
            <h4 className={subtitle({ class: "mt-4 font-thin par-color" })}>
            Si querés reservar una habitación, podés hacerlo desde nuestro motor de reservas.
            </h4>
            <a href="http://casaforesta.reservadirecto.com/lp.html?pos=CasaForesta&lng=es&cur=USD&webcache=off&tag=PmsLink">
            <Button colorScheme='#5B5745;' size='sm' className="boton-navbar">
          RESERVAR AHORA
          </Button>
          </a>
          </div>
          

     
          <div className="redes">
         
          <h4 className="p-chiquito">
          Si necesitás contactarte con nosotros escribinos por cualquiera de estos medios que vamos a estar encantados de ayudarte.
            </h4>
            <hr className="thin-divider" />
            <div className="redes-esp">
              
  <Link isExternal href="https://www.instagram.com/casaforesta.salta/">
    <Image
      width={23}
      height={23}
      alt="NextUI hero Image with delay"
      src="/assets/ig-casa.png"
      className="no-rounded"
    />
  </Link>
  <Link isExternal href="mailto:reservas@casaforesta.com.ar">
    <Image
      width={25}
      height={23}
      alt="NextUI hero Image with delay"
      src="/assets/mail-casa.png"
      className="no-rounded"
    />
  </Link>
  <Link isExternal href="https://wa.me/5493875888611">
    <Image
      width={25}
      height={23}
      alt="NextUI hero Image with delay"
      src="/assets/wpp-casa.png"
      className="no-rounded"
    />
  </Link>
  </div>
</div>
<Image
      width={139}
      height={18}
      alt="NextUI hero Image with delay"
      src="/assets/logo-fica.png"
      className="logo-fic"
    />
        </section>

  );
}

