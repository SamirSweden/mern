import OverBanner from "../components/banners/trade-banner/OverBanner";
import TradeBanner from "../components/banners/trade-banner/TradeBanner";
import Header from "../components/shared/header/Header";



export default function TradeApi(){
    return (
        <>
            <main className="min-h-screen bg-black ">
                <Header />
                <TradeBanner />
                <OverBanner />
            </main>
        </>
    )
}






