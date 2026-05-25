import {DollarSign} from "lucide-react";


const data = [
    {
        id: 1,
        label: "Lite",
        desc: "The indicator based on AI",
        futures: "predicts entry point",
        limit: "4 signals per day",
        price: "100"
    },
    {
        id: 2,
        label: "BOSS",
        desc: "The indicator based on AI",
        futures: "predicts entry point , kill zones",
        limit: "7 signals per day",
        price: "5000"
    },
    {
        id: 3,
        label: "TURBO",
        desc: "The indicator based on AI",
        futures: "predicts entry point , kill zones , AMD",
        limit: "30 signals per day",
        price: "5000"
    },
];



const PlanCard = () => {
    return (
        <>
            {data.map((dataCard) => (
                <div key={dataCard.id} className={`
                    bg-[#05070a] rounded-xl py-4 px-5 border border-white/10 
                    flex items-start flex-col
                `}>
                    <div>
                        <h2 className={'text-white font-bold font-mono text-2xl'}>{dataCard.label}</h2>
                    </div>
                    <div className={`flex items-center gap-4 flex-col`}>
                        <h4 className={`text-gray-400 text-lg text-wrap break-words`}>{dataCard.desc}</h4>
                        <p className={`text-white text-sm text-wrap`}>{dataCard.futures}</p>
                        <div className={'text-gray-400 text-lg font-mono'}>
                            {dataCard.limit}
                        </div>
                        <div className={`flex items-center`}>
                            <DollarSign size={35}/>
                            <h2 className={'text-white text-3xl font-extrabold'}>{dataCard.price}</h2>
                            <span className={'text-gray-600 text-sm '}>/10 days</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


export default PlanCard;
