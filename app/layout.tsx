import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import ClientWrapper from "@/app/components/ClientWrapper";
import Providers from "@/app/components/Providers";
import Script from "next/script";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kraken.su",
  description: "invest with in Kraken crypto platform , invest with Ryan",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={jetbrains.variable}>
    <head>
      <Script 
          id="pushalert-script"
          strategy="afterInteractive"
          src="https://cdn.pushalert.co/unified_1ed728faa4a6b551e09ef5a0a01b97e0.js"
      />
    </head>
    <body
      suppressHydrationWarning
      className={`${jetbrains.variable}  text-white`}
    >
    <Providers>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      <Analytics />
    </Providers>
    </body>
  </html>
  );
}