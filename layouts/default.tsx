import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import {Image} from "@nextui-org/react";


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Head />
      <Navbar />
      <main className="">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="containerfooter">
        <div className="redes-footer">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.instagram.com/casaforesta.salta/"
          title="nextui.org homepage"
        >
           <Image
          width={15}
          height={15}
          alt="NextUI hero Image with delay"
          src="/assets/ig-casa.png"
          className="no-rounded"
          />
        </Link>

        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://wa.me/5493875888611"
          title="nextui.org homepage"
        >
           <Image
       width={15}
       height={15}
       alt="NextUI hero Image with delay"
       src="/assets/wpp-casa.png"
       className="no-rounded"
     />
        </Link>
        </div>
        <p className="p-footer">2024 Casa Foresta - Todos los derechos reservados<br></br>
        Diseñado por FICA TEAM</p>
        </div>
      </footer>
    </div>
  );
}
