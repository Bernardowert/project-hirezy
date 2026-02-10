'use client';

import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import Image from "next/image";


import logo from "@/app/assets/logo.png";
import { NavListing } from "./navListing";
import { Button } from "../button";
import { BtnMobile } from "./btnMobile";
import { useEffect, useState } from "react";

export function Header(){
    const[scroll,setScroll] = useState(0);

    useEffect(() =>{
          
        const handleScroll = () =>{
            setScroll(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <header className={`py-6 w-full fixed top-0 left-0 z-50 bg-white transition-all ease-linear ${scroll > 0 ? 'shadow-lg' : ''}`}>
            <ContainerGRID className="flex items-center justify-between">
                <Link href="/">
                   <Image
                     src={logo}
                     alt="Logo Hirezy"
                     title="Hirezy"
                     loading="eager"
                   />
                </Link>
                <NavListing/>
                <Button className="hidden laptop:inline-block">Sign In</Button>
                <BtnMobile/>
            </ContainerGRID>
        </header>
    )
}