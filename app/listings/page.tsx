import BannerText from "../components/banners/listing/BannerText";
import ListingBanner from "../components/banners/listing/ListingBanner";
import TokensBanner from "@/app/components/banners/listing/TokensBanner";
import Footer from "@/app/components/shared/footer/Footer";
import InvestBanner from "@/app/components/banners/listing/InvestBanner";
import AdvancedBanner from "@/app/components/banners/listing/AdvancedBanner";



const ListingPage = () => {
    return <>
        <ListingBanner />
        <BannerText />
        <TokensBanner />
        <div className="grid grid-cols-2  max-[520px]:grid-cols-1 gap-5 max-w-6xl mx-auto md:px-6 px-4 w-full h-full">
            <InvestBanner />
            <AdvancedBanner />
        </div>
        <div className="max-w-6xl mx-auto md:px-6 px-4 w-full h-full">
            <Footer />
        </div>
    </>
}

export default ListingPage;