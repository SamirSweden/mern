'use client'

import {
    createChart,
    CandlestickSeries,
} from 'lightweight-charts'

import React, {
    useEffect,
    useRef,
    useState,
} from 'react'

export default function ChartTrade() {
    const chartRef = useRef<HTMLDivElement>(null)

    const [tf, setTf] = useState('15m')

    const TIMEFRAMES = ['1m', '5m', '15m', '1h', '4h'];

    useEffect(() => {
        if (!chartRef.current) return

        const chart = createChart(chartRef.current, {
            width: chartRef.current.clientWidth,
            height: 700,

            layout: {
                background: {
                    color: '#0d0606',
                },
                textColor: '#d1d4dc',
            },

            grid: {
                vertLines: {
                    color: '#2b2b43',
                },
                horzLines: {
                    color: '#525252',
                },
            },
        })

        const series =
            chart.addSeries(CandlestickSeries)

        async function loadCandles() {
            const response = await fetch(
                `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${tf}&limit=500`
            )

            const data = await response.json()

            const candles = data.map(
                (item: any) => ({
                    time: item[0] / 1000,
                    open: Number(item[1]),
                    high: Number(item[2]),
                    low: Number(item[3]),
                    close: Number(item[4]),
                })
            )

            series.setData(candles)

            chart.timeScale().fitContent()
        }

        loadCandles()

        const resize = () => {
            chart.applyOptions({
                width:
                    chartRef.current?.clientWidth ??
                    1200,
            })
        }

        window.addEventListener(
            'resize',
            resize
        )

        return () => {
            window.removeEventListener(
                'resize',
                resize
            )

            chart.remove()
        }
    }, [tf])

    return (
        <div className="w-full">
            <div className="mb-3 flex gap-2 max-[425px]:justify-center">

                {TIMEFRAMES.map((item) => {
                    const isActive = tf === item;

                    return (
                        <button
                            onClick={() => setTf(item)}
                            key={item}
                            className={`${isActive 
                                ? "bg-linear-to-br from-white/75 to-white/50 backdrop-blur-lg text-black px-2 py-1 rounded-full text-sm font-bold cursor-pointer" 
                                : "bg-black px-2 py-1 rounded-full text-white hover:bg-white hover:text-black cursor-pointer"
                            }`}
                        >
                            {item}
                        </button>
                    )
                })}

            </div>


            <div
                ref={chartRef}
                className="h-175 w-full rounded-xl overflow-hidden"
            />
        </div>
    )
}