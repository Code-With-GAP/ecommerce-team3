import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <nav className="bg-gray-800 backdrop-blur-lg border-2 hover:shadow-[8px_8px_10px_black] fixed w-full top-0 left-0 z-50  p-4 ">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            className="md:hidden text-3xl p-2 hover:bg-gray-700 hover:translate-z-3 rounded-2xl hover:scale-110"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul
            className={`md:flex md:gap-8 absolute md:static bg-white/20
                        md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
                        top-22 right-0 w-full md:w-auto p-4 md:p-0 transition-all border-2 border-black
                        
                        ${open ? "block" : "hidden"}`}
          >
            <li className="">
              <Link
                to="/"
                className="hover:text-blue-700 hover:bg-gray-500 block p-2"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-blue-700 hover:bg-gray-500  block p-2"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-700 hover:bg-gray-500 block p-2"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to={"/contact"}
                className="hover:text-blue-700 hover:bg-gray-500 block p-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link to="/" className="text-2xl font-bold">
            ShopLee
          </Link>

          <Link
            to={"/login"} 
            className="border-2 p-2 text-2xl">
            <button>LOGIN</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
