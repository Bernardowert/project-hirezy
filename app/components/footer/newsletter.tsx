'use client';
import { ArrowRight } from "lucide-react";
import { SyntheticEvent} from "react";

export function Newsletter(){

function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("enviado");
}

    return(
        <div className="bg-bgForm bg-blue-300 w-full max-w-111.75 h-65.75 rounded-3xl p-8">
            <h3 className="text-2xl text-black-500 font-semibold mb-2">Subscribe for Updates</h3>
            <p className="text-grey-500">Get the latest hiring tips and product updates delivered to your inbox.</p>
            <form onSubmit={handleSubmit} className="mt-14 flex items-center justify-between gap-4 h-14 bg-white rounded-4xl pr-2">
                 <input type="email" placeholder="Enter your email" name="email" id="input-email" required className="flex-1 h-full rounded-4xl pl-6" />
                 <button aria-label="Button to submit form" className="size-10 rounded-full flex items-center justify-center bg-lime">
                     <ArrowRight size={16}/>
                 </button>
            
            </form>
        
        </div>
    )
}