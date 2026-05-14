import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <section className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Checkout
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Nothing to Checkout
          </h1>

          <p className="text-white/60 mt-4">
            Your cart is empty. Add some records before checking out.
          </p>

          <Link
            to="/records"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/80 transition"
          >
            Shop Records
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Checkout
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Complete Your Order
          </h1>

          <p className="text-white/60 mt-4">
            Enter your information to place your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="Last name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white/60 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm text-white/60 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="Street address"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="ZIP code"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 outline-none focus:border-white/40"
                    placeholder="Country"
                    defaultValue="United States"
                  />
                </div>
              </div>
            </div>

            {/* Payment Placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Payment</h2>

              <p className="text-white/60 leading-relaxed">
                Payment will be connected later using Stripe or another payment
                processor. For now, this is just the checkout layout.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5 text-white/40">
                Payment form placeholder
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="bg-white text-black rounded-3xl p-6 md:p-8 h-fit sticky top-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="space-y-5 mt-6">
              {cartItems.map((item) => (
                <div
                  key={item.record.id}
                  className="flex items-center gap-4 border-b border-black/10 pb-5"
                >
                  <img
                    src={item.record.imageUrl}
                    alt={item.record.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold leading-tight">
                      {item.record.title}
                    </h3>

                    <p className="text-sm text-black/50">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${(item.record.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between text-black/60">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-black/60">
                <span>Shipping</span>
                <span>Calculated later</span>
              </div>

              <div className="flex items-center justify-between text-black/60">
                <span>Tax</span>
                <span>Calculated later</span>
              </div>
            </div>

            <div className="border-t border-black/10 mt-6 pt-6 flex items-center justify-between">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-2xl">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition">
              Place Order
            </button>

            <Link
              to="/cart"
              className="block text-center mt-4 text-sm text-black/50 hover:text-black transition"
            >
              Back to Cart
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;