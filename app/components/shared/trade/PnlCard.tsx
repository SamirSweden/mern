import {useState} from "react";
import {  ChevronDown } from "lucide-react";

type Props = {
    btc: number;
    currentPrice: number;
    avgPrice: number;
}



export default function PnlCard({btc , currentPrice , avgPrice}: Props) {
    const [open , setOpen] = useState(false)
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

        {/* MOBILE BOTTOM SHEET */}
        {open && (
            <>
                <div
                    onClick={() => setOpen(false)}
                    className="
            fixed inset-0
            bg-black/60
            backdrop-blur-md
            z-40
            "
                />

                <div
                    className="
            fixed bottom-0 left-0 right-0
            z-50
            rounded-t-[32px]
            border-t border-white/10
            bg-zinc-900/80
            backdrop-blur-2xl
            p-6
            text-white
            "
                >
                    <div className="mb-6 flex justify-center">
                        <div className="h-1.5 w-14 rounded-full bg-white/20" />
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            Portfolio Details
                        </h2>

                        <button onClick={() => setOpen(false)}>
                            <ChevronDown />
                        </button>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="flex justify-between">
                    <span className="text-zinc-400">
                        Current Value
                    </span>

                            <span className="font-bold">
                        ${currentValue.toFixed(2)}
                    </span>
                        </div>

                        <div className="flex justify-between">
                    <span className="text-zinc-400">
                        Invested
                    </span>

                            <span className="font-bold">
                        ${investedValue.toFixed(2)}
                    </span>
                        </div>

                        <div className="flex justify-between">
                    <span className="text-zinc-400">
                        PNL
                    </span>

                            <span
                                className={`font-bold ${
                                    pnl >= 0
                                        ? "text-green-400"
                                        : "text-red-400"
                                }`}
                            >
                        {pnl >= 0 ? "+" : "-"}$
                                {Math.abs(pnl).toFixed(2)}
                    </span>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
}



