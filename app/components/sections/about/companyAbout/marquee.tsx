'use client'

import Image from "next/image";
import { Marquee } from "@/app/components/ui/marquee";



import logoMiro from "@/app/assets/logos/miro-logo.png";
import logoClickup from "@/app/assets/logos/clickup-logo.png";
import logoLoom from "@/app/assets/logos/loom-logo.png";
import logoTeams from "@/app/assets/logos/teams-logo.png";


import logoSlack from "@/app/assets/logos/slack-logo.png";
import logoTrello from "@/app/assets/logos/trello-logo.png";
import logoAsana from "@/app/assets/logos/asana-logo.png";

import logoJira from "@/app/assets/logos/jira-logo.png";
import logoDropbox from "@/app/assets/logos/dropbox-logo.png";
import logoMonday from "@/app/assets/logos/monday-logo.png";
import logoZoom from "@/app/assets/logos/zoom-logo.png";


const marquess = [
     {
         logos:[
            {
                imgSrc:logoMiro,
                imgAlt:"Logo Miro"
            },
            {
                imgSrc:logoClickup,
                imgAlt:"Logo Clickup"
            },
            {
                imgSrc:logoLoom,
                imgAlt:"Logo Loom"
            },
            {
                imgSrc:logoTeams,
                imgAlt:"Logo Teams"
            }
         ]
     },
     {
        reverse:true,
         logos:[
            {
                imgSrc:logoSlack,
                imgAlt:"Logo Slack"
            },
            {
                imgSrc:logoTrello,
                imgAlt:"Logo Trello"
            },
            {
                imgSrc:logoAsana,
                imgAlt:"Logo Asana"
            },
            {
                imgSrc:logoTeams,
                imgAlt:"Logo Teams"
            }
         ]
     },
     {
         logos:[
            {
                imgSrc:logoJira,
                imgAlt:"Logo Jira"
            },
            {
                imgSrc:logoDropbox,
                imgAlt:"Logo Dropbox"
            },
            {
                imgSrc:logoMonday,
                imgAlt:"Logo Monday"
            },
            {
                imgSrc:logoZoom,
                imgAlt:"Logo Zoom"
            }
         ]
     },
]

export function MarqueeItem(){
    return(
                <div 
                className="w-full max-w-187.5 space-y-7 laptop:space-y-12 mask-fade-x">
                       {
                         marquess.map(({logos, reverse}, index) => (
                              <Marquee pauseOnHover key={index} reverse={reverse} className="gap-20" spaceElement={80}>
                                     {
                                        logos.map(({imgSrc,imgAlt},index) =>(
                                             <Image
                                               src={imgSrc}
                                               alt={imgAlt}
                                               title={imgAlt}
                                               className="object-contain max-w-22.5 tablet:max-w-full"
                                               key={`${imgSrc + `${index}`}`}
                                             />
                                        ))
                                     }
                              </Marquee>
                         ))
                       }
                </div>
    )
}