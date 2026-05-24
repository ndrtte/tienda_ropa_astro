import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function ProductActions({ product }) {
  const { add } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    add({
      product,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  };

  return (
    <>
      {/* COLORES */}
      <div className="detail-row">
        <span className="label">Color</span>
        <div className="swatches">
          {product.colors.map((color) => (
            <button
              key={color}
              className={
                "swatch-button " +
                (selectedColor === color ? "is-selected" : "")
              }
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* TALLLA */}
      <div className="detail-row">
        <span className="label">Talla</span>
        <div className="sizes">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={
                "size-option " +
                (selectedSize === size ? "is-selected" : "")
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CANTIDAD */}
      <div className="detail-row">
        <span className="label">Cantidad</span>

        <div className="quantity-picker">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity((q) => q + 1)}>
            +
          </button>
        </div>
      </div>

      {/* CARRITO */}
      <div className="action-row">
        <button className="button add-to-cart" type="button" 
          onClick={() => {
            handleAddToCart();}
          }  data-add-to-cart>Agregar al carrito</button>
        <a className="button-secondary" href="/productos">Volver al catálogo</a>
      </div>
    </>
  );
}