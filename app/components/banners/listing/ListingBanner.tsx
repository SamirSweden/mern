import Image from "next/image";


const bannerImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/bfe2e65dfe734d2249642f0deef70ab7f6bd2d1e-1428x1076.png?w=1536&fit=min"

const content = {
    title: "Asset Listings",
    desc: "Tokens launching soon on Kraken",
    btnText: "View roadmap"
}



const ListingBanner = () => {
    return <>
        <section className="h-screen">
            <div className="max-w-7xl md:px-6 px-4 mx-auto w-full h-full ">
                <div className="flex flex-col items-center gap-5 justify-center h-full ">
                    <h2 className="text-white text-[clamp(2.5rem,8vw,100px)] text-wrap font-black leading-none">{content.title}</h2>
                    <p className="text-gray-500 text-[20px] max-[335px]:text-lg">{content.desc}</p>
                    <button className="bg-white max-[425px]:w-full text-black py-3 px-5 text-lg font-bold rounded-2xl cursor-pointer hover:bg-white/60 ">{content.btnText}</button>

                    <div className="relative flex justify-center">
                        <div className="absolute top-0 w-[700px] h-[400px] bg-linear-to-b from-white/40 to-transparent blur-3xl"></div>
                        <Image src={bannerImg} width={500} height={500} alt="" className="relative z-10"  />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ListingBanner;

