import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
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
      <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
        {/* Shared background */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

        <section className="relative px-4 py-12 sm:px-6 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] px-5 py-12 text-center shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)] md:px-10 md:py-14">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />

              {/* Giant empty record */}
              <div className="absolute -bottom-20 -right-16 hidden h-56 w-56 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-40 md:block">
                <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
              </div>

              <div className="relative">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#d9a441] bg-[#0d0907] shadow-[0_0_0_4px_#6b1f17]">
                  <FiShoppingBag size={26} className="text-[#d9a441]" />
                </div>

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Empty Crate
                </p>

                <h1 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
                  Your Cart Is
                  <span className="block text-[#d9a441]">Empty.</span>
                </h1>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                  Looks like you haven’t pulled anything from the crates yet.
                  Find a record and drop it in the bag.
                </p>

                <Link
                  to="/records"
                  className="mt-7 inline-flex rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
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
    <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
      {/* Shared background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

      {/* Header */}
      <section className="relative px-4 pb-9 pt-12 sm:px-6 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.32),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />

            {/* Decorative record */}
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
                  Checkout Counter
                </p>
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
                Your Record
                <span className="block text-[#d9a441]">Bag.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                Review your crate picks before checkout. Adjust quantities,
                remove records, or keep digging.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/45">
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
      <div className="relative border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
            Review The Stack • Drop The Needle • Checkout When Ready
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <section className="relative px-4 py-14 sm:px-6 lg:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {/* Cart Header */}
            <div className="rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_6px_0_#6b1f17] md:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                    Checkout Stack
                  </p>

                  <h2 className="mt-1 text-xl font-black uppercase md:text-2xl">
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "Record" : "Records"} Reserved
                  </h2>
                </div>

                <button
                  onClick={clearCart}
                  className="self-start rounded-full border border-[#fff4d6]/15 bg-[#0d0907] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#fff4d6]/60 transition hover:border-[#d12b1f] hover:bg-[#d12b1f] hover:text-white sm:self-center"
                >
                  Clear Stack
                </button>
              </div>
            </div>

            {/* Receipt Style List */}
            <div className="overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#fff4d6] text-[#160f0b] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
              {/* Receipt top */}
              <div className="border-b-2 border-[#d9a441] bg-[#d12b1f] px-4 py-3">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
                  Bowen Records • Checkout Slip
                </p>
              </div>

              <div className="divide-y divide-dashed divide-[#160f0b]/20">
                {cartItems.map((item, index) => (
                  <div
                    key={item.record.id}
                    className="group relative p-3.5 transition hover:bg-[#f5e7bd] md:p-4"
                  >
                    <div className="grid grid-cols-[56px_1fr] items-center gap-3 md:grid-cols-[64px_1fr_auto] md:gap-4">
                      {/* Thumbnail */}
                      <Link
                        to={`/product/${item.record.id}`}
                        className="relative h-14 w-14 overflow-hidden rounded-lg border-2 border-[#160f0b] bg-[#160f0b] shadow-[3px_3px_0_#6b1f17] md:h-16 md:w-16"
                      >
                        <img
                          src={item.record.imageUrl}
                          alt={`${item.record.title} by ${item.record.artist}`}
                          className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105"
                        />

                        <span className="absolute inset-0 bg-black/10" />

                        <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#160f0b] bg-[#d9a441] text-[9px] font-black">
                          {index + 1}
                        </span>
                      </Link>

                      {/* Main info */}
                      <div className="min-w-0">
                        <div className="mb-1 flex flex-wrap items-center gap-1.5">
                          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#d12b1f]">
                            {item.record.genre}
                          </span>

                          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#160f0b]/40">
                            /
                          </span>

                          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#160f0b]/50">
                            {item.record.format}
                          </span>
                        </div>

                        <Link to={`/product/${item.record.id}`}>
                          <h3 className="truncate text-base font-black uppercase leading-tight transition group-hover:text-[#d12b1f] md:text-lg">
                            {item.record.title}
                          </h3>
                        </Link>

                        <p className="truncate text-xs text-[#160f0b]/60">
                          {item.record.artist}
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#160f0b]/45">
                          Condition:{" "}
                          <span className="font-bold text-[#160f0b]/65">
                            {item.record.condition}
                          </span>
                        </p>
                      </div>

                      {/* Desktop controls */}
                      <div className="hidden items-center gap-4 md:flex">
                        {/* Quantity */}
                        <div className="flex items-center rounded-full border-2 border-[#6b1f17] bg-[#160f0b] p-1 text-[#fff4d6]">
                          <button
                            onClick={() => decreaseQuantity(item.record.id)}
                            className="h-7 w-7 rounded-full font-black transition hover:bg-[#d12b1f]"
                          >
                            -
                          </button>

                          <span className="w-8 text-center text-sm font-black">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.record.id)}
                            className="h-7 w-7 rounded-full font-black transition hover:bg-[#d9a441] hover:text-[#160f0b]"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="w-20 text-right">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#160f0b]/40">
                            Total
                          </p>

                          <p className="text-lg font-black">
                            ${(item.record.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.record.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#160f0b] text-[#fff4d6]/60 transition hover:bg-[#d12b1f] hover:text-white"
                          aria-label="Remove item"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Mobile controls */}
                    <div className="mt-3 flex items-center justify-between gap-3 pl-[68px] md:hidden">
                      <div className="flex items-center rounded-full border-2 border-[#6b1f17] bg-[#160f0b] p-1 text-[#fff4d6]">
                        <button
                          onClick={() => decreaseQuantity(item.record.id)}
                          className="h-7 w-7 rounded-full font-black transition hover:bg-[#d12b1f]"
                        >
                          -
                        </button>

                        <span className="w-8 text-center text-sm font-black">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.record.id)}
                          className="h-7 w-7 rounded-full font-black transition hover:bg-[#d9a441] hover:text-[#160f0b]"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <p className="text-lg font-black">
                          ${(item.record.price * item.quantity).toFixed(2)}
                        </p>

                        <button
                          onClick={() => removeFromCart(item.record.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#160f0b] text-[#fff4d6]/60 transition hover:bg-[#d12b1f] hover:text-white"
                          aria-label="Remove item"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Receipt bottom */}
              <div className="border-t-2 border-[#d9a441] bg-[#160f0b] px-4 py-3">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.22em] text-[#fff4d6]/70">
                  Keep Digging Or Checkout The Stack
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="relative h-fit lg:sticky lg:top-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#fff4d6] p-5 text-[#160f0b] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)] md:p-6">
              {/* Decorative record */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[12px] border-[#1c1c1c] bg-[#050505] opacity-15">
                <div className="absolute inset-6 rounded-full border border-[#160f0b]/20" />
                <div className="absolute inset-11 rounded-full border border-[#160f0b]/20" />
                <div className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#d9a441] bg-[#d12b1f]" />
              </div>

              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d12b1f]">
                  Order Summary
                </p>

                <h2 className="mt-1.5 text-2xl font-black uppercase">
                  Final Stack
                </h2>

                <div className="mt-5 space-y-3 text-sm">
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

                <div className="mt-5 flex items-center justify-between border-t-2 border-[#160f0b]/10 pt-5">
                  <span className="font-black uppercase tracking-wide">
                    Total
                  </span>

                  <span className="text-3xl font-black">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <Link
  to="/checkout"
  className="group relative mx-auto mt-6 flex w-fit overflow-hidden rounded-2xl border-2 border-[#160f0b] bg-[#d9a441] p-2 text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
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

      {/* Moving tonearm */}
      <span className="absolute right-[47px] top-[8px] z-30 h-[2px] w-10 origin-right rotate-[-90deg] rounded-full bg-[#919191] transition duration-500 ease-out group-hover:rotate-[-40deg]">
        <span className="absolute left-[-3px] top-[-3px] h-2 w-2 rotate-45 bg-[#1b1715]" />
      </span>
    </span>

    {/* Text */}
    <span className="flex flex-col text-left leading-tight">
      <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#d12b1f]">
        Ready To Spin
      </span>

      <span className="text-sm font-black uppercase tracking-wide">
        Checkout
      </span>
    </span>
  </span>
</Link>

                <Link
                  to="/records"
                  className="mt-4 block text-center text-xs font-black uppercase tracking-[0.16em] text-[#160f0b]/55 transition hover:text-[#160f0b]"
                >
                  Continue Digging
                </Link>
              </div>
            </div>

            <div className="mt-5 rotate-[1deg] rounded-2xl border-2 border-[#fff4d6]/30 bg-[#d12b1f] p-4 shadow-[0_5px_0_#6b1f17]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#fff4d6]/75">
                Shop Note
              </p>

              <p className="mt-1.5 text-lg font-black uppercase text-[#fff4d6]">
                Good records move fast.
              </p>

              <p className="mt-1.5 text-sm leading-6 text-[#fff4d6]/75">
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