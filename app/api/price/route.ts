
export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const symbol = searchParams.get("symbol") || "BTCUSDT";


    const res = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    )

    const data = await res.json()

    return Response.json({
        price: Number(data.price)
    })
}


