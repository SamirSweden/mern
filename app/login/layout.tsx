
import type {Metadata} from "next"


export const metadata: Metadata = {
    title: "Trader - KrakenView.su",
    description: "login before explore krakenView.su - learn how to invest , buy indicators",
}



export default function LoginLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}