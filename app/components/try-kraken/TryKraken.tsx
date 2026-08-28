import Image from "next/image";

const krakenPhoto = "https://assets-cms.kraken.com/images/51n36hrp/facade/d73d254daec5b3bfcccd3b8c05fd35202025c86a-1200x1200.png?w=1536&fit=min";

const TryKraken = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">





            <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

                <div className="flex w-full max-w-xl flex-col items-center text-center">

                    <Image
                        src={krakenPhoto}
                        width={100}
                        height={100}
                        priority
                        alt={'kraken'}
                    />

                    <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                        Make your first move
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-7 text-white/70">
                        Create your free account and get started in minutes.
                    </p>

                    <button
                        className="
                            outline-none
                            cursor-pointer
                            mt-10
                            w-full
                            max-w-sm
                            rounded-xl
                            px-8
                            py-4
                            text-base
                            font-medium
                            text-black
                            transition
                            bg-white
                            hover:bg-yellow-400
                            active:scale-[0.98]
                        "
                    >
                        Get started
                    </button>

                </div>

            </div>

        </section>
    );
};

export default TryKraken;