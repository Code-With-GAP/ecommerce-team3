import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <h2 className="text-center text-4xl mt-40">
        YOU NEED TO ADD SOMETHING IN CART FIRST GARIB 😂
      </h2>
    );
  }

  return (
  <div className="min-h-screen bg-linear-to-b from-blue-700 to-purple-600 pt-32 px-6">
    <div className="max-w-4xl mx-auto space-y-6">

      {cart.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="flex gap-6 items-center bg-gray-800/70 backdrop-blur-md
                     rounded-3xl p-6 shadow-xl border border-gray-700
                     hover:shadow-2xl transition"
        >
          
          <div className="w-40 h-40 shrink-0 bg-gray-900 rounded-2xl flex items-center justify-center">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-28 object-contain"
            />
          </div>

          
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold tracking-wide">
              {item.title}
            </h3>

            
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">
                {"★".repeat(Math.floor(item.rating))}
              </span>
              <span className="text-sm text-gray-400">
                {item.rating}
              </span>
            </div>

            
            <p className="text-gray-300">
              Quantity: <span className="font-semibold">{item.qty}</span>
            </p>

            
            <p className="text-green-400 font-bold text-lg">
              ₹ {(item.price * 83 * item.qty).toFixed(0)}
            </p>
          </div>

          
          <div className="flex flex-col items-end gap-4">
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-400 hover:text-red-500 font-semibold transition"
            >
              Remove
            </button>
          </div>
        </Link>
      ))}

    </div>
  </div>
);

}
