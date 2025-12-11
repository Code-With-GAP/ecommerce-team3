import React from "react";

export const Login = () => {
  
  
  const togglePassword = () => {
    const passInput = document.getElementById("password");
    passInput.type = passInput.type === "password" ? "text" : "password";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-800 to-blue-900 flex flex-col items-center justify-center p-6">
      <div className="animate-slowPopup w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 
                      animate-fade-in">
        
        <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">Login </h2>

        <form className="space-y-8">

          
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-400 rounded-md
                         peer focus:border-blue-400 focus:outline-none 
                         placeholder-transparent transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-300 transition-all duration-200
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400
                         bg-blue-900 px-1"
            >
              Email
            </label>
          </div>

          
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-400 rounded-md
                         peer focus:border-blue-400 focus:outline-none 
                         placeholder-transparent transition-all"
            />

            
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-300 transition-all duration-200
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400
                         bg-blue-900 px-1"
            >
              Password
            </label>

            
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-gray-300 hover:text-white transition-all cursor-pointer "
            >
              show
            </button>
          </div>

          
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-lg
                       bg-blue-500 hover:bg-blue-600 active:bg-blue-700
                       transition-all shadow-lg hover:shadow-blue-500/40"
          >
            Login
          </button>
        </form>

      </div>

      <div className="flex ">
        <footer className="py-10 text-center text-gray-300 border-t-2 mt-5">
          © 2025 Your Store. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};
