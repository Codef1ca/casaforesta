'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { Button, ButtonGroup } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <div className="container-nav">
      <NextUINavbar maxWidth="xl" position="sticky" className="navbar-per">
        <NavbarContent className="navbar-content">
          <div className="left-links">
            <Link href="/about" className="item-nav">SOBRE NOSOTROS</Link>
            <Link href="/galeria" className="item-nav">GALERÍA DE FOTOS</Link>
            <Link href="/contacto" className="item-nav">CONTACTO</Link>
          </div>

          <NextLink className="logo-posit" href="/">
            <img src="/assets/logo-casa.png" alt="Logo" className="logo"/> 
          </NextLink>

          <div className="right-links">
          <Button colorScheme='#5B5745;' size='sm' className="boton-navbar">
          RESERVAR AHORA
          </Button>
          </div>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <NavbarMenuToggle className="togle"></NavbarMenuToggle> 
        </NavbarContent>

        <NavbarMenu className="back-menu-hamb">
          <NavbarMenuItem>
            <div className="menu-hamb">
              <Link href="/about" className="item-nav-h">SOBRE NOSOTROS</Link>
              <Link href="/galeria" className="item-nav-h">GALERÍA DE FOTOS</Link>
              <Link href="/contacto" className="item-nav-h">CONTACTO</Link>
              <Link href="/contacto" className="item-nav-h">BOTON</Link>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};


