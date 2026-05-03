import type { Metadata } from "next";
import Header from "../components/shared/header/Header";


export const metadata: Metadata = {
    title: "Kraken Listings | Tokens Launching Soon on Kraken",
    description: "Be the first to know about all new listings happening at Kraken"
}



export default function ListingLayout({children} : {children: React.ReactNode}) {
    return (
        <>
        <Header />
            <main className={'bg-black min-h-screen'}>
                {children}
            </main>
        </>
    )
}



