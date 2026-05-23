import { useState } from "react";

export default function QuantityPicker({ initial = 1 }) {
  const [quantity, setQuantity] = useState(initial);

  const increase = () => setQuantity((q) => q + 1);

  const decrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  return (
    <div className="detail-row">
      <span className="label">Quantity</span>

      <div className="quantity-picker" aria-label="Quantity selector">
        <button type="button" onClick={decrease} aria-label="Decrease quantity">
          −
        </button>

        <span>{quantity}</span>

        <button type="button" onClick={increase} aria-label="Increase quantity">
          +
        </button>
      </div>
    </div>
  );
}