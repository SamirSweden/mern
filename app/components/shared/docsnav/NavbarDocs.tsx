'use client'

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {Equal} from "lucide-react";
const logoDeveloper = "https://companieslogo.com/img/orig/kraken.D-ac5a9f2c.png?t=1720244494"


const links = [
    {
        path:'/start',
        label: "Next.js старт"
    },
    {
        path:'/oauth',
        label: "oauth"
    },
    {
        path:'/examples',
        label: "examples"
    },
];

export default function  NavbarDocs () {
    const pathname = usePathname()
    const [open , setOpen] = useState(false)

    return (
        <>
            <header className={'bg-transparent py-3 px-5 '}>
                <div className="container">
                    <div className="flex items-center justify-between ">
                        <Link href={'/docs'} className={'flex items-center gap-4 cursor-pointer max-[465px]:gap-1'}>
                            <Image src={logoDeveloper} width={50} height={50} alt={'kraken developers'} className={'max-[465px]:w-[30px] '} />
                            <span className={'text-white animate-pulse text-3xl uppercase max-[465px]:text-xl'}>developer</span>
                        </Link>


                        <button
                            onClick={() => setOpen(!open)}
                            className={'text-white text-3xl md:hidden'}
                        >
                            <Equal />
                        </button>

                        <ul className={'hidden md:flex gap-6 text-white'}>
                            {links.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <li key={link.path}>
                                        <Link className={`${isActive 
                                            ? "text-gray-300 cursor-pointer bg-[#171717] rounded-2xl py-1 px-3 " 
                                            : ""}`} href={link.path}>
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </header>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className={'fixed inset-0 bg-black/50 z-40'}
                />
            )}

            <style jsx>
                {`
                    .container {
                        max-width:1230px;
                        margin: 0 auto;
                        padding:0 10px;
                        width:100%;
                        height:100%;
                    }
                `}
            </style>
        </>
    )
}



