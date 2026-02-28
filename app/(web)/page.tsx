import { SectionAudience } from "../components/sections/home/audience";
import { SectionFaq } from "../components/sections/home/faq";
import { SectionFeatures } from "../components/sections/home/features";
import { SectionHero } from "../components/sections/home/hero";
import { SectionHiringHome } from "../components/sections/home/hiring";
import { SectionIntegration } from "../components/sections/home/integration";
import { SectionNumbers } from "../components/sections/home/numbers";
import { SectionPrice } from "../components/sections/home/price";
import { SectionAbout } from "../components/sections/home/s-About";
import { SectionTestimonals } from "../components/sections/home/testimonals";
import { SectionValue } from "../components/sections/home/value";



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
