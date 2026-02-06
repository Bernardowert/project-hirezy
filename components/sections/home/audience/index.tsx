import { ContainerGRID } from "@/components/containerGRID";
import { Subtitle } from "@/components/subtitle";
import { TitleSection } from "@/components/titleSection";
import { AreaCards } from "./areaCards";

export function SectionAudience(){
    return(
        <section className="py-20">
            <ContainerGRID>
                     <TitleSection subtitle="Target Audience" title="Built for Every Hiring Team" description="Whether you re a startup or a global enterprise, Hirezy adapts to your hiring needs."/>
                     <AreaCards/>
            </ContainerGRID>
        </section>
    )
}