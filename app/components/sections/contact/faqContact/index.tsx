import { AccordionFAQ } from "@/app/components/accordionFAQ";
import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";

export function SectionFaqContact(){
    return(
        <section className="py-10 laptop:py-32">
            <ContainerGRID>
                  <TitleSection
                  subtitle="FAQ"
                   title="Questions About Hirezy"
                   description="Save time with straightforward answers to common questions recruiters and HR teams often ask."
                   className="mb-8 laptop:mb-14"
                  />

                  <AccordionFAQ/>
            </ContainerGRID>
        </section>
    )
}