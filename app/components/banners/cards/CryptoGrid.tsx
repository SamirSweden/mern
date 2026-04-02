import {Coin} from "@/app/types/Coin";
import CryptoCard  from "./CryptoCard"

interface Props {
    coins: Coin[]
}




export default  function CryptoGrid(  {coins} :  Props){
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-[450px]:grid-cols-1 gap-3">
                {coins.map((coin) => (
                    <CryptoCard key={coin.id} coin={coin} />
                ))}
            </div>
        </>
    )
}







