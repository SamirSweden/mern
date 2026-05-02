import { useState } from "react";
import Link from "next/link";
import {LucideX, TextAlignEnd} from "lucide-react";

const NavbarChat = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={'flex items-center justify-between p-4 bg-black shadow-md relative '}>
                <Link href={'/'} className={'text-white text-3xl font-bold animate-bounce'}>Kraken.su</Link>
                <button
                    onClick={() => setOpen(true)}
                >
                    <TextAlignEnd />
                </button>
            </header>
            
            <div className={`fixed inset-0 z-40 transition-all duration-300 ${
                open ? "visible opacity-100" : "invisible opacity-0"
            }`}>
                <div onClick={() => setOpen(false)}
                     className={'backdrop-blur-sm absolute inset-0 bg-black/30'}
                />

                <div className={`absolute  top-0 right-0 h-full  w-72 max-[425]:w-62 bg-black shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}
                `}>
                    <div className="p-4 flex justify-between items-center border-b border-gray-600 ">
                        <button onClick={() => setOpen(false)}>
                            <LucideX size={30} />
                        </button>
                    </div>

                    <nav className="p-4 flex flex-col gap-3">
                        <Link href="/" className={'text-white text-lg font-bold capitalize'}>Home</Link>
                        <Link href="/coins" className={'text-white text-lg font-bold capitalize' }>coins</Link>
                        <Link href="/chart" className={'text-white text-lg font-bold capitalize'}>chart</Link>
                        <Link href="/protocols" className={'text-white text-lg font-bold capitalize'}>protocols</Link>
                        <Link href="/docs" className={'text-white text-lg font-bold capitalize' }>docs</Link>
                    </nav>
                </div>

            </div>
        </>
    );
};

export default NavbarChat;
