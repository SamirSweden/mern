import Image from "next/image";


const BannerPhoto = "https://d2tfhb4luz96yb.cloudfront.net/otc/images/mainBanner/a10ed0e89a344cc725e845e50b2fca30.webp"

export default function WeexBanner(){
    return (
        <>
            <section className={'relative w-full h-[90vh] overflow-hidden'}>
                <Image src={BannerPhoto} alt={'banner'} fill priority className={'object-cover'} />
                <div className="relative z-10 flex h-full flex-col justify-end items-start py-14 px-15">
                   <div className={`backdrop-blur-xs bg-white/10 px-6 py-7 rounded-[60px]`}>
                       <h1 className="text-5xl font-bold text-white">
                           Use the best, use Kraken
                       </h1>
                       <h2 className="text-white text-2xl font-mono font-bold">
                           Select and win big!
                       </h2>
                   </div>
                </div>
            </section>
        </>
    )
}

