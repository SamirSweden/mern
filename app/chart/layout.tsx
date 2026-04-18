import type { Metadata } from "next"
import Footer from "@/app/components/shared/footer/Footer";
import Balance from "../components/exchange/Balance";
import TradePanel from "../components/exchange/TradePanel";
import Positions from "../components/exchange/Positions";



export const metadata: Metadata = {
    title: "Kraken - cryptocurrency chart",
    description:"Kraken crypto-chart - make investment by learning stocks and graphs",
}



export default  function ChartLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}




