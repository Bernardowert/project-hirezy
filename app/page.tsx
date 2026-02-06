import { CardAudience } from "@/app/components/cardAudience";
import { SectionAudience } from "@/app/components/sections/home/audience";
import { SectionHero } from "@/app/components/sections/home/hero";
import { SectionAbout } from "@/app/components/sections/home/s-About";
import { Subtitle } from "@/app/components/subtitle";


export default function Home() {
  return (
     <>
        <SectionHero/>
        <SectionAudience/>
        <SectionAbout/>
     </>
  )
}
