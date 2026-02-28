import { SectionFaqContact } from "@/app/components/sections/contact/faqContact";
import { SectionHeroContact } from "@/app/components/sections/contact/heroContact";
import { SectionMap } from "@/app/components/sections/contact/map";
import { SectionTouch } from "@/app/components/sections/contact/touch";


export default function Contact(){
    return(
        <>
         <SectionHeroContact/>
         <SectionTouch/>
         <SectionMap/>
         <SectionFaqContact/>
        </>
    )
}