import { Button } from "@/app/components/button";
import { ContainerGRID } from "@/app/components/containerGRID";
import { AreaImage } from "./areaImage";
import { ArrowRight } from "lucide-react";

export function SectionHero(){
    return(
        <section className="pt-24 laptop:pt-34">
            <ContainerGRID>
                 <div className="flex items-center justify-between flex-col gap-4 laptop:flex-row laptop:gap-0">
                      <h1 className="font-lato font-semibold text-4xl laptop:text-64/tight laptop:max-w-130.5">Simplify Hiring. Empower Growth.</h1>
                      <div className="w-full max-w-133.5 tablet:text-center laptop:text-left">
                           <p className="text-grey-500 mb-10 laptop:mb-8 leading-6">Hirezy streamlines your recruitment process with smart tools, intuitive dashboards, and seamless integrations, helping you connect with top talent faster.</p>
                           <div className="flex gap-4 laptop:gap-6 tablet:justify-center laptop:justify-start">
                               <Button className="flex items-center gap-4 pt-2 pr-2 pb-2.5 pl-6">
                                  <span>Get Started</span>
                                   <div className="size-10 flex items-center justify-center rounded-full bg-white transition-colors ease-linear group-hover:bg-black group-focus:bg-black">
                                       <ArrowRight size={18} color="#222222" className="transition-all ease-linear group-hover:stroke-white group-focus:stroke-white" />
                                   </div>
                               </Button>
                               <Button btnStyle="btnSecondary">Learn more</Button>
                           </div>
                      </div>
                 </div>

                 <AreaImage/>
            </ContainerGRID>
        </section>
    )
}