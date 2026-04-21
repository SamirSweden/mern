

import type { Metadata } from "next"



export const metadata: Metadata = {
    title: "Docs - Kraken",
    description:"read beneficial docs about github oauth"
}


export default function DocsLayout({children} : {children: React.ReactNode}) {
    return <>{children}</>
}




