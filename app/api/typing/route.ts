import { pusher } from "@/app/lib/pusher";
import {NextResponse} from "next/server";


export async function POST(req: Request){
    const body = await req.json();

    await pusher.trigger(
        "chat-channel",
        "typing",
        {
            sender: body.sender,
        }
    )


    return NextResponse.json({
        success: true,
    })
}