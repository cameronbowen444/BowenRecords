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
    <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
      {/* Shared background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Hero Header */}
      <section className="relative px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.4),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.24),transparent_35%)]" />

            {/* Giant record */}
            <div className="absolute -right-24 -bottom-28 w-80 h-80 rounded-full bg-[#050505] border-[22px] border-[#1c1c1c] opacity-60 hidden md:block">
              <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-28 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
            </div>

            <div className="relative px-6 py-14 md:px-12 md:py-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/80 px-5 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />

                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  The Record Room
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                Dig The
                <span className="block text-[#d9a441]">Crates.</span>
              </h1>

              <p className="text-[#fff4d6]/65 mt-6 max-w-2xl text-lg leading-relaxed">
                Browse classic records, rare vinyl, new arrivals, and old-school
                albums built for collectors.
              </p>

              {searchQuery && (
                <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-2xl bg-[#0d0907] border border-[#fff4d6]/10 px-5 py-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d9a441]">
                    Search Results
                  </span>

                  <span className="font-black text-xl">“{searchQuery}”</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
            Vinyl Records • Rare Finds • Classic Albums • Collector Picks
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Filter / Counter Bar */}
          <div className="mb-10 rounded-[1.5rem] border-2 border-[#fff4d6]/10 bg-[#24150f] p-5 md:p-6 shadow-[0_10px_0_#6b1f17]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Available In The Shop
                </p>

                <h2 className="text-2xl md:text-3xl font-black uppercase mt-1">
                  Showing {filteredRecords.length}{" "}
                  {selectedGenre === "All" ? "" : selectedGenre}{" "}
                  {filteredRecords.length === 1 ? "Record" : "Records"}
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-5 py-3 rounded-full text-sm font-black uppercase tracking-wide border-2 transition ${
                      selectedGenre === genre
                        ? "bg-[#d9a441] text-[#160f0b] border-[#fff4d6] shadow-[0_4px_0_#6b1f17]"
                        : "bg-[#0d0907] border-[#fff4d6]/15 text-[#fff4d6]/75 hover:text-[#160f0b] hover:bg-[#d9a441] hover:border-[#fff4d6]"
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
            <div className="grid grid-cols-2 max-[490px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
              {filteredRecords.map((record) => (
                <Link
                  to={`/product/${record.id}`}
                  key={record.id}
                  className="group relative rounded-[1.75rem] bg-[#24150f] border-2 border-[#fff4d6]/10 overflow-hidden shadow-[0_10px_0_#6b1f17] hover:-translate-y-2 hover:shadow-[0_16px_0_#6b1f17] transition duration-300"
                >
                  {/* Genre badge */}
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-[#d12b1f] text-white px-4 py-1.5 border border-[#fff4d6]/40 shadow-lg">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                      {record.genre}
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
                      {record.format}
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
          ) : (
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-10 md:p-14 text-center shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#050505] border-[18px] border-[#1c1c1c] opacity-40 hidden md:block">
                <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
              </div>

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Empty Crate
                </p>

                <h2 className="text-4xl md:text-5xl font-black uppercase mt-3">
                  No Records Found
                </h2>

                <p className="text-[#fff4d6]/65 mt-4 max-w-xl mx-auto leading-relaxed">
                  No results matched{" "}
                  {searchQuery ? `“${searchQuery}”` : "this genre"}. Try
                  another title, artist, or genre and keep digging.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  {searchQuery && (
                    <Link
                      to="/records"
                      className="inline-flex justify-center bg-[#d9a441] text-[#160f0b] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
                    >
                      Clear Search
                    </Link>
                  )}

                  <button
                    onClick={() => setSelectedGenre("All")}
                    className="inline-flex justify-center bg-[#0d0907] text-[#fff4d6] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6]/20 hover:bg-[#d12b1f] hover:border-[#d12b1f] transition"
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