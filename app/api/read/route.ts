

import Pusher from "pusher"
import {supabase} from "@/app/lib/supabase";

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    useTLS: true,
})



export async  function POST(req: Request){
    const body = await req.json();


    await supabase.from("messages").update({read: true}).eq("id",body.id)

    await pusher.trigger(
        "new-channel",
        "message-read",
        {
            id: body.id
        }
    )

    return Response.json({
        success: true
    })
}



