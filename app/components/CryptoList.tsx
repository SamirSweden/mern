import { Crypto } from "@/app/types/Crypto";
import Link from "next/link";
import Image from "next/image"


export default async function CryptoList({items} : {items: Crypto[]}){
    return (
        <>
            <div className="py-4 px-10 w-full  rounded-4xl   text-white   bg-black shadow-[inset_100px_40px_50px_0_hsla(0,0%,100%,.15)]  ">
                <p className="text-lg text-center mb-4">&mdash;Popular Coins&mdash;</p>
                <ul className="space-y-3.5 mb-4">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between">
                            
                            <div className="flex items-center gap-3 py-3 px-3 bg-[#111] rounded-4xl w-full max-w-[150px]">
                                <Image src={item.image} alt={item.name} width={400} height={400} className="w-6 h-6" />
                                <span className="truncate">{item.symbol}</span>
                            </div>

                            <div className="text-right  py-3 px-3 bg-[#111]  rounded-4xl w-full max-w-[100px]">
                                <p>${item.price.toLocaleString()}</p>
                                <span  className={
                                    item.change > 0 ? "text-green-500 " : "text-red-500 "
                                }>
                                    {item.change?.toFixed(2)}%
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={'flex items-center gap-3 w-full max-[768px]:flex-col'}>
                    <Link href={'/dashboard'} className={'py-4 w-full text-center hover:bg-gray-400 font-mono capitalize px-5 bg-white text-black rounded-2xl '}>dashboard</Link>
                    <Link href={'/coins'} className={'py-4 w-full text-center hover:bg-gray-200 font-mono capitalize  px-5 bg-white/50  text-black rounded-2xl '}>coins</Link>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-center text-gray-500 mt-3">explore 800 stocks with Ryan</span>
                </div>



            </div>
        </>
    )
}





//   дониербековна 

//   





