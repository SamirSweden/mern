import TokenCard from "@/app/components/banners/cards/TokenCard";

const content = {
    title: "Tokens",
    text: "Listing of a new token on a previously integrated blockchain."
}

const TokensBanner = () => {
    return (
        <>
            <section className={'tokens__banner py-20'}>
                <div className="container max-w-4xl mx-auto md:px-6 px-4 w-full h-full">
                    <div className="flex  flex-col gap-7 justify-start">
                        <h2 className={'text-white text-left text-3xl font-black'}>{content.title}</h2>
                        <p className={'text-gray-400 text-wrap'}>{content.text}</p>
                    </div>
                    <div className={'mt-10 grid grid-cols-2 gap-4 max-[620px]:grid-cols-1 w-full'}>
                        <TokenCard />
                    </div>
                </div>
            </section>
        </>
    )
}


export default TokensBanner




