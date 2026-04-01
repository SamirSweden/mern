'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";

const krakenImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/d0f1f312fb60e79892d6c61b3bce79b41c2c9986-1024x1024.svg";
const proVersion = "https://assets-cms.kraken.com/images/51n36hrp/facade/00d9685fa4627cc0abd8a2957e8efcfdffbbc2dc-1024x1024.svg";
const krakImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/ae0f5614beee281a183f6e0d76be380c04e14a70-1024x1024.svg"
const desktopVersion = "https://assets-cms.kraken.com/images/51n36hrp/facade/c8a90889d470969a2f7864a0bfa1814c28b21310-1024x1024.svg";

const data = [
    {
        id:1,
        img: krakenImg,
        textSpan: "Pro"
    },
    {
        id:2,
        img: proVersion,
        textSpan: "Kraken"
    },
    {
        id:3,
        img: krakImg,
        textSpan: "Krak"
    },
    {
        id:4,
        img: desktopVersion,
        textSpan: "Desktop"
    },
];

const footerContent = {
    title: "Take your crypto trading to the next level."
}


export default  function Footer (){
    const router = useRouter();

    const redirectButton =  () => {
        router.push("/sign-in");
    }

    return (
        <>
            <section className={'footer global__footer bg-black py-10 px-0'}>
                <div className="max-w-307.5 md:px-6 px-4 mx-auto w-full h-full">
                    <div className="grid grid-cols-1">
                        <h2 className={'max-w-[500px] max-[400px]:text-2xl text-4xl text-white font-black mb-10'}>{footerContent.title}</h2>
                        <div className={'flex  items-center gap-5'}>
                            {data.map((d) => (
                                <div key={d.id} className={'flex flex-col items-center gap-3'}>
                                    <Image src={d.img} width={50} height={60} alt={'img'} />
                                    <span className={'hover:underline cursor-pointer text-gray-500 text-sm'}>{d.textSpan}</span>
                                </div>
                            ))}
                        </div>
                        <div className={'flex items-center gap-3  mt-4 max-[425px]:w-full'}>
                            <button
                                onClick={redirectButton}
                                className={'text-white max-[425px]:w-full shadow-2xl max-[425px]:shadow-gray-500 text-lg capitalize cursor-pointer transform transition duration-300  hover:shadow-gray-400 hover:-translate-y-2 py-4 px-5 rounded-2xl bg-linear-to-br from-[#111] bg-[#171717]'}>sign in</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

