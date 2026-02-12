import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { PriceItems } from "./priceItems";





export function SectionPrice(){
    return(
        <section className="py-10 laptop:py-20">
            <ContainerGRID>
                   <TitleSection subtitle="Pricing Plan" title="Simple Plans, Clear Value" description=" Choose a plan that fits your team needs."/>
                   <PriceItems/>
            </ContainerGRID>
        </section>
    )
}