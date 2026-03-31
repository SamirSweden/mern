import { NextResponse } from "next/server";



export async function GET(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin,cardano,ripple,avalanche-2,polkadot,chainlink,uniswap,litecoin,near,filecoin,flow", {
        next:{revalidate: 60}
    })

    const data = await res.json()
    return NextResponse.json(data)
}


