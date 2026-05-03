import BannerText from "../components/banners/listing/BannerText";
import ListingBanner from "../components/banners/listing/ListingBanner";
import TokensBanner from "@/app/components/banners/listing/TokensBanner";
import Footer from "@/app/components/shared/footer/Footer";



const ListingPage = () => {
    return <>
        <ListingBanner />
        <BannerText />
        <TokensBanner />
        <div className="max-w-4xl mx-auto md:px-6 px-4 w-full h-full">
            <Footer />
        </div>
    </>
}

export default ListingPage;