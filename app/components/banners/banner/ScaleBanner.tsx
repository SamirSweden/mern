'use client'

import Image from "next/image"
import ScaleCard from "@/app/components/banners/cards/ScaleCard";
import {useRouter} from "next/navigation";

const bannerImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/44f8f2be8b7e25f046e970ce56ae66399f3e67c6-2022x760.png?w=1536&fit=min"

const scaleContent = {
    heading: "Why protocols choose Kraken 360",
    btnTextStart: "get started"
}

const ScaleBanner = () => {
    const router = useRouter()

    return (
        <>
            <section className={'py-14'}>
                <div className="max-w-307.5 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-center flex-col">
                        <Image src={bannerImg} width={500} height={500} alt={''} className={'w-full'} />
                        <div>
                            <h2 className={'text-white mt-5 mb-10 text-3xl md:text-3xl sm:text-lg text-wrap font-extrabold'}>{scaleContent.heading}</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-[970px]:grid-cols-2 max-[530px]:grid-cols-1">
                        <ScaleCard />
                    </div>
                    <div className={'flex items-center justify-center mt-14 max-[530px]:w-full'}>
                        <button onClick={() => router.push('/sign-in')}
                                className={'max-[530px]:w-full max-[530px]:rounded-md text-black text-xl bg-white transition transform duration-300 hover:-translate-y-3 shadow-xl shadow-yellow-600 hover:shadow-cyan-300 hover:bg-[#b8bbbf]  py-4 px-10  rounded-full cursor-pointer capitalize font-extralight'}
                        >
                            {scaleContent.btnTextStart}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ScaleBanner
