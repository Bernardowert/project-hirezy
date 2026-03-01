import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SignOutButton } from "./signOut";

export default async function Dashboard(){
    const supabase = await createClient();

    const {data} = await supabase.auth.getUser();


    if(!data.user){
        redirect("/login");
    }

    return(
        <>
          <h1>Dashboard</h1>
          <SignOutButton/>
        </>
    )
}