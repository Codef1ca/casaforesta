import DefaultLayout from "@/layouts/default";
import {Divider} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import Animacion from "@/components/animacion"

export default function ContactoPage() {
  return (
    <DefaultLayout>
      <section className="container-contacto">
      <div className="container-texto-contacto">
      <Animacion delay={0.1}>
        <h1 className="titulo-contacto">Contactate con nosotros</h1>
        <p className="descripcion-contacto">¡Gracias por tu interés en nuestro hotel!
        Si tenés dudas o consultas, contactate con nosotros por cualquiera de estos medios que estaremos encantados de ayudarte en lo que necesites.</p>
      </Animacion>
      </div>
      <div className="ultimo-divider2">
      <Animacion delay={0.3}>
        <h2 className="titulo-container-ultimo2">MEDIOS DE CONTACTO</h2>
        <Divider className="my-4" />
       <div className="max-w-xl contenedor-ultimodivider">
          <div className="space-y-1 contenedor-texto-ultimodiv">
          <a href="mailto:reservas@casaforesta.com.ar">
          <Image
          width={17}
          height={13}
          alt="NextUI hero Image with delay"
          src="/assets/mail-casa.png"
          className="no-rounded"
          />
          </a>
          <a href="mailto:reservas@casaforesta.com.ar">
            <p className="text-small txt-ultimo2">reservas@casaforesta.com.ar</p>
          </a>
          
          </div>
          <Divider className="my-4" />
          <div className="space-y-1 contenedor-texto-ultimodiv">
          <a href="https://wa.me/5493875888611">
          <Image
          width={17}
          height={15}
          alt="NextUI hero Image with delay"
          src="/assets/telefono-casa.png"
          className="no-rounded telefono"
          />
          </a>
          <a href="https://wa.me/5493875888611">
            <p className="text-small txt-ultimo3">+54 9 387 5888611</p>
          </a>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1 contenedor-texto-ultimodiv">
          <a href="https://maps.app.goo.gl/96S1eo6sDTV3C7CP7">
          <Image
          width={15}
          height={15}
          alt="NextUI hero Image with delay"
          src="/assets/ubi-casa.png"
          className="no-rounded"
          />
          </a>
          <div className="container-text-etc">
            <p className="text-small txt-ultimo4">Los Durazneros 1355, Salta C.P.4400</p>
            <a href="https://www.google.com/maps/place/Casa+Foresta+Hotel+%26+Apart/@-24.7547948,-65.395475,15z/data=!4m9!3m8!1s0x941bc33c482dc2e5:0x78335c8c29ba1fa!5m2!4m1!1i2!8m2!3d-24.7547948!4d-65.395475!16s%2Fg%2F11wh_j301f?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" className="contacto-pppp">
            Ver ubicación en maps
            </a>
            </div>
          </div>
        </div>
      </Animacion>
       </div>
       
    
      </section>
      <Animacion delay={0.5}>
      <div className="rectangulo-contacto">
        <h2 className="titulo-tarjeton">¿QUERÉS RESERVAR UNA HABITACIÓN?</h2>
        
        <a href="https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=19539" className="contacto-ppppp">
            Ir a reservar ahora
        </a>
      </div>
      </Animacion>
      <div className="container-linea">
       <Divider className="my-4 linea-gral" orientation="horizontal"/>
       </div>
    </DefaultLayout>
  );
}
