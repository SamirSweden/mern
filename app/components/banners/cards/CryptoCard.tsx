import {Coin} from "@/app/types/Coin";


interface Props  {
    coin:Coin
}


export default  function CryptoCard({coin}: Props){
    const isPositive = coin.change >=0;

    return (
        <>
            <div className="relative flex items-center gap-3 shadow-[inset_4px_4px_40px_0_hsla(0,0%,100%,.15)] rounded-xl px-4 py-3 hover:bg-[#1a1a25] transition">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                        {coin.name}
                        <span className="text-gray-400 text-xs ml-2">{coin.symbol}</span>
                    </span>
                    <span className="text-sm text-gray-300">
                        ${coin.price.toLocaleString()}
                    </span>
                </div>

                <div className="ml-auto text-sm font-medium absolute top-[-10px] right-0 ">
                    <span className={isPositive ? "text-green-400" : "text-red-400"}>
                      {isPositive ? "+" : ""}
                        {coin.change}%
                    </span>
                </div>
            </div>
        </>
    )
}

