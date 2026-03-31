'use client'
// /chart

import { useState } from "react";
import Chart from "./Chart"
import Link from "next/link";
import ChartBanner from "@/app/components/banners/banner/ChartBanner";


const coins = [
    { label: "BTC", symbol: "btcusdt" },
    { label: "ETH", symbol: "ethusdt" },
    { label: "SOL", symbol: "solusdt" },
];




export default function ChartPage(){
    const [symbol , setSymbol] = useState("btcusdt");

    return <>
        <div className="bg-black min-h-screen text-white p-4 md:p-6 ">
            <div className="flex flex-col md:flex-row md:justify-between  items-center gap-4 sticky top-0 z-50 bg-black p-4 md:p-6 ">
                <Link href={'/'}
                      className={' drop-shadow-[0_0_10px_rgba(255,150,100,0.5)] z-50 text-center outline-none border-none text-5xl md:text-3xl  font-extrabold select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'}
                >Kraken.su</Link>
                <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto items-center py-2 px-2 rounded-full  bg-gradient-to-br from-[#12161a] to-[#292721] mb-6">
                    {coins.map((c) => (
                        <button
                            key={c.symbol}
                            onClick={() => setSymbol(c.symbol)}
                            className={`shrink-0 px-4 py-2 transition rounded-full cursor-pointer ${
                                symbol === c.symbol
                                    ? "bg-[#111] text-white border border-gray-500"
                                    : "bg-transparent"}`
                            }
                        >
                            {c.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-6 ">
                <Chart symbol={symbol}  />
            </div>
            <hr className={'text-cyan-700 mt-6'}/>

            <div className={'bg-transparent'}>
                <ChartBanner />
            </div>
        </div>
    </>
}