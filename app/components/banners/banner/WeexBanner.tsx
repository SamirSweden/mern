

export default function WeexBanner(){
    return (
        <>
            <section className={'relative w-full h-screen overflow-hidden bg-cover bg-center'}
                     style={{
                         backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/67f3e6c85dbf022079ca5e64/1755361912047-DRPV1UQQ78DC0NYDNYI5/a-futuristic-tech-inspired-artwork-featu_NCU_diS-SfGLnhJtIleUsA_1eZrfiMMQJOVI6xlbwZWCQ.jpeg')"
                     }}
            >
                <div className={'absolute inset-0 bg-black/20 z-10'}  />
                <div className="relative z-10 flex h-full flex-col justify-end items-start p-4 sm:p-6 md:p-10">
                   <div className={`backdrop-blur-xs bg-white/10 px-4 py-4 rounded-2xl
                    md:rounded-[60px] sm:px-6 sm:py-5 md:px-8 md:py-7 max-w-full
                   `}>
                       <h1 className="text-5xl font-bold text-gray-400 max-[450px]:text-lg">
                           Use the best &mdash; use <span className={'animate-pulse'}>Kraken</span>
                       </h1>
                       <h2 className="text-gray-500 text-xl mt-4 font-mono font-bold max-[450px]:text-xl">
                           See coins and make right investment
                       </h2>
                   </div>
                </div>
            </section>
        </>
    )
}

