
import type { Metadata } from "next";
import Header from "../components/shared/header/Header";


export const metadata: Metadata = {
    title: "Crypto API trading",
    description:"trade with crypti api"
}


export default function TrateApiLayout({children} : {children: React.ReactNode}){
    return <>
        
        {children}

    </>
}






