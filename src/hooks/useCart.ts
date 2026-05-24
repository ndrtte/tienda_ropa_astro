import { useEffect, useState } from "react";
import {
  addToCart,
  removeCartItem,
  updateItemQuantity,
  saveCart
} from "../utils/cart";

import type { CartItem, CartInput } from "../utils/cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const persist = (next: CartItem[]) => {
    setCart(next);
    saveCart(next);
  };

  const add = (input: CartInput) => {
    persist(addToCart(cart, input));
  };

  const remove = (productId: string, size: string, color: string = "") => {
    persist(removeCartItem(cart, productId, size, color));
  };

  const updateQty = (
    productId: string,
    size: string,
    quantity: number,
    color: string = ""
  ) => {
    persist(updateItemQuantity(cart, productId, size, quantity, color));
  };

  return {
    cart,
    add,
    remove,
    updateQty
  };
}