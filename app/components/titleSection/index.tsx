import { Subtitle } from "../subtitle";

interface TitleSectionProps{
    subtitle:string;
    title:string;
    description:string;
    className?:string;
    isTxtCenter?:boolean
}

export function TitleSection({subtitle, title, description, className, isTxtCenter = true}:TitleSectionProps){
    return(
         <div className={`${isTxtCenter ? "text-left tablet:text-center" : "text-left tablet:text-center laptop:text-left"}  space-y-4 ${className ? className : ""}`}>
            <Subtitle>{subtitle}</Subtitle>
            <h2 className="font-lato font-semibold text-2xl tablet:text-5xl text-black-500">{title}</h2>
            <p className="text-sm tablet:text-base text-grey-500">{description}</p>
         </div>
    )
}