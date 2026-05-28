import { records } from "../data/records";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
      {/* Shared Page Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Hero Section */}
      <section className="relative">
        <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/70 px-5 py-2 mb-6 shadow-[0_0_20px_rgba(217,164,65,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                Vintage Vinyl • Rare Finds
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] uppercase tracking-tight">
              Drop the
              <span className="block text-[#d9a441]">Needle.</span>
            </h1>

            <p className="text-[#fff4d6]/65 mt-6 max-w-lg text-lg leading-relaxed">
              Old-school records, classic albums, and crate-digging treasures
              from before the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                to="/records"
                className="group text-center bg-[#d9a441] text-[#160f0b] px-7 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
              >
                Shop Records
                <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>

              <Link
                to="/new-arrivals"
                className="text-center bg-[#24150f] border-2 border-[#fff4d6]/20 px-7 py-4 rounded-full font-black uppercase tracking-wide text-[#fff4d6] hover:bg-[#d12b1f] hover:border-[#d12b1f] transition"
              >
                New Arrivals
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[#fff4d6]/45">
              <span>Vinyl</span>
              <span>•</span>
              <span>Rare Finds</span>
              <span>•</span>
              <span>Classics</span>
              <span>•</span>
              <span>Pre-90s</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            {/* Jukebox arch */}
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-t-full rounded-b-[3rem] bg-[#24150f] border-[6px] border-[#d9a441] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Inner arch */}
              <div className="absolute inset-6 rounded-t-full rounded-b-[2rem] border-2 border-[#fff4d6]/20 bg-[#0d0907] overflow-hidden">
                {/* Jukebox color panels */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle,#d12b1f_0%,#6b1f17_45%,transparent_70%)] opacity-80" />

                <div className="absolute inset-x-10 top-12 h-24 rounded-t-full border-2 border-[#d9a441]/50 bg-[#fff4d6]/5" />

                {/* Spinning record */}
                <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#050505] border-[18px] border-[#1b1b1b] shadow-[0_0_45px_rgba(217,164,65,0.25)] flex items-center justify-center animate-[spin_18s_linear_infinite]">
                  <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
                  <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
                  <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />

                  <div className="w-24 h-24 rounded-full bg-[#d12b1f] border-[10px] border-[#d9a441] flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#0d0907]" />
                  </div>
                </div>

                {/* Record label card */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] rounded-2xl bg-[#fff4d6] text-[#160f0b] px-5 py-4 border-4 border-[#d9a441] shadow-[0_8px_0_#6b1f17]">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d12b1f]">
                    Now Spinning
                  </p>
                  <p className="text-xl font-black uppercase leading-tight mt-1">
                    Fresh Crate Finds
                  </p>
                  <p className="text-sm text-[#160f0b]/60 mt-1">
                    Updated weekly with rare classics.
                  </p>
                </div>
              </div>

              {/* Jukebox bottom buttons */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                <span className="w-5 h-5 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />
                <span className="w-5 h-5 rounded-full bg-[#d9a441] border-2 border-[#fff4d6]" />
                <span className="w-5 h-5 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />
                <span className="w-5 h-5 rounded-full bg-[#d9a441] border-2 border-[#fff4d6]" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-[#d12b1f] text-white px-5 py-4 rounded-2xl border-2 border-[#fff4d6] shadow-[0_8px_0_#6b1f17] rotate-[-3deg]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#fff4d6]/80">
                Pre-90s
              </p>
              <p className="text-2xl font-black">Classics</p>
            </div>
          </div>
        </section>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
            Vinyl Records • Rare Finds • Classic Albums • Crate Picks
          </p>
        </div>
      </div>

      {/* Featured Records Section */}
      <section className="relative px-6 pt-20 pb-24">
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/80 px-5 py-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />

                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Featured Crate Picks
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                Hot Wax
                <span className="block text-[#d9a441]">On The Wall</span>
              </h2>
            </div>

            <Link
              to="/records"
              className="hidden md:inline-flex items-center justify-center bg-[#24150f] border-2 border-[#fff4d6]/20 px-8 py-4 rounded-full font-black uppercase tracking-wide text-[#fff4d6] hover:bg-[#d12b1f] hover:border-[#d12b1f] transition"
            >
              View All Records
            </Link>
          </div>

          {/* Records Grid */}
          <div className="grid grid-cols-2 max-[490px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
            {records
              .filter((record) => record.isFeatured)
              .map((record) => (
                <Link
                  to={`/product/${record.id}`}
                  key={record.id}
                  className="group relative rounded-[1.75rem] bg-[#24150f] border-2 border-[#fff4d6]/10 overflow-hidden shadow-[0_10px_0_#6b1f17] hover:-translate-y-2 hover:shadow-[0_16px_0_#6b1f17] transition duration-300"
                >
                  {/* Top label */}
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-[#d12b1f] text-white px-4 py-1.5 border border-[#fff4d6]/40 shadow-lg">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                      Featured
                    </p>
                  </div>

                  {/* Stock badge */}
                  <div
                    className={`absolute top-4 right-4 z-20 rounded-full px-3 py-1.5 border text-[10px] font-black uppercase tracking-[0.18em] ${
                      record.inStock
                        ? "bg-[#d9a441] text-[#160f0b] border-[#fff4d6]"
                        : "bg-[#0d0907] text-[#fff4d6]/60 border-[#fff4d6]/20"
                    }`}
                  >
                    {record.inStock ? "In Stock" : "Sold Out"}
                  </div>

                  {/* Image / Record Sleeve */}
                  <div className="relative aspect-square bg-[#0d0907] p-5 overflow-hidden">
                    {/* Vinyl peeking from sleeve */}
                    <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[78%] h-[78%] rounded-full bg-[#050505] border-[14px] border-[#1c1c1c] opacity-70 group-hover:translate-x-1/4 group-hover:rotate-45 transition duration-500">
                      <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
                      <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
                      <div className="absolute left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-4 border-[#d9a441]" />
                    </div>

                    {/* Album cover */}
                    <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border-4 border-[#fff4d6]/15 shadow-2xl group-hover:rotate-[-2deg] transition duration-300">
                      <img
                        src={record.imageUrl}
                        alt={`${record.title} by ${record.artist}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <p className="text-xs text-[#d9a441] uppercase tracking-[0.2em] font-bold">
                      {record.genre} • {record.format}
                    </p>

                    <h3 className="font-black text-xl mt-2 leading-tight uppercase group-hover:text-[#d9a441] transition">
                      {record.title}
                    </h3>

                    <p className="text-sm text-[#fff4d6]/60 mt-1">
                      {record.artist}
                    </p>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#fff4d6]/10">
                      <span className="text-2xl font-black text-[#fff4d6]">
                        ${record.price}
                      </span>

                      <span className="text-xs font-black uppercase tracking-[0.18em] text-[#fff4d6]/50 group-hover:text-[#d9a441] transition">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Mobile View All */}
          <div className="flex justify-center mt-12 md:hidden">
            <Link
              to="/records"
              className="bg-[#d9a441] text-[#160f0b] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
            >
              View All Records
            </Link>
          </div>
        </div>
      </section>

      {/* Record Club Section */}
      <section className="relative px-6 pb-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.25),transparent_35%)]" />

            {/* Decorative record */}
            <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-[#050505] border-[20px] border-[#1c1c1c] opacity-60 hidden md:block">
              <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
            </div>

            {/* Decorative record */}
            <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#050505] border-[18px] border-[#1c1c1c] opacity-50 hidden md:block">
              <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a441] border-8 border-[#d12b1f]" />
            </div>

            <div className="relative px-6 py-14 md:px-12 md:py-20 text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/80 px-5 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />

                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Join The Record Club
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
                Fresh Finds.
                <span className="block text-[#d9a441]">No Filler.</span>
              </h2>

              <p className="text-[#fff4d6]/65 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
                Be first in line when rare vinyl, classic records, and fresh
                crate picks hit the shop.
              </p>

              <form className="mt-9 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 rounded-[1.5rem] bg-[#0d0907] border-2 border-[#fff4d6]/15 p-3 shadow-inner">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-[#fff4d6] text-[#160f0b] placeholder:text-[#160f0b]/45 px-5 py-4 outline-none font-semibold"
                  />

                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-[#d9a441] text-[#160f0b] px-8 py-4 font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_5px_0_#6b1f17] hover:translate-y-[2px] hover:shadow-[0_3px_0_#6b1f17] transition"
                  >
                    Join
                  </button>
                </div>
              </form>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#fff4d6]/45">
                <span>Rare Drops</span>
                <span>•</span>
                <span>Classic Records</span>
                <span>•</span>
                <span>Weekly Finds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
