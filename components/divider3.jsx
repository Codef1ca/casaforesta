import {Divider} from "@nextui-org/react";
import Animacion from "@/components/animacion"

export default function App() {
    return (
        <div className="max-w-md">
          <Animacion delay={0.3}>
          <div className="space-y-1">
            <h4 className="text-medium font-medium titulo-1-h">SALTA EN UNA EXPERIENCIA SUPERIOR.</h4>
            <p className="text-small text-default-400 p-1-h">Somos Casa Foresta, un hotel para vivir tu viaje a Salta con un servicio de alta gama y confort premium. En un entorno inmejorable, cerca de los miradores y la Virgen del Cerro, Casa Foresta se posiciona como una experiencia superior en alojamiento, diversión y relax.</p>
          </div>
          </Animacion>
          <Animacion delay={0.5}>
          <Divider className="my-4" />
          <h4 className="text-medium font-medium titulo-2-h">+ COMODIDAD</h4>
          <Divider className="my-4" />
          <h4 className="text-medium font-medium titulo-2-h">+ CONFORT</h4>
          <Divider className="my-4" />
          <h4 className="text-medium font-medium titulo-2-h">+ RELAX</h4>
          </Animacion>
        </div>
        
      );
}