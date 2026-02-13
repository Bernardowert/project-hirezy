import { ContainerGRID } from "../../containerGRID";

export function SectionHeroAbout(){
    return(
          <section className="bg-bgHeroAbout bg-cover bg-no-repeat bg-center h-97.5 laptop:h-115 flex items-center">
            <ContainerGRID className="text-center">
                <h1 className="text-2xl laptop:text-48/tight font-lato font-semibold text-black-500 mb-5 max-w-161 mx-auto">Empowering Companies to Hire Smarter and Grow Faster</h1>
                <p className="max-w-161 text-sm laptop:text-base mx-auto opacity-90">Our platform bridges technology and talent, helping organizations scale efficiently with smarter hiring decisions.</p>
            </ContainerGRID>
          </section>
    )
}