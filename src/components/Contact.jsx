export default function Contact() {
  return (
    <section 
      className="py-24 px-4"
      id="contact"
    >
      {/* Section header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-white/80 mx-auto mt-4 mb-6" />
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let’s discuss how we can work together to
          bring your ideas to life.
        </p>
      </div>

      {/* Form container */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10">
        <form className="space-y-6">
          
          {/* Grid inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
