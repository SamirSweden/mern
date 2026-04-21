

import code2 from "@/app/assets/code2.png"
import Image from "next/image";

const layoutImgExample = "https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Flayout-special-file.png&w=3840&q=75"
const blogExample = 'https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Fblog-nested-route.png&w=3840&q=75'


const LayoutExample = () => {
    return (
        <>
            <section className={' py-10 px-0 bg-black'}>
                <div className="max-w-5xl mx-auto px-4 md:px-6 w-full h-full">
                    <div className="flex flex-col items-start justify-center">

                        <p className={'text-gray-400 text-lg max-[431px]:text-base mb-10'}>
                <span className={'text-gray-400 py-1.5 px-2.5 rounded-xl backdrop-blur-3xl shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] mr-2'}>
                    app/layout.tsx
                </span>
                            &mdash; является серверным компонентом, тут можно описывать SEO теги и layout для страницы &mdash; Отлично подходит для SEO
                        </p>

                        <div className="w-full">
                            <Image
                                src={code2}
                                width={700}
                                height={700}
                                alt={'code2'}
                                priority
                                className={"w-full max-w-[980px] rounded-2xl mx-auto"}
                            />
                        </div>
                        <LayoutPage/>
                        <BlogExample/>
                    </div>
                </div>
            </section>
        </>
    )
}


const LayoutPage = () => {
    return (
        <>
            <div className={' py-10 px-0 bg-black'}>
                <div className="max-w-7xl mx-auto w-full h-full">
                    <div className="flex flex-col items-start justify-center">
                        <h2 className={'capitalize text-white text-3xl mb-10'}>итого &mdash;</h2>
                        <div className="w-full">
                            <Image
                                src={layoutImgExample}
                                width={700}
                                height={700}
                                alt={'code2'}
                                priority
                                className={"w-full max-w-[1000px] rounded-2xl mx-auto"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const BlogExample = () => {
    return (
        <>
            <div className={' py-10 px-0 bg-black'}>
                <div className="max-w-7xl mx-auto w-full h-full">
                    <div className="flex flex-col items-start justify-center">
                        <p className={' text-white text-xl mb-10'}>например в папке
                            <span className={'text-gray-400 py-1.5 px-2.5 rounded-xl ' +
                                'backdrop-blur-3xl shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] mr-2'}>app/</span>
                            есть папка
                            <span className={'text-gray-400 py-1.5 px-2.5 rounded-xl ' +
                                'backdrop-blur-3xl shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] mr-2'}>blog/</span> значит эндпоинт будет /blog
                        </p>
                        <div className="w-full">
                            <Image
                                src={blogExample}
                                width={700}
                                height={700}
                                alt={'code2'}
                                priority
                                className={"w-full max-w-[1000px] rounded-2xl mx-auto"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LayoutExample


