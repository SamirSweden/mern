'use client'

import Link from "next/link";
import {HomeIcon, GlobeLock, TextAlignEnd, X,ChartNoAxesCombined} from "lucide-react";
import {useRouter , usePathname} from "next/navigation";
import {useState , useEffect} from "react";



const links = [
    {href: "/", label: "Home", icon: <HomeIcon />},
    {href: "/protocols", label: "Protocols", icon: <GlobeLock /> },
    {href: "/chart", label: "Chart", icon: <ChartNoAxesCombined /> },
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
                    ? "bg-linear-to-br shadow-[inset_10px_10px_20px_0_rgba(20,20,20,0.2)] from-[#2d3036] via-black to-[#2b2b2b]  "
                    : ""
            }`}>
                <div className="max-w-307.5 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="header__logo flex items-center gap-12.5">
                            <Link className={' drop-shadow-[0_0_10px_rgba(255,150,100,0.5)] z-50 text-center outline-none border-none text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken</Link>
                            <ul className="header__near flex items-center backdrop-blur-3xl gap-4 max-[600px]:hidden py-3 px-4  rounded-3xl shadow-[inset_4px_4px_60px_0_hsla(0,0%,100%,.15)] ">
                                {links.map((link) => {
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
                        </div>
                        <div className={'flex items-center '}>
                            <button onClick={() => router.push('/sign-in')}
                            className={'max-[600px]:hidden bg-white text-black py-2.5 px-5 capitalize font-mono  rounded-2xl cursor-pointer hover:bg-yellow-300'}
                            >sign in</button>
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className={'min-[600px]:hidden z-50 text-bold'}>
                            {isOpen ?  <X size={30} /> : <TextAlignEnd size={30} />}
                        </button>

                        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex items-center justify-center flex-col fixed left-0 z-40 backdrop-blur-3xl shadow-[inset_20px_10px_20px_0_hsla(0,0%,100%,.15)] transition-transform duration-300
                    inset-0`}>
                            <ul className="flex flex-col gap-1.75 shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)]   max-w-73.5 w-full rounded-3xl p-5">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="bg-clip-text text-transparent bg-gradient-to-br from-pink-400 via-orange-400 to-cyan-300 text-2xl capitalize "
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="header__apps  flex flex-col gap-[10px] !px-5 items-center justify-center fixed bottom-7 left-0 w-full  ">
                                <button onClick={() => router.push('/sign-in')} className="login__btn capitalize py-4 px-7 rounded-md shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] w-full ">
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
