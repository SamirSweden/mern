//component

'use client'

import {  useEffect, useRef } from "react";
import {
    createChart,
    IChartApi,
    CandlestickSeries,
    UTCTimestamp
} from "lightweight-charts";

type Props = {
    symbol: string
}

type BinanceKline = [
    number,
    string,
    string,
    string,
    string,
    string,
    number,
    string,
    number,
    string,
    string,
    string
];

type BinanceWSMessage = {
    k: {
        t: number;
        o: string;
        h: string;
        l: string;
        c: string;
    };
};

export default function Chart({symbol} : Props) {
    const chartRef = useRef<HTMLDivElement>(null)
    const chart = useRef<IChartApi | null>(null)


    useEffect(() => {
        if(!chartRef.current) return;


        const chartInstance = createChart(chartRef.current, {
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,

            layout: {
                background: { color: "#000" },
                textColor: "#DDD",
            },
            grid: {
                vertLines: { color: "#111" },
                horzLines: { color: "#111" },
            },
        });

        chart.current = chartInstance;

        const series = chart.current.addSeries(CandlestickSeries, {});


        const resizeObserver = new ResizeObserver((entries) => {
            const {width,height} = entries[0].contentRect;

            chartInstance.applyOptions({
                width,
                height,
            })
        })

        resizeObserver.observe(chartRef.current)


        fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=1m&limit=100`)
            .then((res) => res.json())
            .then((data: BinanceKline[]) => {
                const formatted = data.map((d) => ({
                    time:   d[0] / 1000 as UTCTimestamp,
                    open:   Number(d[1]),
                    high:   Number(d[2]),
                    low:    Number(d[3]),
                    close:  Number(d[4]),
                }));

                series.setData(formatted);
            });

        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_1m`)
        ws.onmessage = (event) => {
            const msg:BinanceWSMessage  = JSON.parse(event.data);
            const k = msg.k;

            series.update({
                time:  k.t / 1000 as UTCTimestamp,
                open:  Number(k.o),
                high:  Number(k.h),
                low:   Number(k.l),
                close: Number(k.c),
            });
        };

        return () => {
            resizeObserver.disconnect();
            chart.current?.remove();
        };
    },[symbol])
    
    return (
        <>
            <div
                ref={chartRef}
                className="w-full h-[300px] md:h-[730px]"
            />
        </>
    )
}
