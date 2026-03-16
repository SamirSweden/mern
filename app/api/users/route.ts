import {  NextResponse } from "next/server";


const BASE = "https://jsonplaceholder.typicode.com"



export async function GET() {
    const res = await fetch(`${BASE}/users`)
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST(req: Request) {
    const body = await req.json();

    const res = await fetch(`${BASE}/users` , {
        method:'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
    })


    const data = await res.json();
    return NextResponse.json(data , {status: 201})
}




