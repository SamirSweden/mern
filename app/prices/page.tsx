import CryptoTable from "@/app/components/list/crypto-table"

async function getInitialCoins() {
  const res = await fetch(
    "http://localhost:3000/api/crypto",
    {
      cache: "no-store",
    }
  )

  return res.json()
}

export default async function Home() {
  const coins =
    await getInitialCoins()

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">
          Kraken.su &mdash; coinlist
        </h1>

        <CryptoTable
          initialCoins={coins}
        />
      </div>
    </main>
  )
}