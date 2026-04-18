'use client'

import { useEffect } from "react";
import Image from "next/image";

const Logo = "https://assets-cms.kraken.com/images/51n36hrp/facade/05e644b980a0dc12baa6db4c5dbcacb70c95c468-361x100.png?w=1536&fit=min"

const SplashScreen = ({finishLoading} : { finishLoading: () => void}) => {
    useEffect(() => {
        const timeout = setTimeout(() => finishLoading(),3000)
        return () => clearTimeout(timeout)
    },[finishLoading])

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center flex-col justify-center bg-black text-white">
                <Image src={Logo} width={200} height={100} alt={'logo'} />
                <h1 className="text-7xl font-bold animate-pulse mt-5">kraken.su</h1>
                <div className="flex items-center justify-center mt-10">
                    <span className={'bg-clip-text text-transparent text-4xl bg-linear-to-br from-[#ebb609] to-[#e312b9] text-xl capitalize'}>Azimov &mdash; Kraken.su</span>
                </div>
            </div>
        </>
    )
}


export default SplashScreen
