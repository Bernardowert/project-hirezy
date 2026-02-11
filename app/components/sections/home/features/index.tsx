import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import Image from "next/image";



import featureImg01 from "@/app/assets/features-home-01.png";
import featureImg02 from "@/app/assets/phone-mockup.png";
import featureImg03 from "@/app/assets/features-home-03.png";
import featureImg04 from "@/app/assets/features-home-04.png";
import featureImg05 from "@/app/assets/features-home-05.png";


const featuresList = [
    {
        title:"Customizable Pipelines",
        description:"Tailor your recruitment workflow to match your organization needs.",
        imgSrc:featureImg01,
        imgAlt:"Dashboard",
    },
    {
        title:"Centralized Dashboard",
        description:"Manage all hiring activities in one clean, organized platform.",
        imgSrc:featureImg02,
        imgAlt:"Mockup Phone",
        style:"row-span-2 desktop:h-167.25",
        isReverse:true
    },
    {
        title:"Job Posting Automation",
        description:"Publish openings across multiple channels with a single click.",
        imgSrc:featureImg03,
        imgAlt:"Dashboard financial",
        style:"desktop:h-116.25"
    },
    {
        title:"Team Activity Feed",
        description:"See real-time updates on candidate progress and team feedback.",
        imgSrc:featureImg04,
        imgAlt:"Notification Panel",
        style:"desktop:h-77"
    },
    {
        title:"Analytics & Reports",
        description:"Manage all hiring activities in one clean, organized platform.",
        imgSrc:featureImg05,
        imgAlt:"Rounded information",
        style:"h-full desktop:h-41 self-end flex-row gap-6",
        imgStyle:"w-full max-w-25"
    },
    
]
export function SectionFeatures(){
    return(
        <section className="pb-14 pt-10 laptop:pt-20 laptop:pb-32">
            <ContainerGRID>
                  <TitleSection subtitle="Features" title="Smart Recruitments, Better Results" description="From job posting to candidate placement, Hirezy covers every step with ease."/>
            
                  <div className="mt-8 tablet:mt-14 grid tablet:grid-cols-2 desktop:grid-cols-3 gap-10 desktop:grid-rows-[325px_308px]">
                    {
                        featuresList.map(({title,description,imgSrc,imgAlt, style, isReverse, imgStyle}, index) => (
                        <div key={`${index + title}`} className={`rounded-3xl p-8  bg-blue-300 flex items-center desktop:items-start justify-between ${isReverse ? "flex-col-reverse" : "flex-col"}  ${style}`}>
                        <Image
                        src={imgSrc}
                        alt="Application list"
                        title="Application list"
                        {...(imgStyle && {className:imgStyle})}
                        />
                            <div className="space-y-2">
                            <h3 className="font-lato text-xl laptop:text-2xl font-semibold">{title}</h3>
                            <p className="text-sm laptop:text-base text-grey-500">{description}</p>
                            </div>
                         </div>
                        ))
                    }
                  </div>
            </ContainerGRID>
        </section>
    )
}