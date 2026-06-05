import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { records } from "../data/records";

function ShopPage() {
  const [searchParams] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState("All");

  const searchQuery = searchParams.get("search") || "";

  const genres = [
    "All",
    "Rock",
    "Soul",
    "Funk",
    "Jazz",
    "Blues",
    "R&B",
    "Disco",
    "Motown",
    "Classic Pop",
    "Hip-Hop",
    "Reggae",
    "Country",
  ];

  const filteredRecords = records.filter((record) => {
    const searchText = searchQuery.toLowerCase();

    const matchesSearch =
      record.title.toLowerCase().includes(searchText) ||
      record.artist.toLowerCase().includes(searchText) ||
      record.genre.toLowerCase().includes(searchText) ||
      record.format.toLowerCase().includes(searchText);

    const matchesGenre =
      selectedGenre === "All" ||
      record.genre.toLowerCase() === selectedGenre.toLowerCase();

    return matchesSearch && matchesGenre;
  });

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

            {/* Giant record */}
            <div className="absolute -bottom-20 -right-16 hidden h-56 w-56 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-55 md:block">
              <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
            </div>

            <div className="relative px-5 py-10 md:px-10 md:py-12">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  The Record Room
                </p>
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
                Dig The
                <span className="block text-[#d9a441]">Crates.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                Browse classic records, rare vinyl, new arrivals, and old-school
                albums built for collectors.
              </p>

              {searchQuery && (
                <div className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-xl border border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d9a441]">
                    Search Results
                  </span>

                  <span className="text-base font-black">“{searchQuery}”</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
            Vinyl Records • Rare Finds • Classic Albums • Collector Picks
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <section className="relative px-4 py-14 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Filter / Counter Bar */}
          <div className="mb-8 rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_6px_0_#6b1f17] md:p-5">
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Available In The Shop
                </p>

                <h2 className="mt-1 text-xl font-black uppercase md:text-2xl">
                  Showing {filteredRecords.length}{" "}
                  {selectedGenre === "All" ? "" : selectedGenre}{" "}
                  {filteredRecords.length === 1 ? "Record" : "Records"}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`rounded-full border px-3.5 py-2 text-[10px] font-black uppercase tracking-wide transition sm:text-[11px] ${
                      selectedGenre === genre
                        ? "border-[#fff4d6] bg-[#d9a441] text-[#160f0b] shadow-[0_3px_0_#6b1f17]"
                        : "border-[#fff4d6]/15 bg-[#0d0907] text-[#fff4d6]/75 hover:border-[#fff4d6] hover:bg-[#d9a441] hover:text-[#160f0b]"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredRecords.length > 0 ? (
            <div className="relative z-10 grid grid-cols-2 gap-4 overflow-visible max-[490px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filteredRecords.map((record) => (
                <Link
                  to={`/product/${record.id}`}
                  key={record.id}
                  className="group relative z-0 overflow-visible rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] shadow-[0_6px_0_#6b1f17] transition duration-300 hover:z-[999] hover:-translate-y-1.5 hover:shadow-[0_10px_0_#6b1f17]"
                >
                  {/* Genre badge */}
                  <div className="absolute left-3 top-3 z-50 rounded-full border border-[#fff4d6]/35 bg-[#d12b1f] px-3 py-1 text-white shadow-lg">
                    <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                      {record.genre}
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
                    {/* Keeps the card image area filled */}
                    <div className="absolute inset-0 z-0 rounded-t-2xl bg-[#0d0907]" />

                    {/* Vinyl record slides out halfway */}
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
                      {record.format}
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
                  Empty Crate
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">
                  No Records Found
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#fff4d6]/65">
                  No results matched{" "}
                  {searchQuery ? `“${searchQuery}”` : "this genre"}. Try
                  another title, artist, or genre and keep digging.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  {searchQuery && (
                    <Link
                      to="/records"
                      className="inline-flex justify-center rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
                    >
                      Clear Search
                    </Link>
                  )}

                  <button
                    onClick={() => setSelectedGenre("All")}
                    className="inline-flex justify-center rounded-full border-2 border-[#fff4d6]/20 bg-[#0d0907] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#fff4d6] transition hover:border-[#d12b1f] hover:bg-[#d12b1f]"
                  >
                    Show All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ShopPage;