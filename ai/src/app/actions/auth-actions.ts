import { AuthResponse } from './../../../node_modules/@supabase/auth-js/src/lib/types';
'use server'

import { AuthResponse } from "@supabase/supabase-js";

interface AuthResponse{
    error: null | string,
    success:boolean,
    data: unknown |null;
}

export async function signup(FormData: FormData):Promise<AuthResponse>{
    const supabase= await createClient();

    const data={
        email:FormData.get('email') as string,
        password:FormData.get('password') as string,
        options:{
            data:{
                full_name:FormData.get('full_name') as string
            }
        }
    }

    const {data: signupData, error}=await supabase.auth.signUp(data);
          return {
              error: error ?.message || "there was an error"    ,
              success: !error,
              data:signupData  ||null
          }
         

      
}