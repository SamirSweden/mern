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
        <div
            className="
    grid grid-cols-3
    max-[570px]:grid-cols-2 max-[400px]:grid-cols-1

    mx-10
    p-5

    rounded-2xl
    bg-black

    text-white
    font-mono
    "
        >
            <div
                className="
        flex flex-col gap-2

        border-r border-white/30 max-[400px]:border-none
        pr-6
        "
            >
                <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                    Current Value
                </h4>

                <span className="text-xl font-bold">
            ${currentValue.toFixed(2)}
        </span>
            </div>

            <div
                className="
        flex flex-col gap-2

        border-r border-white/30 max-[400px]:border-none
        px-6
        "
            >
                <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                    Invested
                </h4>

                <span className="text-xl font-bold">
            ${investedValue.toFixed(2)}
        </span>
            </div>

            <div
                className={`
        flex flex-col gap-2
        pl-6

        ${pnl >= 0
                    ? "text-green-400"
                    : "text-red-400"}
        `}
            >
                <h4 className="text-zinc-500 uppercase text-xs tracking-wider">
                    PNL
                </h4>

                <span className="text-xl font-bold">
            {pnl >= 0 ? "+" : "-"}${Math.abs(pnl).toFixed(2)}
        </span>

                <span className="text-sm">
            ({pnlPercent.toFixed(2)}%)
        </span>
            </div>
        </div>
    </>
}



