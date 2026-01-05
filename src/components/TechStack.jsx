const techTop = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind",
  "TypeScript",
  "Vue",
  "Express",
]

const techBottom = [
  "Figma",
  "Firebase",
  "Git",
  "GitHub",
  "MongoDB",
  "Flutter",
  "PHP",
  "Python",
]

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0b1220] text-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
        My Programming Languages and Frameworks
      </h2>

      {/* Top row – moves left */}
      <div className="overflow-hidden whitespace-nowrap mb-10">
        <div className="flex gap-6 animate-marquee-left">
          {[...techTop, ...techTop].map((tech, i) => (
            <TechCard key={i} name={tech} />
          ))}
        </div>
      </div>

      {/* Bottom row – moves right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-6 animate-marquee-right">
          {[...techBottom, ...techBottom].map((tech, i) => (
            <TechCard key={i} name={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechCard({ name }) {
  return (
    <div className="min-w-[100px] h-[120px] rounded-xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-lg font-small">
      {name}
    </div>
  )
}
