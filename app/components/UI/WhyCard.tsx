import Image from "next/image";
import Button from "@/app/components/UI/Button";

const simplicityImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/34bb6b79789a9ff4bdeec9cfd8bd8993ef441176-808x538.png?w=1536&fit=min"
const educationImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/8f3f1e4ecb8ba8c52dc8a3239708a78b93669965-808x538.png?w=1536&fit=min"
const serviceImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/db8d9d3687ff5fed03c3ef72c2d895cfae7dd1af-808x538.png?w=1536&fit=min"


const data = [
    {
        id:1,
        title: "Simplicity",
        text: "Buy, sell and trade crypto easily, from your desktop or mobile.",
        img: simplicityImg,
        buttonText:"Get the apps"
    },
    {
        id:2,
        title: "Education",
        text: "Crypto shouldn’t be cryptic – learn about blockchain, trading, crypto and NFTs.",
        img: educationImg,
        buttonText:"Learn center"
    },
    {
        id:3,
        title: "Service",
        text: "Find answers instantly, or get help from our award-winning support team.",
        img: serviceImg,
        buttonText:"Kraken support"
    },
];


export default  function WhyCard() {
    return (
        <>
            {data.map((d) => (
                <div key={d.id} className={'shadow-[inset_4px_4px_60px_0_hsla(0,0%,100%,.15)] py-4 px-5 rounded-lg flex flex-col h-full'}>
                    <div>
                        <h2 className={'text-white text-3xl font-sans capitalize mb-4 text-justify'}>{d.title}</h2>
                        <p className={'text-gray-400  text-sm md:text-base '}>{d.text}</p>
                    </div>

                    <div className={'mt-auto pt-6'}>
                        <Button>{d.buttonText}</Button>
                    </div>

                    <div>
                        <Image src={d.img} width={400} height={50} alt={""} className={'w-full'} />
                    </div>
                </div>
            ))}
        </>
    )
}