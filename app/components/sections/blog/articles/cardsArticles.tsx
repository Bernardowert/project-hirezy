import Image from "next/image";


import imageArticle01 from "@/app/assets/article-01.png";
import Link from "next/link";

export function CardsArticles(){
    return(
        <div className="grid laptop:grid-cols-2 gap-x-12.5 gap-y-16 mt-16">
                 <article>
                          <div className="h-59.25 laptop:h-100 overflow-hidden rounded-3xl relative  mb-4 laptop:mb-6">
                               <Image
                                 src={imageArticle01}
                                 alt="a"
                                 title="a"
                                 className="w-full h-full object-cover"
                               />
                               <span className="absolute text-sm laptop:text-base top-4 left-4 laptop:top-8 laptop:left-8 text-white py-1.5 px-3 laptop:py-2 laptop:px-4 bg-black-500/60 rounded-full">Productivity Tools</span>
                          </div>
                          <div>
                                 <h3 className="font-lato text-xl laptop:text-2xl font-semibold text-black-500 mb-2.5 laptop:mb-3">Reducing Hiring Bias with Structured Evaluation Tools</h3>
                                 <p className="opacity-85 text-sm laptop:text-base">Learn practical, step-by-step ways to streamline your workflow, remove bottlenecks, and reduce hiring delays so candidates move faster and your team... </p>
                                 <div className="flex items-end justify-between mt-5 laptop:mt-8">
                                      <span className="text-sm opacity-85">March 3, 2035</span>
                                      <Link href="#" className="text-sm laptop:text-base py-2.5 px-5 rounded-full border border-black-500 font-semibold text-black-500 transition-all ease-linear [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent">Read More</Link>
                                 </div>
                          </div>
                 </article>
                 <article>
                          <div className="h-59.25 laptop:h-100 overflow-hidden rounded-3xl relative  mb-4 laptop:mb-6">
                               <Image
                                 src={imageArticle01}
                                 alt="a"
                                 title="a"
                                 className="w-full h-full object-cover"
                               />
                               <span className="absolute text-sm laptop:text-base top-4 left-4 laptop:top-8 laptop:left-8 text-white py-1.5 px-3 laptop:py-2 laptop:px-4 bg-black-500/60 rounded-full">Productivity Tools</span>
                          </div>
                          <div>
                                 <h3 className="font-lato text-xl laptop:text-2xl font-semibold text-black-500 mb-2.5 laptop:mb-3">Reducing Hiring Bias with Structured Evaluation Tools</h3>
                                 <p className="opacity-85 text-sm laptop:text-base">Learn practical, step-by-step ways to streamline your workflow, remove bottlenecks, and reduce hiring delays so candidates move faster and your team... </p>
                                 <div className="flex items-end justify-between mt-5 laptop:mt-8">
                                      <span className="text-sm opacity-85">March 3, 2035</span>
                                      <Link href="#" className="text-sm laptop:text-base py-2.5 px-5 rounded-full border border-black-500 font-semibold text-black-500 transition-all ease-linear [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent">Read More</Link>
                                 </div>
                          </div>
                 </article>
                 <article>
                          <div className="h-59.25 laptop:h-100 overflow-hidden rounded-3xl relative  mb-4 laptop:mb-6">
                               <Image
                                 src={imageArticle01}
                                 alt="a"
                                 title="a"
                                 className="w-full h-full object-cover"
                               />
                               <span className="absolute text-sm laptop:text-base top-4 left-4 laptop:top-8 laptop:left-8 text-white py-1.5 px-3 laptop:py-2 laptop:px-4 bg-black-500/60 rounded-full">Productivity Tools</span>
                          </div>
                          <div>
                                 <h3 className="font-lato text-xl laptop:text-2xl font-semibold text-black-500 mb-2.5 laptop:mb-3">Reducing Hiring Bias with Structured Evaluation Tools</h3>
                                 <p className="opacity-85 text-sm laptop:text-base">Learn practical, step-by-step ways to streamline your workflow, remove bottlenecks, and reduce hiring delays so candidates move faster and your team... </p>
                                 <div className="flex items-end justify-between mt-5 laptop:mt-8">
                                      <span className="text-sm opacity-85">March 3, 2035</span>
                                      <Link href="#" className="text-sm laptop:text-base py-2.5 px-5 rounded-full border border-black-500 font-semibold text-black-500 transition-all ease-linear [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent">Read More</Link>
                                 </div>
                          </div>
                 </article>
                 <article>
                          <div className="h-59.25 laptop:h-100 overflow-hidden rounded-3xl relative  mb-4 laptop:mb-6">
                               <Image
                                 src={imageArticle01}
                                 alt="a"
                                 title="a"
                                 className="w-full h-full object-cover"
                               />
                               <span className="absolute text-sm laptop:text-base top-4 left-4 laptop:top-8 laptop:left-8 text-white py-1.5 px-3 laptop:py-2 laptop:px-4 bg-black-500/60 rounded-full">Productivity Tools</span>
                          </div>
                          <div>
                                 <h3 className="font-lato text-xl laptop:text-2xl font-semibold text-black-500 mb-2.5 laptop:mb-3">Reducing Hiring Bias with Structured Evaluation Tools</h3>
                                 <p className="opacity-85 text-sm laptop:text-base">Learn practical, step-by-step ways to streamline your workflow, remove bottlenecks, and reduce hiring delays so candidates move faster and your team... </p>
                                 <div className="flex items-end justify-between mt-5 laptop:mt-8">
                                      <span className="text-sm opacity-85">March 3, 2035</span>
                                      <Link href="#" className="text-sm laptop:text-base py-2.5 px-5 rounded-full border border-black-500 font-semibold text-black-500 transition-all ease-linear [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent">Read More</Link>
                                 </div>
                          </div>
                 </article>

        </div>
    )
}