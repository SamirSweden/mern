'use client'

import Image from "next/image"
import {motion} from "framer-motion";
import {useState} from "react";
import {convertServerPatchToFullTree} from "next/dist/client/components/segment-cache/navigation";
import {bisectCenter} from "d3-array";
import {BanknoteArrowDown} from "lucide-react";
import {toast} from "sonner";

// import hamsterImg from "@/app/assets/hamster.png"

const cryptoImg = "https://staticprintenglish.theprint.in/wp-content/uploads/2025/07/Screenshot2025-07-04195740-1024x576.png"

const content = {
    coins: "Coins",
    tap: "tap",
    withDraw: "withDraw money",
}



const Hamster = () => {
    const [coins , setCoins] = useState(0)

    const hanldeGame = () => {
        setCoins(prev => prev + 1)
    }

    const handleWithdraw = () => {
        if(coins <= 0) {
            toast.error("No money to withdraw");
            return;
        }

        const amount = coins;
        setCoins(0)

        toast.success(`Withdraw ${amount}$`, {
            description:"transaction successfully",
        })
    }

    return (
        <>
            <section className={`
            relative
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
                    {coins}
                    <span className={'font-extrabold text-yellow-500'}>$</span>
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
                        src={cryptoImg}
                        width={700}
                        height={1400}
                        alt={'Crypto Hamster'}
                        className={'object-cover rounded-full'}
                        priority

                    />
                </motion.button>
                {coins >= 10 &&(
                    <div className={'flex items-center max-[480px]:w-full max-[480px]:mt-4'}>
                        <motion.button
                            onClick={handleWithdraw}
                            whileTap={{scale: 2.3}}
                            className={`
                            fixed  bottom-4 
                            
                            left-1/2 -translate-x-1/2
                            
                            max-[480px]:w-full
                            bg-yellow-500 hover:bg-yellow-300
                            text-black text-center text-lg 
                            font-bold font-mono capitalize
                            py-3 px-5 
                            rounded-xl 
                            cursor-pointer outline-none border-none 
                            flex items-center  justify-center gap-4
                        `}
                        >
                            {content.withDraw}
                            <span>
                                <BanknoteArrowDown />
                            </span>
                        </motion.button>
                    </div>
                )}
            </section>
        </>
    )
}


export default Hamster
