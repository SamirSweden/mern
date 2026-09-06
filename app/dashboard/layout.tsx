
import type {Metadata} from "next"
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Kraken Dashboard  for using and enjoying",
}

export default function DashboardLayout({children}: {children: ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}


