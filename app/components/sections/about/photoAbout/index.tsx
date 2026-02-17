import { ContainerGRID } from "@/app/components/containerGRID";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";


import imageVideo from "@/app/assets/logo-video.png";

export function SectionPhotoAbout(){
    return(
        <section>
            <ContainerGRID>
                   <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/y6120QOlsfU?autoplay=1"
                    thumbnailSrc={imageVideo.src}
                    thumbnailAlt="Person Negociating"
                    />
            </ContainerGRID>
        </section>
    )
}