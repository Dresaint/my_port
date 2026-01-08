export default function CallToAction() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-black/80 backdrop-blur-md border border-white/10 px-6 sm:px-10 py-16 text-center relative overflow-hidden">
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Bring Your Ideas to Life?
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            Let’s collaborate and create something amazing together. Whether
            it’s a web application, mobile app, or Web3 project, I’m here to
            help turn your vision into reality.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
              Get In Touch →
            </a>

            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white hover:text-black transition">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
