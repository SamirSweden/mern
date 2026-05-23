'use client'

import {useEffect , useState} from "react";
import Pusher from "pusher-js";
import {ArrowRight} from "lucide-react";


export default function ChatRu(){
    const [messages , setMessages] = useState<string[]>([]);
    const [message , setMessage] = useState("");

    useEffect(() => {
        const pusher = new Pusher(
            process.env.NEXT_PUBLIC_PUSHER_KEY!,
            {
                cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
            }
        );

        const channel = pusher.subscribe("chat-channel");

        channel.bind("new-message" , (data: any) => {
            setMessages((prev) => [...prev , data.message])
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    },[])

    const sendMessage = async () => {
        if (!message) return;

        await fetch("api/chat", {
            method: 'POST',
            body: JSON.stringify({
                message
            }),
        });

        setMessage("");
    }

    return (
        <>
            <section className={'min-h-screen bg-black px-0'}>
                <div className={'max-w-6xl mx-auto w-full h-full px-4 '}>

                    <div className={'border border-gray-800 h-100 overflow-y-auto p-4 rounded-2xl'}>
                        {messages.map((msg , i) => (
                            <div key={i} className={`rounded-xl  mb-2 bg-[#111]  py-3 px-5 `} >
                                {msg}
                            </div>
                        ))}
                    </div>

                    <div className={'flex gap-2 '}>
                        <input
                            placeholder={'send message'}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`
                                text-white bg-black px-4.5 rounded-xl outline-none focus:border-cyan-600
                                border border-gray-500
                            `}
                        />

                        <button onClick={sendMessage}
                            className={`
                                bg-black rounded-full px-2 py-2 text-white 
                                outline-none border-none cursor-pointer
                            `}
                        >
                            <ArrowRight size={30} className={'text-white'}/>
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}




