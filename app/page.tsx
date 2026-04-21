
import Header from "@/app/components/shared/header/Header";
import Banner from "@/app/components/banners/banner/Banner";
import BannerCard from "@/app/components/UI/BannerCard";
import WhyKraken from "@/app/components/why/WhyKraken";
import CryptoBanner from "@/app/components/banners/banner/CryptoBanner";
import ProCard from "@/app/components/banners/cards/ProCard";
import ThreeCards from "@/app/components/banners/cards/ThreeCards";
import PreFooter from "@/app/components/UI/PreFooter";
import MainBanner from "@/app/components/banners/banner/MainBanner";


export default function Home(){
    return (
        <>
                <Header />
                <MainBanner/>
                <Banner />
                <BannerCard />
                <WhyKraken />
                <CryptoBanner/>
                <ProCard />
                <ThreeCards />
                <PreFooter/>
        </>
    )
}

