import { AccordionFAQ } from "@/app/components/accordionFAQ";
import { Button } from "@/app/components/button";
import { ContainerGRID } from "@/app/components/containerGRID";
import { TitleSection } from "@/app/components/titleSection";
import { ArrowRight } from "lucide-react";

export function SectionFaq(){
    return(
        <section>
            <ContainerGRID className="flex items-center justify-between">
                  <div className="w-full max-w-112.5">
                      <TitleSection 
                      subtitle="FAQ" 
                      title="Have a Question?" 
                      description="Save time with straightforward answers to common questions recruiters and HR teams often ask."
                      isTxtCenter={false}
                      />
                      <div className="w-full max-w-93 h-50.25 p-6 bg-bgForm bg-cover bg-no-repeat rounded-2xl mt-50.75">
                           <strong className="text-2xl font-lato font-semibold text-black-500 block">Got more questions?</strong>
                           <p className="opacity-95 mt-2 mb-8">Get in touch and we ll take care of the rest.</p>
                           <Button className="flex items-center gap-4 py-2.5">
                             <span>Contact Us</span>
                             <div className="size-10 flex items-center justify-center bg-white rounded-full transition-colors ease-linear group-hover:bg-black-500 group-focus:bg-black-500">
                                  <ArrowRight size={18} color="#222222" className="transition-all ease-linear group-hover:stroke-white group-focus:stroke-white"/>
                             </div>
                           </Button>
                      </div>
                  </div>
                  <AccordionFAQ classname="max-w-182.5"/>
            </ContainerGRID>
        </section>
    )
}