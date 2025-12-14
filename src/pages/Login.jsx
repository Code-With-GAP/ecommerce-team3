import React, { useState } from "react";

export const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isSignup) {
      localStorage.setItem(
        "shoplee-user",
        JSON.stringify({ email, password })
      );
      alert("Signup successful! Now login");
      setIsSignup(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("shoplee-user"));

      if (
        storedUser?.email === email &&
        storedUser?.password === password
      ) {
        alert("Login successful");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?w=740')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-blue-900 px-2 text-sm text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-transparent text-white
                         border border-gray-400 rounded-md
                         focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-blue-900 px-2 text-sm text-gray-200">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full px-4 py-3 bg-transparent text-white
                         border border-gray-400 rounded-md
                         focus:border-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm text-gray-300 hover:text-white"
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          {/* CONFIRM PASSWORD — SIGNUP ONLY */}
          {isSignup && (
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-blue-900 px-2 text-sm text-gray-200">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
                className="w-full px-4 py-3 bg-transparent text-white
                           border border-gray-400 rounded-md
                           focus:border-blue-400 focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-lg
                       bg-blue-500 hover:bg-blue-600 transition-all shadow-lg"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-400 hover:underline font-semibold"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>

      <footer className="py-10 text-center text-gray-300 mt-5">
        © 2025 Shop Lee. All Rights Reserved.
      </footer>
    </div>
  );
};
