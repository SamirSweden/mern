'use client'

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ShieldAlert} from "lucide-react";



export default function SignInPage() {
    const [email , setEmail] = useState('')
    const [code , setCode] = useState('')
    const [step , setStep] = useState<'email' | 'code'>('email')
    const router = useRouter()

    const sendCode = async () => {
        await fetch('api/auth/send-code', {
            method: 'POST',
            body: JSON.stringify({ email })
        })
        setStep('code')
    }

    const verifyCode = async () => {
        const res = await fetch('api/auth/verify-code', {
            method: 'POST',
            body: JSON.stringify({email , code})
        })
        const data = await res.json()

        if(data.success){
            router.push('/dashboard')
        } else{
            alert(data.error)
        }

    }



    return (
        <>
            <section className={'py-5 px-2 h-screen'}>
                <div className="max-w-[1230px] mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center justify-center h-full">

                        <div className={'sign-in-page bg-[#111] w-[500px] rounded-xl py-20 px-10 relative'}>

                            {step === 'email' ? (
                                <>
                                    <div className="flex flex-col items-start gap-3">
                                        <span className={'font-black capitalize mb-2 text-xl'}>email</span>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            className={'py-3 px-6 rounded-lg mb-5 w-full border border-yellow-400 outline-none bg-transparent text-white font-black '}
                                        />
                                        <div className="flex items-center w-full">
                                            <button onClick={sendCode}
                                            className={'py-5 px-4 w-full text-center text-xl hover:bg-blue-600 outline-none border-none text-black capitalize font-bold cursor-pointer bg-yellow-400 rounded-md'}
                                            >continue</button>
                                        </div>
                                        <div className={'mt-4 flex items-center justify-center gap-3 absolute bottom-3 left-[27%]'}>
                                            <span className={'text-center text-lg text-gray-400 text-wrap'}>still can not sign in?</span>
                                            <span className={'text-center text-lg text-violet-400 text-wrap'}>Email us</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col items-start gap-3">
                                        <span className={'font-black capitalize mb-2 text-xl'}>paste code</span>
                                        <input
                                            placeholder={"XXX-XXX"}
                                            onChange={(e) => setCode(e.target.value)}
                                            value={code}
                                            className={'py-3 px-6 rounded-lg mb-5 w-full border border-yellow-400 outline-none bg-transparent text-white font-black '}
                                        />
                                        <div className="flex items-center w-full">
                                            <button onClick={verifyCode}
                                                    className={'py-5 px-4 w-full text-center text-xl hover:bg-blue-600 outline-none border-none text-black capitalize font-bold cursor-pointer bg-yellow-400 rounded-md'}
                                            >sign in</button>
                                        </div>
                                        <div className={'mt-4 flex items-center justify-center gap-3 absolute bottom-3 left-10'}>
                                            <ShieldAlert size={30} />
                                            <span className={'text-center text-sm text-gray-400 text-wrap py-1 px-2 rounded-lg bg-white/10 border border-yellow-500'}>do not share code with others</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/*<div>*/}
                        {/*    {step === 'email' ? (*/}
                        {/*        <>*/}
                        {/*            <input*/}
                        {/*                onChange={(e) => setEmail(e.target.value)}*/}
                        {/*                value={email}*/}
                        {/*                placeholder={'email'}*/}
                        {/*            />*/}
                        {/*            <button onClick={sendCode}>*/}
                        {/*                send code*/}
                        {/*            </button>*/}
                        {/*        </>*/}
                        {/*    ) : (*/}
                        {/*        <>*/}
                        {/*            <input*/}
                        {/*                onChange={(e) => setCode(e.target.value)}*/}
                        {/*                placeholder={'XXX-XXX'}*/}
                        {/*                value={code}*/}
                        {/*            />*/}
                        {/*            <button onClick={verifyCode}>sign up</button>*/}
                        {/*        </>*/}
                        {/*    )}*/}
                        {/*</div>*/}


                    </div>
                </div>
            </section>
        </>
    )
}


