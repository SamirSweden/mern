import {DollarSign} from "lucide-react";


const data = [
    {
        id: 1,
        label: "Lite",
        desc: "The indicator based on AI",
        btnText: "purchase",
        futures: "predicts entry point",
        limit: "4 signals per day",
        price: "100",
        days: "6 days",
        text: "for new traders"
    },
    {
        id: 2,
        label: "PREMIER+",
        desc: "The indicator based on AI",
        btnText: "purchase",
        futures: "predicts entry point , kill zones",
        limit: "7 signals per day",
        price: "2000",
        days: "10 days",
        text: "acceleration of the deposit"
    },
    {
        id: 3,
        label: "TURBO",
        desc: "The indicator based on AI",
        btnText: "purchase",
        futures: "predicts entry point , AMD",
        limit: "30 signals per day",
        price: "5000",
        days: "15 days",
        text: "opens trades himself"
    },
];



const PlanCard = () => {
    return (
        <>
            {data.map((dataCard) => (
                <div key={dataCard.id} className={`
                    transition-transform duration-300 hover:-translate-y-2 
                    hover:shadow-2xl hover:shadow-white/10
                    bg-linear-to-br from-[#111] to-black rounded-xl p-4 border border-white/20 
                    flex  flex-col w-full 
                `}>

                    <div className={`flex items-stretch gap-4 flex-col`}>
                        <div className="relative w-full py-5 px-4 rounded-xl transition-all duration-300
    bg-white/[0.03] backdrop-blur-3xl
    border border-white/[0.08] border-t-white/[0.15] border-l-white/[0.15]
    shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.1),_0_8px_32px_0_rgba(0,0,0,0.37)]
    hover:bg-white/[0.06] hover:border-white/[0.2] hover:-translate-y-2 ">
                            <h2 className={'mb-3 text-white uppercase font-bold font-mono text-lg'}>{dataCard.label}</h2>
                            <div className={`flex items-center`}>
                                <h2 className={'max-[430px]:text-xl text-white  text-3xl font-extrabold'}>{dataCard.price}</h2>
                                <DollarSign size={35}/>
                                <span className={'text-gray-400 text-sm ml-5 absolute bottom-2 right-4'}>/{dataCard.days}</span>
                            </div>
                        </div>
                        <h4 className={`text-gray-400 text-sm text-wrap break-words`}>{dataCard.desc}</h4>

                        <div className="flex items-center w-full ">
                            <button className={`w-full
                                bg-white 
                                py-4 px-5
                                rounded-lg
                                text-center text-black text-sm font-semibold 
                                capitalize 
                                outline-none border-none cursor-pointer 
                                hover:bg-white/30
                                shadow-2xl hover:shadow-gray-400
                                
                            `}>{dataCard.btnText}</button>
                        </div>

                        <p className={`text-gray-400 font-black text-sm text-wrap`}>{dataCard.futures}</p>
                        <div className={'text-gray-400 text-sm font-mono'}>
                            {dataCard.limit}
                        </div>
                        <hr className={'text-gray-700'} />
                        <div>
                            <span>{dataCard.text}</span>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}


export default PlanCard;
