import { NextRequest , NextResponse } from "next/server";




export async function POST(req: NextRequest) {
    const { email , password } = await req.json();

    if(!email || !password){
        return NextResponse.json(
            {error: "Email and password are required"},
            {status: 400}
        )
    }

    const isValid = email === "test@test.com" && password === "123456";

    if (!isValid){
        return NextResponse.json(
            {error: "invalid credentials"},
            {status:401}
        )
    }

    const response =  NextResponse.json({success: true} , {status: 200});

    response.cookies.set("session", "1wrgaahhhxbabbass", {
        httpOnly:true,
        sameSite:"lax",
        maxAge:60 * 60 * 24 * 7 // 7 days
    })

    return response
}








