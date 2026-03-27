

interface BtnProps {
    children: string
}

export default function ThreeButton({children}: BtnProps){
    return (
        <>
            <button className={'py-3 px-5 bg-violet-500 text-white rounded-xl cursor-pointer max-[425px]:w-full '}>
                {children}
            </button>
        </>
    )
}