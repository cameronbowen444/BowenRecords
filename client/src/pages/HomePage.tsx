import { records } from "../data/records";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
      {/* Shared Page Background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

      {/* Hero Section */}
      <section className="relative">
        <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-16 lg:pt-20">
          {/* Left Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/70 px-3.5 py-1.5 shadow-[0_0_14px_rgba(217,164,65,0.12)]">
              <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                Vintage Vinyl • Rare Finds
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Drop the
              <span className="block text-[#d9a441]">Needle.</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
              Old-school records, classic albums, and crate-digging treasures
              from before the digital age.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/records"
                className="group rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-5 py-3 text-center text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
              >
                Shop Records
                <span className="ml-1.5 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/new-arrivals"
                className="rounded-full border-2 border-[#fff4d6]/20 bg-[#24150f] px-5 py-3 text-center text-xs font-black uppercase tracking-wide text-[#fff4d6] transition hover:border-[#d12b1f] hover:bg-[#d12b1f]"
              >
                New Arrivals
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/45">
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
            <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-b-[2rem] rounded-t-full border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_50px_rgba(0,0,0,0.45)] sm:max-w-[430px]">
              {/* Inner arch */}
              <div className="absolute inset-4 overflow-hidden rounded-b-[1.5rem] rounded-t-full border border-[#fff4d6]/20 bg-[#0d0907] sm:inset-5">
                {/* Jukebox color panels */}
                <div className="absolute left-0 top-0 h-1/2 w-full bg-[radial-gradient(circle,#d12b1f_0%,#6b1f17_45%,transparent_70%)] opacity-75" />

                <div className="absolute inset-x-8 top-9 h-16 rounded-t-full border border-[#d9a441]/50 bg-[#fff4d6]/5 sm:h-20" />

                {/* Spinning record */}
                <div className="absolute left-1/2 top-[48%] flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] items-center justify-center rounded-full border-[12px] border-[#1b1b1b] bg-[#050505] shadow-[0_0_32px_rgba(217,164,65,0.2)] sm:h-60 sm:w-60 md:h-64 md:w-64">
                  <div className="absolute inset-6 rounded-full border border-[#fff4d6]/10" />
                  <div className="absolute inset-12 rounded-full border border-[#fff4d6]/10" />
                  <div className="absolute inset-[4.5rem] rounded-full border border-[#fff4d6]/10" />

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-[7px] border-[#d9a441] bg-[#d12b1f] sm:h-20 sm:w-20">
                    <div className="h-4 w-4 rounded-full bg-[#0d0907]" />
                  </div>
                </div>

                {/* Record label card */}
                <div className="absolute bottom-6 left-1/2 w-[78%] -translate-x-1/2 rounded-xl border-2 border-[#d9a441] bg-[#fff4d6] px-4 py-3 text-[#160f0b] shadow-[0_5px_0_#6b1f17]">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d12b1f]">
                    Now Spinning
                  </p>
                  <p className="mt-0.5 text-base font-black uppercase leading-tight sm:text-lg">
                    Fresh Crate Finds
                  </p>
                  <p className="mt-0.5 text-xs text-[#160f0b]/60">
                    Updated weekly with rare classics.
                  </p>
                </div>
              </div>

              {/* Jukebox bottom buttons */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                <span className="h-3.5 w-3.5 rounded-full border border-[#fff4d6] bg-[#d12b1f]" />
                <span className="h-3.5 w-3.5 rounded-full border border-[#fff4d6] bg-[#d9a441]" />
                <span className="h-3.5 w-3.5 rounded-full border border-[#fff4d6] bg-[#d12b1f]" />
                <span className="h-3.5 w-3.5 rounded-full border border-[#fff4d6] bg-[#d9a441]" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-3 rotate-[-3deg] rounded-xl border-2 border-[#fff4d6] bg-[#d12b1f] px-4 py-3 text-white shadow-[0_5px_0_#6b1f17] sm:left-8">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#fff4d6]/80">
                Pre-90s
              </p>
              <p className="text-lg font-black">Classics</p>
            </div>
          </div>
        </section>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
            Vinyl Records • Rare Finds • Classic Albums • Crate Picks
          </p>
        </div>
      </div>

      {/* Featured Records Section */}
      <section className="relative px-4 pb-16 pt-14 sm:px-6 lg:pb-20 lg:pt-16">
        <div className="relative mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Featured Crate Picks
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                Hot Wax
                <span className="block text-[#d9a441]">On The Wall</span>
              </h2>
            </div>

            <Link
              to="/records"
              className="hidden items-center justify-center rounded-full border-2 border-[#fff4d6]/20 bg-[#24150f] px-5 py-3 text-xs font-black uppercase tracking-wide text-[#fff4d6] transition hover:border-[#d12b1f] hover:bg-[#d12b1f] md:inline-flex"
            >
              View All Records
            </Link>
          </div>

          {/* Records Grid */}
          <div className="grid grid-cols-2 gap-4 max-[490px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {records
              .filter((record) => record.isFeatured)
              .map((record) => (
                <Link
  to={`/product/${record.id}`}
  key={record.id}
  className="group relative z-0 overflow-visible rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] shadow-[0_6px_0_#6b1f17] transition duration-300 hover:z-[999] hover:-translate-y-1.5 hover:shadow-[0_10px_0_#6b1f17]"
>
                  {/* Top label */}
                  <div className="absolute left-3 top-3 z-20 rounded-full border border-[#fff4d6]/35 bg-[#d12b1f] px-3 py-1 text-white shadow-lg">
                    <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                      Featured
                    </p>
                  </div>

                  {/* Stock badge */}
                  <div
                    className={`absolute right-3 top-3 z-20 rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.15em] ${
                      record.inStock
                        ? "border-[#fff4d6] bg-[#d9a441] text-[#160f0b]"
                        : "border-[#fff4d6]/20 bg-[#0d0907] text-[#fff4d6]/60"
                    }`}
                  >
                    {record.inStock ? "In Stock" : "Sold Out"}
                  </div>

                  {/* Image / Record Sleeve */}
<div className="relative isolate aspect-square overflow-visible bg-[#0d0907] p-3.5">
  {/* Keeps the card image area filled */}
  <div className="absolute inset-0 z-0 rounded-t-2xl bg-[#0d0907]" />

  {/* Vinyl record slides halfway out and appears above neighboring cards */}
  <div className="absolute right-3 top-1/2 z-40 h-[76%] w-[76%] -translate-y-1/2 translate-x-[5%] rounded-full border-[10px] border-[#1c1c1c] bg-[#050505] opacity-80 shadow-[0_0_28px_rgba(217,164,65,0.2)] transition-all duration-500 ease-out group-hover:translate-x-[34%] group-hover:rotate-[24deg] group-hover:opacity-100">
    <div className="absolute inset-5 rounded-full border border-[#fff4d6]/10" />
    <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
    <div className="absolute inset-[3.75rem] rounded-full border border-[#fff4d6]/10" />

    <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#d9a441] bg-[#d12b1f]" />
    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d0907]" />
  </div>

  {/* Album cover / sleeve */}
  <div className="relative z-50 h-full w-[84%] overflow-hidden rounded-lg border-2 border-[#fff4d6]/15 bg-[#160f0b] shadow-xl transition duration-300 group-hover:rotate-[-2deg]">
    <img
      src={record.imageUrl}
      alt={`${record.title} by ${record.artist}`}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>
</div>

                  {/* Card Content */}
                  <div className="p-3.5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#d9a441]">
                      {record.genre} • {record.format}
                    </p>

                    <h3 className="mt-1.5 text-base font-black uppercase leading-tight transition group-hover:text-[#d9a441]">
                      {record.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-[#fff4d6]/60">
                      {record.artist}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-[#fff4d6]/10 pt-3">
                      <span className="text-lg font-black text-[#fff4d6]">
                        ${record.price}
                      </span>

                      <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#fff4d6]/50 transition group-hover:text-[#d9a441]">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Mobile View All */}
          <div className="mt-9 flex justify-center md:hidden">
            <Link
              to="/records"
              className="rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
            >
              View All Records
            </Link>
          </div>
        </div>
      </section>

      {/* Record Club Section */}
      <section className="relative px-4 pb-20 sm:px-6">
        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />

            {/* Decorative record */}
            <div className="absolute -bottom-20 -left-20 hidden h-56 w-56 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-55 md:block">
              <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
            </div>

            {/* Decorative record */}
            <div className="absolute -right-16 -top-16 hidden h-44 w-44 rounded-full border-[12px] border-[#1c1c1c] bg-[#050505] opacity-45 md:block">
              <div className="absolute inset-6 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-12 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d12b1f] bg-[#d9a441]" />
            </div>

            <div className="relative px-5 py-10 text-center md:px-10 md:py-14">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Join The Record Club
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                Fresh Finds.
                <span className="block text-[#d9a441]">No Filler.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                Be first in line when rare vinyl, classic records, and fresh
                crate picks hit the shop.
              </p>

              <form className="mx-auto mt-6 max-w-xl">
                <div className="flex flex-col gap-2.5 rounded-2xl border-2 border-[#fff4d6]/15 bg-[#0d0907] p-2.5 shadow-inner sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-[#fff4d6] px-4 py-3 text-sm font-semibold text-[#160f0b] outline-none placeholder:text-[#160f0b]/45"
                  />

                  <button
                    type="submit"
                    className="shrink-0 rounded-xl border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
                  >
                    Join
                  </button>
                </div>
              </form>

              <div className="mt-5 flex flex-wrap justify-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/45">
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