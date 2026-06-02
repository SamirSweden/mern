"use client";

const content = {
  heading: "Secure. Transparent. Reliable.",
  desc: "Get started today and benefit from low fees and top-notch security.",
};

const OkxBanner = () => {
  return (
    <>
      <section className={`bg-black px-0 h-screen`}>
        <div className="container">
          <div
            className={`flex  items-center justify-between h-full lg:flex-row flex-col gap-10 `}
          >
            <div className="max-w-125 w-full">
              <h2
                className={`
                        mb-6 font-mono
                        text-4xl font-bold text-white 
                         tracking-widest  whitespace-nowrap flex flex-col gap-2`}
              >
                <span>Secure.</span>
                <span>Transparent.</span>
                <span>Reliable.</span>
              </h2>
              <p className={`text-gray-400 text-wrap text-lg w-full `}>
                {content.desc}
              </p>
            </div>
            <video
              className="w-150 h-150"
              autoPlay
              loop
              muted
              playsInline
              poster="https://www.okx.com/cdn/assets/imgs/2410/91BC957E03CF63D9.jpeg?x-oss-process=image/format,webp/ignore-error,1"
            >
              <source
                src="https://www.okx.com/cdn/assets/files/2411/58251908C91AAF59.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .container {
            max-width: 1200px;
            padding: 0 15px;
            margin: 0 auto;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default OkxBanner;
