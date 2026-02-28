import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { CardsArticles } from "./cardsArticles";

export function SectionArticlesBlog(){
    return(
        <section className="py-10 laptop:py-16">
            <ContainerGRID>
                 <TitleSection
                   subtitle="Blog"
                   title="Browse Our Latest Articles"
                   description="Stay informed with practical guidance, industry trends, and actionable recruitment insights from the Hirezy team."
                 />
                 <CardsArticles/>
            </ContainerGRID>
        </section>
    )
}