import Image from "next/image";


const data = [
    {
        id:1,
        number: "646",
        text: "Crypto assets"
    },
    {
        id:2,
        number: "190+",
        text: "Countries supported"
    },
    {
        id:3,
        number: "$2T+",
        text: "Total platform transaction volume"
    },
];


const BannerCard = () => {
    return(
        <>
            <div className="bg-transparent py-16 md:py-24 lg:py-[50px]">
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
                               bg-[#171717]
                                py-17 px-6 md:px-10 rounded-2xl mb-3">

                        {data.map((d) => (
                            <div key={d.id} className="flex flex-col items-center text-center gap-3">

                                <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-gray-600 to-orange-400 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase">
                                    {d.number}
                                </h2>

                                <p className="text-white text-sm sm:text-base md:text-lg">
                                    {d.text}
                                </p>

                            </div>
                        ))}

                    </div>
                    <h4 className={'text-center text-gray-500 text-wrap text-xs lg:text-xl '}>Focused on accelerating crypto adoption since 2011</h4>

                </div>
            </div>
        </>
    )
}

export default BannerCard;

