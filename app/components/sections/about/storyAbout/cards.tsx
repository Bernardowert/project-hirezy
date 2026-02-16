import Image from "next/image";


import imageStory from "@/app/assets/img-story-01.png";
import imageStory02 from "@/app/assets/img-story-02.png";
import imageStory05 from "@/app/assets/img-story-05.png";

import bulletGreen from "@/app/assets/icons/bullet-green.png";

export function CardsStory(){
    return(
        <div className="grid grid-cols-1 gap-10 mt-14 laptop:grid-cols-2 desktop:h-107 desktop:grid-cols-[492px_320px_447px]">
               <div className="w-full  desktop:max-w-123 row-span-2">
                      <Image
                      src={imageStory}
                      alt="Image story"
                      title="imageStory"
                      className="w-full tablet:h-112.5 object-cover laptop::w-auto laptop:h-auto"
                     />
                    <p className="mt-10 text-black-500">We built one platform for jobs, candidates, collaboration, and insights so teams can hire better without juggling tools and spreadsheets.</p>
               </div>
               <div className="w-full desktop:max-w-[320px] h-114.5 bg-blue-300 rounded-3xl p-8 space-y-6 row-span-2">
                   <strong className="font-lato text-48 font-semibold text-black-500">500+</strong>
                   <p className="text-sm opacity-85">Recruitment teams set up globally</p>
                   <Image
                    src={imageStory02}
                    alt="asdsa"
                    title="asdsad"
                   
                   />
                   <p className="text-sm">Onboarded by recruiting teams worldwide for faster, more organized hiring.</p>
               </div>
               <div className="flex items-center gap-6 rounded-3xl bg-blue-300 p-5 desktop:h-33.75">
                   <Image
                     src={bulletGreen}
                     alt="s"
                     title="s"
                   />
                   <strong className="font-lato text-48 font-semibold">35K+</strong>
                   <p className="text-sm opacity-90">Monthly active platform users</p>
               </div>

               <div className="p-8 flex flex-col tablet:flex-row tablet:h-63.25 gap-3 tablet:gap-0 items-center justify-between rounded-3xl bg-blue-300">
                      <div className="w-full desktop:max-w-43.5">
                            <div className="mb-4 desktop:mb-10">
                                <strong className="text-48 font-semibold block">10K+</strong>
                                <span className="text-sm">Hires Successfully Made</span>
                            </div>
                            <p className="text-sm opacity-85">Helping teams fill roles faster with a clear hiring workflow.</p>
                      </div>
                      <Image
                        src={imageStory05}
                        alt="sda"
                        title="asd"
                        className="w-full max-w-65.5 desktop:max-w-50"
                      />
               </div>
        </div>
    )
}