import { publicProcedure, router } from './trpc';

import {TRPCError} from "@trpc/server"
import { db } from '@/db';
 
export const appRouter = router({
  authCallback: publicProcedure.query(async ()=>{


    // if(!user) throw new TRPCError({ code:"UNAUTHORIZED"})

    // const dbUser = await db.user.findFirst({
    //   where : {
    //     email: user.email
    //   }
    // })

    // if(!dbUser){
    //   await db.user.create({
    //     data:{
    //       id : user.id,
    //       email: user.email
    //     }
    //   })
    // }

    return {success : true}
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;