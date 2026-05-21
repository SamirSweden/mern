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


export default function TradePanel({balance, setBalance , btc , setBtc , price , setPrice , avgPrice , setAvgPrice}: Props){

    const [amount , setAmount] = useState<string>("")

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
            <div className={'bg-black h-[500px] relative border border-white/20  rounded-2xl p-5 flex items-start justify-center flex-col w-full'}>
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


                <div className="">
                    <div className="">
                        <input
                            value={amount}
                            placeholder="0.00"
                            type="text"
                            inputMode={'decimal'}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^0-9.]/g,"")
                                setAmount(value)
                            }}
                        />
                    </div>
                </div>



                <div className="flex  items-center  gap-2 w-full  bg-transparent   ">
                    <button onClick={buyBtc}
                        className={`
                        absolute bottom-[-23] right-2 w-[47%]
                        rounded-4xl  py-4 px-3 bg-green-500 hover:bg-green-700 cursor-pointer flex-1 text-white text-lg font-mono capitalize `}
                    >
                        long
                    </button>
                    <button onClick={sellBtc}
                            className={`
                            absolute bottom-[-23] left-2 w-[47%]
                            rounded-4xl py-4 px-3 flex-1  bg-red-700 hover:bg-red-400 cursor-pointer  text-white text-lg font-mono capitalize `}
                    >
                        short
                    </button>
                </div>
            </div>
        </>
    )
}


