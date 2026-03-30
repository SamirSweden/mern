

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
                    <div key={offer.id} className={'flex items-center flex-col gap-5'}>
                        <Icon size={45}  />
                        <h2 className={'text-center text-2xl'}>{offer.title}</h2>
                        <p className={'text-center font-semibold'}>{offer.text}</p>
                    </div>
                )
            })}
        </>
    )
}


export default ScaleCard

