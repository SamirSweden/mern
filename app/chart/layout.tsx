import type { Metadata } from "next"



export const metadata: Metadata = {
    title: "Kraken - cryptocurrency chart",
    description:"Kraken crypto-chart - make investment by learning stocks and graphs",
}



export default  function ChartLayout({children} : {children: React.ReactNode}) {
    return (
        <>{children}</>
    )
}




