import { Link } from "react-router-dom";
import { records } from "../data/records";

function NewArrivalsPage() {
  const newArrivals = records.filter((record) => record.isNewArrival);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            New Arrivals
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Fresh Finds Just Added
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl leading-relaxed">
            Browse the latest records added to Bowen Records, including vinyl,
            CDs, cassettes, and rare collectible finds.
          </p>
        </div>

        {/* Count */}
        <div className="mb-8">
          <p className="text-white/50 text-sm">
            Showing {newArrivals.length} new arrivals
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((record) => (
            <Link
              to={`/product/${record.id}`}
              key={record.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition block group"
            >
              <div className="relative aspect-square bg-white/10 overflow-hidden">
                <img
                  src={record.imageUrl}
                  alt={`${record.title} by ${record.artist}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
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

        {/* Empty State */}
        {newArrivals.length === 0 && (
          <div className="border border-white/10 bg-white/5 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold">No new arrivals yet</h2>
            <p className="text-white/60 mt-3">
              Check back soon for newly added records.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default NewArrivalsPage;