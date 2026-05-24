

import Pusher from 'pusher';
import {supabase} from "@/app/lib/supabase";

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    useTLS: true,
})



export async function POST(req: Request){
    const body = await req.json();

    const {
        id,
        text,
        sender,
        read,
    } = body;


    await supabase
        .from("messages")
        .insert({
            id,
            text,
            sender,
            read
        })



    await pusher.trigger("chat-channel", "new-message", {
        id , text , sender , read
    });

    return Response.json({
        success: true
    })
}

