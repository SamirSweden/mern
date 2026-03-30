'use client'

import {
    ArrowRightLeft,
    DatabaseZap,
    ChartSpline
} from "lucide-react";
import {useRouter} from "next/navigation";


const cards = [
    {
        id:1,
        icon:ArrowRightLeft,
        title: "Low spreads",
        desc: "Lower your average cost per trade.",
    },
    {
        id:2,
        icon:DatabaseZap,
        title: "Lower your average cost per trade.",
        desc: "Easily trade large volumes at stable prices.",
    },
    {
        id:3,
        icon:ChartSpline,
        title: "High rate limits",
        desc: "Trade crypto fast with our robust, low latency API.",
    },
];


const ProCard = () => {
    const router = useRouter()

    return (
        <>
            <div className={'py-6 px-0 bg-[#111]'}>
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <div className="grid grid-cols-3 gap-2 max-[930px]:grid-cols-2 max-[930px]:gap-5 max-[620px]:grid-cols-1">
                        {cards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    className={'flex items-center gap-4 flex-col max-[620px]:bg-black rounded-2xl py-4 px-5'}
                                    key={card.id}
                                >
                                    <Icon className={"w-12 h-12 "} />
                                    <h2 className={'text-center text-white text-3xl mx-0 my-3  text-wrap'}>{card.title}</h2>

                                    <div className={'mt-auto pt-7'}>
                                        <p className={'text-wrap text-lg text-white text-center w-[70%] mx-auto max-[620px]:text-left max-[620px]:text-justify'}>{card.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={'flex items-center justify-center mt-14 max-[425px]:w-full'}>
                        <button
                            onClick={() => router.push("/login")}
                            className={'bg-violet-700 text-white py-3 max-[425px]:w-full px-4 rounded-4xl cursor-pointer hover:bg-violet-500  capitalize shadow-2xl hover:shadow-yellow-400   transition transform duration-300 hover:-translate-y-4 '}
                        >
                            sign up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProCard

