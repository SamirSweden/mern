"use client";

import { useEffect, useState } from "react";
import {DollarSign} from "lucide-react";

export default function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("/api/account")
      .then(r => r.json())
      .then(data => setBalance(data.balance));
  }, []);

  return <div>

    <div className={'text-white flex items-center '}>
      <DollarSign />
      <span className={'text-gray-300 bg-linear-to-br from-[#333332] to-[#111]  rounded-2xl py-1 px-2 '}>{balance.toFixed(2)}</span>
    </div>
  </div>;
}