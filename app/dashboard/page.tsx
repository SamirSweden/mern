"use client"


import {useRouter} from "next/navigation";
import {useState} from "react";


export default function Dashboard() {
    const router = useRouter();

    const [username] = useState(
        typeof window !== "undefined"
            ? localStorage.getItem("username")
            : ""
    )

    function logout(){
        localStorage.removeItem("username");
        router.push("/")
    }

    return<>
        <main className="min-h-screen bg-neutral-950 text-white font-sans flex flex-col">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm">
                        App
                    </div>
                    <span className="font-medium text-neutral-400 text-sm">Dashboard</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-neutral-400">Signed in as</p>
                        <p className="text-sm font-semibold text-neutral-200">{username}</p>
                    </div>

                    <button
                        onClick={logout}
                        className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="max-w-7xl w-full mx-auto p-6 md:p-8 flex-1 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-100 flex items-center gap-2">
                            Hello, {username} <span className="animate-bounce">👋</span>
                        </h1>
                        <p className="text-neutral-400 text-sm mt-1">
                            Here is whats happening with your account today.
                        </p>
                    </div>

                    <button className="px-4 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition cursor-pointer">
                        + New Action
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Total Activity</span>
                        <p className="text-3xl font-bold mt-2 text-neutral-100">1,284</p>
                        <p className="text-xs text-emerald-400 mt-2 font-medium">↑ +12% from last week</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Storage Used</span>
                        <p className="text-3xl font-bold mt-2 text-neutral-100">64.2 GB</p>
                        <p className="text-xs text-neutral-400 mt-2 font-medium">Of 100 GB cap</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Security Status</span>
                        <p className="text-3xl font-bold mt-2 text-emerald-400">Protected</p>
                        <p className="text-xs text-neutral-400 mt-2 font-medium">2FA Enabled</p>
                    </div>
                </div>

                <div className="flex-1 rounded-2xl bg-neutral-900/50 border border-neutral-800 border-dashed p-8 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 mb-3">
                        ⚡
                    </div>
                    <p className="text-sm font-medium text-neutral-300">Your feed is ready</p>
                    <p className="text-xs text-neutral-500 mt-1 max-w-sm">
                        Start building your application widgets or add analytics cards to this workspace.
                    </p>
                </div>
            </div>
        </main>
    </>
}






