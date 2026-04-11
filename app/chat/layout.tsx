


import type {Metadata} from "next";
import SideBar from "@/app/components/shared/sidebar/SideBar";


export const metadata: Metadata = {
    title: "🤖 Kraken gpt",
    description:"use our fresh ai bot , use prompts for trading , coding , and all that stuff"
}


export default function ChatLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <SideBar />
            {children}
        </>
    )
}



