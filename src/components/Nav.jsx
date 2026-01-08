import { Github, Home, Mail, Linkedin, X } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* ===== Desktop Navbar (UNCHANGED) ===== */}
      <header className="fixed top-0 left-0 w-full z-50 hidden md:block">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-white text-xl font-semibold tracking-wide">
            SAINT
          </h1>

          {/* Center icons */}
          <div className="flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <a href="#home" className="text-white/70 hover:text-white">🏠</a>

            <a
              href="https://github.com/Dresaint"
              target="_blank"
              className="text-white/70 hover:text-white"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/damilare-daniels-7a1742389/"
              target="_blank"
              className="text-white/70 hover:text-white"
            >
              in
            </a>

            <a
              href="https://x.com/iamdreysaint"
              target="_blank"
              className="text-white/70 hover:text-white"
            >
              𝕏
            </a>

            <a href="#contact" className="text-white/70 hover:text-white">
              ✉️
            </a>
          </div>

          {/* Contact button */}
          <a
            href="#contact"
            className="text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Me →
          </a>
        </nav>
      </header>

      {/* ===== Mobile Floating Navbar ===== */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
          
          <a href="#home" className="text-white/70 hover:text-white transition">
            <Home size={18} />
          </a>

          <a
            href="https://github.com/Dresaint"
            target="_blank"
            className="text-white/70 hover:text-white transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/damilare-daniels-7a1742389/"
            target="_blank"
            className="text-white/70 hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://x.com/iamdreysaint"
            target="_blank"
            className="text-white/70 hover:text-white transition"
          >
            <X size={18} />
          </a>

          <a href="#contact" className="text-white/70 hover:text-white transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
