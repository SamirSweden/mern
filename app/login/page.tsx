
"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter();

    async function handleLogin() {
        const response = await fetch("https://api-for-the-crypto-app.vercel.app/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

        const data = await response.json();

        if(!response.ok) {
            alert("an error occured");
            return;
        }

        localStorage.setItem("username", data.username);
        router.push("/dashboard");
    }

    return <>
        <main className="min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-white font-sans p-4">
            <div className="w-full max-w-md p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl font-bold mb-8 text-center tracking-tight text-neutral-100">
                    Registration
                </h1>

                <p className={'text-gray-400 text-sm text-center mb-4'}>Enjoy by using Kraken</p>

                <div className="flex flex-col gap-5">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder="Username"
                        className={'w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition'}
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        className={'w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition'}
                    />

                    <button
                        onClick={handleLogin}
                        className={'w-full py-3 mt-2 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white transition cursor-pointer'}
                    >
                        Register
                    </button>

                </div>
            </div>
        </main>
    </>
}






