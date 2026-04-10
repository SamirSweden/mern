const TradeBannerSkeleton = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full space-y-6 animate-pulse">
          <div className="flex items-center justify-center h-full ">
            <div className=" flex flex-col gap-10 items-start max-[700px]:mt-4">
              <div className="h-6 w-40 bg-gray-700 rounded-xl" />

              <div className="h-6 w-64 bg-gray-700 rounded-xl" />

              <div className="h-6 w-[700px] bg-gray-700 rounded-xl" />
              <div className="h-6 w-64 bg-gray-700 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradeBannerSkeleton;
