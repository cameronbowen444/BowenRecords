import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
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
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <section className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Cart
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Your Cart is Empty
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl">
            Looks like you haven’t added any records yet.
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
            Cart
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">Your Cart</h1>

          <p className="text-white/60 mt-4">
            Review your items before checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Cart Items */}
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.record.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-5 flex flex-col sm:flex-row gap-5"
              >
                <Link to={`/records/${item.record.id}`}>
                  <img
                    src={item.record.imageUrl}
                    alt={`${item.record.title} by ${item.record.artist}`}
                    className="w-full sm:w-32 aspect-square object-cover rounded-2xl"
                  />
                </Link>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-white/40">
                      {item.record.genre} • {item.record.format}
                    </p>

                    <Link to={`/records/${item.record.id}`}>
                      <h2 className="text-xl font-bold mt-1 hover:text-white/70 transition">
                        {item.record.title}
                      </h2>
                    </Link>

                    <p className="text-white/60 text-sm mt-1">
                      {item.record.artist}
                    </p>

                    <p className="text-white/50 text-sm mt-2">
                      Condition: {item.record.condition}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.record.id)}
                        className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 transition"
                      >
                        -
                      </button>

                      <span className="w-6 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.record.id)}
                        className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 transition"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-5">
                      <p className="font-bold">
                        ${(item.record.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.record.id)}
                        className="text-white/50 hover:text-red-400 transition"
                        aria-label="Remove item"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-white/50 hover:text-red-400 transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <aside className="bg-white text-black rounded-3xl p-6 md:p-8 h-fit sticky top-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>

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

            <Link
              to="/checkout"
              className="block text-center w-full mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition"
            >
              Checkout
            </Link>

            <Link
              to="/records"
              className="block text-center mt-4 text-sm text-black/50 hover:text-black transition"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
