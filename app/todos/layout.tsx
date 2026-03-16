import type { Metadata } from "next";


export const metadata: Metadata = {
    title:'Mern 🚀',
    description:'Mern the best browser'
}

export default function TodosLayout({children} : {children: React.ReactNode}){
    return <>
        {children}
    </>
}


