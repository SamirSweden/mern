import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Footer from "./UI/Footer";

import { redirect } from "next/navigation";

export default function Home(){
    
    redirect('/todos');

    return (
        <>
        
            <Header />
            <main>
                <Banner/>
            </main>
            <Footer />
        </>
    )
}

