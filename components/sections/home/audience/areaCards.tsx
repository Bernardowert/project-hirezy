import { CardAudience } from "@/components/cardAudience";



import audience01 from "@/assets/audience-img-01.png";
import audience02 from "@/assets/audience-img-02.png";
import audience03 from "@/assets/audience-img-03.png";

const cards = [
    {
        title:"HR Teams",
        description:"Simplify day-to-day hiring tasks and keep everything organized.",
        imageSrc:audience01,
        imageAlt: "HR Teams Dashboard"
    },
    {
        title:"Growing Business",
        description:"Quickly grow your team through a simplified hiring process.",
        imageSrc:audience02,
        imageAlt: "HR Teams Business"
    },
    {
        title:"Recruitment Agencies",
        description:"Manage multiple clients and job postings from one platform.",
        imageSrc:audience03,
        imageAlt: "HR Teams Agencies"
    }
]


export function AreaCards(){
    return(
        <div className="flex items-center justify-between mt-14">
             {
                cards.map(({title,description,imageSrc,imageAlt},index) =>(
                    <CardAudience key={`${index} + ${title}`} title={title} description={description} imageSrc={imageSrc} imageAlt={imageAlt}/>
                ))
             }
        </div>
    )
}