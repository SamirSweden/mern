
import type { Metadata } from "next"
import NavbarDocs from "@/app/components/shared/docsnav/NavbarDocs";



export const metadata: Metadata = {
    title: "Implementation of Oauth - Github",
    description: "beneficial documentation for next.js - how to add oauth via GitHub",
}


export default function OauthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavbarDocs />
            {children}
        </>
    )
}