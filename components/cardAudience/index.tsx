import Image, { StaticImageData } from "next/image";



interface CardAudienceProps{
    title:string;
    description:string;
    imageSrc:StaticImageData | string;
    imageAlt:string;
}

export function CardAudience({title, description, imageSrc, imageAlt}:CardAudienceProps){
    return(
        <div className="w-full max-w-105 h-96.75 bg-blue-300 rounded-3xl p-8">
            <div className="mb-6 space-y-2.5">
             <h3 className="font-lato font-semibold text-2xl text-black-500">{title}</h3>
             <p className="text-grey-500">{description}</p>
            </div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    title={imageAlt}
                    className="w-full h-52 object-cover"
                    draggable={false}
                 />
        </div>
    )
}