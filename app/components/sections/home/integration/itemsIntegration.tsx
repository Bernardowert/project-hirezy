import Image from "next/image";


import logo01 from "@/app/assets/icons/icon-integration-01.png";
import logo02 from "@/app/assets/icons/icon-integration-02.png";
import logo03 from "@/app/assets/icons/icon-integration-03.png";
import logo04 from "@/app/assets/icons/icon-integration-04.png";
import logo05 from "@/app/assets/icons/icon-integration-05.png";

const logos = [
    {
        imgSrc:logo01,
        imgAlt:"Logo Slack",
    },
    {
        imgSrc:logo02,
        imgAlt:"Logo Trello",
        style: "top-30"
    },{
        imgSrc:logo03,
        imgAlt:"Logo Asana"
    }
    ,{
        imgSrc:logo04,
        imgAlt:"Logo Zoom",
        style: "top-30 row-start-3 col-span-2 max-w-41.75 mx-auto tablet:max-w-1/2 laptop:row-auto laptop:col-auto laptop:max-w-full laptop:m-0"

    }
    ,{
        imgSrc:logo05,
        imgAlt:"Logo Dropbox"
    }
]

export function ItemsIntegration(){
    return(
         <ul className="w-full laptop:max-w-192.5 grid grid-cols-2 gap-6 laptop:gap-10">

               {
                  logos.map(({imgSrc ,imgAlt, style}, index) => (
                    <li className={`w-full h-25 tablet:h-50 flex items-center justify-center bg-blue-300 rounded-2xl laptop:rounded-3xl ${style ?  `laptop:relative ${style}`: ""}`} key={`${imgSrc + `${index}`}`}>
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      title={imgAlt}
                      className="max-w-21.25 tablet:max-w-full"
                    />
                   </li>
                  ))
               }
         </ul>
    )
}