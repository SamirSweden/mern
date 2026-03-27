import Image from "next/image";


import bannerImg from "@/app/assets/banner.png"

const bannerContent = {
    title: "Invest in your future",
    desc: "Millions of crypto investors trust Kraken, the best crypto platform.",
    basedText: "*Based on the January 2025 Forbes Advisor review of crypto platforms."
}

const Banner = () => {
    return (
        <section className="invest__banner min-h-screen py-16 md:py-24">
            <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 h-full">

                    <div className="w-full max-w-[500px]">
                        <Image
                            src={bannerImg}
                            alt="kraken img"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="max-w-[550px] w-full text-center lg:text-left">

                        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
                            {bannerContent.title}
                        </h2>

                        <p className="font-bold text-base sm:text-lg md:text-xl mb-6">
                            {bannerContent.desc}
                        </p>

                        <span className="text-gray-500 text-sm sm:text-base">
                    {bannerContent.basedText}
                </span>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Banner




