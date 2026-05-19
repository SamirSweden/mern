'use client'

import {useEffect , useState} from "react";



export default function TradePanel(){
    const [balance , setBalance] = useState(200);
    const [btc , setBtc] = useState(0);
    const [price , setPrice] = useState(65000);
    const [amount , setAmount] = useState("");


    useEffect(() => {
        const savedBalance = localStorage.getItem("balance");
        const savedBtc = localStorage.getItem("btc")

        if(savedBalance)
             setBalance(Number(savedBalance))

        if(savedBtc)
            setBtc(Number(savedBtc))

    },[])

    async function fetchPrices(){
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        const data = await res.json()
        setPrice(Number(data.price))
    }

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

        localStorage.setItem("balance", String(newBtc))
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
            <div className={'bg-black rounded-lg p-5'}>
                <h2 className={`text-white text-3xl font-mono `}>Kraken.fx </h2>
                <div className="space-y-4 mb-4">
                    <p className={`
                        text-white text-xs font-mono 
                    `}>
                        Balance: ${balance.toFixed(2)}
                    </p>
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
                    className={``}
                    value={amount}
                    placeholder={"usd amount"}
                    onChange={(e) => (e.target.value)}
                />

                <div className="flex  items-center  gap-2">
                    <button onClick={buyBtc}
                        className={`rounded-2xl bg-green-500 text-white text-lg font-bold capitalize `}
                    >
                        buy btc
                    </button>
                    <button onClick={sellBtc}
                            className={`rounded-2xl bg-red-700 text-white font-bold text-lg capitalize `}
                    >
                        sell btc
                    </button>
                </div>
            </div>
        </>
    )
}


