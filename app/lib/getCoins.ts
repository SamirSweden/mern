import { Coin } from "@/app/types/Coin"


export async function getCoins(): Promise<Coin[]> {

    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100",
        {
            next:{revalidate:60}
        }
    )

    if(!res.ok) throw new Error(`Coins not found: ${res.status}`)

    const data = await res.json()

    return data.map((coin: any) => ({
        id:coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change:coin.price_change_percentage_24h,
        image: coin.image,
    }))

}

