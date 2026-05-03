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
    {
        icon:GlobeLock,
        href:"/aaa",
    },
];


const CoinFooter = () => {
    const router = useRouter()

    return (
        <>
            <div className="coin__footer fixed   bottom-[-20px] z-[999] left-0 w-full flex items-center justify-center  bg-transparent  px-0">
                <ul className={'flex w-[180px] max-[425px]:w-[90%]  backdrop-blur-3xl items-center  justify-center shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-3 rounded-full'}>
                    {links.map((link) => {
                        const IconComponent = link.icon;

                        return (
                            <li key={link.href} className={'mr-3'}>
                                <button className={'cursor-pointer'}
                                    onClick={() => router.push(link.href)}
                                >
                                    <IconComponent size={40} />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <style jsx>
                {`
                    .coin__footer{
                        border-radius: 100px 100px 0 0;
                    }
                `}
            </style>
        </>
    )
}

export default CoinFooter


