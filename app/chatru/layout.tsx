

import {Metadata} from "next"

export const metadata: Metadata = {
    title: "Chat - Kraken.su",
    description: "write in chat - Kraken.su",
}



export default function ChatruLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}



