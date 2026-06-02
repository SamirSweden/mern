import { useState } from "react";
import PnlMobileSheet from "@/app/components/shared/trade/PnlMobileSheet";

type Props = {
    btc: number;
    currentPrice: number;
    avgPrice: number;
}

export default function PnlCard({ btc, currentPrice, avgPrice }: Props) {
    const [open, setOpen] = useState(false);

    const currentValue = btc * currentPrice;
    const investedValue = btc * avgPrice;
    const pnl = currentValue - investedValue;
    const pnlPercent = investedValue > 0 ? (pnl / investedValue) * 100 : 0;
    const positive = pnl >= 0;

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="
                    grid grid-cols-3
                    max-[570px]:grid-cols-2 max-[400px]:grid-cols-1
                    gap-6 max-[400px]:gap-4 /* Использование gap вместо ручных padding/border */

                    mx-10 p-5
                    rounded-2xl bg-black
                    text-white font-mono
                    cursor-pointer hover:bg-zinc-900 transition-colors /* Визуальный отклик */
                "
            >
                <div className="flex flex-col gap-2">
                    <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                        Current Value
                    </h4>
                    <span className="text-xl font-bold">
                        ${currentValue.toFixed(2)}
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                        Invested
                    </h4>
                    <span className="text-xl font-bold">
                        ${investedValue.toFixed(2)}
                    </span>
                </div>

                <div className={`flex flex-col gap-2 ${positive ? "text-green-400" : "text-red-400"}`}>
                    <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                        PNL
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                        <span className="text-xl font-bold">
                            {positive ? "+" : "-"}${Math.abs(pnl).toFixed(2)}
                        </span>
                        <span className="text-sm">
                            ({pnlPercent.toFixed(2)}%)
                        </span>
                    </div>
                </div>
            </div>

            <PnlMobileSheet
                open={open}
                setOpen={setOpen}
                currentValue={currentValue}
                investedValue={investedValue}
                pnl={pnl}
                pnlPercent={pnlPercent}
                positive={positive}
            />
        </>
    );
}