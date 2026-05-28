import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingBag, FiDisc } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
        {/* Shared background */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
        <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <section className="relative px-6 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] px-6 py-16 md:px-12 md:py-20 text-center shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.25),transparent_35%)]" />

              {/* Giant empty record */}
              <div className="absolute -right-24 -bottom-28 w-80 h-80 rounded-full bg-[#050505] border-[22px] border-[#1c1c1c] opacity-45 hidden md:block">
                <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-28 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
              </div>

              <div className="relative">
                <div className="mx-auto mb-7 w-24 h-24 rounded-full bg-[#0d0907] border-[6px] border-[#d9a441] shadow-[0_0_0_6px_#6b1f17] flex items-center justify-center">
                  <FiShoppingBag size={38} className="text-[#d9a441]" />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Empty Crate
                </p>

                <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight mt-4">
                  Your Cart Is
                  <span className="block text-[#d9a441]">Empty.</span>
                </h1>

                <p className="text-[#fff4d6]/65 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
                  Looks like you haven’t pulled anything from the crates yet.
                  Find a record and drop it in the bag.
                </p>

                <Link
                  to="/records"
                  className="inline-flex mt-9 bg-[#d9a441] text-[#160f0b] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
                >
                  Start Digging
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
      {/* Shared background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Header */}
      <section className="relative px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.4),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.24),transparent_35%)]" />

            {/* Decorative record */}
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
                  Checkout Counter
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                Your Record
                <span className="block text-[#d9a441]">Bag.</span>
              </h1>

              <p className="text-[#fff4d6]/65 mt-6 max-w-2xl text-lg leading-relaxed">
                Review your crate picks before checkout. Adjust quantities,
                remove records, or keep digging.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#fff4d6]/45">
                <span>{cartItems.length} Items</span>
                <span>•</span>
                <span>Collector Picks</span>
                <span>•</span>
                <span>Ready For Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
            Review The Stack • Drop The Needle • Checkout When Ready
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-10">
          {/* Cart Items */}
          {/* Cart Items */}
<div className="space-y-5">
  {/* Cart Header */}
  <div className="rounded-[1.5rem] border-2 border-[#fff4d6]/10 bg-[#24150f] p-5 md:p-6 shadow-[0_10px_0_#6b1f17]">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
          Checkout Stack
        </p>

        <h2 className="text-2xl md:text-3xl font-black uppercase mt-1">
          {cartItems.length} {cartItems.length === 1 ? "Record" : "Records"} Reserved
        </h2>
      </div>

      <button
        onClick={clearCart}
        className="self-start sm:self-center rounded-full bg-[#0d0907] border-2 border-[#fff4d6]/15 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#fff4d6]/60 hover:bg-[#d12b1f] hover:text-white hover:border-[#d12b1f] transition"
      >
        Clear Stack
      </button>
    </div>
  </div>

  {/* Receipt Style List */}
  <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#fff4d6] text-[#160f0b] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
    {/* Receipt top */}
    <div className="bg-[#d12b1f] px-5 py-4 border-b-4 border-[#d9a441]">
      <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#fff4d6]">
        Bowen Records • Checkout Slip
      </p>
    </div>

    <div className="divide-y-2 divide-dashed divide-[#160f0b]/20">
      {cartItems.map((item, index) => (
        <div
          key={item.record.id}
          className="group relative p-4 md:p-5 hover:bg-[#f5e7bd] transition"
        >
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[72px_1fr_auto] gap-4 md:gap-5 items-center">
            {/* Small record number / thumbnail */}
            <Link
              to={`/product/${item.record.id}`}
              className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl bg-[#160f0b] border-2 border-[#160f0b] overflow-hidden shadow-[4px_4px_0_#6b1f17]"
            >
              <img
                src={item.record.imageUrl}
                alt={`${item.record.title} by ${item.record.artist}`}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
              />

              <span className="absolute inset-0 bg-black/10" />

              <span className="absolute -left-2 -top-2 w-7 h-7 rounded-full bg-[#d9a441] border-2 border-[#160f0b] flex items-center justify-center text-[10px] font-black">
                {index + 1}
              </span>
            </Link>

            {/* Main info */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d12b1f]">
                  {item.record.genre}
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#160f0b]/40">
                  /
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#160f0b]/50">
                  {item.record.format}
                </span>
              </div>

              <Link to={`/product/${item.record.id}`}>
                <h3 className="text-lg md:text-xl font-black uppercase leading-tight truncate group-hover:text-[#d12b1f] transition">
                  {item.record.title}
                </h3>
              </Link>

              <p className="text-sm text-[#160f0b]/60 truncate">
                {item.record.artist}
              </p>

              <p className="text-xs text-[#160f0b]/45 mt-1">
                Condition:{" "}
                <span className="font-bold text-[#160f0b]/65">
                  {item.record.condition}
                </span>
              </p>
            </div>

            {/* Desktop controls */}
            <div className="hidden md:flex items-center gap-5">
              {/* Quantity */}
              <div className="flex items-center rounded-full bg-[#160f0b] text-[#fff4d6] border-2 border-[#6b1f17] p-1">
                <button
                  onClick={() => decreaseQuantity(item.record.id)}
                  className="w-8 h-8 rounded-full hover:bg-[#d12b1f] transition font-black"
                >
                  -
                </button>

                <span className="w-9 text-center font-black">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.record.id)}
                  className="w-8 h-8 rounded-full hover:bg-[#d9a441] hover:text-[#160f0b] transition font-black"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="w-24 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-[#160f0b]/40 font-black">
                  Total
                </p>

                <p className="text-xl font-black">
                  ${(item.record.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.record.id)}
                className="w-10 h-10 rounded-full bg-[#160f0b] text-[#fff4d6]/60 hover:text-white hover:bg-[#d12b1f] transition flex items-center justify-center"
                aria-label="Remove item"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden mt-4 pl-20 flex items-center justify-between gap-4">
            <div className="flex items-center rounded-full bg-[#160f0b] text-[#fff4d6] border-2 border-[#6b1f17] p-1">
              <button
                onClick={() => decreaseQuantity(item.record.id)}
                className="w-8 h-8 rounded-full hover:bg-[#d12b1f] transition font-black"
              >
                -
              </button>

              <span className="w-9 text-center font-black">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.record.id)}
                className="w-8 h-8 rounded-full hover:bg-[#d9a441] hover:text-[#160f0b] transition font-black"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xl font-black">
                ${(item.record.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.record.id)}
                className="w-10 h-10 rounded-full bg-[#160f0b] text-[#fff4d6]/60 hover:text-white hover:bg-[#d12b1f] transition flex items-center justify-center"
                aria-label="Remove item"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Receipt bottom */}
    <div className="bg-[#160f0b] px-5 py-4 border-t-4 border-[#d9a441]">
      <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-[#fff4d6]/70">
        Keep Digging Or Checkout The Stack
      </p>
    </div>
  </div>
</div>

          {/* Order Summary */}
          <aside className="relative h-fit lg:sticky lg:top-6">
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#fff4d6] text-[#160f0b] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
              {/* Decorative record */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#050505] border-[16px] border-[#1c1c1c] opacity-15">
                <div className="absolute inset-8 rounded-full border border-[#160f0b]/20" />
                <div className="absolute inset-14 rounded-full border border-[#160f0b]/20" />
                <div className="absolute left-1/2 top-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-4 border-[#d9a441]" />
              </div>

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d12b1f] font-black">
                  Order Summary
                </p>

                <h2 className="text-3xl font-black uppercase mt-2">
                  Final Stack
                </h2>

                <div className="space-y-4 mt-7">
                  <div className="flex items-center justify-between text-[#160f0b]/65">
                    <span>Subtotal</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#160f0b]/65">
                    <span>Shipping</span>
                    <span className="font-bold">Calculated later</span>
                  </div>

                  <div className="flex items-center justify-between text-[#160f0b]/65">
                    <span>Tax</span>
                    <span className="font-bold">Calculated later</span>
                  </div>
                </div>

                <div className="border-t-2 border-[#160f0b]/10 mt-7 pt-7 flex items-center justify-between">
                  <span className="font-black uppercase tracking-wide">
                    Total
                  </span>

                  <span className="font-black text-4xl">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="group relative overflow-hidden flex items-center justify-center gap-4 w-full mt-8 bg-[#d9a441] text-[#160f0b] px-8 py-5 rounded-full font-black uppercase tracking-wide border-2 border-[#160f0b] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
                >
                  <span className="relative w-9 h-9 rounded-full bg-[#050505] border-[5px] border-[#1c1c1c] flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />
                    <span className="absolute -right-4 -top-1 w-8 h-1.5 rounded-full bg-[#160f0b] rotate-[35deg] origin-left group-hover:rotate-[50deg] transition duration-300" />
                    <span className="absolute -right-5 top-2 w-3 h-3 rounded-full bg-[#160f0b]" />
                  </span>

                  Checkout
                </Link>

                <Link
                  to="/records"
                  className="block text-center mt-5 text-sm text-[#160f0b]/55 hover:text-[#160f0b] transition font-black uppercase tracking-[0.18em]"
                >
                  Continue Digging
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#d12b1f] border-2 border-[#fff4d6]/30 p-5 shadow-[0_8px_0_#6b1f17] rotate-[1deg]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#fff4d6]/75">
                Shop Note
              </p>

              <p className="text-[#fff4d6] font-black text-xl uppercase mt-2">
                Good records move fast.
              </p>

              <p className="text-[#fff4d6]/75 text-sm mt-2 leading-relaxed">
                If a record is in your bag, checkout before another collector
                grabs it.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default CartPage;