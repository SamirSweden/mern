'use client'


import { useRouter } from "next/navigation";

const tradeBanner = {
  spanText: "Kraken Institutional",
  headingText: "API trading",
  text: "Reliable, low latency trading backed by industry-leading security and compliance.",
};

const TradeBanner = () => {
    const router = useRouter()

  return (
    <>
      <section className="h-screen py-12 px-0">
        <div className="max-w-6xl md:px-6 px-4 mx-auto w-full h-full">
          <div className="flex items-center justify-center h-full ">
            <div className=" flex flex-col gap-10 items-start max-[700px]:mt-4">
              <span className="text-sm  text-white capitalize py-1 px-5 bg-linear-to-br from-[#111] bg-[#333333] rounded-xl">
                {tradeBanner.spanText}
              </span>
              <h2 className="text-5xl text-wrap text-white ">
                {tradeBanner.headingText}
              </h2>
              <p className="text-wrap text-white text-lg ">
                {tradeBanner.text}
              </p>
              <div className="flex items-center max-[400px]:w-full">
                <button 
                    onClick={() => router.push('/')}
                    className="bg-white text-black max-[400px]:w-full rounded-2xl py-3 px-6 cursor-pointer text-lg capitalize hover:bg-white/60" 
                >
                    get started 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradeBanner;
