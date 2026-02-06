import { ReactNode } from "react";

export function Subtitle({children}:{children:ReactNode}){
    return(
        <span className="inline-block py-2.5 px-4 text-grey-500 rounded-3xl bg-blue-300">{children}</span>
    )
}