import { Button } from "@/app/components/button";
import Image from "next/image";


import iconPhone from "@/app/assets/icons/icon-phone-2.svg";

export function Maps(){
    return(
        <div 
        className="
        w-full 
        h-120 
        z-10
        relative
        after:content-['']
        laptop:after:absolute
        after:bottom-0
        after:right-0
        after:w-full
        after:max-w-110.5
        after:h-62
        after:bg-white
        after:rounded-3xl
        after:-z-10
        ">
             <iframe
             className="w-full relative -z-20 rounded-2xl mb-6  h-57.25 laptop:mb-0 laptop:h-full" 
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.878251819022!2d110.36576531058962!3d-7.802711834193839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Yogyakarta%2C%20Indon%C3%A9sia!5e0!3m2!1spt-BR!2sbr!4v1771692661748!5m2!1spt-BR!2sbr"  width="100%" height="100%" loading="lazy"></iframe>
        
              <div 
              className="
                w-full
                laptop:max-w-102.5
                h-54
                p-6 
                bg-bgCta 
                bg-no-repeat 
                bg-center 
                bg-cover
                rounded-3xl
                laptop:rounded-br-none
                laptop:absolute
                bottom-0
                right-0
                flex
                items-center
                flex-col
                laptop:block
              ">
                    <div className="mb-7.5 space-y-2 text-center laptop:text-left">
                        <h3 className="font-lato font-semibold text-black-500 tablet:text-xl">Need Help Clarifying Things?</h3>
                        <p className="text-sm opacity-85">Tell us what you are trying to solve, and we ll help you map the next step.</p>
                    </div>
                    <Button className="flex items-center gap-4 py-2.5 px-4">
                        <span>Schedule a Call</span>
                        <div className="size-10 flex items-center justify-center bg-white rounded-full">
                            <Image
                             src={iconPhone}
                             alt="Icon Phone"
                             title="Icon Phone"
                            />
                        </div>
                    </Button>
              </div>
        </div>
    )
}