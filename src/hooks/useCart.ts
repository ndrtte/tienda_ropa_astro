import { useEffect, useState, useCallback } from "react";
import {
  addToCart,
  removeCartItem,
  updateItemQuantity,
  saveCart,
  loadCart,
} from "../utils/cart";

import type { CartItem, CartInput } from "../utils/cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  const persist = useCallback((next: CartItem[]) => {
    setCart(next);
    saveCart(next);
  }, []);

  const add = useCallback((input: CartInput) => {
    setCart((current) => {
      const next = addToCart(current, input);
      saveCart(next);
      return next;
    });
  }, []);

  const remove = useCallback((productId: string, size: string, color = "") => {
    setCart((current) => {
      const next = removeCartItem(current, productId, size, color);
      saveCart(next);
      return next;
    });
  }, []);

  const updateQty = useCallback(
    (productId: string, size: string, quantity: number, color = "") => {
      setCart((current) => {
        const next = updateItemQuantity(current, productId, size, quantity, color);
        saveCart(next);
        return next;
      });
    },
    []
  );

  return { cart, add, remove, updateQty };
}