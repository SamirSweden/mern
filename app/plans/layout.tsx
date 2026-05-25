

import {Metadata} from "next"
import Header from "@/app/components/shared/header/Header";



export const metadata: Metadata = {
    title: "Stormer plans - kraken",
    description: "invest with ryan ",
}

export default function PlansLayout({children} : {children: React.ReactNode}) {
    return <>
        <Header />
        {children}
    </>
}



