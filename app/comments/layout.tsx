import { Metadata } from "next"

export type  {Metadata} from "next"



export const metadata: Metadata = {
    title: 'Mern | comments'
}


export default function CommentLayout({children} : {children: React.ReactNode}){
    return <>
        {children}
    </>
}





