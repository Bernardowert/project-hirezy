import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { CardsPopular } from "./cardsPopular";

export function SectionPopularBlog(){
    return(
        <section className="py-14 laptop:pt-32 laptop:pb-20">
            <ContainerGRID>
                  <TitleSection
                   subtitle="Popular"
                   title="Most-Read Hiring Insights"
                   description="The most-read Hirezy articles on hiring workflows, recruiting tips, and smarter team decisions."
                   isSeparatedDescription
                   isTxtCenter={false}
                   separatedDescriptionStyle="laptop:max-w-125"
                  />
                  <CardsPopular/>
            </ContainerGRID>
        </section>
    )
}