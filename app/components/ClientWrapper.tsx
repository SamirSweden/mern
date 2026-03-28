'use client'


import { useState , useEffect} from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/app/components/SplashScreen";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    return (
        <>
            {isHome && (
                <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <SplashScreen finishLoading={() => setIsLoading(false)} />
                </div>
            )}
            {children}
        </>
    )
}


