"use client";

import { useState } from "react";

export default function TradePanel() {
  const [size, setSize] = useState(0.01);

  async function trade(side: "LONG" | "SHORT") {
    const price = await fetch("/api/price?symbol=BTCUSDT")
      .then(r => r.json());

    await fetch("/api/trade", {
      method: "POST",
      body: JSON.stringify({
        side,
        price: price.price,
        size
      })
    });
  }

  return (
    <>
        <div>
            <input
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                placeholder="size"
            />

            <div className="flex items-center gap-4">
                <button onClick={() => trade("LONG")} className="long_btn ">
                    LONG
                </button>

                <button onClick={() => trade("SHORT")} className="short_btn">
                    SHORT
                </button>
            </div>
        </div>
    </>
  );
}