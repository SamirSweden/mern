'use client'

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {Equal , X} from "lucide-react";
const logoDeveloper = "https://companieslogo.com/img/orig/kraken.D-ac5a9f2c.png?t=1720244494"


const links = [
    {
        path:'/docs',
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
            <header className={'bg-transparent py-3 px-5 sticky left-0 top-0 w-full backdrop-blur-lg shadow-lg'}>
                <div className="container">
                    <div className="flex items-center justify-between ">
                        <Link href={'/docs'} className={'flex items-center gap-4 cursor-pointer max-[465px]:gap-1'}>
                            <Image src={logoDeveloper} width={50} height={50} alt={'kraken developers'} className={'max-[465px]:w-[30px] '} />
                            <span className={'text-white  animate-pulse text-3xl uppercase max-[465px]:text-xl'}>developer</span>
                        </Link>


                        <button
                            onClick={() => setOpen(!open)}
                            className={'text-white text-3xl md:hidden'}
                        >
                            <Equal size={30} />
                        </button>

                        <ul className={'hidden md:flex gap-6 text-white'}>
                            {links.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <li key={link.path}>
                                        <Link className={`${isActive 
                                            ? "text-gray-400 cursor-pointer bg- rounded-xl py-1 px-3  shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)]" 
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

            <div className={`fixed top-0 right-0 w-[280px] z-50 h-full w-full transform backdrop-blur-3xl shadow-[inset_4px_4px_100px_0_hsla(0,0%,100%,.15)]  transition-transform duration-300 
                ${open ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className={'p-5 flex justify-between items-center '}>
                    <Link href={'/docs'} className={'flex items-center gap-4 cursor-pointer max-[465px]:gap-1'}>
                        <Image src={logoDeveloper} width={50} height={50} alt={'kraken developers'} className={'max-[465px]:w-[30px] '} />
                        <span className={'text-white  animate-pulse text-3xl uppercase max-[465px]:text-xl'}>developer</span>
                    </Link>
                    <button onClick={() => setOpen(false)}><X size={30} /></button>
                </div>
                <nav className={'flex items-center-safe gap-5 flex-col mt-12'}>
                    {links.map((l) => (
                        <li key={l.path}>
                            <Link href={l.path}
                                  className={'text-gray-300 cursor-pointer  rounded-2xl'}
                            >{l.label}
                            </Link>
                        </li>
                    ))}
                </nav>
            </div>

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



