import { CardAudience } from "@/components/cardAudience";
import { SectionAudience } from "@/components/sections/home/audience";
import { SectionHero } from "@/components/sections/home/hero";
import { Subtitle } from "@/components/subtitle";


export default function Home() {
  return (
     <>
        <SectionHero/>
        <SectionAudience/>
     </>
  )
}
