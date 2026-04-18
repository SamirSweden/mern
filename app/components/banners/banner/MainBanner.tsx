
const mainContent = {
   heading:  "Reach your peak with convenient web3 platform",

}


export default  function MainBanner() {
    return (
        <>
            <section className={'bg-linear-to-br from-[#383523]  via-black to-[#1c062b] min-h-screen px-0 py-25'}>
                <div className="max-w-7xl  px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center justify-center h-full">

                        <h1 className={'text-[100px] text-gray-500 max-[768px]:text-6xl text-wrap animate-pulse text-center font-black font-mono '}>
                            {mainContent.heading}
                        </h1>

                    </div>
                </div>
            </section>
        </>
    )
}




