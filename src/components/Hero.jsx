import dre from "../assets/dre.jpg";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-[#050b1d] to-[#020617] text-white relative overflow-hidden">
      
      {/* Star background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p className="text-green-400 text-sm">Available for work</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I am <span className="text-blue-500">Damilare Daniels</span> <br />
            I build impactful web applications, <br />
            and modern digital solutions.
          </h1>

          <p className="text-white/70 mt-6 max-w-xl">
            Fullstack web developer passionate about building clean,
            accessible and high-performance digital experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-90">
              View Projects
            </a>

            <a href="#contact" 
               className="text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contact Me → 
          
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/10 overflow-hidden">
            <img
              src={dre}
              alt="Damilare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
