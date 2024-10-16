import {Divider} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-md container-divider">
      <div className="flex h-5 items-center space-x-4 text-small texto-divaider">
        <div>01</div>
        Pileta climatizada, diversión, relax y recreación en un espacio exclusivo, con acceso todo el año.
      </div>
      <Divider className="my-4 linea" orientation="horizontal"/>
      <div className="flex h-5 items-center space-x-4 text-small texto-divaider">
        <div>02</div>
        Pileta climatizada, diversión, relax y recreación en un espacio exclusivo, con acceso todo el año.
      </div>
      <Divider className="my-4 linea" orientation="horizontal"/>
      <div className="flex h-5 items-center space-x-4 text-small texto-divaider">
        <div>03</div>
        Estacionamiento. Tranquilidad y comodidad que mejora tu viaje, al tener tu vehículo más seguro y disponible.
      </div>
      <Divider className="my-4 linea" orientation="horizontal"/>
      <div className="flex h-5 items-center space-x-4 text-small texto-divaider">
        <div>04</div>
        Ambientes climatizados. En todo el hotel vas a encontrar el clima ideal, para gozar de tu estadía de principio a fin.
      </div>
    </div>
  );
}