import Image from "next/image";
import { Button } from "../button";
import { ContainerGRID } from "../containerGRID";


import mockupMac from "@/app/assets/mockup-macbook.png";
import { ArrowRight } from "lucide-react";

export function SectionHiringAbout(){
    return(
        <section>
            <ContainerGRID>
                    <div className="w-full flex-col-reverse gap-8  laptop:gap-0 laptop:flex-row laptop:h-116.75 overflow-hidden flex items-center bg-bgMacbook bg-center bg-no-repeat bg-cover rounded-4xl">
                           <Image
                            src={mockupMac}
                            alt="Mockup Macbook"
                            title="Mockup Macbook"
                            className="self-end relative top-6.25 h-53.25 object-cover laptop:top-16 laptop:-ml-48.25 tablet:h-auto"
                            draggable={false}
                           />
                           <div className="w-full max-w-159 px-8 pt-10 laptop:mt-8.75">
                                 <h2 className="font-lato text-2xl/tight tablet:text-3xl laptop:text-5xl/tight text-black-500 font-semibold">Talk to the Hirezy Team to Streamline Your Hiring</h2>
                                 <p className="text-lg opacity-90 mt-4 laptop:mt-5 mb-16">Need help improving your hiring? Our team is here to support you.</p>
                                 <Button className="flex items-center gap-2.5 laptop:gap-4 py-2.5 px-5">
                                    <span>Contact Us</span>
                                    <div className="size-8 laptop:size-10 bg-white rounded-full flex items-center justify-center transition-all ease-linear group-hover:bg-black-500 group-focus:bg-black-500">
                                        <ArrowRight size={18} color="#000" className="transition-all ease-linear group-hover:stroke-white group-focus:stroke-white"/>
                                    </div>
                                 </Button>
                           </div>
                    </div>
            </ContainerGRID>
        </section>
    )
}