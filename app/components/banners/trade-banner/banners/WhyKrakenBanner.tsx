import WhyKrakenCard from "../cards/WhyKrakenCard";

const WhyKrakenBanner = () => {
  return (
    <>
      <section className="py-14 px-0 ">
        <div className="max-w-7xl mx-auto md:px-6 px-4 w-full h-full">
          <h2 className="text-4xl text-white text-center font-black  capitalize mb-20">why kraken? </h2>
          <div className="grid grid-cols-3 gap-6 max-[957px]:grid-cols-2 max-[634px]:grid-cols-1">
            <WhyKrakenCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKrakenBanner;
  