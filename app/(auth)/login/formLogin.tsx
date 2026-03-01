'use client'

import { Button } from "@/app/components/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


import githubLogo from "@/app/assets/icons/github.png";
import googleLogo from "@/app/assets/icons/google.png";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation"



const schema = z.object({
    email: z.email("Enter a valid email").min(1, "The email is required"),
    password: z.string().min(8, "The password is required"),
    passwordRegister: z.string().min(8, "The password miniumum is 8 characters").optional(),
    terms: z.boolean().optional(),
}).refine(
  (data) =>
    !data.passwordRegister ||
    data.password === data.passwordRegister,
  {
    message: "Passwords don't match",
    path: ["passwordRegister"],
  }
);



type FormSchema = z.infer<typeof schema>;





export function FormLogin(){
   
    const[showPassword, setShowPassword] = useState(false);
    const [registerNewUser, setRegisterNewUser] = useState(false);

    const supabase = createClient();

    const router = useRouter()
   
    function handleShowPassword(){
        setShowPassword(prev => !prev);
    }

    function handleRegisterNewUser(){
        setRegisterNewUser(prev => !prev);
    }



    const {register, handleSubmit, formState:{errors}} = useForm<FormSchema>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
    })


    const handleSubmitForm = async (dataForm:FormSchema) =>{
        const { passwordRegister, ...payload } = dataForm;

        if(registerNewUser){
                const {data, error} = await supabase.auth.signUp({
                email: payload.email,
                password: payload.password
                })
                console.log(data);
                return;
        }
        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password
        })
        console.log(data);
           
         if(error?.message === "Invalid login credentials") return alert("Invalid login credentials");

       

      router.push("/dashboard");

    }
    
   

    return(
        <div className="w-full max-w-120">
            <form className="w-full space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
                   <div>
                        <label htmlFor="input-email" className="text-black-500">Email</label>
                        <div className="relative rounded-xl border border-white-200 h-12 bg-white-300 mt-1.5">
                             <Mail size={18} className="absolute select-none left-4 top-1/2 -translate-y-1/2"/>
                             <input 
                             type="email" 
                             id="input-email" 
                             placeholder="Enter your email" 
                             className="w-full h-full rounded-xl px-11.25" 
                             {...register("email")}
                             />
                        </div>
                        <span className="text-red-700 font-semibold block mt-2">{errors.email?.message}</span>
                   </div>
                   <div>
                        <label htmlFor="input-password" className="text-black-500">Password</label>
                        <div className="relative rounded-xl border border-white-200 h-12 bg-white-300 mt-1.5">
                             <Lock size={18} className="absolute select-none left-4 top-1/2 -translate-y-1/2"/>
                             <input 
                             type={showPassword ? "text" : "password"} 
                             id="input-password" 
                             placeholder="••••••••••" 
                             className="w-full h-full rounded-xl px-11.25" 
                             {...register("password")}
                             />
                             <button type="button" aria-label="show Password" onClick={handleShowPassword}>
                                 {
                                     showPassword ?
                                     <Eye size={18} className="absolute select-none right-4 top-1/2 -translate-y-1/2"/> :
                                     <EyeOff size={18} className="absolute select-none right-4 top-1/2 -translate-y-1/2"/>
                                 }
                             </button>
                        </div>
                         <span className="text-red-700 font-semibold block mt-2">{errors.password?.message}</span>
                   </div>

                   {
                     registerNewUser && (
                        <div>
                            <label htmlFor="input-passwordRegister" className="text-black-500">Confirm password</label>
                            <div className="relative rounded-xl border border-white-200 h-12 bg-white-300 mt-1.5">
                                <Lock size={18} className="absolute select-none left-4 top-1/2 -translate-y-1/2"/>
                                <input 
                                type={showPassword ? "text" : "password"} 
                                id="input-passwordRegister" 
                                placeholder="••••••••••" 
                                className="w-full h-full rounded-xl px-11.25" 
                                {...register("passwordRegister")}
                                />
                                
                            </div>
                            <span className="text-red-700 font-semibold block mt-2">{errors.passwordRegister?.message}</span>
                        </div>
                     )
                   }

                   {
                      !registerNewUser && (
                           <div className="flex items-center justify-between">
                         <label htmlFor="input-checkbox" className="flex items-center gap-3 cursor-pointer">
                            <input 
                            type="checkbox" 
                            id="input-checkbox" 
                            className="w-5 h-5 rounded-sm border border-black-500 appearance-none transition-colors checked:bg-lime"
                            {...register("terms")}
                            />
                             Remember me
                         </label>
                         <Link className="text-black-500" href="#">Forgot Password?</Link>
                   </div>
                      )
                   }

                   <Button className="w-full rounded-sm py-3">{registerNewUser ? "Sign up" : "Sign in"}</Button>
            </form>
              
              <span 
              className="
              block 
              text-sm 
              text-black-500 
              font-medium 
              relative
              mt-14 
              text-center
              before:content-['']
              before:w-46.5
              before:h-px
              before:bg-black-500/25
              before:absolute
              before:bottom-1/2
              before:translate-y-1/2
              before:-left-4
              
              after:content-['']
              after:w-46.5
              after:h-px
              after:bg-black-500/25
              after:absolute
              after:bottom-1/2
              after:translate-y-1/2
              after:-right-4
              "
              >Or continue with</span>

              <div className="flex items-center gap-4 mt-8">
                  <button className="flex items-center justify-center gap-3 rounded-xl border border-white-200 w-full h-14 transition-colors [&:hover,&:focus]:bg-white-300">
                    <div className="w-full max-w-6 h-6 flex items-center justify-center">
                        <Image
                        src={googleLogo}
                        alt="Logo Google"
                        title="Google"
                        />
                    </div>
                    <span className="text-lg text-black-500 font-semibold">Google</span>
                  </button>
                   <button className="flex items-center justify-center gap-3 rounded-xl border border-white-200 w-full h-14 transition-colors [&:hover,&:focus]:bg-white-300">
                    <div className="w-full max-w-6 h-6 flex items-center justify-center">
                        <Image
                        src={githubLogo}
                        alt="Logo Github"
                        title="Github"
                        />
                    </div>
                    <span className="text-lg text-black-500 font-semibold">Github</span>
                  </button>
              </div>

              <span className="text-sm text-black-500 mt-10 block text-center">{registerNewUser ? "Already have an account?" : "Don't have an account?"} <button className="font-bold transition-colors ease-linear [&:hover,&:focus]:text-lime-700" onClick={handleRegisterNewUser}>{registerNewUser ? "Sign In" : "Sign Up"}</button></span>
        </div>
    )
}