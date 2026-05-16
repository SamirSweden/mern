import Link from "next/link";
import Image from "next/image";


type Coin = {
    id: string;
    name: string;
    symbol: string;
    price_change_percentage_24h: number
}

async function getCoins():Promise<Coin[]> {
    const resp = await fetch(`${process.env.BTC_API}`,
        {
            next: {
                revalidate: 60
            }
        }
    )
    if(!resp.ok) throw new Error("Coin not found")

    return resp.json()
}

const usdtImg = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tether_USDT.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
const btcImg = "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"
const ethImg = "https://cdn.iconscout.com/icon/free/png-256/free-ethereum-logo-icon-svg-download-png-3029981.png"

export default async function CryptoCards() {
    const coins = await  getCoins();

    const btc = coins.find((c) => c.id === "bitcoin");
    const eth = coins.find((c) => c.id === "eth");
    const usdt = coins.find((c) => c.id === "tether");

    return (
        <>
            <section className={'crypto__banner bg-black py-20 text-white'}>
                <div className="max-w-7xl mx-auto px-4 w-full h-full">
                    <h2 className={'text-4xl text-white text-center mb-4'}>
                        Make crypto work
                        <span className={'text-orange-500 ml-2'}>for you</span>
                    </h2>

                    <div className="grid grid-cols-2 gap-10 max-[768px]:grid-cols-1">
                        <Link href={'/chart'}
                            className={`
                                bg-black rounded-2xl
                                 shadow-[inset_0_0_100px_rgba(255,255,255,0.08)]
                                 py-10 px-7
                                 border border-black 
                                 hover:border-[#171717]
                            `}
                        >
                            <Image src={usdtImg} alt="usdt" width={70} height={70} />
                            <p className="text-gray-400 text-4xl mt-10">
                                New user exclusive
                            </p>

                            <h3 className="text-4xl mt-8 font-bold">
                                Up to
                            </h3>

                            <div className="text-[60px] font-black text-green-400">
                                800.00%
                            </div>

                            <span className="text-5xl font-bold">
                              APR
                            </span>
                        </Link>

                        <div className={'flex gap-10 flex-col'}>
                            <Link href={'/chart'} className={`
                                p-10 px-6 rounded-2xl bg-black 
                                shadow-[inset_0_0_100px_rgba(255,255,255,0.08)]
                                border border-black min-h-[200px]
                                 hover:border-[#171717]
                            `}>

                                <div className={'flex  items-start gap-6'}>
                                    <Image src={btcImg} width={70} height={70} alt={'btc'}  />
                                    <div className="flex  items-start flex-col gap-3">
                                        <h3 className={'font-black text-4xl text-gray-500'}>BTC Savings APR</h3>
                                        <p className={'text-2xl text-green-400'}>{btc?.price_change_percentage_24h.toFixed(2)}%</p>
                                    </div>
                                </div>
                            </Link>

                            <div className={'flex gap-10 flex-col'}>
                                <Link href={'/chart'} className={`
                                p-10 px-6 rounded-2xl bg-black min-h-[200px]
                                shadow-[inset_0_0_100px_rgba(255,255,255,0.08)]
                                border border-black 
                                 hover:border-[#171717]
                                 hover:bg-black
                            `}>

                                    <div className={'flex  items-start gap-6'}>
                                        <Image src={ethImg} width={70} height={70} alt={'btc'}  />
                                        <div className="flex  items-start flex-col gap-3">
                                            <h3 className={'font-black text-4xl text-gray-500'}>ETH Savings APR</h3>
                                            <p className={'text-2xl text-green-400'}> {eth?.price_change_percentage_24h.toFixed(2)}%</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}



