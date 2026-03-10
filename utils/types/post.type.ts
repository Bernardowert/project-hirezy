import { StaticImageData } from "next/image";

export interface PostType{
    id:number;
    subtitle:string;
    title:string;
    name?:string;
    date?:string;
    href:string;
    description:string;
    imageHref:StaticImageData | string;
    imageAlt:string;
    blockquote?:string;
    detailBlogParaph?:DetailBlogParaphType[];
}


interface DetailBlogParaphType{
    title:string;
    description:string;
}