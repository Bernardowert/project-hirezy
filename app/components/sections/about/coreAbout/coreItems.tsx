import Image from "next/image";


import logoCore01 from "@/app/assets/icons/icon-core-value-01.png";
import logoCore02 from "@/app/assets/icons/icon-core-value-02.png";
import logoCore03 from "@/app/assets/icons/icon-core-value-03.png";
import logoCore04 from "@/app/assets/icons/icon-core-value-04.png";
import logoCore05 from "@/app/assets/icons/icon-core-value-05.png";
import logoCore06 from "@/app/assets/icons/icon-core-value-06.png";


const items = [
    {
        imgSrc:logoCore01,
        imgAlt:"Icon Light",
        title:"Innovation First",
        description:"We change and continuously improve to stay ahead in recruitment technology."
    },
    {
        imgSrc:logoCore02,
        imgAlt:"Icon Design",
        title:"User-Centric Design",
        description:"Every feature is crafted to simplify the recruiter’s workflow and enhance efficiency."
    },
    {
        imgSrc:logoCore03,
        imgAlt:"Icon Lupa",
        title:"Transparency",
        description:"We build trust through open communication and honest results."
    },
    {
        imgSrc:logoCore04,
        imgAlt:"Icon Collaboration",
        title:"Collaboration",
        description:"Great hiring happens when teams work together seamlessly just like how Hirezy is built."
    },
    {
        imgSrc:logoCore05,
        imgAlt:"Icon Shield",
        title:"Integrity",
        description:"We uphold the highest standards of ethics and data protection in all our processes."
    },
    {
        imgSrc:logoCore06,
        imgAlt:"Icon Plant",
        title:"Growth Mindset",
        description:"We empower teams and individuals to learn, adapt, and succeed together."
    }
]

export function CoreItems(){
    return(
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mt-7.25 tablet:gap-8 tablet:mt-14">
                 

                  {
                     items.map(({imgSrc,imgAlt,title,description}, index) => (
                         <div className="h-72.75 rounded-4xl bg-blue-300 p-8 pt-12" key={`${description + `${index}`}`}>
                            <div className="w-full max-w-14.5 h-14.5 tablet:max-w-20 rounded-xl tablet:h-20 flex items-center justify-center tablet:rounded-3xl bg-lime mx-auto">
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    title={imgAlt}
                                    className="max-w-7.5 tablet:max-w-full"
                                />
                            </div>

                       <div className="mt-6 tablet:mt-12 text-center space-y-2.5">
                            <h3 className="font-lato text-xl tablet:text-2xl font-semibold text-black-500">{title}</h3>
                            <p className="text-sm opacity-90">{description}</p>
                       </div>
                         </div>
                     ))
                  }





        </div>
    )
}