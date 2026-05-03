import BannerText from "../components/banners/listing/BannerText";
import ListingBanner from "../components/banners/listing/ListingBanner";
import TokensBanner from "@/app/components/banners/listing/TokensBanner";



const ListingPage = () => {
    return <>
        <ListingBanner />
        <BannerText />
        <TokensBanner />
    </>
}

export default ListingPage;