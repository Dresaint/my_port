import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <section 
      className="max-w-7xl mx-auto px-6 py-24"
      id="services"
    >
      
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Services</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full" />
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-3 gap-8" >
        <ServiceCard
          icon="💻"
          title="Website Development"
          subtitle="Frontend & Backend"
          description="I build responsive, high-performance web applications using modern frameworks. From pixel-perfect frontends to scalable backend architectures."
          tags={["JavaScript", "React", "Next.js", "Node.js", "Python", "PHP"]}
          
        />

        <ServiceCard
          icon="📱"
          title="Mobile App Development"
          subtitle="React Native & Flutter"
          description="I create cross-platform mobile applications that feel native on both iOS and Android, with smooth animations and optimal performance."
          tags={["React Native", "Expo", "Flutter"]}
        />

        <ServiceCard
          icon="🌐"
          title="Web3 Development"
          subtitle="Blockchain & Smart Contracts"
          description="I develop decentralized applications and smart contracts on blockchain networks, focusing on security, efficiency, and scalability."
          tags={["Solidity", "Sui Move", "Rust", "Ethers.js"]}
        />
      </div>
    </section>
  )
}
