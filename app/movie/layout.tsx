import type { Metadata } from "next";


export const metadata: Metadata = {
    title:'Vue cinema'
}


export default function MovieLayout({children}: {children: React.ReactNode}){
    return <>{children}</>
}