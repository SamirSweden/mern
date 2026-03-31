import Header from "@/app/components/shared/header/Header";
import ProtoBanner from "@/app/components/banners/banner/ProtoBanner";
import Tvl from "@/app/components/tvl/Tvl";
import OfferProto from "@/app/components/tvl/OfferProto";
import ScaleBanner from "@/app/components/banners/banner/ScaleBanner";
import FooterCard from "@/app/components/UI/FooterCard";


const Protocols = () => {
    return (
        <>
            <Header />
            <ProtoBanner />
            <Tvl />
            <OfferProto />
            <ScaleBanner />
            <FooterCard />
        </>
    )
}

export default Protocols
