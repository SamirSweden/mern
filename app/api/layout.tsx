
import type {Metadata} from "next";

export const metadata: Metadata = {
    title:"Kraken API center",
    description:"Explore Kraken API , and more.",
}


export default function ApiLayout({children}: {children: React.ReactNode}) {
    return <>

        {children}
    </>
}


