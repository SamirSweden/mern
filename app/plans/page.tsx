import PlanCard from "@/app/components/banners/cards/PlanCard";


export default  function Plans(){
    return (
        <>
            <section className={`bg-black  py-13 px-0 overflow-y-hidden`}>
                <div className="max-w-7xl mx-auto px-4  w-full h-full">

                    <div className={`
                        flex items-center flex-col gap-4 justify-center mb-10 
                    `}>
                        <h2 className={'font-bold font-mono text-center text-4xl max-[380px]:text-3xl'}> Choose Your Plan</h2>
                        <p className={'font-semibold text-lg text-gray-500 max-[380px]:text-sm'}>Select the perfect plan for your load testing needs</p>
                    </div>
                    <div className="grid grid-cols-3
    max-[1050px]:grid-cols-2
    max-[710px]:grid-cols-1

    gap-5
    max-[430px]:gap-4

    bg-[#111]
    rounded-3xl

    py-10 px-8
    max-[768px]:px-4
    max-[430px]:px-2">
                        <PlanCard  />

                    </div>


                </div>
            </section>
        </>
    )
}



