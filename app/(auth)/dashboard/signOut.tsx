'use client'

import { signOut } from "@/lib/supabase/auths/signOutUser"

export function SignOutButton (){

    return(
        <button onClick={signOut}>Sign out</button>
    )
}