import { Coins } from "@/app/types/Coins"
import Sparkline from "@/app/components/shared/spark/sparkline"
import { formatPrice } from "@/app/lib/format"

export default function CryptoRow({
  coin,
  index,
}: {
  coin: Coins
  index: number
}) {
  const positive =
    coin.change24h >= 0

  return (
    <tr className="border-b hover:bg-black shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] border-zinc-800  transition">
      <td className="p-5">
        {index + 1}
      </td>

      <td className="p-5">
        <div className="flex items-center gap-3">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-10 h-10"
          />

          <div>
            <div className="font-semibold">
              {coin.name}
            </div>

            <div className="text-zinc-500 uppercase text-sm">
              {coin.symbol.replace(
                "usdt",
                ""
              )}
            </div>
          </div>
        </div>
      </td>

      <td className="p-5 font-medium">
        {formatPrice(coin.price)}
      </td>

      <td
        className={`p-5 ${
          positive
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {coin.change24h}%
      </td>

      <td className="p-5">
        <Sparkline
          data={coin.history}
          positive={positive}
        />
      </td>

      <td className="p-5">
        {coin.marketCap}
      </td>
    </tr>
  )
}