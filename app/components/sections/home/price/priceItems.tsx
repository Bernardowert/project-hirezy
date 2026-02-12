import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/app/components/button";


import iconPricing01 from "@/app/assets/icons/icon-pricing-01.png";
import iconPricing02 from "@/app/assets/icons/icon-pricing-02.png";
import iconPricing03 from "@/app/assets/icons/icon-pricing-03.png";


const prices = [
    {
        imgSrc:iconPricing01,
        imgAlt:"Icon Piece",
        title:"Starter",
        description:"Perfect for small teams just getting started.",
        listings: [
            "1 team member seat for small teams",
            "Simple, intuitive dashboard",
            "Reliable email support"
        ],
        price: "19",
    },
    {
        imgSrc:iconPricing02,
        imgAlt:"Icon Rocket",
        title:"Pro",
        description:"Best for  teams that need more insights.",
        listings: [
            "Up to 10 team members for growing teams",
            "Advanced analytics & insights",
            "Faster & priority support",
            "Dedicated account manager",
            "Custom feature requests"
        ],
        price: "49",
        isBig: true
    },
    {
        imgSrc:iconPricing03,
        imgAlt:"Icon Enterprise",
        title:"Enterprice",
        description:"Designed for large team with complex hiring.",
        listings: [
            "Unlimited users for large organizations",
            "Custom tools integration",
            "Dedicated account manager"
        ],
        price: "89",
    }
]


export function PriceItems(){
    return(
        <div className="flex flex-col laptop:flex-row items-center laptop:items-end justify-between mt-14 gap-10 laptop:gap-0">
                {
                    prices.map(({imgSrc,imgAlt,title,description,price, listings, isBig}, index) => (
                     <div className={`w-full laptop:max-w-105 bg-blue-300 rounded-3xl p-8 h-full ${isBig ? "laptop:h-138.25" : "laptop:h-123.25"}`} key={`${imgSrc + `${index}`}`}>
                       {
                          isBig ? (
                             <div className="flex items-center justify-between">
                                    <div className="w-10.5 h-10.5 flex items-center justify-center rounded-full bg-lime">
                                    <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    title={imgAlt}
                                    />
                                    </div>
                                    <span className="text-sm text-black-500 py-2 px-4 rounded-4xl bg-blue-400">Top Picks</span>
                             </div>
                          ):(
                                  <div className="w-10.5 h-10.5 flex items-center justify-center rounded-full bg-blue-400">
                                    <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    title={imgAlt}
                                    />
                                   </div>
                          ) 
                          
                       }

                       <div className="space-y-4 my-6">
                            <h3 className="font-lato text-2xl laptop:text-3xl font-semibold text-black-500">{title}</h3>
                            <p className="opacity-95 text-sm tablet:text-base">{description}</p>
                       </div>

                       <ul className="space-y-2">

                             {
                                listings.map((item, index) => (
                                 <li className="flex items-center gap-4" key={`${imgSrc + `${index}`}`}>
                                  <div className={`size-6 flex items-center justify-center ${isBig ? "bg-lime" : "bg-blue-500"} rounded-full`}>
                                      <Check size={12} color="#fff"/>
                                  </div>
                                  <span className="text-sm opacity-95">{item}</span>
                                 </li>
                                )) 
                             }
                       </ul>

                       <div className="flex items-start justify-between mt-10 mb-6">
                             <strong className="text-4xl laptop:text-5xl text-black-500 font-semibold flex items-start gap-1">${price} <small className="text-base text-grey-500 font-normal mt-2">/ month</small></strong>
                             <span className="text-grey-500 mt-2 text-sm tablet:text-base">billed yearly</span>
                       </div>
                       <Button btnStyle={isBig ? "btnQuart" : "btnPrimary"} className="w-full py-2.5 laptop:py-4">Choose Plan</Button>
                    </div>
                    ))
                }
        </div>
    )
}