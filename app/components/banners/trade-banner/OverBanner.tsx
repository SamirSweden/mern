
const bannerContent = {
    bannerText: "Over a decade of experience building crypto-native solutions for enterprises",

}


export default function OverBanner(){
    return (
        <>
            <section className="py-10 px-0">
                <div className="max-w-6xl md:px-6 px-4 mx-auto w-full h-[50%]">
                    <div className="flex items-center justify-center">
                        <h2 className="text-7xl text-white max-w-7xl max-[768px]:text-4xl text-wrap text-justify font-bold">{bannerContent.bannerText}</h2>
                        
                    </div>
                </div>
            </section>
        </>
    )
}





