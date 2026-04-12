'use client'

import './chat.css'
import { useState, useTransition} from "react";
import {SendMessage, Message} from "@/app/lib/api/actions";
import { MoveUp } from "lucide-react";
import Link from "next/link";


export default function Chat(){
    const [messages , setMessages] = useState<Message[]>([]);
    const [input , setInput] = useState("");
    const [isPending , startTransition] = useTransition();


    const handleSend = () => {
        if(!input.trim()) return;

        const newMessages: Message[] = [
            ...messages,
            {role: "user", content: input}
        ];

        setMessages(newMessages);
        setInput("");

        startTransition(async () => {
            const response = await SendMessage(newMessages);

            setMessages(prev  => [
                ...prev,
                {role: "assistant", content: response}
            ])
        })
    }

    return <>

        <section className={'bg-linear-to from-[#111] via-[#191d24]  to-[#1f1c1e] px-0 pt-20'}>
            <div className="max-w-4xl mx-auto px-4 md:px-6 w-full h-full">
                <div className="">
                    <div className={'  min-h-75  p-3 mb-4'}>
                        <div className={'content__chat flex items-start  flex-col'}>
                            <h1 className={'title-gradient'}>
                                <span className={'logo'}>
                                    Kraken gpt <br/>
                                </span>
                                &mdash; <span className={'animate-pulse'}>trading</span>
                                <span className={'span'}>/</span> <span className={'animate-pulse'}>  coding</span>  <span className={'span'}>/</span> <span className={'animate-pulse'}>your best assistant</span> </h1>
                        </div>
                        {messages.map((m,i) => (
                            <div key={i} className={''}>
                                <b>{m.role === "user" ? "you" : "bot"}</b>: {m.content}
                            </div>
                        ))}
                    </div>

                    <div className="absolute left-0 bottom-10 w-full flex justify-center px-4">

                        <div className="relative flex items-center w-full max-w-[50%] max-[768px]:max-w-full bg-black rounded-full p-2 shadow-[inset_4px_4px_10px_5px_hsla(0,0%,100%,.15)] focus-within:ring-2 focus-within:ring-purple-500 transition-all">

                            <input
                                placeholder="Kraken gpt, use the best"
                                className="w-full bg-transparent py-4 px-6 text-white outline-none placeholder:text-gray-500"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />

                            <button
                                disabled={isPending}
                                onClick={handleSend}
                                className="bg-white rounded-full p-3 text-black cursor-pointer shadow-xl hover:shadow-yellow-400 transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                            >
                                <MoveUp size={24} strokeWidth={3} />
                            </button>

                        </div>

                    </div>

                    <div>
                        <span className={'text-center absolute w-full left-1/2 -translate-x-1/2 bottom-0 text-sm text-gray-700'}><Link href={'/'} className={'underline text-white'}> kraken.su</Link> -can make mistakes &mdash; Ryan</span>
                    </div>


                </div>
            </div>
        </section>

    </>
}