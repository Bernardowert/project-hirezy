import Image from "next/image";


import imageHero from "@/assets/hero-area-image.png";

export function AreaImage(){
    return(
        <div className="w-full overflow-hidden rounded-4xl mt-12.5">
            <Image
              src={imageHero}
              alt="Image hero area"
              title="Dashboards"
              loading="eager"
              className="h-51 object-cover tablet:object-contain tablet:h-auto"
            />
        </div>
    )
}