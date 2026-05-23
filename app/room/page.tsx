'use client'

import {useState} from "react";
import {toast} from "sonner";
import Image from "next/image";
import {useRouter} from "next/navigation";

const krakenImgLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/K-logo-wikipedia.svg/1280px-K-logo-wikipedia.svg.png"

export default function Room(){
    const router = useRouter();
    const [code , setCode] = useState("")

    const enterRoom  = () => {
        if(code === "ryan333") {
            toast.success("welcome to kraken chat")
            router.push("/chatru")
        } else {
            toast.error("Please enter valid Code");
        }
    }

    return (
        <>
            <section className={'flex items-center justify-center h-screen'}>
                <div className={'flex items-center flex-col gap-3 w-75'}>
                    <div className={'flex flex-col gap-6 items-center '}>
                        <Image src={krakenImgLogo} alt="kraken"  width={150} height={150} />
                        <h2 className={'font-bold font-mono text-gray-300 text-4xl mb-4 tracking-widest'}>Авторизация</h2>
                    </div>
                    <input
                        className={'border border-gray-500 rounded-2xl py-3 px-5 w-full'}
                        placeholder={'Enter room code...'}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <button
                        onClick={enterRoom}
                        className={`w-full
                            py-4 px-5 rounded-3xl bg-white text-black hover:bg-white/40
                            cursor-pointer font-bold font-mono capitalize tracking-wide
                        `}
                    >
                        enter
                    </button>
                </div>
            </section>
        </>
    )
}









