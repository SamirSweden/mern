
export default function SkeletonCard(){
    return (
        <>
            <div className="animate-pulse bg-[#111] flex items-center gap-3 shadow-[inset_4px_4px_40px_0_hsla(0,0%,100%,.15)] rounded-xl px-4 py-3 hover:bg-[#1a1a25] transition">
                <div className="flex flex-col">
                    <div className="h-6 w-24 rounded bg-gray-700"></div>
                    <div className="h-4 w-16 rounded bg-gray-600"></div>
                </div>

                <div className="ml-auto bg-gray-600 rounded w-12 h-4"></div>
            </div>
        </>
    )
}


