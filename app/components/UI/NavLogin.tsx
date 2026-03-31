import Link from "next/link";
import {Home,Rocket} from "lucide-react";


export  default function NavLogin() {
    return (
        <>
            <div className="px-0 pt-12">
                <div className="max-w-140 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-between py-4 px-6  rounded-full shadow-[inset_4px_4px_40px_0_hsla(0,0%,100%,.15)]">
                        <div className="flex items-center gap-1">
                            <Rocket />
                            <Link className={' drop-shadow-[0_0_10px_rgba(255,150,100,0.5)] z-50 text-center outline-none border-none text-3xl  font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken.su</Link>
                        </div>
                        <Link className={'outline-none border-none cursor-pointer'} href={'/'}>
                            <Home size={40}  />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}









