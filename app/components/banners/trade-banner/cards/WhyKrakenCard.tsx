import { ShieldHalfIcon ,Cookie, Headset} from "lucide-react";


const data = [
    {
        id: 1,
        icon: Cookie,
        label: "Market share",
        text: "We have been at the forefront of crypto for over a decade, with over 9 million clients in 190 countries. We are #1 in Europe with over 35% market share."
    },
    {
        id: 2,
        icon: ShieldHalfIcon   ,
        label: "Security expertise",
        text: "Kraken is secured by industry-leading security and cryptography experts."
    },
    {
        id: 3,
        icon: Headset,
        label: "24/7/365 support",
        text: "Our award-winning, always-available Account Management team has deep expertise in crypto products and services."
    },

];



const WhyKrakenCard = () => {
    return (
        <>
            {data.map((d) => {
                const Icon = d.icon;

                return (
                    <div key={d.id} className="flex flex-col items-center gap-5 max-[634px]:items-start  max-[634px]:gap-10 max-[634px]:bg-white  rounded-3xl py-4 px-5 ">
                        <Icon size={40} className="text-white max-[634px]:text-black " />
                        <h3 className="text-white text-4xl  md:text-4xl  sm:text-lg  max-[634px]:text-black ">{d.label}</h3>
                        <p className="text-wrap text-sm text-center max-[634px]:text-justify max-[634px]:text-black ">{d.text}</p>
                    </div>
                )
            })}
        </>
    )
}

export default WhyKrakenCard



