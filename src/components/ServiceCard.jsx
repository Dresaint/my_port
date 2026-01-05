export default function ServiceCard({ icon, title, subtitle, description, tags }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-white/20 transition">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white text-black mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60 mt-1">{subtitle}</p>

      <p className="text-white/70 mt-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
