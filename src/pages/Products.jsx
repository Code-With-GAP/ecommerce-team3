import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const [items, setItems] = useState([]);

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-blue-900">
      {items.map((product, index) => (
        <motion.div
          key={product.id}
          className="p-4 rounded-xl shadow border bg-blue-700 
            flex flex-col items-center md:flex-row gap-4 
            transition-all duration-300 hover:-translate-y-2 
            hover:shadow-[0_0_20px_5px_rgba(0,255,128,0.9)]
          "

          
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}

          
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mx-auto"
          />

          <div className="text-center md:text-left">
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-white mt-1">${product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
