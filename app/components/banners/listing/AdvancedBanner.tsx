'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";
const krakenSvg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6lQFxhlUoiSvWuCkCjb16qj8jdONhW3GqA&s"
const krakenBanner = "https://assets-cms.kraken.com/images/51n36hrp/facade/3aee4c8857bd8129e1b57147e62acec637304156-1232x694.png?w=1536&fit=min"

const content = {
    title: "Advanced tools",
    desc: "Access margin, futures trading and advanced tools.",
    btnText: "Get Pro",
}

const AdvancedBanner = () => {
    const router = useRouter()

    return (
        <>
            <section className={'bg-white rounded-2xl banner__crypto max-[690px]:rounded-[30px] py-10 relative'}>
                <div className="max-w-7xl mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center gap-3 flex-col backdrop-blur-xs rounded-2xl">
                        <Image src={krakenSvg} width={50} height={50} alt={"kraken"} />
                        <h2 className={'text-white text-3xl font-bold'}>{content.title}</h2>
                        <p className={'text-gray-300 font-medium'}>{content.desc}</p>
                        <div className="flex items-center max-[525px]:w-full">
                            <button
                                className={'bg-white text-violet-700 rounded-2xl py-3 px-6 mb-25  max-[525px]:w-full'}
                                onClick={() => router.push("/dashboard")} >
                                {content.btnText}
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{`
                .banner__crypto {
                    background-image: url('${krakenBanner}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            `}</style>
        </>
    )
}


export default AdvancedBanner;




