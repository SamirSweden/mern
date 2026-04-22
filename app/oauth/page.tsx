import OauthBanner from "@/app/components/banners/banner/docs/OauthBanner";
import ExampleBanner from "@/app/components/banners/banner/docs/ExampleBanner";
import ExampleLayout from "@/app/components/banners/banner/docs/ExampleLayout";
import ProviderExample from "@/app/components/banners/banner/docs/ProviderExample";
import LayoutWrap from "@/app/components/banners/banner/docs/LayoutWrap";


const OauthPage = () => {
    return (
        <>
            <OauthBanner />
            <ExampleBanner />
            <ExampleLayout />
            <ProviderExample />
            <LayoutWrap />
        </>
    )
}


export default OauthPage


