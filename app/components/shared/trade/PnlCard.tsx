import {BriefcaseBusiness} from "lucide-react";


type Props = {
    btc: number;
    currentPrice: number;
    avgPrice: number;
}



export default function PnlCard({btc , currentPrice , avgPrice}: Props) {
    const currentValue = btc * currentPrice;

    const investedValue = btc * avgPrice;
    const pnl = currentValue - investedValue;

    const pnlPercent =
            investedValue > 0 ? (pnl / investedValue) * 100 : 0;

    return <>
         <div className={`
            flex items-start justify-around
            max-[768px]:flex-col 
            p-5 mx-10
            rounded-2xl
            text-white 
            font-mono
            space-y-3
         `}>
             <h3 className={'font-mono text-lg text-white '}>
                 Btc
             </h3>
             <div className={'flex items-start flex-col gap-2'}>
                 <h4>current value: </h4>
                 <span>${currentValue.toFixed(2)}</span>
             </div>
             <div className={'flex items-start flex-col gap-2'}>
                 <h4>invested value:</h4>
                 <span className="">${investedValue.toFixed(2)}</span>
             </div>
            <div className={
                pnl >= 0
                    ? `text-green-400 flex items-start flex-col`
                    : 'text-red-400'}
            >
                    <h4>Pnl: {pnl >= 0 ? "+" : "-"}</h4>
                    ${pnl.toFixed(2)}
                    ({pnlPercent.toFixed(2)}%)

            </div>
         </div>
    </>
}



