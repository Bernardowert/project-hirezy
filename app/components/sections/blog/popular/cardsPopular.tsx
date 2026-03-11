import Link from "next/link";
import Image from "next/image"



import imageAuthor from "@/app/assets/icons/image-author-01.svg";
import { getPosts } from "@/lib/supabase/http/getPost";
import { PostType } from "@/utils/types/post.type";




const styles =  "w-full relative flex items-end group p-5 laptop:p-8"


const allStyles = [
      "laptop:col-span-2 h-64 laptop:h-auto",
      "laptop:row-span-2",
      "h-64.5 laptop:h-auto",
      "h-64.5 laptop:h-auto"
]

export async function CardsPopular(){

    const posts = await getPosts<PostType>("blog01");


    const limitedPosts = posts.slice(0,4);
    console.log(posts);
    return(
        <div className="grid tablet:grid-cols-2 gap-6 laptop:grid-cols-3  laptop:gap-10 laptop:grid-rows-[294px_290px] mt-10 laptop:mt-14">

               {
                  limitedPosts.map(({id,subtitle,title,description,imageHref,imageAlt,href,name,date},index) =>(
                        <Link href={`/blog/${href}`} key={id} className={`${allStyles[index]} ${styles ? styles : ""}`}>
                             <div className="w-full h-full rounded-3xl absolute overflow-hidden top-0 left-0 -z-10 filter brightness-75">
                                <Image
                                src={imageHref}
                                alt={imageAlt}
                                fill
                                draggable={false}
                                className="w-full h-full object-cover transition-all ease-linear group-hover:scale-105 group-focus:scale-105"
                                />
                             </div>

                             <div className="text-white">
                                   <span className="inline-block py-1.5 px-3 text-sm  bg-black/20 rounded-full border border-white-500">{subtitle}</span>
                                   <h3 className=" text-xl font-semibold font-lato mt-4 mb-2">{title}</h3>
                                   {
                                     description && <p className="text-sm ">{description}</p>
                                   }

                                   {
                                     name && date && (
                                           <div className="mt-5 flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                                <div className="size-8 flex items-center justify-center">
                                                     <Image
                                                       src={imageAuthor}
                                                       alt="Edward Anthony"
                                                       title="Edward Anthony"
                                                     />
                                                </div>
                                                <strong className="text-sm">Edward Anthony</strong>
                                          </div>
                                          <span className="text-sm">January 12, 2035</span>
                                   </div>
                                     )
                                   }
                             </div>
                        </Link>
                  ))
               }
                   {/* <Link href="#" className={`laptop:col-span-2 group h-64 laptop:h-auto ${styles ? styles : ""}`}>
                             <div className="w-full h-full rounded-3xl absolute overflow-hidden top-0 left-0 -z-10 filter brightness-75">
                                <Image
                                src={imagePopular}
                                alt="People negotiating"
                                draggable={false}
                                className="w-full h-full object-cover transition-all ease-linear group-hover:scale-105 group-focus:scale-105"
                                />
                             </div>

                             <div className="text-white">
                                   <span className="inline-block py-1.5 px-3 text-sm  bg-black/20 rounded-full border border-white-500">Industry Insights</span>
                                   <h3 className=" text-xl font-semibold font-lato mt-4 mb-2">How Skills-Based Hiring Is Changing Recruiting</h3>
                                   <p className="text-sm ">Skills-based hiring is reshaping how teams evaluate talent by focusing on real abilities rather than resumes alone.</p>
                             </div>
                   </Link> */}
                    {/* <Link href="#" className={`laptop:row-span-2 group ${styles ? styles : ""}`}>
                               <div className="w-full h-full rounded-3xl absolute overflow-hidden top-0 left-0 -z-10 filter brightness-75">
                                <Image
                                src={imagePopular02}
                                alt="People using notebook"
                                draggable={false}
                                className="w-full h-full object-cover transition-all ease-linear group-hover:scale-105 group-focus:scale-105"
                                />
                             </div>

                             <div className="text-white">
                                   <span className="inline-block py-1.5 px-3 text-sm  bg-black/20 rounded-full border border-white-500">Recruitment Strategy</span>
                                   <h3 className=" text-xl font-semibold font-lato mt-4 mb-2">How to Streamline Your Hiring Workflow</h3>
                                   <p className="text-sm ">Learn simple steps to optimize your workflow and reduce hiring delays efficiently.</p>

                                   <div className="mt-5 flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                                <div className="size-8 flex items-center justify-center">
                                                     <Image
                                                       src={imageAuthor}
                                                       alt="Edward Anthony"
                                                       title="Edward Anthony"
                                                     />
                                                </div>
                                                <strong className="text-sm">Edward Anthony</strong>
                                          </div>
                                          <span className="text-sm">January 12, 2035</span>
                                   </div>
                             </div>
                   </Link>
                   <Link href="#" className={`group h-64.5 laptop:h-auto ${styles ? styles : ""}`}>
                             <div className="w-full h-full rounded-3xl absolute overflow-hidden top-0 left-0 -z-10 filter brightness-75">
                                <Image
                                src={imagePopular03}
                                alt="Dashboard"
                                draggable={false}
                                className="w-full h-full object-cover transition-all ease-linear group-hover:scale-105 group-focus:scale-105"
                                />
                             </div>

                             <div className="text-white">
                                   <span className="inline-block py-1.5 px-3 text-sm  bg-black/20 rounded-full border border-white-500">HR Insights</span>
                                   <h3 className=" text-xl font-semibold font-lato mt-4 mb-2">Interview Scorecards 101: Faster Decisions, Better Alignment</h3>
                             </div>
                   </Link>
                    <Link href="#" className={`group h-64.5 laptop:h-auto ${styles ? styles : ""}`}>
                            <div className="w-full h-full rounded-3xl absolute overflow-hidden top-0 left-0 -z-10 filter brightness-75">
                                <Image
                                src={imagePopular04}
                                alt="People conversation"
                                draggable={false}
                                className="w-full h-full object-cover transition-all ease-linear group-hover:scale-105 group-focus:scale-105"
                                />
                             </div>

                             <div className="text-white">
                                   <span className="inline-block py-1.5 px-3 text-sm  bg-black/20 rounded-full border border-white-500">Product Tips</span>
                                   <h3 className=" text-xl font-semibold font-lato mt-4 mb-2">Best Practices for Collaborating on Candidate Reviews</h3>
                             </div>
                   </Link> */}
        </div>
    )
}