'use client'

import {useEffect , useCallback,useState} from "react";

export default function TradePanel(){
    const [balance , setBalance] = useState<number>(() => {
        if(typeof window !== "undefined") {
            const saved = localStorage.getItem("balance");

            return saved ? Number(saved) : 200;
        }
        return 200;
    })
    const [btc , setBtc] = useState<number>(() => {
        if(typeof window !== "undefined") {
            const saved = localStorage.getItem("btc")

            return saved ? Number(saved) : 0;
        }
        return 0;
    });
    const [price , setPrice] = useState<number>(65000);
    const [amount , setAmount] = useState<string>("");



    const fetchPrices = useCallback(async () => {
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
        const data = await res.json();

        setPrice(Number(data.price))
    },[])

    useEffect(() => {
        fetchPrices();
    },[fetchPrices])

    function buyBtc(){
        const usd = Number(amount)

        if(usd > balance){
            alert("Not enough balance")
            return;
        }

        const btcAmount = usd / price;
        const newBalance = balance - usd;
        const newBtc = btc + btcAmount;
        setBalance(newBalance)
        setBtc(newBtc);

        localStorage.setItem("balance", String(newBalance))
        localStorage.setItem("btc", String(newBtc))
    }

    function sellBtc(){
        const usd = Number(amount)
        const btcToSell = usd / price;

        if(btcToSell > btc){
            alert("Not enough btc")
            return;
        }

        const newBtc = btc - btcToSell;
        const newBalance = balance + usd;

        setBtc(newBtc)
        setBalance(newBalance)

        localStorage.setItem("balance", String(newBalance))
        localStorage.setItem("btc", String(newBtc))
    }

    return (
        <>
            <div className={'bg-black h-[500px] border border-white/20  rounded-2xl p-5 flex items-start justify-center flex-col w-full'}>
                <h2 className={`text-white text-3xl font-mono `}>Kraken.fx </h2>
                <div className="space-y-4 mb-4">
                    <h5 className={`
                        text-white text-xs font-mono 
                    `}>
                        Balance: ${balance.toFixed(2)}
                    </h5>
                    <p className={`
                        text-white text-xs font-mono
                    `}>
                        BTC: ${btc.toFixed(6)}
                    </p>
                    <p className={`
                        text-white text-lg font-mono 
                    `}>
                        BTC Price: ${price.toLocaleString()}
                    </p>
                </div>
                <input
                    type="number"
                    className={`
                    bg-black rounded-md
                     py-4 px-4.5 outline-none w-full
                     border-none 
                     mb-3
                     shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] hover:bg-[#111]`}
                    value={amount}
                    placeholder={"usd amount"}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <div className="flex  items-center  gap-2 w-full">
                    <button onClick={buyBtc}
                        className={`rounded-2xl  py-2 px-4 bg-green-500 hover:bg-green-700 cursor-pointer flex-1 text-white text-lg font-mono capitalize `}
                    >
                        long
                    </button>
                    <button onClick={sellBtc}
                            className={`rounded-2xl py-2 px-4 flex-1  bg-red-700 hover:bg-red-400 cursor-pointer  text-white text-lg font-mono capitalize `}
                    >
                        short
                    </button>
                </div>
            </div>
        </>
    )
}


