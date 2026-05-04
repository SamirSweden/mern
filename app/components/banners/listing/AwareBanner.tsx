'use client'

import {useRouter} from "next/navigation";

const content = {
    title: "Want to stay aware of new listings?",
    text: "Be the first to know about all new listings happening at Kraken",
    btnText: "Follow @krakenfx"
}




const  AwareBanner  = () => {

    const router = useRouter()
    return(
        <>
            <section className="mt-20 h-[50vh] py-17 px-0 ">
                <div className="max-w-6xl md:px-6 px-4 mx-auto w-full relative h-full">
                    <div className="flex items-center justify-center flex-col   gap-5 bg-violet-600 py-5 px-5 rounded-2xl">
                        <h2 className="text-white text-5xl  font-bold  text-[clamp(2rem,6vw,5rem)] text-center">{content.title}</h2>
                        <p className="text-white text-xl text-wrap">{content.text}</p>
                        <div className="flex items-center">
                            <button onClick={() => window.open("https://x.com/krakenfx", "_blank")}  className="bg-white text-violet-800 font-bold py-3 px-6 rounded-xl hover:bg-white/55 ">
                                {content.btnText}
                            </button>
                        </div>
                    </div>
                    <span className="text-center text-white border border-gray-400 transition-transform capitalize rotate-25 bg-white/10 backdrop-blur-sm rounded-full py-3 px-4  absolute bottom-2 left-[-10px] flex items-center justify-center ">trade with Ryan</span>
                </div>
                
            </section>
        </>
    )
}

export default AwareBanner 
