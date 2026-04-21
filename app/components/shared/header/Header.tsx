'use client'

import Link from "next/link";
import {HomeIcon, GlobeLock, TextAlignEnd, X, ChartNoAxesCombined, Code, Bot, Box} from "lucide-react";
import {useRouter , usePathname} from "next/navigation";
import {useState , useEffect} from "react";
import Image from "next/image";
import LoginButton from "@/app/components/UI/LoginButton";

const krakenLogo = "https://companieslogo.com/img/orig/kraken_BIG.D-7509e204.png?t=1720244494"

const links = [
    {
        href: "/", 
        label: "Home",
        icon: <HomeIcon />
    },
    {
        href: "/protocols", 
        label: "Protocols", 
        icon: <GlobeLock /> 
    },
    {
        href: "/chart", 
        label: "Chart", 
        icon: <ChartNoAxesCombined />
    },
];

const Header = () => {
    const [isOpen , setIsOpen] = useState(false)
    const router = useRouter();
    const pathname = usePathname()
    const [scrolled , setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
           setScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll" , handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`header py-5 px-0 sticky top-0 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-linear-to-br shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] from-[#474404] via-[#111] to-black  "
                    : ""
            }`}>
                <div className="max-w-307.5 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="header__logo flex items-center gap-12.5">
                            <Link className={' drop-shadow-[0_0_10px_rgba(255,150,100,0.5)] z-50 text-center outline-none border-none text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>
                                <Image src={krakenLogo} width={150} height={150} alt={'Kraken'} />
                            </Link>
                            
                        </div>
                        <ul className="header__near flex items-center backdrop-blur-3xl gap-4 max-[600px]:hidden py-3 px-4 bg-black  rounded-3xl shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] ">
                                {links.map((link) => {
                                    if(!link?.href) return null;
                                    const icon = link.icon;
                                    const isActive = pathname === link.href;

                                    return (
                                        <li key={link.href}>
                                            <Link href={link.href} className={`flex items-center gap-2 hover:text-yellow-500 ${isActive ? "py-1 px-3  shadow-[inset_4px_4px_100px_0_hsla(0,0%,100%,.15)] rounded-full" : ""}`}>
                                                {link.icon}
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        <div className={'flex items-center '}>
                            <button onClick={() => router.push('/dashboard')}
                            className={'max-[710px]:hidden bg-white hover:bg-[#171212] hover:text-white text-black py-4 px-8 rounded-full capitalize cursor-pointer'}
                            >dashboard</button>

                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className={'min-[600px]:hidden z-50 text-bold'}>
                            {isOpen ?  <X size={30} /> : <TextAlignEnd size={30} />}
                        </button>

                        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex items-center justify-center flex-col fixed left-0 z-40 backdrop-blur-3xl bg-linear-to-br from-[#111] via-[#0e2926] to-black   transition-transform duration-300
                    inset-0`}>
                            <ul className="flex flex-col gap-1.75 shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)]   max-w-73.5 w-full rounded-3xl p-5">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="bg-clip-text text-transparent bg-linear-to-br from-pink-400 via-orange-400 to-cyan-300 text-2xl capitalize "
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="header__apps  flex flex-col gap-[10px] !px-5 items-center justify-center fixed bottom-7 left-0 w-full  ">
                                <LoginButton />
                                <button onClick={() => router.push('/chat')} className="chat__btn flex justify-center items-center text-center text-black gap-4 capitalize py-4 px-7 rounded-md bg-white w-full ">
                                    Kraken GPT <Bot size={30} />
                                </button>
                                <button onClick={() => router.push('/dashboard')} className="dashboard__btn capitalize py-4 px-7 rounded-md shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] w-full ">
                                    dashboard
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
