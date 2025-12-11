import goutam1 from "../assets/goutam1.jpeg";
import goutam2 from "../assets/goutam2.jpeg";
import goutam3 from "../assets/goutam3.jpeg";

export const About = () => {
  const team = [
    {
      name: "GOUTAM",
      role: "Founder",
      img: goutam1
    },
    {
      name: "GOUTAM KUMAR",
      role: "Lead Designer",
      img: goutam2
    },
    {
      name: "GOUTAM PRAJAPATI",
      role: "Frontend Developer",
      img: goutam3
    }
  ];

  return (
    <div className="text-white">

      
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 
                          bg-gradient-to-r from-blue-700 to-indigo-800
                          animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          About Us
        </h1>
        <p className="max-w-2xl text-lg md:text-xl opacity-90">
          We are dedicated to bringing you the best shopping experience with high-quality
          products, seamless design, and exceptional service.
        </p>
      </section>

      
      <section className="py-16 px-6 max-w-5xl mx-auto animate-slide-up">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Our Mission
        </h2>
        <p className="text-center text-black max-w-3xl mx-auto text-lg">
          Our mission is to create an online store that feels intuitive, personal, and
          easy to use. We want every customer to feel confident and excited when
          shopping with us!
        </p>
      </section>

      
      <section className="py-16 px-6 bg-blue-900/40 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md
                         flex flex-col items-center text-center
                         transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,170,255,0.6)]
                         animate-fade-in"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 border-4 border-blue-400 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-300 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      
      <footer className=" border-t-2 py-10 text-center text-black">
        © 2025 Your Store. All Rights Reserved.
      </footer>
    </div>
  );
};
