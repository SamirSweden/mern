import CryptoGrid from "@/app/components/banners/cards/CryptoGrid";
import {getCoins} from "@/app/lib/getCoins";
import BottomMenu from "@/app/components/UI/BottomMenu";



export default  async function Dashboard(){
    const coins = await getCoins();
    await new Promise((res) => setTimeout(res , 2000))

    return <>
        <section className={'py-20 px-0 bg-black'}>
            <div className="max-w-[1300] mx-auto w-full h-full px-4 md:px-6 ">
                <CryptoGrid coins={coins} />
                <BottomMenu/>
            </div>
        </section>
    </>
}