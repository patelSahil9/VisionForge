"use client"
import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils';

const formSchema = z.object({
    email: z.string().email({
        message: "Enter valid Email Address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
})
const LoginForm = ({className}:{className?:string}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }   


  return (
    <div className={cn("grid gap-6",className )}>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit" className='w-full'>Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default LoginForm
