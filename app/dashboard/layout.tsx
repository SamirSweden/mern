import type { Metadata } from "next"
import BottomMenu from "@/app/components/UI/BottomMenu";


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




