
import { getAccount } from "@/app/lib/store";



export async function GET(){
    try {
        const account = await getAccount()

        return Response.json(account);

    }catch(err){
        console.error(err)
        return new Response(
            JSON.stringify({error: "failed"}),{status: 500}
        );
    }
}



