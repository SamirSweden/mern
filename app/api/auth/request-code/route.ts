import { NextResponse } from "next/server";



export default async function POST(req: Request) {
    const { phone } = await req.json()

    if(!phone) return NextResponse.json({ error: "Phone not found" }, {status: 400})

    const code = Math.floor(100000 + Math.random() * 900000).toString()


}




