'use client'

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";



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
            <nav className={'py-5 px-2 min-h-screen'}>
                <div className="max-w-[1230px] mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center justify-left">
                        <Link className={'z-50 text-center outline-none border-none text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken</Link>


                        <div>
                            {step === 'email' ? (
                                <>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder={'email'}
                                    />
                                    <button onClick={sendCode}>
                                        send code
                                    </button>
                                </>
                            ) : (
                                <>
                                    <input
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder={'XXX-XXX'}
                                        value={code}
                                    />
                                    <button onClick={verifyCode}>sign up</button>
                                </>
                            )}
                        </div>


                    </div>
                </div>
            </nav>
        </>
    )
}


