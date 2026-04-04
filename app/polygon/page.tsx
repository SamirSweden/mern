import Image from "next/image"

import  polyImg  from "@/app/assets/polygon.jpeg"

const bannerPoly = {
    bannerText: "Bitget Polygon (MATIC) Wallet",
    desc: "With a Bitget Polygon (MATIC) wallet, you can send, receive and swap from/to MATIC on different mainnets. You can also experience the rich Polygon DApp ecosystem, Polygon NFT Market, and other transaction features in our wallet. Get your own Polygon (MATIC) wallet now to explore more.",
}


export default  function Polygon() {
    return (
        <>
            <section className={'bg-black py-12 px-0 min-h-screen'}>
                <div className="max-w-307.5 md:px-6 px-4 mx-auto w-full h-full">
                    <div className="flex items-center justify-between ">
                        <Image src={polyImg} width={400} height={400} className={'rounded-3xl'} alt="Polygon" />
                        <div className={'flex flex-col items-center gap-7'}>
                            <h2 className={'text-3xl text-cyan-400 '}>{bannerPoly.bannerText}</h2>
                            <p className={'font-mono text-wrap max-w-[600px]'}>{bannerPoly.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




