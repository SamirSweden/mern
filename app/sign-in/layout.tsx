import  type { Metadata } from "next";


export const metadata:Metadata = {
    title: "Kraken.su - Login",
    description: "sign-in and invest your money ",
}


export default function LoginLayout({children} : {children: React.ReactNode}){
    return (
        <>{children}</>
    )
}