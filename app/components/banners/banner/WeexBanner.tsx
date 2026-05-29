import Image from "next/image";


const BannerPhoto = "https://d2tfhb4luz96yb.cloudfront.net/otc/images/mainBanner/ca05a44abbec1fe370c189447b1cb9a1.webp"

export default function WeexBanner(){
    return (
        <>
            <section className={'relative w-full h-screen overflow-hidden'}>
                <Image src={BannerPhoto} alt={'banner'} fill priority className={'object-cover'} />
                <div className="absolute inset-0 bg-black/50 " />
                
                <div className="relative z-10 flex h-full items-center justify-center flex-col gap-5">
                    <h1 className="text-5xl font-bold text-white text-center max-[370px]:text-end">
                        Use the best , use Kraken
                    </h1>
                    <h2 className={'text-white text-2xl font-mono font-bold'}>Select and win big!</h2>
                </div>
            </section>
        </>
    )
}

