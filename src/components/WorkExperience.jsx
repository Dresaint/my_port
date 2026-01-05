const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">
          Work Experience
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded bg-white/80" />

        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          My professional journey and the companies I've worked with
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/20 md:-translate-x-1/2" />

        {/* Experience 1 */}
        <div className="relative mb-20 flex items-start md:items-center justify-between">
          {/* Card */}
          <div className="w-full md:w-5/12 ml-10 md:ml-0 bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white">
              Lead Fullstack Developer
            </h3>
            <p className="text-gray-400">Campus Space · Remote</p>

            {/* Mobile date */}
            <p className="mt-2 text-sm text-gray-500 md:hidden">
              05/2025 – Present
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              <li>
                Spearheaded development of core features for Campus Space,
                a social and business platform for Nigerian university students
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "Node.js", "MongoDB", "TypeScript", "React Native"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Center Icon */}
          <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
            💻
          </div>

          {/* Desktop date */}
          <div className="hidden md:block w-5/12 text-left text-gray-400">
            05/2025 – Present
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative flex items-start md:items-center justify-between">
          {/* Desktop date */}
          <div className="hidden md:block w-5/12 text-right text-gray-400">
            02/2024 – 06/2025
          </div>

          {/* Center Icon */}
          <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
            🎓
          </div>

          {/* Card */}
          <div className="w-full md:w-5/12 ml-10 md:ml-0 bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white">
              Fullstack Developer
            </h3>
            <p className="text-gray-400">
              Silicon Delta Innovation Hub · Port Harcourt, Rivers State
            </p>

            {/* Mobile date */}
            <p className="mt-2 text-sm text-gray-500 md:hidden">
              02/2024 – 06/2025
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              <li>
                Led a team of developers building and maintaining scalable
                full-stack applications
              </li>
              <li>
                Focused on performance, clean architecture, and maintainability
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
