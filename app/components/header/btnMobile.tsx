'use client';

import Image from "next/image";

import iconHamburguer from "@/app/assets/icons/menu-hamburguer.png";
import { useEffect, useState } from "react";
import { NavListing } from "./navListing";
import { Button } from "../button";

export function BtnMobile(){
    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(false);
    
     useEffect(() => {
        
        const handleRezise = () => {
            if(window.innerWidth >= 1024){
                setRender(false);
            }
        }
       
        window.addEventListener('resize', handleRezise);

        return () => {
            window.removeEventListener('resize', handleRezise);
        }

     }, []);

    function handleOpen(){
        if(isOpen){
            setIsOpen(false);
            setRender(false);
        }
        else {
            setRender(true);
            requestAnimationFrame(() => setIsOpen(true));
        }
    }
    return(
        <>
            <button className="laptop:hidden" onClick={handleOpen}>
             <Image
               src={iconHamburguer}
               alt="Icon Hamburguer"
               title="Icon Hamburguer"
             />
            </button>


            {
                render && (
                    <div className="fixed w-full h-full top-0 left-0">
                   
                   <div className={`fixed w-full h-full top-0 left-0 bg-black transition-all ease-linear ${isOpen ? "opacity-50" : "opacity-0"}`} onClick={() => setIsOpen(false)}>

                   </div>

                   <div className={`fixed left-0 top-0 w-[75%] transition-all ease-linear ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-white h-full p-3`} onTransitionEnd={() => !isOpen && setRender(false)}>
                        <NavListing isColumn/>
                        <Button className="w-full mt-7">
                            Sign In
                        </Button>
                   </div>
                   </div>
                )
            }
        </>
    )
}