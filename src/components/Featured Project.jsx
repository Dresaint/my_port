export default function FeaturedProjects() {
  const projects = [
    {
      title: "Campus Space",
      category: "Full Stack",
      description:
        "Social and business platform for Nigerian university students",
      tech: ["Next.js", "Node.js", "MongoDB", "+2"],
      image: "/projects/campus-space.png",
      featured: true,
    },
    {
      title: "Sui Marketplace",
      category: "Web3",
      description:
        "Decentralized marketplace on Sui blockchain for digital assets",
      tech: ["Next.js", "Sui Move", "TypeScript", "+3"],
      image: "/projects/sui-marketplace.png",
      featured: true,
    },
    {
      title: "MoviesFlix",
      category: "Frontend",
      description:
        "Unlimited movies and TV shows streaming platform",
      tech: ["Next.js", "React", "TypeScript", "+2"],
      image: "/projects/moviesflix.png",
      featured: true,
    },
  ]

  return (
    <section
      className="relative py-28 px-6 mt-10"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-white mx-auto my-4 rounded-full" />
          <p className="text-white/60 max-w-xl mx-auto">
            A collection of projects I've built with passion and attention to detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />

                {project.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    ★ Featured
                  </span>
                )}

                <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
