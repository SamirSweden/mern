"use client";

import { useEffect, useState } from "react";

type Position = {
  side: "LONG" | "SHORT";
  entry: number;
  size: number;
};

type Account = {
  balance: number;
  positions: Position[];
};

export default function Positions() {
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    (async () => {
        const res = await fetch("/api/account")
        const data = await res.json()
        setAccount(data)
    })();
}, []);

  async function fetchData() {
    const res = await fetch("/api/account");
    const data: Account = await res.json();
    setAccount(data);
  }

  if (!account) return <div>Loading...</div>;

  return (
    <div>
      {account.positions.map((p, i) => (
        <div key={i}>
          {p.side} | entry: {p.entry} | size: {p.size}
        </div>
      ))}
    </div>
  );
}