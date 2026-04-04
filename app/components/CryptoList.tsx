import { Crypto } from "@/app/types/Crypto";
import {Bitcoin} from "lucide-react";
import Link from "next/link";



export default async function CryptoList({items} : {items: Crypto[]}){
    return (
        <>
            <div className="py-4 px-10 w-full  rounded-4xl   text-white w-[320px]  bg-black ">
                <p className="text-lg mb-4">Popular</p>
                <ul className="space-y-3.5 mb-4">
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
                <div className={'flex items-center gap-3 w-full max-[768px]:flex-col'}>
                    <Link href={'/dashboard'} className={'py-4 w-full text-center hover:bg-gray-400 font-mono capitalize px-5 bg-white text-black rounded-2xl '}>dashboard</Link>
                    <Link href={'/coins'} className={'py-4 w-full text-center hover:bg-gray-400 font-mono capitalize  px-5 bg-white text-black rounded-2xl '}>coins</Link>
                </div>
            </div>
        </>
    )
}





