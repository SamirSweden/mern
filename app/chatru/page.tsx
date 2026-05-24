'use client'

import {useEffect , useState , useRef} from "react";
import Pusher from "pusher-js";
import {ArrowRight} from "lucide-react";

import Link from "next/link"
import Image from "next/image";

const krakenLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/K-logo-wikipedia.svg/1280px-K-logo-wikipedia.svg.png"

type Message = {
    id: string;
    text: string;
    sender:string;
    read: boolean;
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

        channel.bind("new-message" ,async  (data: Message) => {
            setMessages((prev) => [...prev , data]);

            if(data.sender !== myId){
                await fetch("/api/read", {
                    method: "POST",
                    body: JSON.stringify({
                        id: data.id
                    })
                })
            }
        });

        channel.bind("message-read", (data:{id:string}) => {
           setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === data.id ? {...msg , read: true} : msg)
           )
        });


        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }


    },[myId])


    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!message) return;

        await fetch("/api/chat", {
            method: 'POST',
            body: JSON.stringify({
                id: crypto.randomUUID(),
                text: message,
                sender: myId,
                read:false,
            }),
        });

        setMessage("");
    }

    return (
        <>
            <section className={'h-screen bg-black px-0 flex flex-col'}>
                <ChatHeader  />
                <div className={'max-w-4xl mx-auto  w-full  px-4 flex flex-1 flex-col'}>

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
                                        break-words 
                                        rounded-2xl
                                        px-5 py-3 
                                        max-w-[70%]
                                        text-white  
                                        ${isMe 
                                        ? "bg-[#111] shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)]   rounded-br-sm" 
                                        : "rounded-bl-sm bg-violet-700"}
                                    `}>
                                        <div>
                                            {msg.text}
                                        </div>


                                            {isMe && (
                                                <div className={'text-base text-right mt-1 opacity-70 '}>
                                                    {
                                                        msg.read
                                                            ? "Прочитано только что"
                                                            : "Отправлено только что"
                                                    }
                                                </div>
                                            )}

                                    </div>



                                </div>
                            )
                        })}
                        <div ref={bottomRef} />
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
                            onKeyDown={(e) => {
                                if(e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
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



function ChatHeader(){
    return<>
        <div className={'bg-black px-0 py-4'}>
            <div className="max-w-4xl mx-auto ">
                <div className={`flex items-center justify-between py-4 px-3 bg-zinc-950 rounded-3xl shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)]`}>
                    <Link href={'/'} className={"flex items-center gap-1"}>
                        <Image src={krakenLogo} alt={'kraken'} width={150} height={150}  />
                        <span className={'font-bold font-mono text-2xl'}>gram</span>
                    </Link>
                    <ul className={'flex items-center gap-3'}>
                        <Link href={'/'} className={'text-gray-400 capitalize hover:text-white font-mono font-black'}>home</Link>
                        <Link href={'/planc'} className={'text-gray-400 capitalize hover:text-white font-mono font-black'}>pricing</Link>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
