import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import Image from "next/image";

import imageAbout from "@/app/assets/img-about-negotation.png";

export function SectionAbout(){
    return(
        <section>
            <ContainerGRID>
                <TitleSection className="max-w-187.75 mx-auto" isTxtCenter subtitle="About" title="Discover Hirezy" description="From intuitive, user-friendly tools to advanced integrations with the platforms you already use, Hirezy streamlines the hiring journey so your team can focus on what matters most: finding and securing the right talent."/>
                 <div className="w-full h-40 tablet:h-106.5 overflow-hidden rounded-2xl mt-14">
                    <Image
                      src={imageAbout}
                      alt="Image with people negotiating"
                      title="People negotiating"
                      className="w-full h-full object-cover"
                    />
                 </div>
            </ContainerGRID>
        </section>
    )
}