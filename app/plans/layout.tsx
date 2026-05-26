

import {Metadata} from "next"
import Header from "@/app/components/shared/header/Header";



export const metadata: Metadata = {
    title: "Stormer plans - Choose the Best indicator and get rich yourself",
    description: "invest with ryan ",
}

export default function PlansLayout({children} : {children: React.ReactNode}) {
    return <>
        <main className={'min-h-screen bg-black'}>
            <div className={'max-w-6xl mx-auto w-full h-full px-4'}>
                <Header />
                {children}
            </div>
        </main>
    </>
}



