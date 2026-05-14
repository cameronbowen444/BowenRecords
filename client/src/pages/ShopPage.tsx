import { Link, useSearchParams } from "react-router-dom";
import { records } from "../data/records";

function ShopPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredRecords = records.filter((record) => {
    const searchText = searchQuery.toLowerCase();

    return (
      record.title.toLowerCase().includes(searchText) ||
      record.artist.toLowerCase().includes(searchText) ||
      record.genre.toLowerCase().includes(searchText) ||
      record.format.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-amber-900 text-white px-6 py-16">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Shop
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Browse Records
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl leading-relaxed">
            Explore vinyl, CDs, cassettes, classics, rare finds, and new
            arrivals from Bowen Records.
          </p>

          {searchQuery && (
            <p className="text-white/60 mt-4">
              Search results for:{" "}
              <span className="text-white font-semibold">"{searchQuery}"</span>
            </p>
          )}
        </div>

        {/* Simple Filter Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <p className="text-white/50 text-sm">
            Showing {filteredRecords.length} records
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold">
              All
            </button>

            <button className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 text-sm transition">
              Rock
            </button>

            <button className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 text-sm transition">
              Hip-Hop
            </button>

            <button className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 text-sm transition">
              Jazz
            </button>

            <button className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 text-sm transition">
              R&B
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredRecords.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredRecords.map((record) => (
              <Link
                to={`/product/${record.id}`}
                key={record.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition block group"
              >
                <div className="aspect-square bg-white/10 overflow-hidden">
                  <img
                    src={record.imageUrl}
                    alt={`${record.title} by ${record.artist}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <p className="text-xs text-white/40">
                    {record.genre} • {record.format}
                  </p>

                  <h3 className="font-semibold mt-1">{record.title}</h3>

                  <p className="text-sm text-white/60">{record.artist}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold">${record.price}</span>

                    <span
                      className={`text-xs ${
                        record.inStock ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {record.inStock ? "In Stock" : "Sold Out"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-white/10 bg-white/5 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold">No records found</h2>

            <p className="text-white/60 mt-3">
              No results matched "{searchQuery}". Try searching another title,
              artist, or genre.
            </p>

            <Link
              to="/records"
              className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/80 transition"
            >
              Clear Search
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default ShopPage;