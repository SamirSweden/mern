'use client'


import { signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default  function LoginButton(){
    const {data: session} = useSession()
    const router = useRouter()


    if(session){
        return <>
            <p>вы вошли как {session.user?.email}</p>
            <button
                className={''}
                onClick={() => signOut()}
            >
                logout
            </button>
        </>
    }

    return (
        <>
                <button
                    onClick={() => signIn("github", {callbackUrl:"/dashboard"})}
                    className={'capitalize max-[425px]:w-full  text-xl font-extrabold bg-white hover:bg-[#1f1c15] capitalize text-black hover:text-white px-[40px] py-4.5 rounded-lg'}>
                    login via GitHub
                </button>

        </>
    )
}






