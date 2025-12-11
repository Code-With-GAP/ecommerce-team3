import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-white bg-gray-900">

      
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6
                          bg-linear-to-r from-blue-700 to-indigo-800 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="max-w-2xl text-lg md:text-xl opacity-90">
          We'd love to hear from you! Whether you have questions, suggestions, or feedback —
          reach out anytime.
        </p>
      </section>

      
      <section className="py-16 px-6 max-w-4xl mx-auto animate-slide-up">
        <div className="bg-gray-700 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-xl bg-blue-900/40 border border-white/20 
                         text-white focus:outline-none focus:border-blue-400 
                         transition-all duration-300"
            />

            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-xl bg-blue-900/40 border border-white/20 
                         text-white focus:outline-none focus:border-blue-400
                         transition-all duration-300"
            />

            
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded-xl bg-blue-900/40 border border-white/20
                         text-white focus:outline-none focus:border-blue-400
                         transition-all duration-300"
            ></textarea>

            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,170,255,0.8)]
                         active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <section className="py-12 px-6 text-center">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">Other Ways to Reach Us</h3>

        <p className="text-lg text-gray-300"> Email: Shoplee@gmail.com</p>
        <p className="text-lg text-gray-300 mt-1"> Phone: +91 92559-96165</p>
        <p className="text-lg text-gray-300 mt-1"> Location: India</p>
      </section>

      
      <footer className="py-10 text-center text-gray-300 border-t-2">
        © 2025 Your Store. All Rights Reserved.
      </footer>
    </div>
  );
};
