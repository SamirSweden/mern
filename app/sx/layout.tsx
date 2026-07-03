
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "RyanHaylin",
    description:"SX cutes",
}

export default function  SxLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}


