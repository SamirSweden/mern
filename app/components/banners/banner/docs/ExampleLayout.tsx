'use client'




import Image from "next/image";
import exampleCode from "@/app/assets/code4.png";

const ExampleLayout = () => {
    return <>
        <section className={'py-20 bg-black'}>
            <div className="max-w-[1024px] mx-auto max-[400px]:px-6 w-full h-full">
                <div className="grid grid-cols-1 gap-5 ">
                    <h2 className={'text-white text-3xl'}>Пример кода &mdash;<span className={'bg-[#111] py-1 px-3 text-lg text-gray-500 rounded-xl'}>layout.tsx </span>
                     следует обернуть с помощью <span className={'bg-[#111] py-1 px-3 text-xl text-cyan-400 rounded-xl'}>SessionProvider</span> , иначе oauth работать не будет и сайт упадет с ошибкой
                    </h2>
                    <div className={'flex items-center flex-col '}>

                        <div className={'bg-[#111] py-4 px-6 max-[425px]:px-2 w-full flex items-center justify-between macbook'}>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3  rounded-full bg-red-500 animate-bounce"></span>
                                <span className="w-3 h-3  rounded-full bg-yellow-400 animate-bounce"></span>
                                <span className="w-3 h-3  rounded-full bg-green-500 animate-bounce"></span>
                            </div>
                            <h4 className={'text-gray-400 text-lg  max-[388px]:text-sm'}>app/components/Providers.tsx</h4>
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
                <ExampleBannernd />
            </div>

        </section>

        <style jsx>{`
                .macbook{
                    border-radius:20px 20px 0 0
                }
            `}</style>
    </>
}


const ExampleBannernd = () => {
    return (
        <>
            <section className={'py-20 bg-black'}>
                <div className="max-w-[1024px] mx-auto max-[400px]:px-6 w-full h-full">
                    <div className="grid grid-cols-1 gap-5 ">
                        <h2 className={'text-white text-3xl'}>Пример кода &mdash;<span className={'bg-[#111] py-1 px-3 text-lg text-gray-500 rounded-xl'}>Providers.tsx </span></h2>
                        <div className={'flex items-center flex-col '}>

                            <div className={'bg-[#111] py-4 px-6 max-[425px]:px-2 w-full flex items-center justify-between macbook'}>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3  rounded-full bg-red-500 animate-bounce"></span>
                                    <span className="w-3 h-3  rounded-full bg-yellow-400 animate-bounce"></span>
                                    <span className="w-3 h-3  rounded-full bg-green-500 animate-bounce"></span>
                                </div>
                                <h4 className={'text-gray-400 text-lg  max-[388px]:text-sm'}>app/components/Providers.tsx</h4>
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


export default ExampleLayout
