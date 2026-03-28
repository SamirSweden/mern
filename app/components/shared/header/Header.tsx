'use client'

import Link from "next/link";
import {HomeIcon, GlobeLock, TextAlignEnd, X, Menu} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState} from "react";



const links = [
    {href: "/", label: "Home", icon: <HomeIcon />},
    {href: "/protocols", label: "Protocols", icon: <GlobeLock /> },
];

const Header = () => {
    const [isOpen , setIsOpen] = useState(false)
    const router = useRouter();

    return (
        <>
            <header className={'header py-5 px-0'}>
                <div className="max-w-307.5 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="header__logo flex items-center gap-12.5">
                            <Link className={'z-50 text-center outline-none border-none text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken</Link>
                            <ul className="header__near flex items-center gap-4 max-[600px]:hidden py-3 px-4 bg-[#171717] rounded-lg shadow-2xl shadow-gray-300">
                                {links.map((link) => {
                                    const icon = link.icon;

                                    return (
                                        <li key={link.href}>
                                            <Link href={link.href} className={'flex items-center gap-2 hover:text-yellow-500'}>
                                                {link.icon}
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={'flex items-center '}>
                            <button onClick={() => router.push('/sign-in')}
                            className={'max-[600px]:hidden bg-white text-black py-[10px] px-[20px] capitalize font-mono  rounded-2xl cursor-pointer hover:bg-yellow-300'}
                            >sign in</button>
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className={'min-[600px]:hidden z-50 text-bold'}>
                            {isOpen ?  <X size={30} /> : <TextAlignEnd size={30} />}
                        </button>

                        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex items-center justify-center flex-col fixed left-0 z-40 backdrop-blur-3xl
                     bg-transparent transition-transform duration-300
                    inset-0`}>
                            <ul className="flex flex-col gap-[7px] bg-transparent shadow-2xl border border-white max-w-[294px] w-full rounded-3xl !p-[20px]">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-white text-xl capitalize "
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="header__apps  flex flex-col gap-[10px] !px-5 items-center justify-center fixed bottom-7 left-0 w-full mx-3 ">
                                <button onClick={() => router.push('/login')} className="login  bg-yellow-400 py-[20px] px-[20px] w-full outline-none border-none  cursor-pointer  w-full rounded-xl text-black capitalize ">
                                    login
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}


export default Header
