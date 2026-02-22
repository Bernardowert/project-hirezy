import { ContainerGRID } from "@/app/components/containerGRID";
import { Maps } from "./maps";

export function SectionMap(){
    return(
        <section className="py-10 laptop:py-20">
            <ContainerGRID>
                   <div className="text-center space-y-4 mb-8 tablet:mb-14">
                       <span className="text-sm tablet:text-base inline-block py-2 px-4 rounded-2xl bg-blue-300 text-grey-500">Map</span>
                       <h2 className="font-lato text-xl tablet:text-3xl laptop:text-48 font-semibold text-black-500">Visit Our Office or Schedule a Call</h2>
                   </div>
                   <Maps/>
            </ContainerGRID>
        </section>
    )
}