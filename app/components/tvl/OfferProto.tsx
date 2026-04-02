
import {Percent,ShieldCheck,Coins,BadgeCheck,Layers} from "lucide-react";

const offerData = [
    {
        id:1,
        icon: Percent,
        title: "Token liquidity",
        desc: "Launch game plan for market maker liquidity, so your token launches and scales with the right liquidity."
    },
    {
        id:2,
        icon: ShieldCheck,
        title: "Custody",
        desc: "Secure custody through regulated Kraken entities with governance, configurable permissions, and compliance-first operations."
    },
    {
        id:3,
        icon: Coins,
        title: "Token distributions",
        desc: "Reliable investor distributions 24/7/365 with enforced lockups and vesting."
    },
    {
        id:4,
        icon: BadgeCheck,
        title: "Treasury management",
        desc: "Bankruptcy-remote protections and multiple lines of defense for each transaction."
    },
    {
        id:5,
        icon: Layers,
        title: "Staking",
        desc: "Transparent staking infrastructure designed for institutional participation and seamless reward collection."
    },
];

const offerContent = {
    title: "Offerings for protocols"
}

const OfferProto = () => {


    return (
        <>
            <section className={'tvl py-24 px-0'}>
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <h1 className={'font-bold text-xl md:text-3xl sm:text-lg mb-10'}>{offerContent.title}</h1>
                    <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-2 max-[530px]:grid-cols-1">
                        {offerData.map((data) => {
                            const Icon = data.icon;

                            return(
                                <div key={data.id} className="relative flex flex-col gap-6 border border-gray-700 rounded-xl py-4 px-4 shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)]">
                                    <Icon className={'text-white absolute right-0 top-[-15px] transition-transform rotate-[10deg] '} size={40}/>
                                    <h2 className={'text-white text-2xl md:text-2xl sm:text-xl text-wrap'}>{data.title}</h2>
                                    <p>{data.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}


export default OfferProto

