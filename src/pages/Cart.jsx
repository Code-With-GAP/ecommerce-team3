import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <h2 className="text-center text-4xl mt-20">
        YOU NEED TO ADD SOMETHING IN CART FIRST GARIB😂
      </h2>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center p-6 mt-20 bg-gray-900 h-screen">
      {cart.map((item) => (
        <div
          key={item.id}
          className="w-86 rounded-2xl flex flex-col items-center justify-between border p-4 mb-3 gap-4 bg-gray-700 transition-all duration-300 hover:scale-125 h-fit "
        >
          
          <div className="flex justify-between">
            <div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-contain w-full"
                />
            </div>

              
            <div>
                <h3 className="flex-1">{item.title}</h3>

              
                <p>Qty: {item.qty}</p>
            </div>
          </div>

          
          <div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>

        </div>
      ))}
    </div>
  );
}
