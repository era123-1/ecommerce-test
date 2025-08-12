import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [selectedVariantName, setSelectedVariantName] = useState(
    product.variants?.[0]?.name || ""
  );

  const selectedVariant = product.variants.find(
    (v) => v.name === selectedVariantName
  ) || { price: 0, inStock: false };

  return (
    <div className="card h-100" style={{ maxWidth: "400px" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>

        {/* Price for selected variant */}
        <p className="card-text fw-bold text-secondary">
          ${selectedVariant.price.toFixed(2)}
        </p>

        {product.variants && product.variants.length > 0 && (
          <>
            <label
              htmlFor={`variant-${product.id}`}
              className="form-label mt-2"
            >
              Variant:
            </label>
            <select
              id={`variant-${product.id}`}
              className="form-select mb-3"
              value={selectedVariantName}
              onChange={(e) => setSelectedVariantName(e.target.value)}
            >
              {product.variants.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </>
        )}
        {selectedVariant.inStock ? (
          <button
            className="btn btn-secondary mt-auto"
            onClick={() =>
              alert(`Added ${product.name} (${selectedVariant.name}) to cart`)
            }
          >
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-danger mt-auto" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
