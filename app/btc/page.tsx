import ChartTrade from "@/app/components/banners/trade-banner/chart/ChartTrade";
import TradePanel from "@/app/components/banners/trade-banner/chart/TradePanel";



export default function Btc() {
    return (
        <>
            <main className="min-h-screen bg-black text-white ">
                <div className="grid grid-cols-12  max-[768px]:grid-cols-1">
                    <div className="col-span-9">
                        <ChartTrade />
                    </div>

                    <div className="col-span-3 p-3">
                        <TradePanel />
                    </div>
                </div>
            </main>
        </>
    )
}





