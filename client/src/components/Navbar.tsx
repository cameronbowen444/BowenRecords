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
      // Once navbar is small, don't make it big again until user is basically at the top
      if (prev && y < 10) {
        return false;
      }

      // Once navbar is big, don't shrink it until user scrolls a little more
      if (!prev && y > 90) {
        return true;
      }

      return prev;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`w-full sticky top-0 z-[999] bg-[#160f0b] text-[#fff4d6] border-b-4 border-[#d9a441] transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_4px_0_#6b1f17]"
          : "shadow-[0_8px_0_#6b1f17]"
      }`}
    >
      {/* Top retro strip - disappears when scrolling */}
      {!isScrolled && (
        <div className="hidden sm:block bg-[#d12b1f] text-[#fff4d6] border-b border-[#fff4d6]/20">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs tracking-[0.25em] uppercase">
            <span>Vintage Vinyl • Rare Finds • Before the 90s</span>
            <span className="hidden md:inline">Now Spinning Online</span>
          </div>
        </div>
      )}

      <nav
        className={`max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-5 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            setIsSearchOpen(false);
          }}
          className="group flex items-center gap-4"
        >
          <div className="relative">
            <div
              className={`rounded-full bg-[#0b0b0b] border-[3px] border-[#fff4d6] shadow-[0_0_0_4px_#d12b1f,0_0_20px_rgba(217,164,65,0.45)] flex items-center justify-center group-hover:rotate-12 transition-all duration-300 ${
                isScrolled ? "w-11 h-11" : "w-14 h-14"
              }`}
            >
              <FiDisc
                className="text-[#d9a441]"
                size={isScrolled ? 23 : 28}
              />
            </div>

            <div className="absolute inset-0 rounded-full border border-[#d9a441]/50 animate-pulse" />
          </div>

          <div className="leading-tight">
            <h1
              className={`font-black tracking-tight uppercase transition-all duration-300 ${
                isScrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
              Bowen
              <span className="block text-[#d9a441] -mt-1">Records</span>
            </h1>

            {!isScrolled && (
              <p className="hidden sm:block text-xs text-[#fff4d6]/65 tracking-[0.2em] uppercase mt-1">
                Vinyl • CDs
              </p>
            )}
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-3 bg-[#0d0907] border border-[#fff4d6]/15 rounded-full px-3 py-2 shadow-inner">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsSearchOpen(false)}
                className="px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase text-[#fff4d6]/75 hover:text-[#160f0b] hover:bg-[#d9a441] transition duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsOpen(false);
            }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#fff4d6]/20 bg-[#24150f] text-sm font-bold uppercase tracking-wide text-[#fff4d6]/80 hover:bg-[#d12b1f] hover:text-white hover:border-[#d12b1f] transition duration-300"
          >
            {isSearchOpen ? <FiX size={18} /> : <FiSearch size={18} />}
            {isSearchOpen ? "Close" : "Dig"}
          </button>

          <Link
            to="/cart"
            onClick={() => {
              setIsOpen(false);
              setIsSearchOpen(false);
            }}
            className={`relative rounded-full bg-[#d9a441] text-[#160f0b] flex items-center justify-center border-2 border-[#fff4d6] shadow-[0_4px_0_#6b1f17] hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17] transition-all duration-300 ${
              isScrolled ? "w-10 h-10" : "w-11 h-11"
            }`}
          >
            <FiShoppingBag size={isScrolled ? 19 : 21} />

            <span className="absolute -top-2 -right-2 bg-[#d12b1f] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-black border-2 border-[#fff4d6]">
              {cartCount}
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsSearchOpen(false);
            }}
            className={`lg:hidden rounded-full border border-[#fff4d6]/25 bg-[#24150f] text-[#fff4d6] flex items-center justify-center hover:bg-[#d12b1f] transition-all duration-300 ${
              isScrolled ? "w-10 h-10" : "w-11 h-11"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Desktop Search */}
      {isSearchOpen && (
        <div className="relative border-t border-[#fff4d6]/10 bg-[#0d0907] px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-5 top-5 w-10 h-10 rounded-full bg-[#24150f] border border-[#fff4d6]/20 text-[#fff4d6]/75 hover:bg-[#d12b1f] hover:text-white hover:border-[#d12b1f] transition flex items-center justify-center"
            aria-label="Close search"
          >
            <FiX size={22} />
          </button>

          <div className="max-w-4xl mx-auto pr-12">
            <div className="mb-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                Dig through the crates
              </p>
            </div>

            <SearchBar onSearchComplete={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d0907] border-t border-[#fff4d6]/10 px-5 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          <div className="mb-5 rounded-2xl border border-[#d9a441]/30 bg-[#160f0b] p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441] mb-1">
              Now Open
            </p>
            <h2 className="text-2xl font-black uppercase">
              The Online Record Room
            </h2>
          </div>

          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-[#fff4d6]/10 bg-[#24150f] px-5 py-4 text-[#fff4d6]/85 font-black uppercase tracking-wide hover:bg-[#d12b1f] hover:text-white transition"
                >
                  {link.label}
                  <span className="text-[#d9a441]">★</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-[#fff4d6]/10 bg-[#160f0b] p-4">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d9a441]">
                Search the shop
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-[#24150f] border border-[#fff4d6]/15 text-[#fff4d6]/70 hover:bg-[#d12b1f] hover:text-white transition flex items-center justify-center"
                aria-label="Close menu"
              >
                <FiX size={18} />
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