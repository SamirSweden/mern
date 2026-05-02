'use client'

import './chat.css'
import { useState, useTransition} from "react";
import {SendMessage} from "@/app/lib/api/actions";
import type { Message } from "@/app/lib/api/actions";
import { MoveUp } from "lucide-react";
import Link from "next/link";
import Markdown from "./Markdown"
import NavbarChat from "@/app/components/UI/NavbarChat";

export default function Chat(){
    const [input , setInput] = useState("");
    const [isPending , startTransition] = useTransition();
    const [messages, setMessages] = useState<Message[]>([]);




    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages: Message[] = [
            ...messages,
            { role: "user", content: input }
        ];

        setMessages(newMessages);
        setInput("");

        startTransition(async () => {
            const response = await SendMessage(newMessages);

            setMessages(prev => [
                ...prev,
                { role: "assistant", content: response }
            ]);
        });
    };

    return <>

        <section className={'pb-32 bg-black min-h-screen px-0 pt-20'}>
            <div className="max-w-4xl mx-auto px-4 md:px-6 w-full h-full">
                <div className="">
                    <NavbarChat />
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
                                <Markdown
                                    key={i}
                                    role={m.role}
                                    content={m.content}
                                />
                        ))}
                    </div>

                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[50%] max-[768px]:max-w-full z-50
bg-black/60 backdrop-blur-2xl
rounded-full p-2
shadow-[inset_4px_4px_10px_5px_hsla(0,0%,100%,.15)]
focus-within:ring-2 focus-within:ring-purple-500 transition-all">

                        <div className="flex items-center w-full">

                            <input
                                placeholder="Kraken gpt, use the best"
                                className="flex-1 bg-transparent py-4 px-6 text-white outline-none placeholder:text-gray-500"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />

                            <button
                                disabled={isPending}
                                onClick={handleSend}
                                className="ml-2 bg-white rounded-full p-3 text-black cursor-pointer shadow-xl
            hover:shadow-yellow-400 transition-all duration-300
            hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                            >
                                <MoveUp size={24} strokeWidth={3} />
                            </button>

                        </div>
                    </div>

                    <div className={'fixed bottom-0 left-0 w-full flex  justify-center z-40\n' +
                        'bg-black/40 backdrop-blur-xl py-2' }>
                        <span className="text-center text-sm text-gray-400">
  <Link href="/" className=" text-white animate-pulse">kraken.su</Link>
                          &mdash;  Ryan
</span>
                    </div>


                </div>
            </div>
        </section>

    </>
}

