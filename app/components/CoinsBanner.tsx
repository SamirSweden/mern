"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Bitcoin,
  DollarSign,
  Zap,
  Coins,
  Sparkles,
  Globe,
  Shield,
  Activity,
  Cpu,
  PieChart,
  Lock,
  Radio,
  Cloud,
  Network,
  TrendingUp,
  AlignHorizontalDistributeCenter,
  type LucideIcon,
} from "lucide-react";
import CoinFooter from "@/app/components/UI/CoinFooter";

type Coin = {
  id: string;
  name: string;
  symbol: string;
};

const coinsIcons: Record<string, LucideIcon> = {
  bitcoin: Bitcoin,
  ethereum: DollarSign,
  solana: Zap,
  dogecoin: Coins,
  cardano: Sparkles,
  ripple: Globe,
  avalanche: Shield,
  polkadot: Activity,
  chainlink: Cpu,
  uniswap: PieChart,
  litecoin: Lock,
  near: Radio,
  filecoin: Cloud,
  flow: Network,
};

const getCoinIcon = (coinId: string): LucideIcon => {
  return coinsIcons[coinId] || TrendingUp;
};

export default function CoinsBanner({coins = []}: { coins?: Coin[] }) {
  const [showAll, setShowAll] = useState(false);

  const safeCoins = Array.isArray(coins) ?  coins : [];
  const visibleCoins = showAll ? coins || [] : (coins || []).slice(0,8)

  return (
    <>
      <section className="banner-crypto  py-10 mb-12 px-0 ">
        <div className="max-w-307.5 md:px-6 px-4 mx-auto w-full h-full">
          <div className="grid grid-cols-4 max-[680px]:grid-cols-3 max-[680px]:gap-3 max-[400px]:grid-cols-2 gap-10">
           {visibleCoins.map((coin) => {
             const Icon = getCoinIcon(coin.id)

             return (
                 <Link
                     key={coin.id}
                     href="/"
                     className="relative flex items-stretch gap-5 cursor-pointer transition-transform duration-300 hover:-translate-y-4 flex-col shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-5 rounded-md"
                 >
                   <Icon size={40}/>

                   <hr className="text-gray-600 w-12"/>

                   <div className="name text-xl">{coin.name}</div>

                   <span
                       className="symbol shadow-lg shadow-white/50 bg-transparent text-sm absolute right-0 top-[-10] text-cyan-700 transition-transform rotate-5">
                      {coin.symbol.toUpperCase()}
                    </span>

                   <p className="apy" suppressHydrationWarning >
                     {(Math.random() * 10).toFixed(2)}% APY
                   </p>
                 </Link>
             )
           })}
          </div>
          {!showAll && coins.length > 8 && (
              <div className={'mt-12 flex items-center justify-center max-[425px]:w-full'}>
                <button
                    onClick={() => setShowAll(true)}
                    className={`
                    rounded-xl
                    max-[425px]:w-full
                    bg-[#111] 
                    py-3 px-9
                    shadow-[inset_10px_10px_20px_0_hsla(0,0%,100%,.15)]
                     font-extrabold 
                     capitalize
                    cursor-pointer 
                    hover:bg-[#333] 
                    text-white 
                  `}
                >
                  show more
                </button>
              </div>
          )}
        </div>
      </section>
      <CoinFooter />
    </>
  );
}
