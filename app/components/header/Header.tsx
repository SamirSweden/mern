"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const links = [
  { href: "/comments", label: "comments" },
  { href: "/todos", label: "todos" },
  { href: "/movie", label: "movie" },
];

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled , setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll" , handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll)
  } , [])



  return (
    <>
      <header className={`sticky left-0 top-0 w-full z-50 py-6.5 transition-all duration-300     }`}>
        <div className={`max-w-[600px] px-5 py-5 mx-[15px] mx-auto w-full h-full  border border-gray-500 rounded-full ${scrolled ?  "bg-black/20 backdrop-blur-3xl shadow-2xl border border-gray-600" : "bg-transparent"}`}>
          <div className="flex items-center justify-between">
            <Link
              className="text-white text-3xl outline-none cursor-pointer font-bold"
              href={"/"}
            >
              Mern
            </Link>

            <ul className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-lg capitalize cursor-pointer hover:text-white "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <button
                style={{ display: "block" }}
                onClick={() => router.push("/browser")}
                className="browser__btn"
              >
                browser
              </button>

              

              <button
                className="md:hidden flex flex-col gap-1.5 ml-3"
                onClick={() => setOpen(!open)}
              >
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
              </button>
            </div>
          </div>
        </div>
              {/* md:hidden max-w-[600px] mx-auto rounded-2xl border border-gray-400  py-4 px-5 mt-2 */}
        {open && (
          <div className={`md:hidden max-w-[600px] mx-auto rounded-2xl border border-gray-400  py-4 px-5 mt-2   bg-black/20 backdrop-blur-3xl shadow-2xl border border-gray-600 `}>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-lg capitalize hover:text-yellow-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <style jsx>{`
        .browser__btn {
          color: white;
          font-family: "PT Sans", sans-serif;
          font-weight: 400;
          font-size: 16px;
          leading-trim: NONE;
          line-height: 120%;
          letter-spacing: 0%;
          text-align: center;
          padding: 18px 30px;
          background: linear-gradient(90deg, #800bf5 26.67%, #25c6f9 97.33%);
          border-radius: 30px;
          cursor: pointer;
          border: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .browser__btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </>
  );
};

export default Header;
