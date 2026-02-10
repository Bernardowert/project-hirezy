import { ArrowRight } from "lucide-react";
import { Button } from "../button";

interface BannerHiringProps{
    title:string;
    description:string;
    btnText:string;
}

export function BannerHiring({title,description,btnText}:BannerHiringProps){
    return(
        <div className="w-full h-77.75 tablet:h-123.25 text-center px-6  bg-bgHiring bg-center bg-no-repeat bg-cover rounded-4xl flex items-center justify-center flex-col">
            <h2 className="font-lato text-2xl tablet:text-3xl laptop:text-6xl/tight font-semibold text-black-500 max-w-229.5">{title}</h2>
            <p className=" text-sm tablet:text-lg text-grey-500 my-6 laptop:mt-6 laptop:mb-14">{description}</p>
            <Button btnStyle="btnThird" className="flex items-center gap-4 py-2.5">
                <span>{btnText}</span>
                <div className="size-10 flex items-center justify-center transition-colors ease-linear bg-lime rounded-full group-hover:bg-black-500 group-focus:bg-black-500">
                     <ArrowRight size={14}/>
                </div>
            </Button>
        </div>
    )
}