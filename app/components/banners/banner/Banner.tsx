import CryptoList from "@/app/components/CryptoList";
import {getCryptoMarkets} from "@/app/lib/api/crypto";
import Link from "next/link";


const bannerContent = {
    title: "Beyond crypto. Trade global assets with USDT.",
    btnText: "Polygon soon",
}


export default  async function Banner(){
    const crypto = await getCryptoMarkets()

    return (
        <section className="invest__banner min-h-screen py-16 md:py-24">
            <div className="max-w-307.5 mx-auto md:px-6 px-4 w-full h-full">
                <div className="grid grid-cols-2 gap-6  max-[768px]:grid-cols-1 ">
                    <div className={'flex items-center gap-4 flex-col'}>
                        <h2 className={'text-5xl max-[768px]:text-3xl font-black max-w-137.5 leading-16'}>{bannerContent.title}</h2>
                        <Link href={'/polygon'} className={'rounded-3xl shadow-2xl hover:shadow-white shadow-cyan-400 mt-10 bg-linear-to-br from-[#b21fcc] via-[#222426] to-[#b21fcc] w-full text-white text-center py-5 px-10'}>{bannerContent.btnText}</Link>
                    </div>
                    <CryptoList items={crypto} />
                </div>
            </div>
        </section>
    )
}
