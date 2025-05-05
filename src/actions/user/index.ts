 "user server"

import { currentUser } from "@clerk/nextjs/server"
import { log } from "console";
import { redirect } from "next/navigation";
import {createUser, findUser, updateSubscription} from "./queries"
import {refreshToken} from"@/lib/fetch"


 export const onCurrentUser= async()=>{
const user= await currentUser();
if(!user) return redirect ("/sign-in");
return user

 };

 export const onBoarduser= async()=>{
    const user=await onCurrentUser();
    try {
        const found =await findUser(user.id);
        if (found){
            if(found.integration.length>0){
                const today= new Date();
                const time_left=
                found.intergation[0].expiredAt?.getTime()!-today.getTime();


                const days= Math.round(time_left/(1000*3000*24));
                if (days>5){
                    console.log("refresh");

                    const refresh= await refreshToken(found.integration[0].token);

                    const today= new Date();
                    const expiry_date= today.setDate(today.getDate()+60);

                    const update_token=await updateIntegration(
                        refresh.access_token,
                        new Date(expiry_date),
                        found.intergation[0].id
                    );
                    if(!update_token){console.log("Update token failed");
                    }



                }
            }
             return {
                status: 200,
                data:{
                    firstname: found.firstname,
                    lastname: found.lastname
                },
             };
        }
        const created = await createUser(
            user.id,
            user.firstName!,
            user.lastName!,
            user.emailAddresses[0].emailAddress
          );
          return { status: 201, data: created };
        } catch (error) {
          console.log(error);
          return {status: 500};
       
    }
 };


 export const onUserInfo= async()=>{
    const user= await currentUser();
    try{
        const profile= await findUser(user.id);
        if(profile) return {status:200, data: profile};

        return {status:400};
    }catch(error){
                return {status:500};
            }
        };


    
 
