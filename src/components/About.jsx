export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-32 px-6 text-white scroll-mt-24" 
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          About Me
        </h2>

        <div className="w-20 h-1 bg-white/70 mx-auto mb-10" />

        {/* Content */}
        <div className="space-y-6 text-white/80 text-lg leading-relaxed text-left md:text-center">
          <p>
            I'm a passionate full-stack developer with expertise in web and
            mobile app development, as well as Web3 technologies. I specialize
            in creating accessible, human-centered digital experiences that
            make a real impact.
          </p>

          <p>
            My journey in tech has led me to work with modern frameworks and
            technologies, building everything from responsive web applications
            to decentralized solutions. I believe in writing clean,
            maintainable code and creating products users genuinely enjoy.
          </p>

          <p>
            Currently, I'm building innovative solutions at{" "}
            <span className="font-semibold text-white">Threndin</span>, where I
            combine strong technical skills with a focus on user experience and
            accessibility.
          </p>

          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s build something
            amazing together.
          </p>
        </div>
      </div>
    </section>
  )
}
