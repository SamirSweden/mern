'use client'

import type { Metadata } from "next";
import { useEffect } from "react";
import {useRouter} from "next/navigation";
import {clearInterval} from "node:timers";





export default function NotFound(){
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")

            return () => clearInterval(timer)
        },1000)
    },[router])

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-black text-white flex-col">
                <h1 className="text-4xl font-bold">404</h1>
                <p>Page not found </p>
                <p className="text-sm opacity-60 mt-2">main page</p>
            </div>
        </>
    )
}


