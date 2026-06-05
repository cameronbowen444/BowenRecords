import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiDisc } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#d9a441] bg-[#0d0907] text-[#fff4d6]">
      {/* Thin retro strip */}
      <div className="border-b border-[#fff4d6]/15 bg-[#d12b1f]">
        <div className="mx-auto max-w-6xl px-4 py-1.5 sm:px-6">
          <p className="text-center text-[9px] font-black uppercase tracking-[0.22em] text-[#fff4d6] sm:text-[10px]">
            Vintage Vinyl • Rare Finds • Classic Records
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fff4d6] bg-[#160f0b] shadow-[0_0_0_2px_#d12b1f] transition group-hover:rotate-12">
                <FiDisc className="text-[#d9a441]" size={18} />
              </div>

              <div>
                <h2 className="text-xl font-black uppercase leading-none">
                  Bowen
                  <span className="block text-[#d9a441]">Records</span>
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#fff4d6]/50">
                  Vinyl • CDs • Classics
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-xs leading-5 text-[#fff4d6]/55">
              A retro online record shop for classic albums, rare finds, and
              crate-digging collectors.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fff4d6]/15 bg-[#160f0b] text-[#fff4d6]/65 transition hover:bg-[#d12b1f] hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fff4d6]/15 bg-[#160f0b] text-[#fff4d6]/65 transition hover:bg-[#d12b1f] hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fff4d6]/15 bg-[#160f0b] text-[#fff4d6]/65 transition hover:bg-[#d12b1f] hover:text-white"
                aria-label="TikTok"
              >
                <FaTiktok size={15} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9a441]">
              Shop
            </h3>

            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/records"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  All Records
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/records"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Vinyl
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9a441]">
              Help
            </h3>

            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/contact"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Request A Record
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Shipping
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#fff4d6]/60 transition hover:text-[#d9a441]"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Store Note */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9a441]">
              Record Finder
            </h3>

            <p className="text-xs leading-5 text-[#fff4d6]/55">
              Looking for a specific classic record? Send us the artist, album,
              pressing, or condition you want.
            </p>

            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-[#160f0b] shadow-[0_3px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_1px_0_#6b1f17]"
            >
              Leave A Request
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#fff4d6]/10 pt-5 text-[11px] text-[#fff4d6]/40 sm:flex-row">
          <p>© 2026 Bowen Records. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-[#d9a441]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#d9a441]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;