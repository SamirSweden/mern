import OverCard from "../cards/OverCard"

const bannerContent = {
    bannerText: "Over a decade of experience building crypto-native solutions for enterprises",

}


export default function OverBanner(){
    return (
        <>
            <section className="py-18 px-0 ">
                <div className="max-w-7xl md:px-6 px-4 mx-auto w-full h-[50%]">
                    <h2 className="text-7xl text-white max-w-7xl mx-0 mb-9 max-[768px]:text-4xl text-wrap text-justify font-bold">{bannerContent.bannerText}</h2>
                    <div className="grid grid-cols-3 gap-5 max-[730px]:grid-cols-2 max-[520px]:grid-cols-1">
                        <OverCard />
                    </div>
                </div>
            </section>
        </>
    )
}





