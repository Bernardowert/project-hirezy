import { SectionCompanyAbout } from "../components/sections/about/companyAbout";
import { SectionCoreAbout } from "../components/sections/about/coreAbout";
import { SectionHeroAbout } from "../components/sections/about/heroAbout/heroAbout";
import { SectionPhotoAbout } from "../components/sections/about/photoAbout";
import { SectionStoryAbout } from "../components/sections/about/storyAbout";
export default function About(){
    return(
        <>
          <SectionHeroAbout/>
          <SectionStoryAbout/>
          <SectionCompanyAbout/>
          <SectionCoreAbout/>
          <SectionPhotoAbout/>
        </>
    )
}