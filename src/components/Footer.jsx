import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top divider */}
        <div className="w-full h-px bg-white/10 mb-14" />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 mb-12">
          {["About", "Services", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-10">
          Connect With Me
        </h3>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-14 text-gray-400">
          <a href="https://github.com/Dresaint" className="hover:text-white transition">
            <Github size={22} />
          </a>
          <a href="https://x.com/iamdreysaint" className="hover:text-white transition">
            <Twitter size={22} />
          </a>
          <a href="https://www.linkedin.com/in/damilare-daniels-7a1742389/" className="hover:text-white transition">
            <Linkedin size={22} />
          </a>
          <a href="https://www.facebook.com/damilare.shonde" className="hover:text-white transition">
            <Facebook size={22} />
          </a>
          <a href="https://www.instagram.com/dre_96" className="hover:text-white transition">
            <Instagram size={22} />
          </a>
          <a href="mailto:damilaredaniels1810@gmail.com" className="hover:text-white transition">
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 Damilare Daniels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
