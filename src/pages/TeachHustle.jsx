import Img3 from "../assets/TeachustleImgs.png"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
export default function TeachHustle() {
  return (
    
    <section className="relative px-6 py-24 text-white" id="homeSphere">
        <Nav />
      <div className="max-w-7xl mx-auto">
        
        

        {/* Back link */}
        <Link
          to="/#projects"
          className="text-white/60 hover:text-white transition flex items-center gap-2 mb-10"
        >
          ← Back to Projects
        </Link>

        {/* Badges */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-1 rounded-full bg-white/10 text-sm">
            Frontend
          </span>
          <span className="px-4 py-1 rounded-full bg-yellow-400 text-black text-sm font-medium">
            ★ Featured Project
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          TeachHustle
        </h1>

        {/* Description + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <p className="max-w-3xl text-white/60 leading-relaxed">
            TeachHustle empowers learners with practical skills, mentorship, and resources needed to turn knowledge into hustle, helping individuals grow, earn, and stay competitive in today’s economy.

          </p>

          <a
            href=""
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition"
          >
            View Live Site →
          </a>
        </div>

        {/* Image Section */}
        <div className="mb-20">
          <img
            src={Img3}
            alt="Campus Space preview"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Key Features */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
              | Key Features
            </h2>

            <ul className="space-y-4 text-white/80">
              <li>✔ Secure user authentication and authorization (JWT-based)</li>
              <li>✔ User profile creation and skill portfolio management</li>
              <li>✔ Course creation and management for instructors</li>
              <li>✔ Structured learning paths and skill-based courses</li>
              <li>✔ Student dashboard with learning progress and achievements</li>
              <li>✔ Location-based and category-based course discovery</li>
              <li>✔ Mobile-first, responsive learning experience </li>
              <li>✔ Instructor–student messaging and communication</li>
              <li>✔ Admin-only course approval, edit, and delete controls</li>
            </ul>
          </div>

          {/* Project Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <h2 className="text-xl font-semibold mb-6">
              | Project Info
            </h2>

            {/* Tech */}
            <div className="mb-6">
              <p className="text-white/50 text-sm mb-3">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  
                  "Express.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-sm">CATEGORY</p>
                <p className="font-medium">Full Stack</p>
              </div>

              <div>
                <p className="text-white/50 text-sm">YEAR</p>
                <p className="font-medium">2024</p>
              </div>

              <div>
                <p className="text-white/50 text-sm">ROLE</p>
                <p className="font-medium">Lead Frontend Developer</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      < Footer />
    </section>
  );
}