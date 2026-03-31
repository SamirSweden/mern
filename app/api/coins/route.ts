import { NextResponse } from "next/server";



export async function GET(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,doge,flow", {
        next:{revalidate: 60}
    })

    const data = await res.json()
    return NextResponse.json(data)
}


