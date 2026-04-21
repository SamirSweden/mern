import {ChevronRight} from "lucide-react";
import Image from "next/image";


const authPhoto = "https://devio2023-media.developers.io/wp-content/uploads/2023/01/Auth.png"

export default function OauthBanner() {
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



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}









