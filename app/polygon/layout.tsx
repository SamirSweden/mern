import type { Metadata } from "next";
import Header from "@/app/components/shared/header/Header";

export const metadata: Metadata = {
    title: "Polygon Wallet",
    description:"explore polygon wallet with Kraken",
}


export default function PolygonLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}



