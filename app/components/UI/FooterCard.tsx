'use client'

import {Home,Coins} from "lucide-react";
import { useRouter } from "next/navigation";

const cards = [
    {
        id:1,
        icon:Home,
        title: "back to home",
        path: "/"
    },
    {
        id:2,
        icon:Coins,
        title: "explore kraken coins",
        path: "/coins"
    }
];

export default function FooterCard(){
    const router = useRouter()

    return (
        <>
         <div className={'py-12 px-0 bg-transparent'}>
             <div className="max-w-307.5 md:px-6 mx-auto px-4 w-full f-ull">
                 <div className="grid grid-cols-2  gap-4 ">
                     {cards.map((card) => {
                         const Icon = card.icon;
                         return (
                             <button
                                    onClick={() => router.push(card.path)}
                                    key={card.id}
                                    className={'transition  duration-300  hover:border-cyan-500 rounded-md bg-black border border-gray-600 py-5 px-6 max-[562px]:py-2'}>
                                <div className={'flex items-center gap-3 max-[562px]:justify-center max-[562px]:flex-col'}>
                                    <Icon size={40} className={'text-white'} />
                                    <h3 className={'text-white text-bold capitalize max-[562px]:text-xs max-[562px]:font-extralight'}>{card.title}</h3>
                                </div>
                             </button>
                         )
                     })}
                 </div>
                 <div className="flex items-center justify-center">
                     <span className={'text-gray-700 text-sm text-center mt-10'}>Kraken &mdash; Ryan</span>
                 </div>
             </div>
         </div>
        </>
    )
}

