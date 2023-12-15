import { db } from "@/db";
import { commentSchema } from "@/lib/validators/comment";
import { roleSchema } from "@/lib/validators/roles";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export async function PUT(req : Request, {params}: {params:{teamId:string,commentId:string}}){

    try{
        
        const {teamId,commentId} = params
        if (!commentId || !teamId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const body = req.body

        const {comment,email} = commentSchema.parse(body)

        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const oldComment = await db.comment.findUnique({
        where:{
            id:commentId
        }
    })

    if(session?.user?.email !== oldComment?.userEmail){
        return Response.json({message:"You are not authorized"},{status:401})
    }

   const newComment =  await db.comment.update({
        where:{
            id:commentId
        }

        ,
        data:{
            content:comment
        }
        
      })
    
     return Response.json({role: newComment , message: "comment updated successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}


export async function DELETE( {params}: {params:{teamId:string,commentId:string}}){

    try{
        
        const {teamId,commentId} = params
        if (!commentId || !teamId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const oldComment = await db.comment.findUnique({
        where:{
            id:commentId
        }
    })

    if(session?.user?.email !== oldComment?.userEmail){
        return Response.json({message:"You are not authorized"},{status:401})
    }

    await db.comment.delete({
        where:{
            id:commentId
        }
       
      })
    
     return Response.json({ message: "comment deleted successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}


