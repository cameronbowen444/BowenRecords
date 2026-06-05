import { Link } from "react-router-dom";
import { records } from "../data/records";

function NewArrivalsPage() {
  const newArrivals = records.filter((record) => record.isNewArrival);

  return (
    <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
      {/* Shared background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

      {/* Hero Header */}
      <section className="relative px-4 pb-9 pt-12 sm:px-6 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.32),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />

            {/* Decorative records */}
            <div className="absolute -bottom-20 -right-16 hidden h-56 w-56 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-55 md:block">
              <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
            </div>

            <div className="absolute -left-16 -top-16 hidden h-44 w-44 rounded-full border-[12px] border-[#1c1c1c] bg-[#050505] opacity-35 lg:block">
              <div className="absolute inset-7 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-14 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d12b1f] bg-[#d9a441]" />
            </div>

            <div className="relative px-5 py-10 md:px-10 md:py-12">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  New Arrivals
                </p>
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
                Fresh Wax
                <span className="block text-[#d9a441]">Just Landed.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                Newly added records, rare crate picks, and old-school classics
                ready for the next collector.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/45">
                <span>Fresh Drops</span>
                <span>•</span>
                <span>Rare Vinyl</span>
                <span>•</span>
                <span>Classic Albums</span>
                <span>•</span>
                <span>Collector Finds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
            Just Added • Fresh Crates • New Finds • Limited Picks
          </p>
        </div>
      </div>

      {/* New Arrivals Content */}
      <section className="relative px-4 py-14 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Count Bar */}
          <div className="mb-8 rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_6px_0_#6b1f17] md:p-5">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Recently Added
                </p>

                <h2 className="mt-1 text-xl font-black uppercase md:text-2xl">
                  Showing {newArrivals.length}{" "}
                  {newArrivals.length === 1 ? "New Record" : "New Records"}
                </h2>
              </div>

              <Link
                to="/records"
                className="inline-flex justify-center rounded-full border-2 border-[#fff4d6]/20 bg-[#0d0907] px-5 py-3 text-xs font-black uppercase tracking-wide text-[#fff4d6] transition hover:border-[#d12b1f] hover:bg-[#d12b1f]"
              >
                Browse All
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          {newArrivals.length > 0 ? (
            <div className="relative z-10 grid grid-cols-2 gap-4 overflow-visible max-[490px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {newArrivals.map((record) => (
                <Link
                  to={`/product/${record.id}`}
                  key={record.id}
                  className="group relative z-0 overflow-visible rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] shadow-[0_6px_0_#6b1f17] transition duration-300 hover:z-[999] hover:-translate-y-1.5 hover:shadow-[0_10px_0_#6b1f17]"
                >
                  {/* New badge */}
                  <div className="absolute left-3 top-3 z-50 rounded-full border border-[#fff4d6]/35 bg-[#d12b1f] px-3 py-1 text-white shadow-lg">
                    <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                      New Drop
                    </p>
                  </div>

                  {/* Stock badge */}
                  <div
                    className={`absolute right-3 top-3 z-50 rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.15em] ${
                      record.inStock
                        ? "border-[#fff4d6] bg-[#d9a441] text-[#160f0b]"
                        : "border-[#fff4d6]/20 bg-[#0d0907] text-[#fff4d6]/60"
                    }`}
                  >
                    {record.inStock ? "In Stock" : "Sold Out"}
                  </div>

                  {/* Image / Record Sleeve */}
                  <div className="relative isolate aspect-square overflow-visible bg-[#0d0907] p-3.5">
                    <div className="absolute inset-0 z-0 rounded-t-2xl bg-[#0d0907]" />

                    {/* Vinyl record slides out on hover */}
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
          ) : (
            <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] p-8 text-center shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)] md:p-10">
              <div className="absolute -bottom-16 -left-16 hidden h-48 w-48 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-40 md:block">
                <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
              </div>

              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Empty Drop
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">
                  No New Arrivals Yet
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#fff4d6]/65">
                  Check back soon. The next crate of fresh records is on the
                  way.
                </p>

                <Link
                  to="/records"
                  className="mt-6 inline-flex rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
                >
                  Browse Records
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default NewArrivalsPage;