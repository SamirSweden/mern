

const data = [
    {
        label: "Lite",
        desc: "The indicator based on AI",
        futures: "predicts entry point",
        limit: "4 signals per day",
        price: "100"
    },
    {
        label: "BOSS",
        desc: "The indicator based on AI",
        futures: "predicts entry point , kill zones",
        limit: "7 signals per day",
        price: "5000"
    },
    {
        label: "TURBO",
        desc: "The indicator based on AI",
        futures: "predicts entry point , kill zones , AMD",
        limit: "30 signals per day",
        price: "5000"
    },
];



const PlanCard = () => {
    return (
        <>
            {data.map((dataCard) => ())}
        </>
    )
}


export default PlanCard;
