import Image from "next/image"

const cryptoLogo = "https://assets-cms.kraken.com/images/51n36hrp/facade/05e644b980a0dc12baa6db4c5dbcacb70c95c468-361x100.png?w=1536&fit=min"
const cryptoImg = "https://assets-cms.kraken.com/images/51n36hrp/facade/945a2d697164d783a255908648607db9a7ceb951-4942x3200.png?w=1536&fit=min"


const CryptoBanner = () => {
    return(
        <>
            <section className={'py-10 bg-[#111] rounded-t-full max-[900px]:rounded-t-sm max-[5200px]:rounded-t-xl'}>
                <div className="max-w-[1230px] px-4 md:px-6 mx-auto w-full h-full">
                    <div className="flex items-center flex-col justify-center">
                        <Image src={cryptoLogo} width={100} height={100} alt={"Crypto Logo"} />
                        <h1 className={' text-3xl max-[520px]:text-lg text-wrap mb-10 mt-9 font-black bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-orange-600 to-pink-400'}>Trade spot and margin. All in one powerful interface.</h1>
                        <div className={'w-full'}>
                            <Image src={cryptoImg} width={700} height={700} alt={"Crypto banner"} className={'object-cover h-full w-full '} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CryptoBanner
