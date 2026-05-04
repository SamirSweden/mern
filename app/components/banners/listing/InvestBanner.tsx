'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";
const krakenSvg = "https://image.coinpedia.org/app_uploads/profile/1664616336940nqicsboh6j.png"
const krakenBanner = "https://assets-cms.kraken.com/images/51n36hrp/facade/5485b887a16ae07b78ec0510838df8b548a04250-1232x692.png?w=1536&fit=min"

const content = {
    title: "Invest easily",
    desc: "Easily buy, sell and trade crypto on the spot.",
    btnText: "Get Kraken",
}

const InvestBanner = () => {
    const router = useRouter()

    return (
        <>
            <section className={'bg-violet-700 rounded-2xl  max-[690px]:rounded-[30px] py-10 relative'}>
                <div className="max-w-7xl mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center gap-3 flex-col">
                        <Image src={krakenSvg} width={50} height={50} alt={"kraken"} />
                        <h2 className={'text-white text-3xl font-bold'}>{content.title}</h2>
                        <p className={'text-gray-200 font-medium'}>{content.desc}</p>
                        <div className="flex items-center max-[525px]:w-full">
                            <button
                                    className={'bg-white hover:bg-white/45 text-violet-700 rounded-2xl py-3 px-6 mb-25  max-[525px]:w-full'}
                                    onClick={() => router.push("/dashboard")} >
                                {content.btnText}
                            </button>
                            <div className={'absolute bottom-0 left-0 w-full'}>
                                <Image src={krakenBanner} width={250} height={200} alt={"kraken"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default InvestBanner;




