"use client";

import kong from "@/app/assets/kong.png";

const Banner = () => {
  return (
    <>
      <section className="relative"
        style={{
          backgroundImage: `url(${kong.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-[1230px] px-[15px] mx-auto w-full h-full relative z-10">
          <div className="banner__wrap">
            <div className="max-w-[600px] w-full text-white text-wrap">
              <h2 className="text-[64px] text-white text-wrap mb-[30px] leading-tight max-[542px]:text-[40px]">
                Kong: Skull Island
              </h2>
              <p className="text-gray-400 text-[16px] max-w-[570px] w-full mb-6 md:mb-[50px] banner__p ">
                The film takes the viewer to the 70s of the last century. The
                protagonist organizes an expedition to the Skull island, always
                covered in fog, on which King Kong was once caught to find the
                missing brother and some mysterious substance. During...
              </p>
              <div className="flex items gap-[30px] max-[390px]:flex-col max-[390px]:gap-[10px] max-[390px]:w-full">
                <button className={`
                    text-black bg-[#F18128] hover:bg-[#040D1F] border-none outline-none hover:text-white rounded-[4px] cursor-pointer text-[14px] py-[17px] px-[48px]
                  `}>Watch now</button>
                <button className={`
                    text-white bg-[#040D1F] hover:bg-[#F18128] border-none outline-none hover:text-black rounded-[4px] cursor-pointer text-[14px] py-[17px] px-[48px]
                  `}>Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style global jsx>
        {`
          .banner {
            height: 80px;
            background: url("/assets/kong.png") no-repeat center/cover;
          }
          .banner__wrap {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
          }
          .banner__p {
            font-family: 'Montserrat',sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            text-align: justify;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
