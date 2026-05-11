import { NextResponse } from "next/server"

export async function GET() {
  const coins = [
    {
      symbol: "btcusdt",
      name: "Bitcoin",
      image:
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      price: 69648,
      change24h: 1.15,
      marketCap: "€1.39T",
      history: [],
    },

    {
      symbol: "ethusdt",
      name: "Ethereum",
      image:
        "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      price: 1988,
      change24h: -0.52,
      marketCap: "€239B",
      history: [],
    },

    {
      symbol: "solusdt",
      name: "Solana",
      image:
        "https://cryptologos.cc/logos/solana-sol-logo.png",
      price: 82,
      change24h: 2.12,
      marketCap: "€47B",
      history: [],
    },
  ]

  return NextResponse.json(coins)
}