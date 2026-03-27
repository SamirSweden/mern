import Link from "next/link";


const Header = () => {
    return (
        <>
            <header className={'header py-[20px] px-0'}>
                <div className="max-w-[1230px] px-[15px] mx-auto w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="header__logo">
                            <Link className={' text-center text-3xl capitalize font-mono select-none text-transparent bg-gradient-to-br bg-clip-text from-orange-400  to-pink-500'} href={'/'}>Kraken</Link>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header
