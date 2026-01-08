

import { Github } from "lucide-react"



export default function Navbar() {
 


  return (
    <header className="fixed top-0 left-0 w-full z-50" id="nav">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold tracking-wide">
          SAINT
        </h1>

        {/* Center icons */}
        <div className="hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <a href="#home" className="text-white/70 hover:text-white cursor-pointer">🏠</a>
          <a href="https://github.com/Dresaint" className="text-white/70 hover:text-white cursor-pointer" target="_blank"><Github size= {16} /></a>
          <a href="https://www.linkedin.com/in/damilare-daniels-7a1742389/" className="text-white/70 hover:text-white cursor-pointer">in</a>
          <a href="https://x.com/iamdreysaint" className="text-white/70 hover:text-white cursor-pointer">𝕏</a>
          <a href="#contact" className="text-white/70 hover:text-white cursor-pointer">✉️</a>
         
         
        </div>

        {/* Contact button */}
        <a href="#contact" 
           className="text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          Contact Me → 
          
        </a>
      </nav>
    </header>
  )
}
