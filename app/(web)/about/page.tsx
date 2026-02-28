import { SectionHiringAbout } from "@/app/components/hiring";
import { SectionCompanyAbout } from "@/app/components/sections/about/companyAbout";
import { SectionCoreAbout } from "@/app/components/sections/about/coreAbout";
import { SectionHeroAbout } from "@/app/components/sections/about/heroAbout/heroAbout";
import { SectionPhotoAbout } from "@/app/components/sections/about/photoAbout";
import { SectionStoryAbout } from "@/app/components/sections/about/storyAbout";
import { SectionTeamAbout } from "@/app/components/sections/about/teamAbout";

export default function About(){
    return(
        <>
          <SectionHeroAbout/>
          <SectionStoryAbout/>
          <SectionCompanyAbout/>
          <SectionCoreAbout/>
          <SectionPhotoAbout/>
          <SectionTeamAbout/>
          <SectionHiringAbout/>
        </>
    )
}