import OverBanner from "../components/banners/trade-banner/banners/OverBanner";
import TradeBanner from "../components/banners/trade-banner/banners/TradeBanner";
import TypesBanner from "../components/banners/trade-banner/banners/TypesBanner";
import TypesCard from "../components/banners/trade-banner/cards/TypesCard";
import Header from "../components/shared/header/Header";



export default function TradeApi(){
    return (
        <>
            <main className="min-h-screen bg-black ">
                <Header />
                <TradeBanner />
                <OverBanner />
                <TypesBanner />
            </main>
        </>
    )
}






