const bannerText = {
  title:
    "Kraken currently lists 600+ tokens. We carefully vet and choose from the best established and emerging tokens across the crypto ecosystem.",
  btnText: "Want to get listed?",
};

export default function BannerText() {
  return (
    <>
      <div className="py-16 px-4">
        <div className="max-w-7xl md:px-6 px-4 mx-auto w-full h-full">
          <div className="flex items-center flex-col gap-10 justify-center">
            <h3 className="text-wrap text-white text-justify text-3xl leading-tight max-w-225 font-mono">
              {bannerText.title}
            </h3>
            <div className="flex items-center max-[425px]:w-full">
              <button
                className="bg-white text-black py-3 px-5 max-[425px]:w-full
                 text-lg font-bold rounded-2xl cursor-pointer hover:bg-white/60 "
              >
                {bannerText.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
