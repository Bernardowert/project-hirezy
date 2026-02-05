import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import Image from "next/image";


import logo from "@/assets/Logo.png";
import { NavListing } from "./navListing";
import { Button } from "../button";
import { BtnMobile } from "./btnMobile";

export function Header(){
    return(
        <header className="py-6">
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