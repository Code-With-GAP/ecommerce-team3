import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, []);

  
  const categoryMap = {
    men: ["mens-shirts", "mens-shoes"],
    women: ["womens-dresses", "womens-shoes",],
    electronics: ["smartphones", "laptops"],
    grocery: ["groceries"],
  };

  const filteredProducts = items.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all"
        ? true
        : categoryMap[category]?.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 pt-40 bg-slate-600 min-h-screen">

      
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 rounded-lg w-full md:w-1/2 outline-none border-black text-yellow-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
        <div className="flex gap-2 flex-wrap">
          {["all", "men", "women", "electronics", "grocery"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                category === cat
                  ? "bg-green-500 text-white" : "bg-gray-300"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-xl bg-gray-800 text-white shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="font-bold mt-3">{product.title}</h2>

            <p className="mt-1">
              ₹ {(product.price * 83).toFixed(0)}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      
      {filteredProducts.length === 0 && (
        <p className="text-center text-white text-xl mt-10">
          NO PRODUCTS FOR WOMEN THEY CAN'T AFFORD THEM
        </p>
      )}
    </div>
  );
}
