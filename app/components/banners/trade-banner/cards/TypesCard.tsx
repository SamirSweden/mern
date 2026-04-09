

const data = [
    {
        id:1,
        title: "FIX 4.4",
        text: "Cutting-edge trading interface designed for institutional clients."
    },
    {
        id:2,
        title: "WebSockets",
        text: "Asynchronous API for trading."
    },
    {
        id:3,
        title: "REST",
        text: "Synchronous API with trading, funding and stacking workflows."
    },
    {
        id:4,
        title: "Crypto spot trading",
        text: "Analyze data, trade on spot markets and manage your accounts."
    },
    {
        id:5,
        title: "Crypto futures trading",
        text: "Fully automate your futures trading accounts."
    },
    {
        id:6,
        title: "Crypto data feeds",
        text: "Create custom futures and spot market data feeds."
    },
];


const TypesCard = () => {
    return (
        <>
            {data.map((d) => (
                <div key={d.id} className="bg-linear-to-br from-[#280202] via-[#05011f] to-[#100e0e] rounded-3xl py-4 px-5 flex flex-col items-start gap-4  ">
                    <h2 className="text-white text-3xl text-wrap mb-4">{d.title}</h2>
                    
                    <div className="mt-auto p-6 ">
                        <p className="text-lg text-white max-[570px]:text-sm">{d.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}


export default TypesCard

