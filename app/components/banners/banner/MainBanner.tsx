'use client'


import LoginButton from "@/app/components/UI/LoginButton";
import {useRouter} from "next/navigation";

const mainContent = {
   heading:  "Reach your peak with convenient Web3 platform",
}


export default  function MainBanner() {
    const router = useRouter();

    return (
        <>
            <section className={'bg-black min-h-screen px-0 py-25'}>
                <div className="max-w-7xl  px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="
                          text-center font-black font-mono
                          bg-linear-to-br from-violet-500 via-pink-600 to-yellow-500
                          bg-size-[300%_100%]
                          bg-clip-text text-transparent
                          animate-[shimmer_3s_linear_infinite]
                          leading-none
                          text-4xl sm:text-6xl md:text-8xl lg:text-[100px]
                        ">
                            {mainContent.heading}
                        </h1>

                        <div className={'flex items-center mt-10 max-[425px]:flex-col max-[425px]:w-full gap-4'}>
                            <LoginButton />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}




