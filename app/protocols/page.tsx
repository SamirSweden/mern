import Header from "@/app/components/shared/header/Header";
import ProtoBanner from "@/app/components/banners/banner/ProtoBanner";
import Tvl from "@/app/components/tvl/Tvl";
import OfferProto from "@/app/components/tvl/OfferProto";
import ScaleBanner from "@/app/components/banners/banner/ScaleBanner";


const Protocols = () => {
    return (
        <>
            <Header />
            <ProtoBanner />
            <Tvl />
            <OfferProto />
            <ScaleBanner />
        </>
    )
}

export default Protocols
