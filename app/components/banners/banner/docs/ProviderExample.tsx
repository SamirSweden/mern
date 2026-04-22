'use client'

import Image from "next/image";
import exampleCode from "@/app/assets/code5.png";

const ProviderExample = () => {
    return (
        <>
            <section className={'py-20 bg-black'}>
                <div className="max-w-[1024px] mx-auto max-[400px]:px-6 w-full h-full">
                    <div className="grid grid-cols-1 gap-5 ">
                    <h2 className={'text-white text-3xl'}>Пример кода кнопок  &mdash;
                        <span className={'bg-[#111] py-1 px-3 text-lg text-gray-500 rounded-xl'}>LoginPage.tsx </span>
                        после того как пользователь вошел в систему то его перенаправит на /dashaboard за это отвечает
                        <span className={'bg-[#111] py-1 px-3 text-lg text-cyan-500 rounded-xl'}>callbackUrl</span>
                    </h2>
        <div className={'flex items-center flex-col '}>

    <div className={'bg-[#111] py-4 px-6 max-[425px]:px-2 w-full flex items-center justify-between macbook'}>
    <div className="flex items-center gap-2">
    <span className="w-3 h-3  rounded-full bg-red-500 animate-bounce"></span>
        <span className="w-3 h-3  rounded-full bg-yellow-400 animate-pulse"></span>
        <span className="w-3 h-3  rounded-full bg-green-500 animate-bounce"></span>
        </div>
        <h4 className={'text-gray-400 text-lg  max-[388px]:text-sm'}>app/LoginPage.tsx</h4>
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


export default ProviderExample;