import { ContainerGRID } from "@/app/components/containerGRID";
import { Subtitle } from "@/app/components/subtitle";
import { TitleSection } from "@/app/components/titleSection";
import { AreaCards } from "./areaCards";

export function SectionAudience(){
    return(
        <section className="pt-10 pb-20 laptop:py-20">
            <ContainerGRID>
                     <TitleSection subtitle="Target Audience" title="Built for Every Hiring Team" description="Whether you re a startup or a global enterprise, Hirezy adapts to your hiring needs."/>
                     <AreaCards/>
            </ContainerGRID>
        </section>
    )
}