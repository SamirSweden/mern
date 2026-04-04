import CryptoList from "@/app/components/CryptoList";
import {getCryptoMarkets} from "@/app/lib/api/crypto";


const bannerContent = {
    title: "Beyond crypto. Trade global assets with USDT."
}




export default  async function Banner(){
    const crypto = await getCryptoMarkets()

    return (
        <section className="invest__banner min-h-screen py-16 md:py-24">
            <div className="max-w-307.5 mx-auto md:px-6 px-4 w-full h-full">
                <div className="grid grid-cols-2 gap-3  max-[768px]:grid-cols-1 ">
                    <h2 className={'text-5xl max-[768px]:text-3xl font-black max-w-137.5 leading-16'}>{bannerContent.title}</h2>
                    <CryptoList items={crypto} />
                </div>
            </div>
        </section>
    )
}




