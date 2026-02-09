import { Button } from "@/app/components/button";
import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { ValueItems } from "./valueItems";


export function SectionValue(){
    return(
        <section className="py-20">
            <ContainerGRID className="flex gap-7 laptop:gap-0 items-start justify-between flex-col laptop:flex-row relative laptop:static">
                  <div className="w-full laptop:max-w-108">
                    <TitleSection subtitle="Value" isTxtCenter={false} title="Why Choose Hirezy" description="Built with recruiters to provide the tools they need — helping them find the right talent faster."/>
                  <Button className="absolute -bottom-19.5 py-2.5 laptop:py-4 laptop:mt-49.5 laptop:static">Get to Know Us</Button> 
                 </div> 
                 <ValueItems/>  
            </ContainerGRID>
        </section>
    )
}