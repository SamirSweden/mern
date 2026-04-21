import NavbarDocs from "@/app/components/shared/docsnav/NavbarDocs";
import DocsBanner from "@/app/components/banners/banner/docs/DocsBanner";
import LayoutExample from "@/app/components/banners/banner/docs/LayoutExample";


const DocsPage = () => {
    return (
        <main className={'min-h-screen bg-black decoration-none list-none'}>
            <NavbarDocs />
            <DocsBanner />
            <LayoutExample />
        </main>
    )
}


export default DocsPage






