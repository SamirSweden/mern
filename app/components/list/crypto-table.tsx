"use client"

import { useEffect } from "react"

import CryptoRow from "./crypto-row"

import { Coins } from "@/app/types/Coins"

import { useCryptoStore } from "@/app/store/crypto-store"

import { useBinancePrices } from "@/app/hooks/useBinancePrices"

export default function CryptoTable({
  initialCoins,
}: {
  initialCoins: Coins[]
}) {
  const coins =
    useCryptoStore(
      (state) => state.coins
    )

  const setCoins =
    useCryptoStore(
      (state) => state.setCoins
    )

  useBinancePrices()

  useEffect(() => {
    setCoins(initialCoins)
  }, [initialCoins, setCoins])

  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-800">
      <table className="w-full">
        <thead className="bg-zinc-950 border-b border-zinc-800">
          <tr className="text-zinc-500 text-sm">
            <th className="p-5 text-left">
              #
            </th>
            <th className="p-5 text-left">
              NAME
            </th>
            <th className="p-5 text-left">
              PRICE
            </th>
            <th className="p-5 text-left">
              CHANGE
            </th>
            <th className="p-5 text-left">
              CHART
            </th>
            <th className="p-5 text-left">
              MARKET CAP
            </th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin, index) => (
            <CryptoRow
              key={coin.symbol}
              coin={coin}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}