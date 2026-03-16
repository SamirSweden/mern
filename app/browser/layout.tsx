import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mern Browser",
  description: "Mern - прокси браузер , альтернатива гугл ",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function BrowserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return  <>{children}</>;
}
