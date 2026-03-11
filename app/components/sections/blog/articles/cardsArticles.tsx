import Image from "next/image";


import Link from "next/link";
import { getPosts } from "@/lib/supabase/http/getPost";
import { PostType } from "@/utils/types/post.type";

export async function CardsArticles(){

     const posts = await getPosts<PostType>("blog01");
    
     const ignoredPosts = posts.slice(4,posts.length);
    return(
        <div className="grid laptop:grid-cols-2 gap-x-12.5 gap-y-16 mt-16">
               {
                    ignoredPosts.map(({subtitle,title,description,href,imageHref,imageAlt,date},index) =>(
                          <article key={`${subtitle } ${index}`}>
                          <div className="h-59.25 laptop:h-100 overflow-hidden rounded-3xl relative  mb-4 laptop:mb-6">
                               <Image
                                 src={imageHref}
                                 alt={imageAlt}
                                 title={imageAlt}
                                 fill
                                 className="w-full h-full object-cover static!"
                               />
                               <span className="absolute text-sm laptop:text-base top-4 left-4 laptop:top-8 laptop:left-8 text-white py-1.5 px-3 laptop:py-2 laptop:px-4 bg-black-500/60 rounded-full">{subtitle}</span>
                          </div>
                          <div>
                                 <h3 className="font-lato text-xl laptop:text-2xl font-semibold text-black-500 mb-2.5 laptop:mb-3">{title}</h3>
                                 <p className="opacity-85 text-sm laptop:text-base">{description}</p>
                                 <div className="flex items-end justify-between mt-5 laptop:mt-8">
                                      <span className="text-sm opacity-85">{date}</span>
                                      <Link href={`/blog/${href}`} className="text-sm laptop:text-base py-2.5 px-5 rounded-full border border-black-500 font-semibold text-black-500 transition-all ease-linear [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent">Read More</Link>
                                 </div>
                          </div>
                         </article>
                    ))
               }

        </div>
    )
}