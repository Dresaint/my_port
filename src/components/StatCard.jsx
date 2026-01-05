export default function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-md">
      <div className="text-white text-2xl mb-4">{icon}</div>
      <h3 className="text-5xl font-bold text-white">{value}</h3>
      <p className="text-white/60 mt-2">{label}</p>
    </div>
  )
}
