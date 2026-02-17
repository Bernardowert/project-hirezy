import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { CoreItems } from "./coreItems";

export function SectionCoreAbout(){
    return(
        <section className="pt-20 pb-32">
            <ContainerGRID>
                  <TitleSection 
                    subtitle="Core Values"
                    title="How We Think and Build"
                    description="Our values shape the way we design, build, and grow Hirezy, guiding every decision we make for our users."           
                  />
                  <CoreItems/>
            </ContainerGRID>
        </section>
    )
}