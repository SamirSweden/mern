import { NextResponse} from "next/server";
import {codes} from "@/app/lib/store";


export async function POST(req:Request){

    const {email , code} = await req.json()


    const record = codes.get(email)

    if (!record){
        return NextResponse.json({error: "code not found"} , {status: 400})
    }

    if(Date.now() > record.expires) {
        codes.delete(email)
    }

    if(record.code !== code){
        return NextResponse.json({error: "invalid code"} , {status: 400})
    }

    codes.delete(email)

    return  NextResponse.json({success: true})
}


