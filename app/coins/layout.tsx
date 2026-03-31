

import type {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Kraken crypto coins",
    description:"explore then invest with Ryan , CryptoJS, Kraken crypto",
}


export default function CoinsLayout({children} : {children: React.ReactNode})
{
    return (
        <>
            {children}
        </>
    )
}


