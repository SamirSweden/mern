import { NextResponse } from "next/server";
import { codes} from "@/app/lib/store";
import { Resend } from "resend"

if(!process.env.RESEND_API_KEY){
    throw new Error("token missing")
}

const resend = new Resend(process.env.RESEND_API_KEY)


console.log(process.env.RESEND_API_KEY)

export async function POST(req: Request){

    const { email } = await req.json()

    if(!email) return NextResponse.json({error: "email required"} , {status: 400})

    const code = String(Math.floor(Math.random() * 900000) + 100000)

    codes.set(email , {
        code,
        expires: Date.now() + 60 * 1000
    })

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to:email,
            subject:'Your login code',
            html: `<h1>${code}</h1><p>Code valid for 1 minute</p><h2>Kraken.su - Samirs</h2>`
        })
    }catch(err){
        console.error(err)
        return NextResponse.json({error: "invalid code"} , {status: 400})
    }


    return NextResponse.json({success: true})
}


