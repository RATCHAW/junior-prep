import { db } from "@/db"
import { generateAccessToken, generateRefreshToken, generateVerifyToken } from "@/lib/jwt-tokens"
import { sendverificationEmail } from "@/lib/mailer"
import { registerSchema } from "@/lib/validators/auth"
import { provider } from "@prisma/client"
import { genSalt, hash } from "bcrypt"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        //validation
        const { email, password } = registerSchema.parse(body)

        const existingEmail = await db.user.findUnique({
            where: { email },
        })

        if (existingEmail) {
            return NextResponse.json({ message: "This email is already in use" }, { status: 401 })
        }

        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const token = await generateVerifyToken(email)

        const username = `Junior-${Math.random().toString(36).slice(2)}`
        const user = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                provider: "LOCAL" as provider,
            },
            select: {
                email: true,
                username: true,
            },
        })

        await db.verificationToken.create({
            data: {
                email,
                token,
            },
        })

        await sendverificationEmail(email, token)

        return NextResponse.json({ user: user }, { status: 200 })
    } catch (error) {
        console.log("🚀 ~ file: route.ts:65 ~ POST ~ error:", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
