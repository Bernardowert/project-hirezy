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


export default function Home() {
  return (
     <>
        <SectionHero/>
        <SectionAudience/>
        <SectionAbout/>
        <SectionValue/>
        <SectionHiringHome/>
     </>
  )
}
