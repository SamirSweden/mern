import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import ClientWrapper from "@/app/components/ClientWrapper";


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
    <body
      suppressHydrationWarning
      className={`${jetbrains.variable}`}
    >

      <ClientWrapper>
        {children}
      </ClientWrapper>

      <Analytics />
    </body>
  </html>
  );
}