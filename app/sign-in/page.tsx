'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";
import {ShieldAlert} from "lucide-react";
import NavLogin from "@/app/components/UI/NavLogin";



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
            <NavLogin />
            <section className={'overflow-y-hidden px-2 h-[75vh]'}>
                <div className="max-w-[1230px] mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center justify-center h-full">

                        <div className={'sign-in-page shadow-[inset_4px_4px_40px_0_hsla(0,0%,100%,.15)] w-125 rounded-xl py-20 px-10 relative'}>

                            {step === 'email' ? (
                                <>
                                    <div className="flex flex-col items-start gap-3">
                                        <span className={'font-black capitalize mb-2 text-xl'}>email</span>
                                        <input
                                            required={true}
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
                                            <span className={'text-center text-sm text-gray-400 text-wrap'}>still can not sign in?</span>
                                            <span className={'text-center text-sm text-violet-400 text-wrap'}>Email us</span>
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
                                            <span className={'text-center text-sm text-gray-400 text-wrap py-1 px-2 rounded-lg shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)]'}>do not share code with others</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


