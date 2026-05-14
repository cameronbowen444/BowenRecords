import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-black text-white border-b border-white/10 relative z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-sm font-bold">BR</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">Bowen Records</h1>
            <p className="text-xs text-white/60">Vinyl • CDs • Cassettes</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/records" className="hover:text-white transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/new-arrivals" className="hover:text-white transition">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            <FiSearch size={20} />
            Search
          </button>

          <Link
            to="/cart"
            className="relative text-white/80 hover:text-white transition"
          >
            <FiShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>
      {isSearchOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5">
          <div className="max-w-7xl mx-auto">
            <SearchBar onSearchComplete={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5 text-white/80 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/records"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/new-arrivals"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                New Arrivals
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-6">
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
