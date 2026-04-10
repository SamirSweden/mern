import CoinsBanner from "@/app/components/CoinsBanner";
import { Suspense } from "react";
import Loading from "./loading";


const Coins = () => {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <CoinsBanner />
            </Suspense>
        </>
    )
}

export default Coins

