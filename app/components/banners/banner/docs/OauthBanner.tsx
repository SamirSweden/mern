'use client'

import {ChevronRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";


const authPhoto = "https://devio2023-media.developers.io/wp-content/uploads/2023/01/Auth.png"

export default function OauthBanner() {
    const router = useRouter();

    return (
        <>
            <section className={' py-10 px-0 bg-black'}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full">
                    <div className="flex flex-col items-center justify-center">
                        <span className={'shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] ' +
                            'py-0.5 px-5 rounded-2xl text-sm text-gray flex items-center gap-3'}
                        >
                            <span className={'flex items-center gap-2'}><ChevronRight />nmp install next-auth</span>
                        </span>
                        <h1 className={'py-6 text-4xl md:text-6xl lg:text-7xl  font-bold'}></h1>
                        <p></p>

                        <div className={' flex items-start flex-col gap-4'}>

                            <Image src={authPhoto} width={400} height={400} alt={'auth.js'} />

                            <h4 className={'text-gray-300 text-4xl font-black max-[370px]:text-xl text-center '}>Authentication for Next.js</h4>

                            <div className="flex items-center justify-center w-full">
                                <button
                                    className={'bg-white text-black hover:bg-white/55 w-full py-5 rounded-full capitalize cursor-pointer'}
                                    onClick={() => router.push('https://next-auth-example.vercel.app/auth/signin?callbackUrl=https%3A%2F%2Fnext-auth-example.vercel.app%2F')}>
                                    live demo
                                </button>
                            </div>

                        </div>
                    </div>
                    <StartAuthBanner />
                </div>

            </section>
        </>
    )
}


const StartAuthBanner = () =>  {
    return <>
        <div className="mt-10 px-4 ">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:items-center shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] py-2 px-2 rounded-2xl">
                <p className="text-gray-300 font-black text-sm md:text-xl leading-relaxed break-words">
                    Для старта установите команду выше, далее зайдите в
                    <Link
                        href="https://github.com/settings/developers"
                        target="_blank"
                        className="text-gray-500  text-sm underline ml-2 break-all"
                    >
                        <br/>
                        github.com/settings/developers
                    </Link>
                </p>

                <div className="text-gray-300 text-sm md:text-base shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] py-2 px-2 rounded-2xl ">
                    <h2 className="flex flex-wrap items-center gap-2">
                        В Github developers сохраните
                        <span className="shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] rounded-xl py-1 px-3">
                            GITHUB_ID
                        </span>

                        <span className="shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] rounded-xl py-1 px-3">
                            GITHUB_SECRET
                        </span>
                        в файл как
                        <span className="shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] rounded-xl py-1 px-3">
                            .env.local
                        </span>
                        также нужно добавить ссылку для Authorization callback URL
                        <span className="shadow-[inset_4px_4px_70px_0_hsla(0,0%,100%,.15)] rounded-xl py-1 px-3">
                            http://localhost:3000/api/auth/callback/github
                        </span>
                    </h2>
                </div>

            </div>
        </div>
    </>
}








// https://github.com/settings/developers






