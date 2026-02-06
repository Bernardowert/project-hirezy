import { CardAudience } from "@/components/cardAudience";
import { SectionAudience } from "@/components/sections/home/audience";
import { SectionHero } from "@/components/sections/home/hero";
import { SectionAbout } from "@/components/sections/home/s-About";
import { Subtitle } from "@/components/subtitle";


export default function Home() {
  return (
     <>
        <SectionHero/>
        <SectionAudience/>
        <SectionAbout/>
     </>
  )
}
