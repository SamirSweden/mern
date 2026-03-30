

import {
    LockKeyhole,
    Scale,
    Headset}
    from "lucide-react";

const scaleCard = [
    {
        id:1,
        icon:Scale,
        title: "Scale",
        text: "Built-in distribution with millions of users and institutional liquidity"
    },
    {
        id:2,
        icon:LockKeyhole,
        title: "Security and compliance",
        text: "Resilient operations and unmatched security with a global regulatory footprint."
    },
    {
        id:3,
        icon:Headset,
        title: "Dedicated 24/7/365 support",
        text: "Around-the-clock support complemented by dedicated relationship managers focused on institutional clients."
    },
];


const ScaleCard = () => {

    return (
        <>
            {scaleCard.map((offer) => {
                const Icon = offer.icon;

                return (
                    <div key={offer.id} className={'flex items-center rounded-2xl flex-col gap-5 max-[530px]:shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-6  max-[530px]:items-start'}>
                        <Icon size={45}  />
                        <h2 className={'text-center text-2xl max-[530px]:text-left max-[341px]:text-xl'}>{offer.title}</h2>
                        <p className={'text-center font-semibold max-[530px]:text-justify max-[341px]:text-sm'}>{offer.text}</p>
                    </div>
                )
            })}
        </>
    )
}


export default ScaleCard

