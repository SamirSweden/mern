import Image from "next/image";

const EverythingImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/71061b81604879dfbb677b653279b1a50e71b7a0-200x200.png?w=1536&fit=min"
const NatGold = "https://assets-cms.kraken.com/images/51n36hrp/facade/6fdf2ffe885c1b2573682e12d018c384332f5700-1024x1029.png?w=1536&fit=min"
const NaviImg  = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_navx.webp?i=kds"
const SuiImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_ns.webp?i=kds"
const MinotariImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_wxtm.webp?i=kds"
const SodaXImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/87d1eff5cfd6a6e4777b1e279a47ffd4920395e8-512x512.png?w=1536&fit=min"
const MapImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_mapo.webp?i=kds"
const NexoImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_nexo.webp?i=kds"
const SuiLendImg = "https://assets.kraken.com/marketing/web/icons-uni-webp/s_send.webp?i=kds"


const data = [
    {
        id:1,
        icon: EverythingImg,
        text: "Everything",
        code: "EV"
    },
    {
        id:2,
        icon: NatGold,
        text: "NatGold",
        code: "NATG"
    },
    {
        id:3,
        icon: NaviImg,
        text: "Navi Protocol",
        code: "NAVX"
    },
    {
        id:4,
        icon: SuiImg,
        text: "Sui Name Service",
        code: "NS"
    },
    {
        id:5,
        icon: MinotariImg,
        text: "Minotari",
        code: "WXTM"
    },
    {
        id:6,
        icon: SodaXImg,
        text: "SODAX",
        code: "SODA"
    },
    {
        id:7,
        icon: MapImg,
        text: "Map Protocol",
        code: "MAPO"
    },
    {
        id:8,
        icon: NexoImg,
        text: "Nexo",
        code: "NEXO"
    },
    {
        id:9,
        icon: SuiLendImg,
        text: "Suilend",
        code: "SEND"
    },
];



const TokenCard = () => {
    return <>
        {data.map((d) => (
            <div key={d.id} className={'flex items-center gap-7 '}>
                <Image src={d.icon} alt={d.icon} width={40} height={40}  />
                <h4 className={'text-white text-xl font-bold '}>{d.text}</h4>
                <span className={'uppercase text-gray-400 font-extrabold ml-[-20px]'}>{d.code}</span>
            </div>
        ))}
    </>
}

export default TokenCard;



