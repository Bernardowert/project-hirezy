import { CardAudience } from "@/app/components/cardAudience";
import { SectionAudience } from "@/app/components/sections/home/audience";
import { SectionHero } from "@/app/components/sections/home/hero";
import { SectionAbout } from "@/app/components/sections/home/s-About";
import { Subtitle } from "@/app/components/subtitle";
import { CardValue } from "./components/cardValue";
import { SectionValue } from "./components/sections/home/value";
import { BannerHiring } from "./components/bannerHiring";
import { ContainerGRID } from "./components/containerGRID";
import { SectionHiringHome } from "./components/sections/home/hiring";
import { SectionNumbers } from "./components/sections/home/numbers";
import { SectionFeatures } from "./components/sections/home/features";
import { SectionIntegration } from "./components/sections/home/integration";
import { SectionPrice } from "./components/sections/home/price";
import { AccordionFAQ } from "./components/accordionFAQ";
import { SectionFaq } from "./components/sections/home/faq";
import { SectionTestimonals } from "./components/sections/home/testimonals";


export default function Home() {
  return (
     <>
        <SectionHero/>
        <SectionAudience/>
        <SectionAbout/>
        <SectionValue/>
        <SectionFeatures/>
        <SectionHiringHome/>
        <SectionNumbers/>
        <SectionIntegration/>
        <SectionPrice/>
        <SectionFaq/>
        <SectionTestimonals/>
     </>
  )
}
