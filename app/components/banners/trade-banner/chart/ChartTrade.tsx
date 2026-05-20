'use client'

import { useEffect } from 'react'

declare global {
    interface Window {
        TradingView: {
            widget:new (options: {
                symbol: string
                interval: string
                theme: string
                style: string
                locale: string
                width: string
                height: number
                container_id: string
            }) => void;
        }
    }
}

export default function ChartTrade() {
    useEffect(() => {
        const existingScript =
            document.getElementById('tv-script')

        if (existingScript) return

        const script =
            document.createElement('script')

        script.id = 'tv-script'

        script.src =
            'https://s3.tradingview.com/tv.js'

        script.onload = () => {
            new window.TradingView.widget({
                symbol: 'BINANCE:BTCUSDT',
                interval: '15',
                theme: 'dark',
                style: '1',
                locale: 'en',
                width: '100%',
                height: 700,
                container_id: 'tradingview_chart',
            })
        }

        document.body.appendChild(script)
    }, [])

    return (
        <div
            id="tradingview_chart"
            className="overflow-hidden rounded-xl"
        />
    )
}