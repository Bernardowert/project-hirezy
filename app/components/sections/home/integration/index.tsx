import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { ItemsIntegration } from "./itemsIntegration";

export function SectionIntegration(){
    return(
        <section className="gap-10 laptop:py-20">
            <ContainerGRID className="flex-col flex gap-8 laptop:gap-0 laptop:flex-row laptop:items-start justify-between">
                    <TitleSection 
                    isTxtCenter={false} 
                    subtitle="Integration" 
                    title="Seamlessly Connected" 
                    description="Connect Hirezy to your favorite tools and keep your hiring workflow running smoothly."
                    className="w-full laptop:max-w-122.5"
                    />
                     <ItemsIntegration/>
            </ContainerGRID>
        </section>
    )
}