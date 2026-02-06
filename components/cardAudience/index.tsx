import Image, { StaticImageData } from "next/image";



interface CardAudienceProps{
    title:string;
    description:string;
    imageSrc:StaticImageData | string;
    imageAlt:string;
}

export function CardAudience({title, description, imageSrc, imageAlt}:CardAudienceProps){
    return(
        <div className="w-full h-96.75 bg-blue-300 rounded-3xl p-6 laptop:p-8">
            <div className="mb-6 space-y-2.5 text-left tablet:text-center laptop:text-left">
             <h3 className="font-lato font-semibold text-xl tablet:text-2xl text-black-500">{title}</h3>
             <p className="text-sm tablet:text-base text-grey-500">{description}</p>
            </div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    title={imageAlt}
                    className="w-full h-52 object-contain laptop:object-cover"
                    draggable={false}
                 />
        </div>
    )
}