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
            <section className={'bg-linear-to-br from-[#383523] z-10  via-black to-[#1c062b] min-h-screen px-0 py-25'}>
                <div className="max-w-7xl  px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex flex-col items-center justify-center h-full">

                        <h1 className="
                          text-[100px] max-[768px]:text-6xl text-center font-black font-mono
                          bg-gradient-to-br from-yellow-400 via-pink-600 to-blue-500
                          bg-[length:300%_100%]
                          bg-clip-text text-transparent
                          animate-[shimmer_3s_linear_infinite]
                        ">
                            {mainContent.heading}
                        </h1>

                        <div className={'flex items-center mt-10 max-[425px]:flex-col max-[425px]:w-full gap-4'}>
                            <LoginButton />
                            <button
                                className={'capitalize cursor-pointer transition-transform duration-300 hover:-translate-y-2 '}
                                onClick={() => router.push('/docs')}>
                                docs
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}




