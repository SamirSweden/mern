'use client'

import { useState } from "react";
import ChartTrade from "@/app/components/banners/trade-banner/chart/ChartTrade";
import TradePanel from "@/app/components/banners/trade-banner/chart/TradePanel";
import PnlCard from "@/app/components/shared/trade/PnlCard";


export default function Btc() {
    const [balance , setBalance] = useState(200)
    const [btc , setBtc] = useState(0)
    const [price , setPrice] = useState(65000)
    const [avgPrice , setAvgPrice] = useState(0)

    
    return (
        <>
            <main className="min-h-screen bg-black  text-white ">
                <div className="grid grid-cols-12  max-[768px]:grid-cols-1">
                    <div className="col-span-9">
                        <ChartTrade />
                    </div>

                    <div className="col-span-3 p-3">
                        <TradePanel
                            balance={balance}
                            setBalance={setBalance}

                            btc={btc}
                            setBtc={setBtc}

                            price={price}
                            setPrice={setPrice}

                            avgPrice={avgPrice}
                            setAvgPrice={setAvgPrice}
                        />
                    </div>

                </div>
                <div className={`
                    bg-black 
                `}>
                    <PnlCard
                        btc={btc}
                        currentPrice={price}
                        avgPrice={avgPrice}
                    />
                </div>

            </main>
        </>
    )
}





