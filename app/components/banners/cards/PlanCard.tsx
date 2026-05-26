import {DollarSign} from "lucide-react";


const data = [
    {
        id: 1,
        label: "Lite",
        desc: "The indicator based on AI",
        futures: "predicts entry point",
        limit: "4 signals per day",
        price: "100",
        days: "6 days"
    },
    {
        id: 2,
        label: "PREMIER+",
        desc: "The indicator based on AI",
        futures: "predicts entry point , kill zones",
        limit: "7 signals per day",
        price: "2000",
        days: "10 days"
    },
    {
        id: 3,
        label: "TURBO",
        desc: "The indicator based on AI",
        futures: "predicts entry point , AMD",
        limit: "30 signals per day",
        price: "5000",
        days: "15 days"
    },
];



const PlanCard = () => {
    return (
        <>
            {data.map((dataCard) => (
                <div key={dataCard.id} className={`
                    transition-transform duration-300 hover:-translate-y-2 
                    hover:shadow-2xl hover:shadow-white/10
                    bg-linear-to-br from-[#111] to-black rounded-xl p-10 border border-white/20 
                    flex  flex-col
                `}>

                    <div className={`flex items-stretch gap-4 flex-col`}>
                        <div className="relative bg-[#111] hover:bg-[#171717] w-full py-5 px-4 rounded-xl shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] ">
                            <h2 className={'mb-3 text-white uppercase font-bold font-mono text-lg'}>{dataCard.label}</h2>
                            <div className={`flex items-center`}>
                                <h2 className={'text-white text-3xl font-extrabold'}>{dataCard.price}</h2>
                                <DollarSign size={35}/>
                                <span className={'text-gray-400 text-sm ml-5 absolute bottom-2 right-4'}>/{dataCard.days}</span>
                            </div>
                        </div>
                        <h4 className={`text-gray-400 text-lg text-wrap break-words`}>{dataCard.desc}</h4>
                        <p className={`text-white text-sm text-wrap`}>{dataCard.futures}</p>
                        <div className={'text-gray-400 text-lg font-mono'}>
                            {dataCard.limit}
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}


export default PlanCard;
