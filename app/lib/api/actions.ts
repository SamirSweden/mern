'use server'

export type Message = {
    role: "user" | "assistant",
    content: string
}

export async function SendMessage(messages: Message[]) {

    const res = await fetch("https://api.llmapi.ai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.LLAMA_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama3.1-8b", // 🔥 ВОТ ЭТО ГЛАВНОЕ
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant"
                },
                ...messages
            ]
        })
    });

    const data = await res.json();

    console.log("STATUS:", res.status);
    console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));

    if (!res.ok) {
        throw new Error(JSON.stringify(data));
    }

    return data?.choices?.[0]?.message?.content ?? "no response";
}