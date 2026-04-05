



export default function Loading(){
    return (
        <>
            <div className="p-6 grid md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div 
                        key={i}
                        className="bg-gray-700 h-40 rounded-2xl animate-pulse" />
                ))}
            </div>
        </>
    )
}

