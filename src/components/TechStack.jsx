import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiFigma,
} from "react-icons/si";


const techTop = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiVuedotjs, name: "Vue" },
  { icon: SiExpress, name: "Express" },
];

const techBottom = [
  { icon: SiFigma, name: "Figma" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: FaPhp, name: "PHP" },
  { icon: FaPython, name: "Python" },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0b1220] text-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
        Programming Languages & Frameworks
      </h2>

      {/* Top row */}
      <div className="overflow-hidden whitespace-nowrap mb-10">
        <div className="flex gap-6 animate-marquee-left">
          {[...techTop, ...techTop].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-6 animate-marquee-right">
          {[...techBottom, ...techBottom].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ icon: Icon, name }) {
  return (
    <div className="min-w-[80px] h-[80px] rounded-xl bg-white/5 border border-white/10 backdrop-blur flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
      <Icon className="text-3xl text-white" />
      <span className="text-sm text-white/70">{name}</span>
    </div>
  );
}


