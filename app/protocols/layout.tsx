

import type {Metadata} from "next";

export const metadata:Metadata = {
    title: "Kraken.su - Explore protocols",
    description: "Kraken.su - explore our protocols , almost 360 protocols situated",
}


export default  function ProtocolsLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}




