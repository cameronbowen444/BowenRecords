import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiShoppingBag,
  FiX,
  FiDisc,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartCount } = useCart();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/records" },
    { label: "New Arrivals", path: "/new-arrivals" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setIsScrolled((prev) => {
        if (prev && y < 10) return false;
        if (!prev && y > 90) return true;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[999] w-full border-b-2 border-[#d9a441] bg-[#160f0b] text-[#fff4d6] transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_3px_0_#6b1f17]"
          : "shadow-[0_5px_0_#6b1f17]"
      }`}
    >
      {/* Top retro strip */}
      {!isScrolled && (
        <div className="hidden border-b border-[#fff4d6]/15 bg-[#d12b1f] text-[#fff4d6] sm:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[10px] uppercase tracking-[0.2em]">
            <span>Vintage Vinyl • Rare Finds • Before the 90s</span>
            <span className="hidden md:inline">Now Spinning Online</span>
          </div>
        </div>
      )}

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-5 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            setIsSearchOpen(false);
          }}
          className="group flex items-center gap-2.5"
        >
          <div className="relative shrink-0">
            <div
              className={`flex items-center justify-center rounded-full border-2 border-[#fff4d6] bg-[#0b0b0b] shadow-[0_0_0_2px_#d12b1f,0_0_12px_rgba(217,164,65,0.35)] transition-all duration-300 group-hover:rotate-12 ${
                isScrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            >
              <FiDisc
                className="text-[#d9a441]"
                size={isScrolled ? 17 : 20}
              />
            </div>

            <div className="absolute inset-0 rounded-full border border-[#d9a441]/40 animate-pulse" />
          </div>

          <div className="leading-none">
            <h1
              className={`font-black uppercase tracking-tight transition-all duration-300 ${
                isScrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"
              }`}
            >
              Bowen
              <span className="block text-[#d9a441] -mt-0.5">Records</span>
            </h1>

            {!isScrolled && (
              <p className="mt-1 hidden text-[9px] uppercase tracking-[0.18em] text-[#fff4d6]/60 sm:block">
                Vinyl • CDs
              </p>
            )}
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1.5 rounded-full border border-[#fff4d6]/15 bg-[#0d0907] px-2 py-1.5 shadow-inner lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsSearchOpen(false)}
                className="rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#fff4d6]/75 transition duration-300 hover:bg-[#d9a441] hover:text-[#160f0b]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsOpen(false);
            }}
            className="hidden items-center gap-1.5 rounded-full border border-[#fff4d6]/20 bg-[#24150f] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#fff4d6]/80 transition duration-300 hover:border-[#d12b1f] hover:bg-[#d12b1f] hover:text-white sm:flex"
          >
            {isSearchOpen ? <FiX size={14} /> : <FiSearch size={14} />}
            {isSearchOpen ? "Close" : "Dig"}
          </button>

          <Link
            to="/cart"
            onClick={() => {
              setIsOpen(false);
              setIsSearchOpen(false);
            }}
            className={`relative flex items-center justify-center rounded-full border-2 border-[#fff4d6] bg-[#d9a441] text-[#160f0b] shadow-[0_3px_0_#6b1f17] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_1px_0_#6b1f17] ${
              isScrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
          >
            <FiShoppingBag size={isScrolled ? 16 : 17} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-[#fff4d6] bg-[#d12b1f] text-[10px] font-black text-white">
              {cartCount}
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsSearchOpen(false);
            }}
            className={`flex items-center justify-center rounded-full border border-[#fff4d6]/25 bg-[#24150f] text-[#fff4d6] transition-all duration-300 hover:bg-[#d12b1f] lg:hidden ${
              isScrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Desktop Search */}
      {isSearchOpen && (
        <div className="relative border-t border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.4)] sm:px-6">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#fff4d6]/20 bg-[#24150f] text-[#fff4d6]/75 transition hover:border-[#d12b1f] hover:bg-[#d12b1f] hover:text-white"
            aria-label="Close search"
          >
            <FiX size={16} />
          </button>

          <div className="mx-auto max-w-3xl pr-10">
            <div className="mb-2 text-center">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#d9a441]">
                Dig through the crates
              </p>
            </div>

            <SearchBar onSearchComplete={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#fff4d6]/10 bg-[#0d0907] px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.4)] lg:hidden">
          <div className="mb-4 rounded-xl border border-[#d9a441]/30 bg-[#160f0b] p-3">
            <p className="mb-1 text-[10px] uppercase tracking-[0.24em] text-[#d9a441]">
              Now Open
            </p>
            <h2 className="text-lg font-black uppercase">
              The Online Record Room
            </h2>
          </div>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-[#fff4d6]/10 bg-[#24150f] px-4 py-3 text-sm font-black uppercase tracking-wide text-[#fff4d6]/85 transition hover:bg-[#d12b1f] hover:text-white"
                >
                  {link.label}
                  <span className="text-xs text-[#d9a441]">★</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-[#fff4d6]/10 bg-[#160f0b] p-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d9a441]">
                Search the shop
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fff4d6]/15 bg-[#24150f] text-[#fff4d6]/70 transition hover:bg-[#d12b1f] hover:text-white"
                aria-label="Close menu"
              >
                <FiX size={15} />
              </button>
            </div>

            <SearchBar
              placeholder="Search records..."
              onSearchComplete={() => {
                setIsOpen(false);
                setIsSearchOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;