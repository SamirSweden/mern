'use client'

import { useState } from "react";
import Link from "next/link"
import Image from 'next/image';
import { Dock, Home, Menu, X } from 'lucide-react';
import vue from "@/app/assets/vue.png"
import { useRouter } from "next/navigation";

const links = [
    {label: "Films", href:'/films'},
    {label: "Serials", href:'/serials'},
    {label: "Cartoons", href:'/cartoons'},
    {label: "Collections", href:'/collections'}
];

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <>
           <nav className="flex items-center gap-[24px] justify-center nav">
                <Dock size={50}/>
                <span className='w-[166px] text-white font-normal text-[16px] font font-bold'>See no special offer restrictions</span>
           </nav>

            <header className='header py-[29px] px-0 bg-[#010305CC]'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="header__logo cursor-pointer flex items-baseline gap-[5px]">
                            <Link href={'/'} className="cursor-pointer border-none outline-none ">
                                <Image  src={vue} width={103} height={42} alt='' />
                            </Link>
                            <span className='uppercase text-white font-bold'>CINEMAS</span>
                        </div>
                        <ul className="hidden min-[580px]:flex  items-center gap-[30px]">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link className='menu__link text-white text-[14px] font-normal capitalize' 
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            className="text-white z-50 min-[581px]:hidden outline-none border-none cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={30} />  : <Menu size={30} />}
                        </button>

                        <div className={`fixed  inset-0 bg-transparent z-40 backdrop-blur-3xl flex flex-col items-center justify-center transition-transform duration-300 min-[581px]:hidden
                                ${isOpen ? "translate-x-0" : "translate-x-full"}
                            `}>
                                <ul className="flex flex-col items-center gap-[40px]">
                                    {links.map((l) => (
                                        <li key={l.href}>
                                            <Link 
                                                href={l.href}
                                                className="text-white text-[24px] font-medium capitalize"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center flex-col gap-5 w-full mt-5 px-5 fixed bottom-[50px] left-0 ">
                                    <button
                                        style={{ display: "block" }}
                                        onClick={() => router.push("/browser")}
                                        className="browser__btn"
                                    >
                                    browser
                                    </button>
                                     <button
                                        style={{ display: "block" }}
                                        onClick={() => router.push("/browser")}
                                        className="browser__btn-black"
                                    >
                                    <Home size={30} />
                                    </button>
                                </div>
                        </div>

                    </div>
                </div>
            </header>

           <style global jsx>{`
            .nav{
                padding:20px 0;
                background: linear-gradient(90.09deg, #3800AF 0%, #BF7204 97.52%, #C27500 100%, #C27500 100%);
            }
            .container{
                max-width:1230px;
                margin: 0 auto;
                padding: 0 15px;
                width: 100%;
                height:100%;
            }
            .menu__link {
                display:inline-block;
                position:relative;
            }
            .menu__link::after{
                content:'';
                position:absolute;
                width:0;
                left:0;
                height:2px;
                border-radius:10px 10px 0 0;
                bottom:-40px;
                background: #ED8E00;
                transition:0.4s;
            }
            
            .menu__link:hover::after{width:100%}

            .browser__btn {
                color: white;
                font-family: "PT Sans", sans-serif;
                font-weight: 400;
                font-size: 16px;
                leading-trim: NONE;
                line-height: 120%;
                letter-spacing: 0%;
                text-align: center;
                padding: 18px 30px;
                background: linear-gradient(90deg, #800bf5 26.67%, #25c6f9 97.33%);
                border-radius: 30px;
                cursor: pointer;
                width:100%;
                border: none;
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease;
            }
            .browser__btn:hover {
                transform: translateY(-4px);
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
            }
           `}</style>
        </>
    )
}


export default Navbar

