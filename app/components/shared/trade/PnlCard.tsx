


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
            flex items-start justify-between
            max-[768px]:flex-col 
            bg-black shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)]
            border 
            border-white/10
            rounded-2xl
            p-5 
            text-white 
            font-mono
            space-y-3
         `}>
             <h3 className={'font-mono text-lg text-white '}>
                 Портфель
             </h3>

             <p>
                 current value: ${currentValue.toFixed(2)}
             </p>

             <p>
                 invested value: ${investedValue.toFixed(2)}
             </p>

            <p className={
                pnl >= 0
                    ? `text-green-400`
                    : 'text-red-400'
            }>
                Pnl: {pnl >= 0 ? "+" : "-"}
                ${pnl.toFixed(2)}
                ({pnlPercent.toFixed(2)}%)
            </p>
         </div>
    </>
}



