export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold tracking-wide">
          SAINT
        </h1>

        {/* Center icons */}
        <div className="hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <span className="text-white/70 hover:text-white cursor-pointer">🏠</span>
          <span className="text-white/70 hover:text-white cursor-pointer">💼</span>
          <span className="text-white/70 hover:text-white cursor-pointer">in</span>
          <span className="text-white/70 hover:text-white cursor-pointer">𝕏</span>
          <span className="text-white/70 hover:text-white cursor-pointer">✉️</span>
        </div>

        {/* Contact button */}
        <button className="text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          Contact Me →
        </button>
      </nav>
    </header>
  )
}
