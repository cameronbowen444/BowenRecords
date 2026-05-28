import { useState } from "react";
import { records } from "../data/records";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const RecordDetailsPage = () => {
  const { id } = useParams();
  const record = records.find((record) => record.id === Number(id));
  const { addToCart } = useCart();

  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleAddToCart = () => {
    if (!record || !record.inStock) return;

    addToCart(record);
    setShowCartMessage(true);

    setTimeout(() => {
      setShowCartMessage(false);
    }, 2500);
  };

  if (!record) {
    return (
      <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black uppercase">Record not found</h1>

          <Link
            to="/records"
            className="inline-block mt-6 text-[#d9a441] hover:text-[#fff4d6] font-black uppercase tracking-wide"
          >
            ← Back to records
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
      {/* Shared background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Added to cart popup */}
      {showCartMessage && (
        <div className="fixed top-28 right-5 z-[1000] max-w-sm animate-[slideIn_0.25s_ease-out]">
          <div className="relative overflow-hidden rounded-2xl border-4 border-[#d9a441] bg-[#fff4d6] text-[#160f0b] px-5 py-4 shadow-[0_8px_0_#6b1f17]">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#050505] border-[8px] border-[#1c1c1c] opacity-15" />

            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#050505] border-[5px] border-[#1c1c1c] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#d12b1f] border-2 border-[#d9a441]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#d12b1f] font-black">
                  Added To Cart
                </p>

                <p className="font-black uppercase leading-tight">
                  {record.title}
                </p>

                <p className="text-sm text-[#160f0b]/60">
                  Dropped into your record bag.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/records"
            className="inline-flex mb-8 text-sm text-[#fff4d6]/60 hover:text-[#d9a441] font-black uppercase tracking-[0.2em] transition"
          >
            ← Back To Crates
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 xl:gap-14 items-center">
            {/* Left Display */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.22),transparent_35%)]" />

                <div className="relative rounded-[1.5rem] bg-[#0d0907] border-2 border-[#fff4d6]/10 p-6 md:p-8 overflow-hidden">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[68%] aspect-square rounded-full bg-[#050505] border-[18px] border-[#1c1c1c] opacity-75">
                    <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
                    <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
                    <div className="absolute inset-28 rounded-full border border-[#fff4d6]/10" />

                    <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
                  </div>

                  <div className="absolute right-10 top-10 z-20 origin-top-right rotate-[28deg]">
                    <div className="w-32 md:w-40 h-2 rounded-full bg-[#d9a441] shadow-[0_0_14px_rgba(217,164,65,0.45)]" />
                    <div className="ml-auto mt-[-10px] w-7 h-7 rounded-full bg-[#fff4d6] border-4 border-[#d12b1f]" />
                    <div className="ml-2 mt-1 w-12 h-3 bg-[#fff4d6] rounded-full" />
                  </div>

                  <div className="relative z-10 w-[78%] max-w-[360px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-[#fff4d6]/20 shadow-2xl rotate-[-2deg]">
                    <img
                      src={record.imageUrl}
                      alt={`${record.title} by ${record.artist}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>

                  <div className="relative z-10 mt-7 flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />
                    <span className="w-5 h-5 rounded-full bg-[#d9a441] border-2 border-[#fff4d6]" />
                    <span className="w-5 h-5 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />

                    <span className="ml-auto text-xs uppercase tracking-[0.25em] text-[#fff4d6]/35 font-black">
                      Now Viewing
                    </span>
                  </div>
                </div>

                <div className="absolute left-5 bottom-5 bg-[#d12b1f] text-white px-5 py-3 rounded-2xl border-2 border-[#fff4d6] shadow-[0_8px_0_#6b1f17] rotate-[-3deg]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#fff4d6]/80">
                    {record.genre}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Info */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-6 md:p-9 lg:p-10 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,43,31,0.24),transparent_35%)]" />

                <div className="relative">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/80 px-5 py-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />

                    <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                      {record.genre} • {record.format}
                    </p>
                  </div>

                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                    {record.title}
                  </h1>

                  <p className="text-2xl md:text-3xl text-[#fff4d6]/60 mt-4 font-semibold">
                    {record.artist}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <span className="text-4xl font-black text-[#d9a441]">
                      ${record.price}
                    </span>

                    <span
                      className={`rounded-full px-4 py-2 border text-xs font-black uppercase tracking-[0.18em] ${
                        record.inStock
                          ? "bg-[#d9a441] text-[#160f0b] border-[#fff4d6]"
                          : "bg-[#0d0907] text-[#fff4d6]/50 border-[#fff4d6]/20"
                      }`}
                    >
                      {record.inStock ? "In Stock" : "Sold Out"}
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[#d9a441]">
                        Condition
                      </p>
                      <p className="font-black mt-2">{record.condition}</p>
                    </div>

                    <div className="rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[#d9a441]">
                        Format
                      </p>
                      <p className="font-black mt-2">{record.format}</p>
                    </div>

                    <div className="rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[#d9a441]">
                        Genre
                      </p>
                      <p className="font-black mt-2">{record.genre}</p>
                    </div>
                  </div>

                  <p className="text-[#fff4d6]/65 mt-8 leading-relaxed max-w-2xl">
                    {record.description}
                  </p>

                  <button
                    disabled={!record.inStock}
                    onClick={handleAddToCart}
                    className={`group relative mt-10 w-full sm:w-auto overflow-hidden rounded-full border-2 px-8 py-5 font-black uppercase tracking-wide transition ${
                      record.inStock
                        ? "bg-[#d9a441] text-[#160f0b] border-[#fff4d6] shadow-[0_7px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_4px_0_#6b1f17]"
                        : "bg-[#0d0907] text-[#fff4d6]/35 border-[#fff4d6]/10 cursor-not-allowed"
                    }`}
                  >
                    <span className="relative z-20 flex items-center justify-center gap-4">
                      <span className="relative w-10 h-10 rounded-full bg-[#050505] border-[5px] border-[#1c1c1c] flex items-center justify-center">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />

                        <span className="absolute -right-4 -top-1 w-8 h-1.5 rounded-full bg-[#fff4d6] rotate-[35deg] origin-left group-hover:rotate-[50deg] transition duration-300" />
                        <span className="absolute -right-5 top-2 w-3 h-3 rounded-full bg-[#fff4d6] border-2 border-[#d12b1f]" />
                      </span>

                      {record.inStock ? "Drop In Cart" : "Sold Out"}
                    </span>
                  </button>

                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#fff4d6]/35">
                    Secure checkout • Collector-ready records • Fast order prep
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
            <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
              Classic Sound • Rare Finds • Old-School Records
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecordDetailsPage;