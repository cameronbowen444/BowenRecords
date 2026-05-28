import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiDisc } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0d0907] text-[#fff4d6] border-t-4 border-[#d9a441]">
      {/* Thin retro strip */}
      <div className="bg-[#d12b1f] border-b border-[#fff4d6]/15">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <p className="text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-[#fff4d6]">
            Vintage Vinyl • Rare Finds • Classic Records
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-[#160f0b] border-2 border-[#fff4d6] shadow-[0_0_0_3px_#d12b1f] flex items-center justify-center group-hover:rotate-12 transition">
                <FiDisc className="text-[#d9a441]" size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase leading-none">
                  Bowen
                  <span className="block text-[#d9a441]">Records</span>
                </h2>

                <p className="text-[11px] text-[#fff4d6]/50 uppercase tracking-[0.2em] mt-1">
                  Vinyl • CDs • Classics
                </p>
              </div>
            </Link>

            <p className="text-[#fff4d6]/55 mt-5 max-w-sm leading-relaxed text-sm">
              A retro online record shop for classic albums, rare finds, and
              crate-digging collectors.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#160f0b] border border-[#fff4d6]/15 text-[#fff4d6]/65 hover:bg-[#d12b1f] hover:text-white transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#160f0b] border border-[#fff4d6]/15 text-[#fff4d6]/65 hover:bg-[#d12b1f] hover:text-white transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#160f0b] border border-[#fff4d6]/15 text-[#fff4d6]/65 hover:bg-[#d12b1f] hover:text-white transition flex items-center justify-center"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d9a441] mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/records"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  All Records
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/records"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Vinyl
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d9a441] mb-5">
              Help
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Request A Record
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Shipping
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#fff4d6]/60 hover:text-[#d9a441] transition"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Store Note */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d9a441] mb-5">
              Record Finder
            </h3>

            <p className="text-sm text-[#fff4d6]/55 leading-relaxed">
              Looking for a specific classic record? Send us the artist, album,
              pressing, or condition you want.
            </p>

            <Link
              to="/contact"
              className="inline-flex mt-5 bg-[#d9a441] text-[#160f0b] px-5 py-3 rounded-full text-xs font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_4px_0_#6b1f17] hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17] transition"
            >
              Leave A Request
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#fff4d6]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fff4d6]/40">
          <p>© 2026 Bowen Records. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#d9a441] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#d9a441] transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;