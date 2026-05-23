'use client'

import {useEffect , useState , useRef} from "react";
import Pusher from "pusher-js";
import {ArrowRight} from "lucide-react";


type Message = {
    text: string;
    msg: string;
    sender:string;
}

export default function ChatRu(){
    const [messages , setMessages] = useState<Message[]>([]);
    const [message , setMessage] = useState("");
    const bottomRef = useRef<HTMLDivElement | null>(null);


    const [myId] = useState(() => crypto.randomUUID());

    useEffect(() => {
        const pusher = new Pusher(
            process.env.NEXT_PUBLIC_PUSHER_KEY!,
            {
                cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
            }
        );

        const channel = pusher.subscribe("chat-channel");

        channel.bind("new-message" , (data: Message) => {
            setMessages((prev) => [...prev , data])
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    },[])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!message) return;

        await fetch("/api/chat", {
            method: 'POST',
            body: JSON.stringify({
                text: message,
                sender: myId,
            }),
        });

        setMessage("");
    }

    return (
        <>
            <section className={'min-h-screen bg-black px-0'}>
                <div className={'max-w-6xl mx-auto h-screen w-full  px-4 flex flex-col'}>

                    <div className={'flex-1  overflow-y-auto py-4 '}>
                        {messages.map((msg , i) => {
                            const isMe = msg.sender === myId;

                            return(
                                <div key={i}
                                    className={`
                                        mb-2 flex 
                                        ${isMe ? "justify-end" : "justify-start"}
                                    `}
                                >
                                    <div className={`
                                        wrap-break-word
                                        rounded-2xl 
                                        max-w-[70%]
                                        py-3 px-5
                                        text-white
                                        ${isMe 
                                        ? "bg-[#111] shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)]   rounded-br-sm" 
                                        : "rounded-bl-sm"}
                                    `}>
                                        {msg.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={'flex gap-2  bg-black py-4'}>
                        <input
                            placeholder={'send message'}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`
                            w-full
                                text-white bg-black px-4.5 rounded-xl outline-none focus:border-cyan-600
                                border border-gray-500
                                
                            `}
                        />

                        <button
                            onClick={sendMessage}
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




