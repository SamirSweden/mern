import Image from "next/image";


import bannerImg from "@/app/assets/banner.png"

const bannerContent = {
    title: "Invest in your future",
    desc: "Millions of crypto investors trust Kraken, the best crypto platform.",
    basedText: "*Based on the January 2025 Forbes Advisor review of crypto platforms."
}

const Banner = () => {
    return (
        <section className={'invest__banner h-screen'}>
            <div className="max-w-[1230px] px-[15px] mx-auto w-full h-full">
                <div className="flex items-center justify-between h-full max-[880px]:flex-col">
                    <Image src={bannerImg} width={600} height={700} alt={'kraken img'} />
                    <div className="max-w-[550px] w-full">
                        <h2 className={'font-extrabold text-5xl mb-6 text-white text-wrap'}>{bannerContent.title}</h2>
                        <p className={'font-bold text-xl mb-8 text-wrap'}>{bannerContent.desc}</p>
                        <span className={'text-gray-500 text-wrap'}>{bannerContent.basedText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Banner




