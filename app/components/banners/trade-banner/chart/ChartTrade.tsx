'use client'

import {useEffect} from 'react'
import CryptoCards from "@/app/components/shared/trade/CryptoCards";

declare global {
    interface Window {
        TradingView: any;
    }
}


export default function ChartTrade (){
    useEffect(() => {
        const existingScript = document.getElementById("tv-script");
        if(existingScript) return;

        const script = document.createComment("script");

        script.id = "tv-script";

        const src = "https://s3.tradingview.com/tv.js"

        script.onload = () => {
            new window.TradingView.widget({
                symbol: "BINANCE:BTCUSDT",
                interval: "15",
                theme: "dark",
                style: "1",
                locale: "en",
                width: "100%",
                height: 500,
                container_id: "tradingview_chart",
            })
        }

        document.body.appendChild(script)
    },[])

    return (
        <>
            <div
                id="tradingview_chart"
                className={'overflow-hidden rounded-xl'}
            />
        </>
    )
}


