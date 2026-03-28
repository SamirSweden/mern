


const bannerContent = {
    title: "Start your crypto journey",
    desc: "Sign up to buy and sell 646 cryptocurrencies.",
    startBtn: "Get started with Kraken"
}

const PreFooter = () => {
    return (
        <>
            <section className={'bg-[#692FE4] py-14 prefooter'}>
                <div className="max-w-307.5 px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-center flex-col gap-10">
                        <h2 className={'text-white text-3xl sm:text-4xl md:text-5xl  text-wrap break-words leading-tight'}>{bannerContent.title}</h2>
                        <p className={'text-white text-lg text-wrap'}>{bannerContent.desc}</p>
                        <div className={'max-[420px]:w-full'}>
                            <button className={'max-[420px]:w-full bg-white text-violet-400 py-4 px-6 hover:bg-white/70 cursor-pointer rounded-xl shadow-2xl hover:shadow-gray-400 focus:outline-none transition transform duration-300 hover:-translate-y-3 '}>
                                {bannerContent.startBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default PreFooter;

