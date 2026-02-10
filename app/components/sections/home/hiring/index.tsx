import { BannerHiring } from "@/app/components/bannerHiring";
import { ContainerGRID } from "@/app/components/containerGRID";

export function SectionHiringHome(){
    return(
        <section>
            <ContainerGRID>
                 <BannerHiring title="Ready to Transform Your Hiring Process for the Better?" description="Try Hirezy today and discover how easy recruitment can be." btnText="Download Now"/>
            </ContainerGRID>
        </section>
    )
}