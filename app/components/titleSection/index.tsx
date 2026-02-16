import { Subtitle } from "../subtitle";

interface TitleSectionProps{
    subtitle:string;
    title:string;
    description:string;
    className?:string;
    isTxtCenter?:boolean;
    isSeparatedDescription?:boolean;
    separatedStyle?:string;
    separatedDescriptionStyle?:string;
}

export function TitleSection({subtitle, title, description, className, isTxtCenter = true, isSeparatedDescription = false, separatedStyle, separatedDescriptionStyle}:TitleSectionProps){
    return(
        
          isSeparatedDescription ? (
            <div className={`${isTxtCenter ? "text-left tablet:text-center" : "text-left tablet:text-center laptop:text-left"} flex-col flex items-start justify-between gap-4 laptop:flex-row laptop:items-end laptop:gap-0 tablet:items-center ${className ? className : ""}`}>
                <div className={`space-y-4 ${separatedStyle ? separatedStyle : ""}`}>
                    <Subtitle>{subtitle}</Subtitle>
                    <h2 className="font-lato font-semibold text-2xl tablet:text-5xl text-black-500">{title}</h2>
                </div>
                <p className={`text-sm tablet:text-base text-grey-500 ${separatedDescriptionStyle ? separatedDescriptionStyle : ""}`}>{description}</p>
            </div>
          ):
          (
              <div className={`${isTxtCenter ? "text-left tablet:text-center" : "text-left tablet:text-center laptop:text-left"}  space-y-4 ${className ? className : ""}`}>
                <Subtitle>{subtitle}</Subtitle>
                <h2 className="font-lato font-semibold text-2xl tablet:text-5xl text-black-500">{title}</h2>
                <p className="text-sm tablet:text-base text-grey-500">{description}</p>
            </div>
          )
    )
}