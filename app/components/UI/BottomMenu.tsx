'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import {
    Home,
    AlignHorizontalDistributeCenter,
    Coins,
    GlobeLock}
    from "lucide-react";

const links = [
    {
        href:'/',
        icon:Home
    },
    {
        href:'/chart',
        icon:AlignHorizontalDistributeCenter,
    },
    {
        href:'/coins',
        icon:Coins
    },
    {
        href:'/protocols',
        icon:GlobeLock
    }
];


const BottomMenu = () => {
    const pathname = usePathname()

    return (
        <>
        <div className="max-w-307.5 mx-auto md:px-6 px-4 w-full h-full">
            <footer className={'global__menu global__footer fixed left-[25%] bottom-0  w-[50%] max-[750]:w-[90%] max-[750px]:left-[5%]   py-4 px-4 max-[750px]:py-3 bg-transparent backdrop-blur-lg '}>

                    <ul className={'flex items-center gap-4 justify-center '}>
                        {links.map((link) => {
                            const IconMenu = link.icon;
                            const isActive = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`cursor-pointer text-white 
                                        ${
                                            isActive ? "py-2 px-1 bg-gray-300 rounded-full" : ""
                                        }`}
                                    >
                                        <IconMenu size={32} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            </footer>
        </div>

            <style jsx>
                {`
                    .global__footer{
                        border-radius: 100px  100px 0 0;
                    }
                    @media (max-width: 750px) {
                        .global__menu{
                            border-radius: 30px 30px 0 0;
                        }
                    }
                `}
            </style>
        </>
    )
}


export default BottomMenu




