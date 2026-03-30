


const cards = [
    {
        id:1,
        title: "Infrastructure built for scale",
        description: "Secure custody, staking and node operations alongside validator management and real-time monitoring across 25+ chains.",
    },
    {
        id:2,
        title: "Deep liquidity and growth",
        description: "Institutional liquidity across spot, OTC and derivatives markets with access to millions of verified users through listings, staking and ecosystem activations.",
    },
    {
        id:3,
        title: "A regulated and trusted partner",
        description: "A global regulatory footprint backed by a decade of crypto infrastructure expertise and award-winning support.",
    },
];



const TvlCard = () => {
    return (
        <>
            {cards.map((card) => (
                <div key={card.id} className={'bg-transparent '}>
                    <h2 className={'font-semibold text-xl md:text-xl sm:text-lg mb-4'}>{card.title}</h2>
                    <p className={'text-justify text-lg md:text-lg sm:text-sm text-gray-500 text-wrap '}>{card.description}</p>
                </div>
            ))}
        </>
    )
}

export default TvlCard;




