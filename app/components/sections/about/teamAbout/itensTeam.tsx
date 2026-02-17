import Image from "next/image";


import imageTeam01 from "@/app/assets/image-team-01.png";
import imageTeam02 from "@/app/assets/image-team-02.jpg";
import imageTeam03 from "@/app/assets/image-team-03.jpg";
import imageTeam04 from "@/app/assets/image-team-04.jpg";


const images = [
    {
        imgSrc:imageTeam01,
        name:"James Parker",
        job:"CEO & Co-Founder"
    },
    {
        imgSrc:imageTeam02,
        name:"Mira Hassan",
        job:"Chief Technology Officer"
    },
    {
        imgSrc:imageTeam03,
        name:"Emma Mills",
        job:"Customer Success Manager"
    },
    {
        imgSrc:imageTeam04,
        name:"Daniel Ortiz",
        job:"Head of Marketing",
        style:"laptop:col-start-2"
    }
]

export function ItensTeam(){
    return(
        <div className="grid laptop:grid-cols-3 tablet:grid-cols-2 gap-10 mt-14">
                 

                 {
                    images.map(({imgSrc,name,job, style}, index) =>(
                     <div key={`${imgSrc + `${index}`}`} {...(style && {className:style})}>
                         <div className="w-full h-88 laptop:h-105 overflow-hidden rounded-4xl">
                              <Image
                               src={imgSrc}
                               alt={`Picture of ${name} job: ${job}`}
                               title={`Picture of ${name} job: ${job}`}
                               className="w-full h-full object-cover"
                              />
                         </div>
                         <div className="mt-5 space-y-2.5">
                            <h3 className="font-lato text-2xl/tight font-semibold text-black-500">{name}</h3>
                            <span className="block opacity-85">{job}</span>
                         </div>
                     </div>
                    ))
                 }
        </div>
    )
}