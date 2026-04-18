import { getAccount , updateBalance , removePosition  } from "@/app/lib/store";


function calcPnL(pos , price){
    if(pos.side == "LONG") {
        return (price - pos.price) * pos.size
    }
    return (pos.entry - price) * pos.size
}


export async function POST(req: Request) {
    const {index , price } = await req.json();

    const account = getAccount()
    const pos = account.positions[index]

    const pnl = calcPnL(pos , price);

    updateBalance(pnl)
    removePosition(index)
    return Response.json({ pnl })
}

