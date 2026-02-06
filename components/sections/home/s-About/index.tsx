import { ContainerGRID } from "@/components/containerGRID";
import { TitleSection } from "@/components/titleSection";
import Image from "next/image";

import imageAbout from "@/assets/img-about-negotation.png";

export function SectionAbout(){
    return(
        <section>
            <ContainerGRID>
                <TitleSection subtitle="About" title="Discover Hirezy" description="From intuitive, user-friendly tools to advanced integrations with the platforms you already use, Hirezy streamlines the hiring journey so your team can focus on what matters most: finding and securing the right talent."/>
                 <div className="w-full h-106.5 overflow-hidden rounded-3xl mt-20">
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