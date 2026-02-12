import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { PriceItems } from "./priceItems";





export function SectionPrice(){
    return(
        <section>
            <ContainerGRID>
                   <TitleSection subtitle="Pricing Plan" title="Simple Plans, Clear Value" description=" Choose a plan that fits your team needs."/>
                   <PriceItems/>
            </ContainerGRID>
        </section>
    )
}