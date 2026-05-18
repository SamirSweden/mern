'use client'


import { signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default  function LoginButton(){
    const {data: session} = useSession()


    if(session){
        return <>
            <div className="flex items-center flex-col max-[375px]:w-full">
                <p className={'text-gray-600 '}>{session.user?.email}</p>
                <div className="flex items-center ">
                    <button
                        className={`mt-4 max-[375px]:w-full
                        bg-[#111] rounded-2xl py-3 px-4 w-full
                    `}
                        onClick={() => signOut()}
                    >
                        logout
                    </button>
                </div>
            </div>
        </>
    }

    return (
        <>
                <button
                    onClick={() => signIn("github", {callbackUrl:"/dashboard"})}
                    className={'max-[425px]:w-full  text-xl font-extrabold bg-white hover:bg-[#1f1c15] capitalize text-black hover:text-white px-10 py-4.5 rounded-lg'}>
                    login via GitHub
                </button>

        </>
    )
}






