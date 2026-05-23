

import Pusher from 'pusher';

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    useTLS: true,
})



export async function POST(req: Request) {
    const body = await req.json();

    const {text , sender} = body;

    await pusher.trigger("chat-channel", "new-message", {
        text,
        sender
    })

    return Response.json({ success: true })
}

