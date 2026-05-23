
import {Metadata} from "next";
import {Toaster} from "sonner"


export const metadata: Metadata = {
    title: "Auth - Kraken.su",
    description: "Chat - Kraken.su, пишите  в личном чате кракена",
}



export default function RoomLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Toaster
                position={"top-right"}
                richColors={true}
            />
            {children}
        </>
    )
}




