export default function Loading() {
  return (
    <>
      <section className="py-10 px-4 bg-black min-h-screen">
        <div className="max-w-6xl w-full mx-auto space-y-6 animate-pulse">
            <div className="mx-auto rounded-xl bg-gray-700 w-2/3"  />

            <div className="space-y-3 max-w-[700px] mx-auto">
                <div className="h-3 bg-gray-700 rounded-2xl" />
                <div className="h-3 bg-gray-600 w-3/4 rounded-xl" />
            </div>


            <div className="grid grid-cols-4 max-[680px]:grid-cols-3 max-[680px]:gap-3 max-[400px]:grid-cols-2 gap-10">
                {Array.from({length: 12}).map((_, i) => (
                    <div key={i} className="space-y-5 bg-gray-700 p-5 rounded-2xl ">
                        <div className="w-10 h-10 bg-gray-700 rounded" />
                        <div className="w-16 h-6 bg-gray-600 rounded" />
                        <div className="w-24 h-5 bg-gray-700 rounded " />
                        <div className="rounded w-20 h-4 bg-gray-600" />
                    </div>
                ))}
            </div>


            <div className="flex justify-center">
                <div className="h-12 w-48 bg-gray-700   rounded-3xl " />
            </div>
        </div>
      </section>
    </>
  );
}
