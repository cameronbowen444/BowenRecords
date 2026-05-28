import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
        {/* Shared background */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
        <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <section className="relative px-6 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] px-6 py-16 md:px-12 md:py-20 text-center shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.25),transparent_35%)]" />

              <div className="absolute -right-24 -bottom-28 w-80 h-80 rounded-full bg-[#050505] border-[22px] border-[#1c1c1c] opacity-45 hidden md:block">
                <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute inset-28 rounded-full border border-[#fff4d6]/10" />
                <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
              </div>

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Checkout Counter
                </p>

                <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight mt-4">
                  Nothing To
                  <span className="block text-[#d9a441]">Checkout.</span>
                </h1>

                <p className="text-[#fff4d6]/65 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
                  Your record bag is empty. Pull something from the crates
                  before heading to checkout.
                </p>

                <Link
                  to="/records"
                  className="inline-flex mt-9 bg-[#d9a441] text-[#160f0b] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
                >
                  Shop Records
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.4),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.24),transparent_35%)]" />

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
                Complete The
                <span className="block text-[#d9a441]">Stack.</span>
              </h1>

              <p className="text-[#fff4d6]/65 mt-6 max-w-2xl text-lg leading-relaxed">
                Enter your details and finish the order. Your records are almost
                ready to leave the crate.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#fff4d6]/45">
                <span>{cartItems.length} Items</span>
                <span>•</span>
                <span>Secure Checkout</span>
                <span>•</span>
                <span>Final Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
            Final Details • Shipping Info • Place The Order
          </p>
        </div>
      </div>

      {/* Checkout Content */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-10">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.18),transparent_35%)]" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Side A
                </p>

                <h2 className="text-3xl font-black uppercase mt-2 mb-6">
                  Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="First name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="Last name"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.16),transparent_35%)]" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Side B
                </p>

                <h2 className="text-3xl font-black uppercase mt-2 mb-6">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="Street address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="ZIP code"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                      placeholder="Country"
                      defaultValue="United States"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Placeholder */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Final Track
                </p>

                <h2 className="text-3xl font-black uppercase mt-2">
                  Payment
                </h2>

                <p className="text-[#fff4d6]/60 mt-4 leading-relaxed">
                  Payment will be connected later using Stripe or another
                  payment processor. For now, this is the checkout layout.
                </p>

                <div className="mt-6 rounded-2xl border-2 border-[#fff4d6]/10 bg-[#0d0907] p-6 text-[#fff4d6]/40">
                  Payment form placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="relative h-fit lg:sticky lg:top-6">
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#fff4d6] text-[#160f0b] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
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
                  {cartItems.map((item) => (
                    <div
                      key={item.record.id}
                      className="grid grid-cols-[52px_1fr_auto] gap-3 items-center border-b-2 border-dashed border-[#160f0b]/15 pb-4"
                    >
                      <img
                        src={item.record.imageUrl}
                        alt={item.record.title}
                        className="w-13 h-13 rounded-xl object-cover border-2 border-[#160f0b]/15"
                      />

                      <div className="min-w-0">
                        <h3 className="font-black uppercase leading-tight truncate">
                          {item.record.title}
                        </h3>

                        <p className="text-sm text-[#160f0b]/50">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-black">
                        ${(item.record.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

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

                <button className="group relative overflow-hidden flex items-center justify-center gap-4 w-full mt-8 bg-[#d9a441] text-[#160f0b] px-8 py-5 rounded-full font-black uppercase tracking-wide border-2 border-[#160f0b] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition">
                  <span className="relative w-9 h-9 rounded-full bg-[#050505] border-[5px] border-[#1c1c1c] flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#d12b1f] border-2 border-[#fff4d6]" />
                    <span className="absolute -right-4 -top-1 w-8 h-1.5 rounded-full bg-[#160f0b] rotate-[35deg] origin-left group-hover:rotate-[50deg] transition duration-300" />
                    <span className="absolute -right-5 top-2 w-3 h-3 rounded-full bg-[#160f0b]" />
                  </span>

                  Place Order
                </button>

                <Link
                  to="/cart"
                  className="block text-center mt-5 text-sm text-[#160f0b]/55 hover:text-[#160f0b] transition font-black uppercase tracking-[0.18em]"
                >
                  Back To Cart
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#d12b1f] border-2 border-[#fff4d6]/30 p-5 shadow-[0_8px_0_#6b1f17] rotate-[1deg]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#fff4d6]/75">
                Checkout Note
              </p>

              <p className="text-[#fff4d6] font-black text-xl uppercase mt-2">
                Almost out the door.
              </p>

              <p className="text-[#fff4d6]/75 text-sm mt-2 leading-relaxed">
                Review everything before placing the order. Shipping and taxes
                can be finalized when payments are connected.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;