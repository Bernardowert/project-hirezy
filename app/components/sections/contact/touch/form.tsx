'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/button";



const SUBJECT_OPTIONS = [
  "orcamento",
  "suporte",
  "parceria",
] as const;


const schema = z.object({
    name: z.string().min(1, "O nome é obrigatório").max(40, "O nome deve ter no máximo 40 caracteres"),
    email: z.email("Digite um email válido").min(1, "O email é obrigatório"),
    company: z.string().min(1, "O nome da empresa é obrigatório"),
    subject: z.enum(SUBJECT_OPTIONS, { message: "Required subject" }),
    messageArea:z.string().min(1, "A mensagem é obrigatória").max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
    acceptTerms: z.boolean().refine((value) => value === true, {
        message: "Você deve aceitar os termos e condições",
    })
})

type FormSchema = z.infer<typeof schema>;



export function FormTouch(){
    const {register, handleSubmit, formState:{errors, isSubmitting},control, reset} = useForm<FormSchema>({
        resolver: zodResolver(schema),
        mode: "onChange",
    })


   const onSubmit = async (data: FormSchema) => {
        console.log("Enviando...", data);

        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        console.log("Enviado!");
        reset();
};
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                    <label htmlFor="input-name" className="block w-full text-black-500">Full Name</label>
                    <input
                     type="text" 
                     placeholder="Enter your full name" 
                     id="input-name" 
                     {...register("name")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300"
                     />
                     {
                         errors.name && <p className="text-red-500">{errors.name.message}</p>
                     }
              </div>
               <div className="space-y-4">
                    <label htmlFor="input-email" className="block w-full text-black-500">Work Email</label>
                    <input
                     type="email" 
                     placeholder="Enter your work email" 
                     id="input-email" 
                      {...register("email")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300"
                     />
                     {
                         errors.email && <p className="text-red-500">{errors.email.message}</p>
                     }
              </div>
              <div className="space-y-4">
                    <label htmlFor="input-company" className="block w-full text-black-500">Company Name</label>
                    <input
                     type="text" 
                     placeholder="Enter your company name" 
                     id="input-company" 
                     {...register("company")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300"
                     />
                     {
                         errors.company && <p className="text-red-500">{errors.company.message}</p>
                     }
              </div>
               
               <div>
            <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                >
                    <SelectTrigger className="w-45 capitalize">
                    <SelectValue placeholder="Select your subject" />
                    </SelectTrigger>

                    <SelectContent>
                    <SelectGroup>
                        {SUBJECT_OPTIONS.map((subject) => (
                        <SelectItem
                            key={subject}
                            value={subject}
                            className="capitalize"
                        >
                            {subject}
                        </SelectItem>
                        ))}
                    </SelectGroup>
                    </SelectContent>
                </Select>
    )}
  />

  {errors.subject && (
    <p className="text-red-500">{errors.subject.message}</p>
  )}
               </div>

              <div className="space-y-4">
                    <label htmlFor="input-company" className="block w-full text-black-500">Message</label>
                     <textarea
                     placeholder="How can we help?"
                     id="input-textArea"
                     {...register("messageArea")}
                     className=" py-4 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300 resize-none h-28.5"
                     />
                     {
                         errors.messageArea && <p className="text-red-500">{errors.messageArea.message}</p>
                     }
              </div>



             <div>
                    <label htmlFor="input-checkbox" className="text-black-500  flex items-center gap-4">
                    <input type="checkbox" id="input-checkbox" {...register("acceptTerms")}/>
                    I agree to be contacted by the Hirezy team.
                   </label>
                   {
                       errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>
                   }
             </div>

             <Button disabled={isSubmitting} className={`flex items-center gap-4 px-4 py-3.5 ${isSubmitting ? "opacity-50 cursor-not-allowed!" : ""}`}>
                <span className="font-lato text-xl text-black-500 font-semibold">Submit</span>

                <div className="size-10 flex items-center justify-center bg-white rounded-full">
                    <ArrowRight size={16}/>
                </div>
             </Button>

              
        </form>
    )
}