import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart(); 

  return (
    <nav className=" backdrop-blur-lg border-t border-b fixed w-full top-0 left-0 z-50 p-4 transition-all duration-300 hover:shadow-[0_6px_8px_black]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        
        <button
          className="md:hidden text-3xl p-2 hover:bg-gray-700 rounded-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        
        <ul
          className={`font-bold md:flex md:gap-8 absolute md:static bg-black/20
          md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
          top-20 right-0 w-full md:w-auto p-4 md:p-0 transition-all
          ${open ? "block" : "hidden"}`}
        >
          <li>
            <Link to="/" className="block p-2 hover:text-red-600">Home</Link>
          </li>

          <li>
            <Link to="/products" className="block p-2 hover:text-red-600">
              Products
            </Link>
          </li>

          <li>
            <Link to="/about" className="block p-2 hover:text-red-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="block p-2 hover:text-red-600">
              Contact
            </Link>
          </li>
        </ul>

        
        <Link to="/" className="text-4xl font-bold text-slate-950">
          ShopLee
        </Link>

        
        <div className="flex items-center gap-6">

          
          <Link to="/cart" className="transition-all duration-300 hover:bg-red-300 p-2 rounded-2xl relative text-white text-2xl">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          
          <Link
            to="/login"
            className="px-4 py-2 text-gray-950 font-bold rounded-2xl hover:bg-white/20 text-2xl"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
}
