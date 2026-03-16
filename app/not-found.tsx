import Header from "./components/header/Header";

import type { Metadata } from "next";
import Footer from "./UI/Footer";

export const metadata: Metadata = {
    title:'404 - not found'
}


export default function NotFound(){
    return (
        <>
            <Header />
            <h1 className="text-white text-center text-2xl py-[200px]">
                домой волтер - 404
            </h1>
            <Footer />
        </>
    )
}


