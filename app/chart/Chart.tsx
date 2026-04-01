'use client'

import { useEffect, useRef, useState } from "react";
import { createChart, IChartApi, CandlestickSeries, UTCTimestamp } from "lightweight-charts";
import button from "@/app/components/UI/Button";

type Props = { symbol: string };

export default function Chart({ symbol }: Props) {
    const chartRef = useRef<HTMLDivElement>(null);  // div для графика
    const chart = useRef<IChartApi | null>(null);   // сам chart
    const [timeframe, setTimeframe] = useState("1m"); // текущий таймфрейм

    useEffect(() => {
        if (!chartRef.current) return;
        let alive = true;

        // создаём график
        const c = createChart(chartRef.current, {
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,
            layout: { background: { color: "#000" }, textColor: "#DDD" },
            grid: { vertLines: { color: "#111" }, horzLines: { color: "#111" } },
        });
        chart.current = c;

        const series = c.addSeries(CandlestickSeries, {}); // свечной график

        // подстраиваем размеры при ресайзе
        const ro = new ResizeObserver(([e]) => c.applyOptions(e.contentRect));
        ro.observe(chartRef.current);

        fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${timeframe}&limit=100`)
            .then(r => r.json())
            .then((data: any[]) => {
                series.setData(data.map(d => ({
                    time: d[0] / 1000 as UTCTimestamp,
                    open: +d[1], high: +d[2], low: +d[3], close: +d[4]
                })));
            });

        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${timeframe}`);
        ws.onmessage = e => {
            if (!alive) return;
            const k = JSON.parse(e.data).k;
            series.update({ time: k.t / 1000, open: +k.o, high: +k.h, low: +k.l, close: +k.c });
        };

        return () => { alive = false; ws.close(); ro.disconnect(); chart.current?.remove(); };
    }, [symbol, timeframe]); // перезапуск при смене символа или таймфрейма

    return (
        <div>
            <div className="mb-2 flex gap-2 max-[350px]:mb-0 max-[350px]:gap-0.5">
                {["1m","5m","15m","1h","4h","1d"].map(tf =>
                    <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`px-3 py-1 rounded-full ${timeframe===tf 
                            ? "py-2 px-2 text-white shadow-[inset_4px_4px_40px_0_hsla(0,0%,100%,.15)]" 
                            : ""}`
                        }
                    >
                        {tf}
                    </button>
                )}
            </div>

            <div ref={chartRef} className="w-full h-[300px] md:h-[730px]" />
        </div>
    );
}