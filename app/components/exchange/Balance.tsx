"use client";

import { useEffect, useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("/api/account")
      .then(r => r.json())
      .then(data => setBalance(data.balance));
  }, []);

  return <div>

    <h2 className={'text-white '}>balance:
      <span className={'text-gray-300 bg-linear-to-br from-[#333332] to-[#111] ml-2 rounded-2xl py-1 px-2 '}>${balance.toFixed(2)}</span>
    </h2>
  </div>;
}