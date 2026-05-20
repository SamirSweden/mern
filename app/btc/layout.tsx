import { Metadata} from "next"
import {Toaster} from "sonner"

export const metadata: Metadata = {
    title: "Panel - invest to btc , solana , and kraken/usdt ",
    description: "",
}



export default function BtcLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            {children}
            <Toaster
                position={'top-right'}
                richColors
            />
        </>
    )
}



