import Link from "next/link";
import {HomeIcon,GlobeLock} from "lucide-react";



const links = [
    {href: "/", label: "Home", icon: <HomeIcon />},
    {href: "/protocols", label: "Protocols", icon: <GlobeLock /> },
];

const Header = () => {
    return (
        <>
            <header className={'header py-[20px] px-0'}>
                <div className="max-w-[1230px] px-[15px] mx-auto w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="header__logo flex items-center gap-[50px]">
                            <Link className={' text-center text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken</Link>
                            <ul className="header__near flex items-center gap-4">
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
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header
