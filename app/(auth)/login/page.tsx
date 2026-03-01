import Image from "next/image";
import Link from "next/link";


import logo from "@/app/assets/logo-white.png";
import { LoginTexts } from "./loginTexts";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {


  const supabase = await createClient();

   const {data} = await supabase.auth.getUser();


    if(data.user){
        return redirect("/dashboard");
    }
    return(
        <section className="h-svh flex items-center w-full">
               <div className=" w-1/2 h-full bg-bgLogIn bg-no-repeat bg-center bg-cover p-12 flex items-start flex-col justify-between">
                     <Link href="/">
                       <Image
                         src={logo}
                         alt="Logo Hirezy"
                         title="Logo Hirezy"
                       />
                     </Link>
                     <div>
                         <h2 className="text-white text-3xl font-bold">Elevate your workflow with elegance.</h2>
                         <p className="text-white text-lg opacity-90 mt-4 max-w-md">Manage your projects with our sophisticated dashboard designed for clarity and focus.</p>
                     </div>
               </div>
               <LoginTexts/>
        </section>
    )
}