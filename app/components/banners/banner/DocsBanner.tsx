import Image from "next/image";
import {ChevronRight} from "lucide-react";


const bannerImg = "https://h8dxkfmaphn8o0p3.public.blob.vercel-storage.com/learn/dark/dashboard-route.png"

const docsContent = {
    startText: "npx create-next-app@latest",
    heading: "The React Framework for the Web",
    text: "установите команду выше - тем самым у вас будет новый проект ",
    routingText: "Routing"
}

export default  function DocsBanner(){
    return (
        <>
            <section className={' py-10 px-0 bg-black'}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full">
                    <div className="flex flex-col items-center justify-center">
                        <span className={'shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] ' +
                            'py-0.5 px-5 rounded-2xl text-sm text-gray flex items-center gap-3'}
                        >
                            <span><ChevronRight /></span>{docsContent.startText}
                        </span>
                        <h1 className={'py-6 text-4xl md:text-6xl lg:text-7xl  font-bold'}>{docsContent.heading}</h1>
                        <p>{docsContent.text}</p>

                        <div className={'mt-[60px] flex items-start flex-col gap-10'}>
                            <h4 className={'text-gray-300 text-3xl'}>{docsContent.routingText} &mdash;</h4>

                            <div className="w-full   md:h-auto">
                                <Image
                                    priority
                                    className={'w-full h-full  rounded-3xl'}
                                    src={bannerImg}
                                    width={700}
                                    height={800}
                                    alt={'project structure'}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


