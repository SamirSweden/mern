import WhyCard from "@/app/components/UI/WhyCard";


const WhyKraken = () => {
    return (
        <>
            <section className={'py-10 px-0'}>
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <h1 className={'text-center font-extrabold mb-6 md:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl '}>Why Kraken?</h1>
                    <div className="grid grid-cols-3 gap-4 max-[835px]:grid-cols-2  max-[570px]:grid-cols-1">
                        <WhyCard />
                    </div>
                    <div className={'flex items-center mt-5 max-[500px]:w-full'}>
                        <button className={'bg-blue-400 text-black  text-center max-[500px]:py-6 max-[500px]:w-full py-4 px-6 rounded-2xl capitalize text-sm cursor-pointer transition transform duration-300 hover:-translate-y-3 shadow-2xl shadow-gray-200 hover:shadow-gray-400'}>get started with kraken</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyKraken

