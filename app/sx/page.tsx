const Sx = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
                    <h1 className="text-xl font-bold">elite_dev</h1>

                    <div className="flex gap-4 text-2xl">
                        <span>➕</span>
                        <span>☰</span>
                    </div>
                </div>

                {/* Profile */}
                <div className="p-5">
                    <div className="flex items-center gap-6">
                        <img
                            src="https://i.pravatar.cc/150?img=5"
                            alt="Avatar"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white"
                        />

                        <div className="flex flex-1 justify-around text-center">
                            <div>
                                <h2 className="font-bold text-lg">12</h2>
                                <p className="text-zinc-400 text-sm">Posts</p>
                            </div>

                            <div>
                                <h2 className="font-bold text-lg">4.2K</h2>
                                <p className="text-zinc-400 text-sm">Followers</p>
                            </div>

                            <div>
                                <h2 className="font-bold text-lg">311</h2>
                                <p className="text-zinc-400 text-sm">Following</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-semibold">Elite Dev</h2>
                        <p className="text-zinc-400">
                            🚀 Full Stack Developer
                            <br />
                            React • Next.js • NestJS • Kotlin
                        </p>
                    </div>

                    <div className="flex gap-3 mt-5">
                        <button className="flex-1 bg-zinc-800 rounded-lg py-2">
                            Edit profile
                        </button>

                        <button className="flex-1 bg-zinc-800 rounded-lg py-2">
                            Share profile
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-1 mt-8">
                        {Array.from({ length: 18 }).map((_, index) => (
                            <img
                                key={index}
                                src={`https://picsum.photos/300/300?random=${index}`}
                                alt=""
                                className="aspect-square object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sx;