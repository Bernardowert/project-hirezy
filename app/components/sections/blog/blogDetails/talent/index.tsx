import { ContainerGRID } from "@/app/components/containerGRID";
import Image from "next/image";

import { PostType } from "@/utils/types/post.type";


interface SectionTalentBlogDetailsProps{
    data:PostType;
}

export function SectionTalentBlogDetails(data:SectionTalentBlogDetailsProps){

    
    
    const {title, description, imageHref, imageAlt, blockquote, detailBlogParaph, date, subtitle} = data.data;

    return(
         <section className="pt-32 pb-20">
            <ContainerGRID className="flex items-start justify-between">
                     <div className="w-full max-w-195">
                            <div className="mb-12 space-y-10">
                                  <h2 className="text-5xl/snug font-semibold text-black-500">{title}</h2>
                                  <p className="opacity-90">{description}</p>
                            </div>

                            <dl className="space-y-10">

                                  {
                                    detailBlogParaph?.map(({title, description}, index) => (
                                          <div key={`${title + `${description} ${index}`}`}>
                                         <dt className="flex items-center gap-6">
                                          <span className="w-11.5 h-11.5 rounded-full  bg-blue-400 flex items-center justify-center text-lg font-medium text-black-500">{index + 1}</span>
                                          <strong className="text-2xl font-lato font-semibold text-black-500">{title}</strong>
                                         </dt>
                                         <dd className="opacity-90 mt-6">{description}</dd>
                                          </div>
                                    ))
                                  }
                            </dl>

                            <blockquote className="text-2xl text-black-500 pl-10 border-l-4 py-5 border-blue-500 mt-14">{blockquote}</blockquote>
                     </div>
                     <div className="w-full max-w-123.5 sticky top-32.5 right-0">
                            <Image
                              src={imageHref}
                              alt={imageAlt}
                              title={imageAlt}
                              fill
                              className="w-full h-70! object-cover rounded-3xl static!"
                            />

                            <ul className="mt-12.5 grid grid-cols-2 gap-y-10 items-center">
                                 <li>
                                    <span className="text-sm opacity-90 block">AUTHOR</span>
                                    <strong className="font-lato text-xl font-semibold block mt-2.5">Hannah Cortez</strong>
                                 </li>
                                   <li>
                                    <span className="text-sm opacity-90 block">DATE POSTED</span>
                                    <strong className="font-lato text-xl font-semibold block mt-2.5">
                                         {
                                           date ? date : "01 Jan 2035"
                                         }
                                    </strong>
                                 </li>
                                   <li>
                                    <span className="text-sm opacity-90 block">CATEGORY</span>
                                    <strong className="font-lato text-xl font-semibold block mt-2.5">{subtitle}</strong>
                                 </li>
                                   <li>
                                    <span className="text-sm opacity-90 block">COMMENT NUMBERS</span>
                                    <strong className="font-lato text-xl font-semibold block mt-2.5">12 Comments</strong>
                                 </li>
                                 
                            </ul>
                     </div>
            </ContainerGRID>
         </section>
    )
}