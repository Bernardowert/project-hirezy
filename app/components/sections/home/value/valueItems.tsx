

import valueImg01 from "@/app/assets/icons/icon-value-01.png";
import valueImg02 from "@/app/assets/icons/icon-value-02.png";
import valueImg03 from "@/app/assets/icons/icon-value-03.png";
import valueImg04 from "@/app/assets/icons/icon-value-04.png";
import { CardValue } from "@/app/components/cardValue";

const items = [
    {
        imgSrc:valueImg01,
        imgAlt:"Icon pointer Mouse",
        title:"User Friendly",
        description:"Clean interface and intuitive workflows that keep your team productive."
    },
     {
        imgSrc:valueImg02,
        imgAlt:"Icon Mountain",
        title:"Scalable",
        description:"Flexible system that grows and adapts with your company’s needs."
    },
    {
        imgSrc:valueImg03,
        imgAlt:"Icon Support",
        title:"Reliable Support",
        description:"24/7 assistance from a dedicated support team, always ready to help."
    },
    {
        imgSrc:valueImg04,
        imgAlt:"Icon Shield",
        title:"Secure & Compliant",
        description:"Enterprise-level security and compliance standards to protect sensitive hiring data."
    },
]

export function ValueItems(){
    return(
        <div className="grid gap-6 tablet:gap-10 w-full  tablet:grid-cols-2 laptop:max-w-206">
             {
                items.map(({imgSrc,imgAlt,title,description},index) =>(
                    <CardValue key={`${index} + ${title}`} imageSrc={imgSrc} imageAlt={imgAlt} title={title} description={description}/>
                ))
             }
        </div>
    )
}