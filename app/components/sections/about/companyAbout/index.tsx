import { Button } from "@/app/components/button";
import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { ArrowRight } from "lucide-react";
import { MarqueeItem } from "./marquee";

export function SectionCompanyAbout(){
    return(
        <section className="py-20">
            <ContainerGRID className="flex items-center justify-between flex-col laptop:flex-row relative laptop:static">
                    <div className="laptop:space-y-20 w-full max-w-122.5 mb-8">
                            <TitleSection
                                 subtitle="Trusted by Companies"
                                title="Chosen by the Teams Who Hire the Best"
                                description="Join the companies using Hirezy to streamline hiring, collaborate faster, and hire with confidence."
                                isTxtCenter={false}
                            />
                            <Button className="flex items-center gap-4 py-2 pr-2 pl-6 absolute -bottom-24.5 tablet:left-1/2 tablet:-translate-x-1/2 laptop:static laptop:translate-0">
                                <span>Get Started</span>
                                <div className="size-10 flex items-center justify-center bg-white rounded-full transition-colors ease-linear group-hover:bg-black-500 group-focus:bg-black-500">
                                 <ArrowRight size={18} className="transition-all ease-linear group-hover:stroke-white group-focus:stroke-white"/>
                                </div>
                            </Button>
                    </div>
                    <MarqueeItem/>
            </ContainerGRID>
        </section>
    )
}