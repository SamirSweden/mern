import { CoinGeckoCoin , Crypto} from "@/app/types/Crypto";


const BASE_URL = "https://api.coingecko.com/api/v3"



export async function getCryptoMarkets(): Promise<Crypto[]> {
    const res = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`, {
        next: {revalidate:60}
    })

    if(!res.ok) throw new Error(`Could not find crypto ${res.status}`)

    const data :CoinGeckoCoin[] = await res.json()

    return data.map((coin) => ({
        id: coin.id,
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        image: coin.image,
        price: coin.current_price,
        change: coin.price_change_percentage_24h,
    }))
}














