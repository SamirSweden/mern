"use client";

import {Bitcoin, Bot, ChartCandlestick, CodeXml, GlobeLock, Home, SquareChevronRight} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const slinks = [
  {
    href: "/",
    icon: Home,
  },

  {
    href: "/coins",
    icon: Bitcoin,
  },

];

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div
        className="fixed left-4 top-1/2 -translate-y-1/2 w-20 h-60 rounded-2xl bg-black  border
            border-gray-800  flex items-center flex-col justify-evenly    max-[768px]:hidden shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] hover:bg-[#111]"
      >
        {slinks.map((slink) => {
          const Icon = slink.icon;
          const isActive = pathname === slink.href;

          return (
            <button
              onClick={() => router.push(slink.href)}
              key={slink.href}
              className={`cursor-pointer text-lg ${
                isActive
                  ? "bg-white/10 text-white  py-5 px-5 rounded-full "
                  : ""
              }
                    `}
            >
              <Icon size={25} className="text-white" />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
