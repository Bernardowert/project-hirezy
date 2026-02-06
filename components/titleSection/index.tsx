import { Subtitle } from "../subtitle";

interface TitleSectionProps{
    subtitle:string;
    title:string;
    description:string;
}

export function TitleSection({subtitle, title, description}:TitleSectionProps){
    return(
         <div className="text-left tablet:text-center space-y-4">
            <Subtitle>{subtitle}</Subtitle>
            <h2 className="font-lato font-semibold text-2xl tablet:text-5xl text-black-500">{title}</h2>
            <p className="text-sm tablet:text-base text-grey-500">{description}</p>
         </div>
    )
}