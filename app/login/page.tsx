'use client'

import {signIn} from "next-auth/react";


export default  function LoginPage(){
    return (
        <>
           <section className={'h-screen bg-white'}>
                <div className="max-w-7xl mx-auto px-6 w-full h-full">
                    <div className="flex  items-center justify-center h-[70%]">
                            <div className={'flex flex-col items-center justify-center'}>
                                <video
                                    className="w-40"
                                    autoPlay
                                    loop
                                    playsInline
                                    preload="auto"
                                    disablePictureInPicture
                                    poster="https://assets.kraken.com/illustrations/animated/posters/Beast_Web.webp"
                                >
                                    <source
                                        src="https://assets.kraken.com/illustrations/animated/hevc/Beast_Web.mov"
                                        type='video/mp4; codecs="hvc1"'
                                    />
                                    <source
                                        src="https://assets.kraken.com/illustrations/animated/webm/Beast_Web.webm"
                                        type="video/webm"
                                    />
                                </video>
                                <button className={'shadow-2xl hover:shadow-gray-950 text-black bg-yellow-300 capitalize hover:bg-yellow-400 py-5 px-10 rounded-xl transition-transform duration-300 hover:-translate-y-2'}
                                    onClick={() => signIn("github" , {callbackUrl:'/dashboard'}) }
                                >
                                    login with Github
                                </button>
                            </div>

                    </div>
                </div>
           </section>
        </>
    )
}




























