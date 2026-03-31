'use client'

import {GlobeLock, Home} from "lucide-react";
import { useRouter } from "next/navigation";

const links = [
    {
        icon:Home,
        href:"/",
    },
    {
        icon:GlobeLock,
        href:"/protocols",
    },
];


const CoinFooter = () => {
    const router = useRouter()

    return (
        <>
            <div className="flex items-center justify-center bg-black py-10 px-0">
                <ul className={'flex w-[180px] items-center justify-center shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-3 rounded-full'}>
                    {links.map((link) => {
                        const IconComponent = link.icon;

                        return (
                            <li key={link.href} className={'mr-3'}>
                                <button className={'cursor-pointer'}>
                                    <IconComponent size={40} />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default CoinFooter


