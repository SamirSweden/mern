'use client'

import Image from "next/image"
import {motion} from "framer-motion";
import {useState} from "react";

import hamsterImg from "@/app/assets/hamster.png"

const content = {
    coins: "Coins",
    tap: "tap"
}

const Hamster = () => {
    const [coins , setCoins] = useState(0)

    const hanldeGame = () => {
        setCoins(prev => prev + 1)
    }

    return (
        <>
            <section className={`
                flex items-center justify-center 
                text-white min-h-screen
                bg-black flex-col select-none
            `}>
                <h2 className={'' +
                    'mb-8 ' +
                    'text-white text-2xl ' +
                    'font-bold font-mono capitalize' +
                    ''}
                >
                    {coins}$
                    <span className={'ml-3 text-gray-400'}>{content.coins}</span>
                </h2>

                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={hanldeGame}
                    className={`
                        cursor-pointer
                        outline-none
                        border-none
                    `}
                >
                    <Image
                        src={hamsterImg}
                        width={500}
                        height={500}
                        alt={'Crypto Hamster'}
                        className={'mix-blend-multiply bg-transparent'}
                        priority
                    />
                </motion.button>
            </section>
        </>
    )
}


export default Hamster
