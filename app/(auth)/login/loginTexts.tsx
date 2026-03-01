import { FormLogin } from "./formLogin";

export function LoginTexts(){
    return(
          <div className="w-1/2 h-full flex items-center flex-col justify-center">
                 <div className="space-y-2 mb-8">
                     <h1 className="text-4xl font-lato text-black-500 font-semibold">Welcome Back</h1>
                     <p className="text-black-500 font-semibold">Please enter your details to sign in.</p>
                 </div>
                 <FormLogin/>
          </div>
    )
}