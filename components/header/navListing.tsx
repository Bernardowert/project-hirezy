import Link from "next/link";



const listing = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "About",
        href: "#"
    },
    {
        name: "Blog",
        href: "#"
    },
    {
        name: "Contact",
        href: "#"
    }
]


export function NavListing({isColumn}:{isColumn?:boolean}){
    return(
        <nav className={`items-center gap-  ${isColumn ? "flex flex-col gap-12" : "laptop:flex hidden gap-20"}`}>
            {
                listing.map(({name, href}, index) =>(
                    <Link href={href} key={name + index} className="text-grey-500 [&:hover,&:focus]:text-black-500">
                       {name}
                    </Link>
                ))
            }
        </nav>
    )
}