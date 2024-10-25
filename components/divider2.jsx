import {Divider} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-md container-divider2">
      <div className="flex h-5 space-x-4 text-small texto-divaider2">
        <div className="titulo-divider">NUESTRO ENTORNO</div>
        Estamos ubicados en una zona residencial y muy tranquila de Salta, rodeados de casitas bajas en un barrio tradicional de la ciudad.  Al estar al pie del cerro, desde aquí se puede apreciar nuestra geografía más icónica y al mismo tiempo, estar cerca de toda la vida social y cultural que propone nuestra hermosa capital provincial.
      </div>
      <button href="mailto:contacto@abradesol.com.ar" className="contacto-pp">
        Ver ubicación en maps
    </button>
      <Divider className="my-4 linea2" orientation="horizontal"/>
      <div className="contenedor-pos-div2">
      <div className="flex h-5 space-x-4 text-small texto-divaider2">
      <div className="titulo-divider">LA LINDA</div>
        Arquitectura colonial, paisajes de montaña y una riquísima herencia cultural: Salta ofrece una combinación única de historia, con su famoso Museo de Arqueología de Alta Montaña; naturaleza, con el inigualable Tren de las Nubes y tradición, con sus cientos de peñas folklóricas. El destino ideal para quienes buscan descubrir la esencia del norte argentino.
      
      <Divider className="my-4 linea2b" orientation="horizontal"/>
      </div>
      </div>
    </div>
  );
}