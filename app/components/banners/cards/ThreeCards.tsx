import ThreeButton from "@/app/components/UI/ThreeButton";


const cardData = [
    {
        id:1,
        text:"Place advanced orders on-the-go.",
        buttonText: "Get the app"
    },
    {
        id:2,
        text:"Margin trading with up to 5x leverage.*",
        buttonText: "Learn more",
    },
    {
        id:3,
        text:"Trade 100+ multi-collateral Futures contracts.",
        buttonText: "Futures trading"
    },
];

const ThreeCards = () => {
    return (
        <>
            <div className={'py-10 px-0 bg-transparent'}>
                <div className="container max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <div className="grid grid-cols-3 gap-3 max-[830px]:grid-cols-2 max-[640px]:grid-cols-1">
                        {cardData.map((item) => (
                            <div key={item.id} className={'bg-black py-10 px-5 rounded-2xl flex items-start flex-col'}>
                                <h3 className={'text-wrap text-lg text-white max-[830px]:text-sm  mb-4'}>{item.text}</h3>
                                <div className="flex items-center mt-auto pt-6 max-[420px]:w-full ">
                                    <ThreeButton>{item.buttonText}</ThreeButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreeCards