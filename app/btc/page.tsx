import ChartTrade from "@/app/components/banners/trade-banner/chart/ChartTrade";
import TradePanel from "@/app/components/exchange/TradePanel";


export default function Btc() {
    return (
        <>
            <main className="min-h-screen bg-black text-white p-5 ">
                <h1>
                    Kraken.su &mdash; demo trading
                </h1>

                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-9">
                        <ChartTrade />
                    </div>

                    <div className="col-span-3">
                        <TradePanel />
                    </div>
                </div>
            </main>
        </>
    )
}





