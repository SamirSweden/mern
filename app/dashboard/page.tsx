import CryptoGrid from "@/app/components/banners/cards/CryptoGrid";
import {getCoins} from "@/app/lib/getCoins";


export default  async function Dashboard(){
    const coins = await getCoins();

    return <>
        <section className={'py-10 px-0 bg-black'}>
            <div className="max-w-[1300] mx-auto w-full h-full px-4 md:px-6 ">
                <CryptoGrid coins={coins} />
            </div>
        </section>
    </>
}