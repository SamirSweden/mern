

import Image from "next/image";

const PolygonImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_eurq.webp?i=kds"
const PolygonUsdImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_usdq.webp?i=kds"
const NaviImg  = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_eurr.webp?i=kds"
const SuiImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_usdr.webp?i=kds"



const data = [
    {
        id:1,
        icon: PolygonImg,
        text: "Polygon",
        code: "EURQ"
    },
    {
        id:2,
        icon: PolygonUsdImg,
        text: "Polygon",
        code: "USDQ"
    },
    {
        id:3,
        icon: NaviImg,
        text: "Concordium",
        code: "EURR"
    },
    {
        id:4,
        icon: SuiImg,
        text: "Concordium",
        code: "USDR"
    },
];



const NetworkCard = () => {
    return <>
        {data.map((d) => (
            <div key={d.id} className={'flex items-center gap-7 '}>
                <Image src={d.icon} alt={'img'} width={40} height={40}  />
                <h4 className={'text-white text-xl font-bold '}>{d.text}</h4>
                <span className={'uppercase text-gray-600 font-extrabold ml-[-20px]'}>{d.code}</span>
            </div>
        ))}
    </>
}

export default NetworkCard;



