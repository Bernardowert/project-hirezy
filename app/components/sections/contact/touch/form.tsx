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
  "budget",
  "support",
  "partnership",
] as const;


const schema = z.object({
    name: z.string().min(1, "The name is required").max(40, "The name must have a maximum of 40 characters."),
    email: z.email("Enter a valid email").min(1, "The email is required"),
    company: z.string().min(1, "The company name is required."),
    subject: z.enum(SUBJECT_OPTIONS, { message: "Required subject" }),
    messageArea:z.string().min(1, "The message is required").max(1000, "The message must have a maximum of 1000 characters."),
    acceptTerms: z.boolean().refine((value) => value === true, {
        message: "You must accept the terms and conditions.",
    })
})

type FormSchema = z.infer<typeof schema>;



export function FormTouch(){
    const {register, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful},control, reset} = useForm<FormSchema>({
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-174 laptop:grid laptop:grid-cols-2 gap-8 laptop:-mb-16 space-y-8 laptop:space-y-0">
              <div className="space-y-4">
                    <label htmlFor="input-name" className="block w-full text-black-500 text-sm tablet:text-base">Full Name</label>
                    <input
                     type="text" 
                     placeholder="Enter your full name" 
                     id="input-name" 
                     {...register("name")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300 w-full"
                     />
                     {
                         errors.name && <p className="text-red-500">{errors.name.message}</p>
                     }
              </div>
               <div className="space-y-4">
                    <label htmlFor="input-email" className="block w-full text-black-500 text-sm tablet:text-base">Work Email</label>
                    <input
                     type="email" 
                     placeholder="Enter your work email" 
                     id="input-email" 
                      {...register("email")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300 w-full"
                     />
                     {
                         errors.email && <p className="text-red-500">{errors.email.message}</p>
                     }
              </div>
              <div className="space-y-4">
                    <label htmlFor="input-company" className="block w-full text-black-500 text-sm tablet:text-base">Company Name</label>
                    <input
                     type="text" 
                     placeholder="Enter your company name" 
                     id="input-company" 
                     {...register("company")}
                     className="leading-14 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300 w-full"
                     />
                     {
                         errors.company && <p className="text-red-500">{errors.company.message}</p>
                     }
              </div>
               
               <div className="space-y-4">
               <label htmlFor="input-subject" className="block w-full text-black-500 text-sm tablet:text-base">Subject</label>
            <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                >
                    <SelectTrigger className="capitalize w-full h-14! mb-0! rounded-xl bg-blue-300" id="input-subject">
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
    <p className="text-red-500 mt-4">{errors.subject.message}</p>
  )}
               </div>

              <div className="space-y-4 col-span-2">
                    <label htmlFor="input-company" className="block w-full text-black-500 text-sm tablet:text-base">Message</label>
                     <textarea
                     placeholder="How can we help?"
                     id="input-textArea"
                     {...register("messageArea")}
                     className=" py-4 px-6 placeholder:text-grey-500 rounded-xl bg-blue-300 resize-none h-28.5 w-full"
                     />
                     {
                         errors.messageArea && <p className="text-red-500">{errors.messageArea.message}</p>
                     }
              </div>



             <div className="col-span-2">
                    <label htmlFor="input-checkbox" className="text-black-500  flex items-center gap-4 w-full cursor-pointer text-sm tablet:text-base">
                    <input type="checkbox" id="input-checkbox" className="appearance-none size-8 rounded-[8px] border border-grey-500 transition-all ease-linear checked:bg-lime checked:border-lime-950 cursor-pointer" {...register("acceptTerms")}/>
                    I agree to be contacted by the Hirezy team.
                   </label>
                   {
                       errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>
                   }
             </div>

             <Button disabled={isSubmitting} className={`flex items-center gap-4 px-4 py-3.5 col-start-2 max-w-37.5 ml-auto ${isSubmitting ? "opacity-50 cursor-not-allowed!" : ""}`}>
                <span className="font-lato text-xl text-black-500 font-semibold">Submit</span>

                <div className="size-10 flex items-center justify-center bg-white rounded-full">
                    <ArrowRight size={16}/>
                </div>
             </Button>

              {
                isSubmitSuccessful && <p className="font-bold">Form submitted successfully</p>
              }
        </form>
    )
}