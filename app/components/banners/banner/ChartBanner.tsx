import Image from "next/image";

const ChartContent = {
    title: "Kraken Pro: Advanced Crypto Trading",
    text: "The Kraken Pro mobile app delivers all the trading, funding, earn and security features you love about the Kraken exchange in a mobile-first design. Get access to the tools and alerts you need to trade on the go.",
    btnText: "get the app"
}

const chartImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/6f9ecc0394de6efab3a31487718ba99bc58a744c-2948x1770.png?w=1536&fit=min"

export default function ChartBanner() {
    return (
        <>
            <section className={' py-10 px-0'}>
                <div className="max-w-307.5 w-full h-full md:px-6 px-4 mx-auto">
                    <div className="flex flex-col items-center gap-7 justify-center h-full">
                        <h2 className={'text-transparent animate-pulse bg-clip-text bg-linear-to-br from-orange-700 via-blue-700 to-red-500 text-4xl md:text-6xl sm:text-3xl font-bold'}>{ChartContent.title}</h2>
                        <p className={'text-gray-400 text-lg md:text-xl sm:text-sm text-wrap text-justify font-semibold w-[700px] max-[740px]:w-full '}>{ChartContent.text}</p>
                        <div className="kr__btn  max-[600px]:w-full">
                            <button className={'max-[600px]:w-full font-bold shadow-lg shadow-white border border-white  outline-none cursor-pointer shadow-[inset_10px_4px_70px_0_hsla(0,0%,100%,.15)] py-5 px-6 text-white rounded-full capitalize'}>
                                {ChartContent.btnText}
                            </button>
                        </div>
                        <div className={'mt-6'}>
                            <Image
                                src={chartImg}
                                width={800}
                                height={700}
                                className={'w-full h-full'}
                                alt={'Kraken banner'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



