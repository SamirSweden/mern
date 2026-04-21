
const mainContent = {
   heading:  "Reach your peak with convenient web3 platform",

}


export default  function MainBanner() {
    return (
        <>
            <section className={'bg-linear-to-br from-[#383523] z-10  via-black to-[#1c062b] min-h-screen px-0 py-25'}>
                <div className="max-w-7xl  px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex flex-col items-center justify-center h-full">

                        <h1 className="
                          text-[100px] max-[768px]:text-6xl text-center font-black font-mono
                          bg-gradient-to-br from-yellow-400 via-pink-600 to-blue-500
                          bg-[length:300%_100%]
                          bg-clip-text text-transparent
                          animate-[shimmer_3s_linear_infinite]
                        ">
                            {mainContent.heading}
                        </h1>

                        <div className={'flex items-center mt-10 max-[425px]:w-full'}>
                            <button className={'capitalize max-[425px]:w-full  text-xl font-extrabold bg-white hover:bg-[#eb8007] text-black hover:text-white px-[100px] py-4.5 rounded-lg'}>
                                login
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}




