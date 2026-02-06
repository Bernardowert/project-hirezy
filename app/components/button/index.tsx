import Link from "next/link";
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";


const styles = {
    btnPrimary: "bg-lime border-transparent [&:hover,&:focus]:bg-white [&:hover,&:focus]:border-black-500",
    btnSecondary: "border-black-500 [&:hover,&:focus]:bg-black [&:hover,&:focus]:text-white"
}

type BtnStyles = keyof typeof styles;


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    isBtn?:boolean;
    href?:string;
    className?:string;
    btnStyle?:BtnStyles;
}


export function Button({children, isBtn = true, href = "#", className, btnStyle = "btnPrimary"}:ButtonProps){
    const defaultClass = "inline-block group px-6 py-4 font-lato font-semibold laptop:text-xl border rounded-4xl text-black-500 transition-all ease-linear";
    const combinedClass = twMerge(defaultClass, className);
    return(
          isBtn ? (
              <button className={`${combinedClass} ${styles[btnStyle]}`}>
               {children}
              </button>
          ):
          (
             <Link href={href} className={`${combinedClass} ${styles[btnStyle]}`}>
               {children}
             </Link>
          )
    )
}