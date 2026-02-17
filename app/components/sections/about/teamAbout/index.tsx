import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { ItensTeam } from "./itensTeam";

export function SectionTeamAbout(){
    return(
        <section className="py-32">
            <ContainerGRID>
                   <TitleSection
                    subtitle="Team"
                    title="Who’s Powering Hirezy"
                    description="A diverse team of innovators, strategists, and designers improving recruitment through technology."
                    isSeparatedDescription
                    isTxtCenter={false}
                    separatedDescriptionStyle="max-w-105"
                   />
                   <ItensTeam/>
            </ContainerGRID>
        </section>
    )
}