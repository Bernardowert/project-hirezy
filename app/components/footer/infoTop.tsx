import Image from "next/image";
import Link from "next/link";



import instagramIcon from "@/app/assets/icons/instagram.png";
import facebookIcon from "@/app/assets/icons/facebook.png";
import twitterIcon from "@/app/assets/icons/twitter.png";


import iconContact01 from "@/app/assets/icons/icon-contact-01.png";
import iconContact02 from "@/app/assets/icons/icon-contact-02.png";
import iconContact03 from "@/app/assets/icons/icon-contact-03.png";
import { Newsletter } from "./newsletter";

const socials = [
    {
        href:"#",
        imgSrc:instagramIcon,
        imgAlt:"Icon Instagram"
    },
     {
        href:"#",
        imgSrc:facebookIcon,
        imgAlt:"Icon Facebook"
    },
     {
        href:"#",
        imgSrc:twitterIcon,
        imgAlt:"Icon twitter"
    }
]


const links = [
     {
        title:"Quick Links",
        linkPath:[
            {
                href:"#",
                name:"Home"
            },
            {
                href:"#",
                name:"About Us"
            },
            {
                href:"#",
                name:"Features"
            },
            {
                href:"#",
                name:"Pricing"
            },
            {
                href:"#",
                name:"FAQ"
            }
        ]
     },
     {
        title:"Contacts",
        linkPath:[
            {
                href:"tel:+6281234567890",
                iconSrc:iconContact01,
                iconAlt:"Icon phone",
                name:"+62 812 3456 7890"
            },
             {
                href:"mailto:support@hirezy.com",
                iconSrc:iconContact02,
                iconAlt:"icon Email",
                name:"+support@hirezy.com"
            },
            {
                href:"#",
                iconSrc:iconContact03,
                iconAlt:"icon Address",
                name:"123 Innovation Street, Yogyakarta, Indonesia"
            }
        ]
     }
]

export function InfoTop(){
    return(
        <div className="flex gap-12 flex-col tablet:gap-4 tablet:grid tablet:grid-cols-2 tablet:gap-y-4 laptop:flex laptop:flex-row  laptop:gap-0 laptop:items-start laptop:justify-between">
               <div className="w-full tablet:max-w-87.5">
                     <Link href="/">
                      <Image
                        src={"/images/logo.png"}
                        alt="Logo Hirezy"
                        title="Hirezy"
                        className="w-35! h-9.25! static!"
                        fill
                        quality={100}
                        loading="eager"
                        />
                     </Link>
                     <p className="text-grey-500 mt-8 mb-10">All-in-one recruitment made easy, from posting jobs to building stronger teams.</p>
                     <ul className="flex items-center gap-2">
                          {
                              socials.map(({href,imgSrc,imgAlt},index) => (
                                 <li key={`${index} ${imgSrc}`}>
                                       <a href={href} rel="noopener noreferrer" target="_blank" className="w-12 h-12 flex items-center justify-center transition-opacity ease-linear [&:hover,&:focus]:opacity-50">
                                            <Image
                                            src={imgSrc}
                                            alt={imgAlt}
                                            title={imgAlt}
                                            />
                                       </a>
                                 </li>
                              ))
                          }
                     </ul>
               </div>

               <div className="w-full max-w-90.75 gap-14 flex items-start justify-between">
                      {
                        links.map(({title, linkPath},index) => (
                           <div key={index}>
                               <strong className="text-nowrap text-lg font-semibold block mb-8">{title}</strong>
                               <ul className={`${index === 0 ? "space-y-3" : "space-y-4"}`}>
                                   {
                                     linkPath.map((item, index) => (
                                    <li key={index}>
                                    <Link href={item.href} className="flex items-center gap-4 text-grey-500 transition-colors ease-linear [&:hover,&:focus]:text-black">

                                    {
                                    "iconSrc" in item ? (
                                        <>
                                            <Image
                                            src={item.iconSrc}
                                            alt={item.iconAlt}
                                            title={item.iconAlt}
                                            />
                                            <span>{item.name}</span>
                                        </>
                                    ): (
                                        item.name
                                    )
                                    }

                                

    </Link>
                                     </li>
))

                                   }
                               </ul>
                           </div>
                        ))
                      }
               </div>

               <Newsletter/>
        </div>
    )
}