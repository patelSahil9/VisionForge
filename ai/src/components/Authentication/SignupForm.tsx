"use client"
import React, { useState, useId } from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils';
import { toast } from "sonner";
const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formSchema = z.object({
    full_name: z.string().min(3, {
        message: "Full Name must be at least 3 characters",
    }),
    email: z.string().email({
        message: "Enter Your Email Address",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(8, {
        message: "Password must be at least 8 characters",
    }).regex(passwordValidationRegex, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
    confirmpassword: z.string({
        required_error: "Confirm Password is required",
    })
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
})
const SignupForm = ({className}:{className?:string}) => {

  const [Loading, setLoading] = useState(false);

  const toastId = useId();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            full_name: "",
            confirmpassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      toast.loading("Signing up...", {id: toastId})
      setLoading(true)
      console.log(values)
      // toast.success("Signup successful")
    }   


  return (
    <div className={cn("grid gap-6",className )}>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@ example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Enter your Password" {...field} />
              </FormControl >

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Enter your Password Again" {...field} />
              </FormControl >

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full'>Sign Up</Button>
      </form>
    </Form>
    </div>
  )
}

export default SignupForm
