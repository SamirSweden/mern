
import {Metadata} from "next"
import Header from "@/app/components/shared/header/Header";


export const metadata:Metadata = {
    title: "Crypto game - hamster",
    description: "Crypto game , earn via crypto game then invest your usdt",
}


export default function HamsterLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header  />
            {children}
        </>
    )
}




