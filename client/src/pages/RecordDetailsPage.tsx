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
      <main className="min-h-screen bg-[#160f0b] px-4 py-14 text-[#fff4d6] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-black uppercase">Record not found</h1>

          <Link
            to="/records"
            className="mt-5 inline-block text-xs font-black uppercase tracking-[0.18em] text-[#d9a441] transition hover:text-[#fff4d6]"
          >
            ← Back to records
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
      {/* Shared background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

      {/* Added to cart popup */}
      {showCartMessage && (
        <div className="fixed right-4 top-24 z-[1000] max-w-xs animate-[slideIn_0.25s_ease-out]">
          <div className="relative overflow-hidden rounded-xl border-2 border-[#d9a441] bg-[#fff4d6] px-4 py-3 text-[#160f0b] shadow-[0_5px_0_#6b1f17]">
            <div className="absolute -bottom-7 -right-7 h-20 w-20 rounded-full border-[6px] border-[#1c1c1c] bg-[#050505] opacity-15" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[4px] border-[#1c1c1c] bg-[#050505]">
                <div className="h-3.5 w-3.5 rounded-full border-2 border-[#d9a441] bg-[#d12b1f]" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d12b1f]">
                  Added To Cart
                </p>

                <p className="text-sm font-black uppercase leading-tight">
                  {record.title}
                </p>

                <p className="text-xs text-[#160f0b]/60">
                  Dropped into your record bag.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative px-4 py-12 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/records"
            className="mb-6 inline-flex text-xs font-black uppercase tracking-[0.18em] text-[#fff4d6]/60 transition hover:text-[#d9a441]"
          >
            ← Back To Crates
          </Link>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-10">
            {/* Left Display */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-[#d9a441] bg-[#6b1f17] p-3 shadow-[0_0_0_5px_#d12b1f,0_20px_55px_rgba(0,0,0,0.45)]">
                {/* Outer jukebox glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(209,43,31,0.22),transparent_38%)]" />

                {/* Inner jukebox window */}
                <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-[#d9a441] bg-[#0d0907] p-4 shadow-inner">
                  {/* Dark glass shine */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,244,214,0.08),transparent_35%,rgba(0,0,0,0.2))]" />

                  {/* Vinyl behind album */}
                  <div className="absolute right-8 top-1/2 aspect-square w-[58%] -translate-y-1/2 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-80 shadow-[0_0_35px_rgba(217,164,65,0.12)]">
                    <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
                    <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
                    <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />

                    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
                  </div>
                  

                  {/* Album cover */}
                  <div className="relative z-20 mx-auto w-[74%] max-w-[320px] rotate-[-2deg] overflow-hidden rounded-xl border-2 border-[#fff4d6]/20 bg-[#160f0b] shadow-2xl lg:mx-0">
                    <img
                      src={record.imageUrl}
                      alt={`${record.title} by ${record.artist}`}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  
                </div>

                {/* Genre badge */}
                <div className="absolute bottom-5 left-5 z-30 rotate-[-3deg] rounded-xl border-2 border-[#fff4d6] bg-[#d12b1f] px-4 py-2 text-white shadow-[0_5px_0_#6b1f17]">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#fff4d6]/80">
                    {record.genre}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Info */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] p-5 shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)] md:p-7 lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,43,31,0.2),transparent_35%)]" />

                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                      {record.genre} • {record.format}
                    </p>
                  </div>

                  <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl xl:text-6xl">
                    {record.title}
                  </h1>

                  <p className="mt-3 text-xl font-semibold text-[#fff4d6]/60 md:text-2xl">
                    {record.artist}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="text-3xl font-black text-[#d9a441]">
                      ${record.price}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${
                        record.inStock
                          ? "border-[#fff4d6] bg-[#d9a441] text-[#160f0b]"
                          : "border-[#fff4d6]/20 bg-[#0d0907] text-[#fff4d6]/50"
                      }`}
                    >
                      {record.inStock ? "In Stock" : "Sold Out"}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-[#fff4d6]/10 bg-[#0d0907] p-3">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#d9a441]">
                        Condition
                      </p>
                      <p className="mt-1.5 text-sm font-black">
                        {record.condition}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#fff4d6]/10 bg-[#0d0907] p-3">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#d9a441]">
                        Format
                      </p>
                      <p className="mt-1.5 text-sm font-black">
                        {record.format}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#fff4d6]/10 bg-[#0d0907] p-3">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#d9a441]">
                        Genre
                      </p>
                      <p className="mt-1.5 text-sm font-black">
                        {record.genre}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                    {record.description}
                  </p>

                  <button
                    disabled={!record.inStock}
                    onClick={handleAddToCart}
                    className={`group relative mt-7 w-full overflow-hidden rounded-2xl border-2 p-2 transition sm:w-auto ${
                      record.inStock
                        ? "border-[#fff4d6] bg-[#d9a441] text-[#160f0b] shadow-[0_5px_0_#6b1f17] hover:translate-y-[2px] hover:shadow-[0_3px_0_#6b1f17]"
                        : "cursor-not-allowed border-[#fff4d6]/10 bg-[#0d0907] text-[#fff4d6]/35"
                    }`}
                  >
                    <span className="relative flex items-center gap-3 rounded-xl bg-[#fff4d6] p-2 pr-5 text-[#160f0b]">
                      {/* Mini turntable */}
                      <span className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-[#e8dfc2] shadow-inner">
                        {/* Record */}
                        <span className="absolute left-2 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#1c1c1c] bg-[#050505] transition duration-500 group-hover:rotate-[130deg]">
                          <span className="absolute inset-2 rounded-full border border-[#fff4d6]/10" />
                          <span className="absolute inset-4 rounded-full border border-[#fff4d6]/10" />

                          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#d12b1f]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#160f0b]" />
                          </span>
                        </span>

                        {/* Control panel */}
                        <span className="absolute right-1.5 top-1.5 h-[52px] w-8 rounded-md bg-[#1b1715]">
                          <span className="absolute left-1.5 top-2 h-7 w-1 rounded-full bg-[#fff4d6]/35" />
                          <span className="absolute left-1 top-5 h-2.5 w-2 rounded-sm bg-[#d9a441]" />

                          <span className="absolute right-1.5 top-2 h-8 w-1 rounded-full bg-[#fff4d6]/35" />
                          <span className="absolute right-1 top-4 h-2.5 w-2 rounded-sm bg-[#fff4d6]" />
                        </span>

                        {/* Fixed tonearm base */}
                        <span className="absolute right-[38px] top-[1px] z-30 h-4 w-4 rounded-full border-2 border-[#1b1715] bg-[#fff4d6]" />

                        {/* Pivot dot */}
                        <span className="absolute right-[43px] top-[6px] z-40 h-1.5 w-1.5 rounded-full bg-[#1b1715]" />

                        {/* Moving tonearm: starts horizontal, swings down to record center */}
                        <span className="absolute right-[47px] top-[8px] z-30 h-[2px] w-10 origin-right rotate-[-90deg] rounded-full bg-[#919191] transition duration-500 ease-out group-hover:rotate-[-40deg]" />
                      </span>

                      {/* Text */}
                      <span className="flex flex-col text-left leading-tight">
                        <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#d12b1f]">
                          {record.inStock ? "Add Record" : "Unavailable"}
                        </span>

                        <span className="text-sm font-black uppercase tracking-wide">
                          {record.inStock ? "Drop In Cart" : "Sold Out"}
                        </span>
                      </span>
                    </span>
                  </button>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/35">
                    Secure checkout • Collector-ready records • Fast order prep
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-9 border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
              Classic Sound • Rare Finds • Old-School Records
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecordDetailsPage;
