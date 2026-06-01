import Image from "next/image";


const BannerPhoto = "https://d2tfhb4luz96yb.cloudfront.net/otc/images/mainBanner/a10ed0e89a344cc725e845e50b2fca30.webp"

export default function WeexBanner(){
    return (
        <>
            <section className={'relative w-full h-[90vh] overflow-hidden'}>
                <Image src={BannerPhoto} alt={'banner'} fill priority className={'object-cover'} />
                <div className="relative z-10 flex h-full flex-col justify-end items-start p-4 sm:p-6 md:p-10">
                   <div className={`backdrop-blur-xs bg-white/10 px-4 py-4 rounded-2xl
                    md:rounded-[60px] sm:px-6 sm:py-5 md:px-8 md:py-7 max-w-full
                   `}>
                       <h1 className="text-5xl font-bold text-white max-[450px]:text-lg">
                           Use the best &mdash; use <span className={'animate-pulse'}>Kraken</span>
                       </h1>
                       <h2 className="text-gray-500 text-xl mt-4 font-mono font-bold max-[450px]:text-xl">
                           See coins and make right investment
                       </h2>
                   </div>
                </div>
            </section>
        </>
    )
}

