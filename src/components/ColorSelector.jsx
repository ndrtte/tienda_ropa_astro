import { useState } from "react";

export default function ColorSelector({ colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="detail-row">
      <span className="label">Available colors</span>

      <div className="swatches" aria-label="Available colors">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`swatch-button ${selectedColor === color ? "is-selected" : ""}`}
            onClick={() => setSelectedColor(color)}
            data-color-option={color}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}