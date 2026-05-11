'use client'


import { useEffect } from "react"
import { useCryptoStore } from "../store/crypto-store"



export function useBinancePrices(){
    const updatePrice = useCryptoStore((state) => state.updatePrice)

    useEffect(() => {
        const streams = "btcusdt@trade/ethusdt@trade/solusdt@trade";
        const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`)

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data)

            const symbol = message.data.s.toLowerCase()

            const price = Number(message.data.p)

            updatePrice(symbol , price)
        }
        return () => ws.close()
    },[updatePrice])
}

