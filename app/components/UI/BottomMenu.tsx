'use client'

import Link from "next/link";
import {Home,AlignHorizontalDistributeCenter,Coins} from "lucide-react";

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
    }
];


const BottomMenu = () => {
    return (
        <>
        <div className="max-w-307.5 mx-auto md:px-6 px-4 w-full h-full">
            <footer className={'global__menu global__footer fixed left-[25%] bottom-0  w-[50%] max-[750]:w-[90%] max-[750px]:left-[5%]   py-10 px-4 max-[750px]:py-3 bg-black shadow-[inset_20px_40px_40px_0_hsla(0,0%,100%,.15)] '}>

                    <ul className={'flex items-center gap-4 justify-center'}>
                        {links.map((link) => {
                            const IconMenu = link.icon;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={'cursor-pointer text-white'}
                                    >
                                        <IconMenu size={30} />
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




