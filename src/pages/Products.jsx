import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

      
      
        <div 
          className="flex justify-center flex-wrap gap-8 ">
            {filteredProducts.map((product) => (
              <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group relative p-5 rounded-2xl bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 w-70 
                            text-white shadow-xl hover:shadow-2xl transition-all duration-300 
                            hover:-translate-y-2 border border-gray-700"
                >
                  
                  <div className="relative overflow-hidden rounded-xl bg-gray-950">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-44 w-full object-contain transition-transform duration-300 
                                group-hover:scale-110"
                    />
                  </div>

                  
                  <div className="mt-4 space-y-2">
                    <h2 className="font-semibold text-lg tracking-wide line-clamp-1">
                      {product.title}
                    </h2>

                    <p className="text-green-400 text-xl font-bold">
                      ₹ {(product.price * 83).toFixed(0)}
                    </p>
                  </div>

                  
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full rounded-xl py-2.5 font-semibold 
                              bg-linear-to-r from-green-500 to-emerald-600
                              hover:from-green-400 hover:to-emerald-500
                              transition-all duration-300 shadow-lg"
                  >
                    Add to Cart
                  </button>
                </Link>

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
