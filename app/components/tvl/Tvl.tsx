import TvlCard from "@/app/components/banners/cards/TvlCard";


const TvlTitle = {
    title: "Full-stack offerings to enable TVL growth"
}

const Tvl = () => {
    return  (
        <>
            <section className={'tvl py-12 px-0'}>
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <h1 className={'font-bold text-xl md:text-3xl sm:text-lg mb-10'}>{TvlTitle.title}</h1>
                    <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-2 max-[530px]:grid-cols-1">
                        <TvlCard />
                    </div>
                </div>
            </section>
        </>
    )
}



export  default  Tvl



