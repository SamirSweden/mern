"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import polyImg from "@/app/assets/polygon.jpeg";

const bannerPoly = {
  bannerText: "Bitget Polygon (MATIC) Wallet",
  desc: "With a Bitget Polygon (MATIC) wallet, you can send, receive and swap from/to MATIC on different mainnets. You can also experience the rich Polygon DApp ecosystem, Polygon NFT Market, and other transaction features in our wallet. Get your own Polygon (MATIC) wallet now to explore more.",
  playMarketSvg:
    "https://cdn.bitkeep.vip/u_b_ebd96400-f844-11ec-b63a-312b958ab834.png",
};

export default function Polygon() {
  const router = useRouter();

  return (
    <>
      <section className="flex items-center py-10 min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <Image
              src={polyImg}
              width={300}
              height={300}
              alt="banner"
              className="rounded-xl "
            />

            {/* Text */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {bannerPoly.bannerText}
              </h2>
              <p className="text-gray-300 ">{bannerPoly.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
