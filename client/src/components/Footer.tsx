
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-sm font-bold">BR</span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  Bowen Records
                </h2>
                <p className="text-xs text-white/60">Vinyl • CDs • Cassettes</p>
              </div>
            </div>

            <p className="text-white/60 mt-5 max-w-md leading-relaxed">
              Discover new arrivals, used vinyl, rare finds, and collectible
              music from every era.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="text-white/60 hover:text-white transition">
                <FaFacebookF size={20} />
              </a>

              <a href="#" className="text-white/60 hover:text-white transition">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>

            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  All Records
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Vinyl
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  CDs
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold mb-4">Info</h3>

            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 Bowen Records. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
