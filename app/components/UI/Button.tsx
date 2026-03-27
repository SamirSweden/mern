import {ReactNode} from "react";


interface ButtonProps {
    children: string
}

const Button = ({ children }:ButtonProps) => {
    return(
        <>
            <button className={'bg-yellow-400  hover:bg-yellow-500 cursor-pointer text-sm text-black font-normal py-2 px-5 rounded-lg transition'}>
                {children}
            </button>
        </>
    )
}

export default Button