import PlanCard from "@/app/components/banners/cards/PlanCard";


export default  function Plans(){
    return (
        <>
            <section className={`bg-black min-h-screen py-13 px-0 overflow-y-hidden`}>
                <div className="max-w-7xl mx-auto px-4 w-full h-full">
                    <div className="grid grid-cols-3 gap-5">
                        <PlanCard  />
                    </div>
                </div>
            </section>
        </>
    )
}