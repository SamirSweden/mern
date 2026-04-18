import { addPosition } from "@/app/lib/store";


export async function POST(req: Request) {
    const body = await req.json()
    const {side , price , size} = body;

    addPosition({
        side , // long || short
        entry: price,
        size,
        createdAt: Date.now()
    })

    return Response.json({
        ok:true
    })
}




