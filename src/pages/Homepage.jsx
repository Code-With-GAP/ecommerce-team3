

import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [featured, setFeatured] = useState([]);
  const { addToCart } = useCart();
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.products.slice(0, 20));
      });
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="text-white">

      
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 p-10 rounded-3xl backdrop-blur-lg max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Discover Your Style
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            Shop premium products with the best prices and fast delivery.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
            >
              Shop Now
            </a>

            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-16 px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Products ☕
        </h2>

        
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-20 top-1/2 -translate-y-1/2 z-10
                     bg-black/60 hover:bg-black/80 p-3 w-20 rounded-4xl  "
        >
          ⬅
        </button>

        
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 z-10
                     bg-black/60 hover:bg-black/80 p-3  w-20 rounded-4xl"
        >
          ➡
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="no-scrollbar flex gap-8 overflow-x-auto px-4"
        >
          {featured.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] bg-gray-800 p-5 rounded-2xl shadow-lg"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-48 w-full object-contain mb-4"
                />

                <h3 className="font-bold text-lg line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-green-400 mt-1">
                  ₹ {(product.price * 85).toFixed(0)}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">
                    {"⭐".repeat(Math.floor(product.rating))}
                  </span>
                  <span className="text-sm text-gray-300">
                    {product.rating}
                  </span>
                </div>
              </Link>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 py-2 rounded-xl font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t bg-gray-800">
          <footer className="py-10 text-center text-gray-300 border-t-2">
            <p>© 2025 Your Store. All Rights Reserved.</p>
            <p className="flex justify-center gap-12 mt-2"> 
              <a href="https://github.com/Code-With-GAP">
                <img  
                  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" 
                  alt="github" 
                  className="w-10 rounded-xl"
                />
              </a> 

              <a href="https://www.instagram.com/reel/DSIWebUCDKu/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==">
                  <img 
                    src="https://wallpapers.com/images/hd/meme-face-in-black-zzli2s3tbe9bqqyt.jpg" 
                    alt="" 
                    className="w-18  rounded-full"
                  />
              </a>

              <a href="https://www.instagram.com/p/DSFkXQejXtD/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==">
                  <img 
                    src="https://c4.wallpaperflare.com/wallpaper/582/805/178/minimalistic-dark-humor-dogs-funny-anatomy-mathematics-xray-simple-background-black-background-1-animals-dogs-hd-art-wallpaper-preview.jpg" 
                    alt="" 
                    className="w-18  rounded-full"
                  />
              </a>
            </p>
          </footer>
      </div>
    </div>
  );
}
