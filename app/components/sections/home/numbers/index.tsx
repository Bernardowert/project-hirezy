import { ContainerGRID } from "@/app/components/containerGRID";



const numbers = [
    {
        title: "10K+",
        subtitle: "Successful Hires"
    },
    {
        title: "500+",
        subtitle: "Teams Worldwide"
    },
     {
        title: "50+",
        subtitle: "Seamless Integration"
    },
     {
        title: "95%",
        subtitle: "Customer Satisfaction"
    }
]

export function SectionNumbers(){
    return(
         <section className=" pt-14 pb-10 laptop:pt-32 laptop:pb-20">
            <ContainerGRID className=" grid grid-cols-2 gap-8 tablet:gap-0 tablet:flex items-center justify-between">
                   {
                      numbers.map(({title,subtitle}, index) => (
                          <div key={`${title + index}`} className="text-center space-y-1 tablet:space-y-2">
                                 <h3 className="font-lato font-semibold text-4xl laptop:text-6xl">{title}</h3>
                                <span className="text-sm tablet:text-base text-grey-500">{subtitle}</span>
                          </div>
                      ))
                   }
            </ContainerGRID>
         </section>
    )
}