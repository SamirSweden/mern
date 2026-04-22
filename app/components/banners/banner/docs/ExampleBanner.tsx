'use client'

import Image from "next/image";


import exampleCode from "@/app/assets/code3.png"

const ExampleBanner = () => {
    return (
        <>
            <section className={'py-20 bg-black'}>
                <div className="max-w-[1024px] mx-auto max-[400px]:px-6 w-full h-full">
                    <div className="grid grid-cols-1 gap-5 ">
                        <h2 className={'text-white text-3xl'}>Пример кода &mdash;</h2>
                        <div className={'flex items-center flex-col '}>

                            <div className={'bg-[#111] py-4 px-6  w-full flex items-center justify-between macbook'}>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 max-[370px]:w-2 max-w[370px]:h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="w-3 h-3 max-[370px]:w-2 max-w[370px]:h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                                    <span className="w-3 h-3 max-[370px]:w-2 max-w[370px]:h-2 rounded-full bg-green-500 animate-pulse"></span>
                                </div>
                                <h4 className={'text-gray-400 text-2xl capitalize animate-pulse max-[388px]:text-lg'}>server</h4>
                                <h4 className={'text-gray-400 text-lg lowercase max-[388px]:text-sm'}>/api/auth/[...nextauth].ts</h4>
                            </div>

                            <Image
                                src={exampleCode}
                                width={700}
                                height={700}
                                className={'w-full '}
                                alt="example code"
                                priority
                            />

                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .macbook{
                    border-radius:20px 20px 0 0
                }
            `}</style>
        </>
    )
}

export default ExampleBanner



