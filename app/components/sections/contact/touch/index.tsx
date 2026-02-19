import Image from "next/image";

import { ContainerGRID } from "@/app/components/containerGRID";
import { FormTouch } from "./form";
import { TitleSection } from "@/app/components/titleSection";


import iconEmail from "@/app/assets/icons/icon-email.png";
import iconAddress from "@/app/assets/icons/icon-address.png";
import iconPhone from "@/app/assets/icons/icon-phone.png";


const listings = [
    {
        imgSrc: iconEmail,
        imgAlt: "Icon Email",
        title: "MAIL",
        description: "support@hirezy.com",
        href: "mailto:support@hirezy.com"
    },
    {
        imgSrc: iconAddress,
        imgAlt: "Icon Address",
        title: "ADDRESS",
        description: "123 Innovation Street, Yogyakarta, Indonesia",
        href: "https://maps.app.goo.gl/nkCSouV4a5VwFobH8",
        isBlank:true
    },
    {
        imgSrc: iconPhone,
        imgAlt: "Icon Phone",
        title: "PHONE",
        description: "+62 812 3456 7890",
        href: "tel:+6281234567890"
    }
]

export function SectionTouch(){
    return(
        <section className="py-14 laptop:pt-32 laptop:pb-20">
            <ContainerGRID className="flex items-center justify-between flex-col laptop:flex-row gap-10 laptop:gap-0">
                 <div className="w-full max-w-145">
                        <TitleSection
                         subtitle="Get In Touch"
                         title="Tell Us How We Can Help You Hire Better, Faster"
                         description="Tell us a little about your team, your hiring goals, and what you are trying to improve, and we ll get back to you with tailored guidance."
                         isTxtCenter={false}
                        />
                       

                       <div className="mt-10 tablet:flex tablet:items-center laptop:block  laptop:mt-32 space-y-6 tablet:space-y-0 laptop:space-y-10">
                            {
                                listings.map(({imgSrc,imgAlt,title,description,href, isBlank},index) =>(
                                     <a href={href} key={`${imgSrc + `${index}`}`} rel="noopener noreferrer" target={isBlank ? "_blank" : "_self"} className="inline-flex w-full tablet:flex-col tablet:text-center items-center gap-4 laptop:flex-row laptop:text-left laptop:gap-5 laptop:w-auto transition-all ease-linear group [&:hover,&:focus]:gap-6">
                                   <div className="w-full max-w-11.75 h-11.75 laptop:size-14 flex items-center justify-center rounded-xl bg-lime">
                                        <Image
                                         src={imgSrc}
                                         alt={imgAlt}
                                         title={imgAlt}
                                         className="max-w-4 tablet:max-w-5 laptop:max-w-full"
                                        />
                                  </div>
                                  <div>
                                       <span className="text-sm opacity-85 block">{title}</span>
                                       <strong className="font-lato font-semibold laptop:text-xl text-black-500 group-hover:opacity-80 group-focus:opacity-80">{description}</strong>
                                  </div>

                                     </a>
                                ))
                            }
                       </div> 
                 </div>
                 <FormTouch/>
            </ContainerGRID>
        </section>
    )
}