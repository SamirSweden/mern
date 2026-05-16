import CoinsBanner from "@/app/components/CoinsBanner";
import { Suspense } from "react";
import Loading from "./loading";


async function getCoins() {
    const res  = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin,ripple,cardano,polkadot,avalanche-2,chainlink,litecoin,shiba-inu")
    const data = await res.json();
    return data;
}



const Coins = async () => {
    const coins = await getCoins();
    return (
        <>
            <div className={'min-h-screen bg-black'}>
                <Suspense fallback={<Loading/>}>
                    <CoinsBanner coins={coins} />
                </Suspense>
            </div>
        </>
    )
}



export default Coins;