import Header from "@/app/components/shared/header/Header";
import Banner from "@/app/components/banners/banner/Banner";
import BannerCard from "@/app/components/UI/BannerCard";
import WhyKraken from "@/app/components/why/WhyKraken";


export default function Home(){
    return (
        <>
            <Header />
            <Banner />
            <BannerCard />
            <WhyKraken />
        </>
    )
}

