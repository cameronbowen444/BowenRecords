
import { records } from "../data/records";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const RecordDetailsPage = () => {
  const { id } = useParams();
  const record = records.find((record) => record.id === Number(id));
  const { addToCart } = useCart();

  if (!record) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Record not found</h1>

          <Link
            to="/"
            className="inline-block mt-6 text-white/60 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-900 text-white px-6 py-16">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <img
            src={record.imageUrl}
            alt={`${record.title} by ${record.artist}`}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div>
          <Link to="/records" className="text-sm text-white/50 hover:text-white">
            ← Back to records
          </Link>

          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mt-8">
            {record.genre} • {record.format}
          </p>

          <h1 className="text-5xl font-bold mt-4">{record.title}</h1>

          <p className="text-2xl text-white/60 mt-3">{record.artist}</p>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-3xl font-bold">${record.price}</span>

            <span
              className={`text-sm ${
                record.inStock ? "text-green-400" : "text-red-400"
              }`}
            >
              {record.inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>

          <div className="mt-8 space-y-3 text-white/70">
            <p>
              <span className="text-white font-semibold">Condition:</span>{" "}
              {record.condition}
            </p>

            <p>
              <span className="text-white font-semibold">Format:</span>{" "}
              {record.format}
            </p>

            <p>
              <span className="text-white font-semibold">Genre:</span>{" "}
              {record.genre}
            </p>
          </div>

          <p className="text-white/60 mt-8 leading-relaxed max-w-xl">
            {record.description}
          </p>

          <button
            disabled={!record.inStock}
            onClick={() => addToCart(record)}
            className={`mt-10 px-8 py-4 rounded-full font-semibold transition ${
              record.inStock
                ? "bg-white text-black hover:bg-white/80"
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }`}
          >
            {record.inStock ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </section>
    </main>
  )
};

export default RecordDetailsPage;
