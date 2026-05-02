import type { Metadata } from "next"


export const metadata: Metadata = {
    title:"Kraken.su - Dashboard",
    description:"Dashboard of Kraken , explore our coins and make investments",
}




export default function DashboardLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}




