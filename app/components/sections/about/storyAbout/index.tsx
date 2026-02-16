import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { CardsStory } from "./cards";

export function SectionStoryAbout(){
    return(
        <section className="pt-14 pb-10 laptop:pt-32 laptop:pb-20">
            <ContainerGRID>
                <TitleSection
                subtitle="Story" 
                title="Built to Simplify Modern Hiring from Start to Finish" 
                description="Hirezy was built by HR pros, developers, and designers to simplify messy, time-consuming hiring."
                isSeparatedDescription
                separatedStyle="max-w-[576px]"
                separatedDescriptionStyle="max-w-[440px] mb-2"
                isTxtCenter={false}
                />

                <CardsStory/>
            </ContainerGRID>
        </section>
    )
}