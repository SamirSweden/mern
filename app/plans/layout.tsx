

import {Metadata} from "next"



export const metadata: Metadata = {
    title: "",
    description: "",
}

export default function PlansLayout({children} : {children: React.ReactNode}) {
    return <>
        {children}
    </>
}



