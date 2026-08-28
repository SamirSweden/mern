
import Header from "@/app/components/shared/header/Header";
import Banner from "@/app/components/banners/banner/Banner";
import BannerCard from "@/app/components/UI/BannerCard";
import WhyKraken from "@/app/components/why/WhyKraken";
import CryptoBanner from "@/app/components/banners/banner/CryptoBanner";
import ProCard from "@/app/components/banners/cards/ProCard";
import ThreeCards from "@/app/components/banners/cards/ThreeCards";
import PreFooter from "@/app/components/UI/PreFooter";
import WeexBanner from "@/app/components/banners/banner/WeexBanner";
import TryKraken from "@/app/components/try-kraken/TryKraken";


export default function Home(){
    return (
            <>
                <Header />
                <WeexBanner />
                <Banner />
                <BannerCard />
                <WhyKraken />
                <CryptoBanner/>
                <ProCard />
                <ThreeCards />
                <TryKraken />
                <PreFooter />
            </>
    )
}

