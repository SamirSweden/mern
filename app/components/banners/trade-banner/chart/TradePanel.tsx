'use client'

import {toast} from "sonner";
import React, {useEffect , useCallback,useState} from "react";
import {Bitcoin} from "lucide-react";


type Props = {
    balance:number;
    setBalance: React.Dispatch<React.SetStateAction<number>>

    btc: number;
    setBtc: React.Dispatch<React.SetStateAction<number>>

    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>

    avgPrice: number;
    setAvgPrice: React.Dispatch<React.SetStateAction<number>>
}


const tradeBtns = {
    long: "long",
    short: "short",
}

export default function TradePanel({balance, setBalance , btc , setBtc , price , setPrice , avgPrice , setAvgPrice}: Props){

    const [amount , setAmount] = useState<string>("")
    const [side , setSide] = useState("long")

    const fetchPrices = useCallback(async () => {
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        const data = await res.json()
        setPrice(Number(data.price))
    }, [setPrice])

    useEffect(() => {
        fetchPrices()

        const interval = setInterval(() => {
            fetchPrices()
        }, 3000)

        return () => clearInterval(interval)
    },[fetchPrices])

    function buyBtc(){
        const usd = Number(amount)

        if(usd > balance){
            toast.error("Not enough balance")
            return;
        }

        const btcAmount = usd / price;
        const totalOldValue = btc * avgPrice;
        const totalNewValue = btcAmount * price;
        const totalBtc = btc + btcAmount;

        const newAvgPrice = totalBtc > 0  ? (totalOldValue + totalNewValue) / totalBtc : 0;
        const newBalance = balance - usd;


        setBalance(newBalance)
        setBtc(newAvgPrice);

        localStorage.setItem("balance", String(newBalance))
        localStorage.setItem("btc", String(totalBtc))

        toast.success(`Bought BTC for $${usd}`)
    }

    function sellBtc(){
        const usd = Number(amount)
        const btcToSell = usd / price;

        if(btcToSell > btc){
            toast.error("Not enough btc")
            return;
        }

        const newBtc = btc - btcToSell;
        const newBalance = balance + usd;

        setBtc(newBtc)
        setBalance(newBalance)

        localStorage.setItem("balance", String(newBalance))
        localStorage.setItem("btc", String(newBtc))

        toast.success(`Sold  BTC for $${usd}`)
    }

    return (
        <>
            <div className={'bg-black h-125 relative border border-white/20  rounded-2xl p-5 flex items-start justify-center flex-col w-full'}>
                <div className="space-y-4 mb-4">
                    <h5 className={`
                        text-white text-2xl font-mono 
                    `}>
                        Balance: ${balance.toFixed(2)}
                    </h5>
                    <p className={`
                        text-white text-xs font-mono
                    `}>
                        BTC: ${btc.toFixed(6)}
                    </p>
                    <div className={`
                        text-white text-lg font-mono flex items-center
                    `}>
                        <Bitcoin /> ${price.toLocaleString()}
                    </div>
                </div>


                <div className="absolute left-0 bottom-14 w-full">
                    <div className={`
                        flex 
                        items-center  
                        px-4 py-4
                        rounded-2xl
                        border border-white/20
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
                        focus-within:border-[#2A5ADA]
                        focus-within:shadow-[0_0_0_4px_rgba(42,90,218,0.15)]
                        transition-all duration-200
                    `}>
                        <input
                            value={amount}
                            placeholder="0.00"
                            type="text"
                            inputMode={'decimal'}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^0-9.]/g,"")
                                setAmount(value)
                            }}
                            className={`
                                bg-transparent
                                outline-none
                                border-none 
                                w-full 
                                
                                text-white 
                                text-3xl
                                font-semibold 
                                tracking-tight
                                
                                placeholder:text-zinc-500
                                   
                                [appearance:textfield]
                                [&::-webkit-outer-spin-button]:appearance-none
                                [&::-webkit-inner-spin-button]:appearance-none
                            `}
                        />
                        <span className="text-zinc-400 ml-2 font-bold">usd</span>
                    </div>
                </div>


                <div className={`
                    relative
                    flex w-full p-1 
                    overflow-hidden bg-[#111] rounded-2xl
                `}>
                    <div className={`
                        transition-all duration-300 easy-in-out  
                        absolute w-1/2 top-1 bottom-1 rounded-2xl
                        ${side === "long" ? "translate-x-full bg-green-500 text-white " : "translate-x-0 bg-red-400"}
                    `}  />

                    <button
                        onClick={() => setSide("short")}
                        className={`
                        ${side === "short" ? "text-white " : "text-zinc-400" }
                            active:scale-[0.98]
                            rounded-xl
                            py-4   
                            relative z-10  font-mono font-bold transition-colors duration-300 flex-1 
                            text-white text-lg uppercase tracking-wide 
                        `}
                    >
                        {tradeBtns.short}
                    </button>

                    <button
                        onClick={() => setSide("long")}
                        className={`
                        ${side === "short" ? "text-zinc-500 " : "text-white" }
                            active:scale-[0.98]
                            rounded-xl
                            py-4   
                            relative z-10  font-mono font-bold transition-colors duration-300 flex-1 
                            text-white text-lg uppercase tracking-wide 
                        `}
                    >
                        {tradeBtns.long}
                    </button>

                </div>


                <button
                    className={`
                    absolute left-0 bottom-[-25]
                         w-full rounded-2xl
                          px-4 py-5 text-white 
                          text-lg capitalize
                          bg-black shadow-[inset_40px_40px_70px_0_hsla(0,0%,100%,.15)]
                          hover:bg-[#111]
                          border border-white/15
                          z-50
                          transition-all 
                          duration-300 
                          active:scale-[0.98]
                          font-bold font-mono
                          tracking-widest
                          cursor-pointer
                          
                    `}
                    onClick={side === "long" ? buyBtc : sellBtc}
                >
                    {side === "long" ? "Confirm long" : "Confirm short"}
                </button>

            </div>
        </>
    )
}


