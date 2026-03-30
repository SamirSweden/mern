

interface BtnProps {
    children: string
}

export default function ThreeButton({children}: BtnProps){
    return (
        <>
            <button className={'py-3 px-5  transition transform duration-300 hover:-translate-y-2  bg-[#111] shadow-2xl shadow-cyan-500 hover:shadow-yellow-500 text-white rounded-xl cursor-pointer max-[425px]:w-full '}>
                {children}
            </button>
        </>
    )
}