'use client'

import { ChevronUp } from "lucide-react";
import { useState } from "react";


const listingFAQ = [
    {
        title:"How does the free trial work?",
        description:"Yes, you can cancel or upgrade at any time."
    },
    {
        title:"Can I cancel my subscription anytime?",
        description:"Yes, you can cancel or upgrade at any time."
    },
    {
        title:"Does Hirezy integrate with LinkedIn?",
        description:"Yes, you can cancel or upgrade at any time."
    },
    {
        title:"Is my data secure?",
        description:"Yes, you can cancel or upgrade at any time."
    },
    {
        title:"Can I customize workflows?",
        description:"Yes, you can cancel or upgrade at any time."
    }
]

export function AccordionFAQ({classname}: {classname?:string}){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    function toggleAccordion(index:number){
         setOpenIndex(prev => prev === index ? null : index);
    }
    return(
        <div className={`space-y-4 laptop:space-y-6 w-full ${classname ? classname : ""}`}>
               {
                 listingFAQ.map(({title, description}, index) => (
                    <div className={`py-6 px-1 laptop:px-8 rounded-2xl transition-colors ease-linear ${openIndex === index ? "bg-blue-300" : "bg-white"}`} key={`${title + `${index}`}`}>
                        <button className="flex items-center justify-between w-full" onClick={() => toggleAccordion(index)}>
                             <h3 className="text-sm tablet:text-base laptop:text-lg text-black-500 font-medium">{title}</h3>
                             <ChevronUp size={20} color="#222222" className={`transition-transform ease-linear ${openIndex === index ? "rotate-0" : "rotate-180"}`}/>
                        </button>
                        {
                            openIndex === index && <p className="text-sm tablet:text-base opacity-95 mt-4">{description}</p>
                        }
                </div>
                 ))
               }
        </div>
    )
}