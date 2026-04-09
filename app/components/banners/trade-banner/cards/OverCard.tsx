const cards = [
  {
    id: 1,
    title: ">99% uptime",
    desc: "Reliable, low-latency endpoints for crypto trading and data.",
  },
  {
    id: 2,
    title: "Capture arbitrage",
    desc: "Capitalize on trading opportunities across multiple markets.",
  },
  {
    id: 3,
    title: "Tap into data",
    desc: "Subscribe to our WebSockets API for continuous, real-time data.",
  },
];

const OverCard = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="group bg-[#111] rounded-3xl py-5 px-5 
             transition-all duration-300 
             hover:-translate-y-2 hover:scale-[1.02] 
             hover:shadow-[0_0_25px_rgba(0,255,200,0.15)]"
        >
          <h3
            className="text-gray-400 text-3xl mb-4 
                 transition-colors duration-300 
                 group-hover:text-white"
          >
            {card.title}
          </h3>

          <p
            className="text-gray-600 text-lg 
                transition-colors duration-300 
                group-hover:text-gray-300"
          >
            {card.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default OverCard;
