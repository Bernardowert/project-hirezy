import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { Slides } from "./slides";

export function SectionTestimonals(){
    return(
        <section>
            <ContainerGRID>
                   <TitleSection subtitle="Testimonial" title="What Our Users Say" description="Discover why companies trust Hirezy to streamline and improve hiring processes."/> 
                    <Slides/>
            </ContainerGRID>
        </section>
    )
}