import { Crypto } from "@/app/types/Crypto";



export default async function CryptoList({items} : {items: Crypto[]}){
    return (
        <>
            <div className="py-5 px-10  rounded-2xl shadow-[inset_4px_4px_60px_0_hsla(0,0%,100%,.15)]   text-white w-[320px]">
                <p className="text-lg mb-4">Popular</p>

                <ul className="space-y-3.5">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="w-6 h-6" />
                                <span>{item.symbol}</span>
                            </div>

                            <div className="text-right">
                                <p>${item.price.toLocaleString()}</p>
                                <span className={
                                    item.change > 0 ? "text-green-500" : "text-red-500"
                                }>
                                    {item.change?.toFixed(2)}%
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}





