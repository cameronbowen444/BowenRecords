import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { RecordProduct } from "../data/record";

type CartItem = {
  record: RecordProduct;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (record: RecordProduct) => void;
  removeFromCart: (recordId: number) => void;
  increaseQuantity: (recordId: number) => void;
  decreaseQuantity: (recordId: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(record: RecordProduct) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.record.id === record.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.record.id === record.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { record, quantity: 1 }];
    });
  }

  function removeFromCart(recordId: number) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.record.id !== recordId)
    );
  }

  function increaseQuantity(recordId: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.record.id === recordId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(recordId: number) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.record.id === recordId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.record.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}