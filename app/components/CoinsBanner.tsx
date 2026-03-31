import Link from 'next/link'
import {
    Bitcoin,
    DollarSign,
    Zap,
    Coins,
    Sparkles,
    Globe,
    Shield,
    Activity,
    Cpu,
    PieChart,
    Lock,
    Radio,
    Cloud,
    Network,
    TrendingUp,
    type LucideIcon
} from "lucide-react";
import CoinFooter from "@/app/components/UI/CoinFooter";

type Coin = {
    id:string
    name:string
    symbol:string
}

const coinsIcon: Record<string, LucideIcon> = {
    bitcoin: Bitcoin,
    ethereum: DollarSign,
    solana: Zap,
    dogecoin: Coins,
    cardano: Sparkles,
    ripple: Globe,
    avalanche: Shield,
    polkadot: Activity,
    chainlink: Cpu,
    uniswap: PieChart,
    litecoin: Lock,
    near: Radio,
    filecoin: Cloud,
    flow: Network,
}

const getCoinIcon = (coinId: string): LucideIcon => {
    return coinsIcon[coinId] || TrendingUp
}

async function getCoins() {
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin,cardano,ripple,avalanche-2,polkadot,chainlink,uniswap,litecoin,near,filecoin,flow",
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error("API ERROR:", res.status);
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error("FETCH ERROR:", error);
        return [];
    }
}

const CoinBanner = {
    title:"Earn weekly rewards on your crypto",
    description:"Earn services are provided by a Kraken entity that is not a regulated entity and these services do not attract regulatory protection from any national competent authority.",
}

export default  async function CoinsBanner() {
    const coins = await getCoins()

    return (
        <>
            <section className={'banner-crypto py-10 px-0 bg-black min-h-screen'}>
                <div className="max-w-307.5 md:px-6 px-4 mx-auto w-full h-full">
                    <div className="flex items-center justify-between flex-col gap-10">
                        <h2 className={'text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-pink-600 to-yellow-400'}>{CoinBanner.title}</h2>
                        <p className={'text-lg text-gray-400 max-w-[700px] text-wrap mb-18'}>{CoinBanner.description}</p>
                    </div>
                    <div className="grid grid-cols-4 max-[680px]:grid-cols-3 max-[680px]:gap-3 max-[400px]:grid-cols-2 gap-10">
                        {coins.map((coin: Coin) => {
                            const Icon = getCoinIcon(coin.id)
                            return (
                                <Link key={coin.id} href={'/'} className={'relative flex items-stretch gap-5 cursor-pointer transition-transform duration-300 hover:-translate-y-4 flex-col shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-5 rounded-md'}>
                                    <Icon size={30}  />
                                    <div className="name text-xl ">{coin.name}</div>
                                    <span className="symbol text-sm absolute right-0 top-[-10]   transition-transform rotate-5">{coin.symbol.toUpperCase()}</span>
                                    <div className={'apy'}>
                                        {(Math.random() * 10).toFixed(2)}% APY
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
            <CoinFooter />
        </>
    )
}
