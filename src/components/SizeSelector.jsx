import { useState } from "react";

export default function SizeSelector({ sizes }) {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    return (
        <div className="detail-row">
            <span className="label">Talla</span>

            <div className="sizes" aria-label="Available sizes">
                {sizes.map((size) => (
                    <button
                        key={size}
                        type="button"
                        className={`size-option ${selectedSize === size ? "is-selected" : ""}`}
                        onClick={() => setSelectedSize(size)}
                        data-size-option={size}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}