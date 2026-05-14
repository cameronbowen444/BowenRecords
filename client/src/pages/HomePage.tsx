
import { records } from "../data/records";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-amber-900 text-white">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            New & Used Vinyl Records
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your Next Favorite Record.
          </h1>

          <p className="text-white/60 mt-6 max-w-xl text-lg leading-relaxed">
            Browse vinyl, CDs, cassettes, and rare music finds from Bowen
            Records. Discover classics, new arrivals, and collectible albums.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/80 transition">
              Shop Records
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              View New Arrivals
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/10 border-[24px] border-white/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-black border border-white/20"></div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 bg-white text-black px-5 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold">Now Spinning</p>
            <p className="text-xs text-black/60">
              Rare vinyl finds updated weekly
            </p>
          </div>
        </div>
      </section>

      {/* Featured Records section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Featured
            </p>
            <h2 className="text-3xl font-bold mt-2">Featured Records</h2>
          </div>

          <Link
            to="/records"
            className="border border-white/20 px-8 py-3 rounded-full font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {records
            .filter((record) => record.isFeatured)
            .map((record) => (
              <Link
                to={`/product/${record.id}`}
                key={record.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
              >
                <div className="aspect-square bg-white/10">
                  <img
                    src={record.imageUrl}
                    alt={`${record.title} by ${record.artist}`}
                    className="w-full h-full object-cover"
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
        <div className="flex justify-center mt-10">
          <Link to='/records' className="border border-white/20 px-8 py-3 rounded-full font-semibold text-white/80 hover:text-white hover:bg-white/10 transition">
            View All
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white text-black rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-black/50 mb-4">
            Stay Updated
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Sign up for new arrivals.
          </h2>

          <p className="text-black/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Get notified when new vinyl, CDs, cassettes, and rare finds are
            added to the shop.
          </p>

          <form className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-black/10 px-5 py-3 outline-none focus:border-black"
            />

            <button
              type="submit"
              className=" shrink-0 rounded-full bg-black text-white px-8 py-3 font-semibold hover:bg-black/80 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
