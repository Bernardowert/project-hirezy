import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    const supabase = await createClient();

    const {data} = await supabase.auth.getUser();


    if(!data.user){
        redirect("/login");
    }
    return(
        <h1>Dashboard</h1>
    )
}