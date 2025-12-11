export default function Homepage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center m-4">

      
      <div
        className="absolute inset-0 bg-cover bg-center blur-xl "
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/online-stores-concept-illustration-shopping-cart-laptop-soft-blue-background-online-stores-concept-illustration-333673975.jpg')",
        }}
      />

      
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/30
                      rounded-3xl p-10 max-w-3xl text-center shadow-xl">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black drop-shadow-lg">
          Discover Your Style
        </h1>

        <p className="text-lg md:text-xl text-black/90 mb-8">
          Shop the latest trends, exclusive deals, and premium products — all in one place.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg shadow-lg transition">
            Shop Now
          </button>

          <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-black border border-white/40 rounded-xl text-lg shadow-lg transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}
