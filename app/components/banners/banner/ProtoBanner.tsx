


const bannerContent = {
    preText: "Protocols",
    title: "Everything protocols need to launch and scale",
    desc: "From launch planning to liquidity, custody, staking, and user growth, Kraken 360 supports teams at every stage.",
}

const ProtoBanner = () => {
    return (
        <>
            <section className={'h-screen'}>
                <div className="max-w-307.5 md:px-6 px-4 mx-auto w-full h-full">
                    <div className="flex items-center justify-center flex-col h-[50%] mt-9 gap-6 flex-col bg-[#111] rounded-xl">
                        <h4 className={'capitalize text-2xl text-white font-black max-[380px]:px-4 '}>{bannerContent.preText}</h4>
                        <h2 className={'text-white md:text-5xl text-3xl max-w-[600px] text-center max-[380px]:px-4 max-[380px]:text-left'}>{bannerContent.title}</h2>
                        <p className={'text-sm  text-center md:text-lg text-wrap max-[620px]:text-wrap max-[380px]:px-4 max-[380px]:text-left'}>{bannerContent.desc}</p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ProtoBanner
