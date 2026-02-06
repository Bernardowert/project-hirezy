import Image, { StaticImageData } from "next/image";


import value01 from "@/app/assets/icons/icon-value-01.png";


interface CardValuesProps{
    title:string;
    description:string;
    imageSrc:StaticImageData | string;
    imageAlt:string;
}

export function CardValue({description, imageAlt, imageSrc, title}:CardValuesProps){
    return(
        <div className="flex items-start gap-8 rounded-2xl bg-blue-300 p-8">
              <div className="size-14 flex items-center justify-center rounded-full bg-lime">
                   <Image
                     src={imageSrc}
                     alt={imageAlt}
                     title={imageAlt}
                   />
              </div>
              <div>
                    <h3 className="text-2xl/tight font-lato font-semibold text-black-500 mb-4">{title}</h3>
                    <p className="text-grey-500 leading-6">{description}</p>
              </div>
        </div>
    )
}