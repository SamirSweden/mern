import TypesCard from "../cards/TypesCard"



const typesContent = {
    spanText: "features",
    textBottom: "Types of APIs"
}


const TypesBanner = () => {
    return (
        <>
            <section className="bg-black min-h-screen px-0 py-6">
                <div className="max-w-7xl mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex items-center flex-col gap-4 ">
                        <span className="text-gray-300 capitalize text-lg font-extrabold ">{typesContent.spanText}</span>
                        <h4 className="font-bold text-4xl mb-14">{typesContent.textBottom}</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-6 max-[730px]:grid-cols-2 max-[520px]:grid-cols-1 ">
                        <TypesCard />
                    </div>
                </div>
            </section>
        </>
    )
}


export default TypesBanner