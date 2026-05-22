"use client"


type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;

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

        </>
    )
}






