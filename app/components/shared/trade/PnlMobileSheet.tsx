"use client"


import {ChevronDown} from "lucide-react";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

    currentValue:number;
    investedValue: number;
    pnl: number;
    pnlPercent:number;
    positive: boolean
}

export default function PnlMobileSheet({open,setOpen, currentValue, investedValue, pnl,pnlPercent,positive}: Props) {
    if(!open) return null;

    return (
        <>
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 md:hidden  bg-black/60 backdrop-blur-3xl z-40`} />

            <div className={`
                md:hidden  
                fixed left-0 right-0 bottom-0 z-50
                rounded-t-4xl p-6 border border-white/10 
                bg-zinc-900/80 backdrop-blur-xl text-white
            `}>
                <div className={'mb-6 flex justify-center '}>
                    <div className="bg-white/20 h-2 w-14 rounded-full" />
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
                    <Row label={"Current value"} value={`$${currentValue.toFixed(2)}`} />
                    <Row label={'Invested'} value={`$${investedValue.toFixed(2)}`} />
                    <Row label={'PnL'} color={positive ? "text-green-400" : "text-red-400"}
                         value={`${positive ? "+" : "-"}${Math.abs(pnl).toFixed(2)}`} />
                    <Row label={'Return'} value={`${pnlPercent.toFixed(2)}%`}
                         color={positive ? "text-green-400" : "text-red-400"}
                    />
                </div>

            </div>
        </>
    )
}

function Row({
    label ,
    value,
    color
}: {label: string; value: string; color?:string}){
    return<>
        <div className="flex items-center justify-between">
            <span className={'text-zinc-400'}>{label}</span>
            <span className={`font-bold ${color ?? "text-white"}`}>
                {value}
            </span>
        </div>
    </>
}




