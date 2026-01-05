import StatCard from "./StatCard"

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-4 gap-8">
        <StatCard icon="📦" value="50+" label="Projects Completed" />
        <StatCard icon="👥" value="30+" label="Happy Clients" />
        <StatCard icon="⏱️" value="5+" label="Years Experience" />
        <StatCard icon="⭐" value="100%" label="Client Satisfaction" />
      </div>
    </section>
  )
}
