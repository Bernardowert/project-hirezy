import { StaticImageData } from "next/image";

export interface PostType{
    id:number;
    subtitle:string;
    title:string;
    href:string;
    description:string;
    imageHref:StaticImageData | string;
    imageAlt:string;
}