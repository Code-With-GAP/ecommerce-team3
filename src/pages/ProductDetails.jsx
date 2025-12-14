import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-40 text-xl">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-400 to-purple-700 text-white pt-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

            {/* IMAGE SECTION */}
            <div className="bg-gray-800/60 rounded-3xl p-8 flex items-center justify-center shadow-xl">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-96 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* DETAILS SECTION */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-wide">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.round(product.rating))}
                </span>
                <span className="text-gray-400">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-extrabold text-green-400">
                ₹ {(product.price * 83).toFixed(0)}
              </p>

              {/* Meta */}
              <div className="flex gap-6 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Brand:</span>{" "}
                  {product.brand}
                </p>
                <p>
                  <span className="font-semibold text-white">Category:</span>{" "}
                  {product.category}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>

              {/* Stock */}
              <p className={`font-semibold ${
                product.stock > 0 ? "text-green-400" : "text-red-500"
              }`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>

              {/* CTA */}
              <button
                onClick={() => addToCart(product)}
                className="mt-4 px-10 py-4 rounded-2xl text-lg font-semibold
                          bg-linear-to-r from-green-500 to-emerald-600
                          hover:from-green-400 hover:to-emerald-500
                          transition shadow-xl"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

  );
}
