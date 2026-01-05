import Hero from './components/Hero'
import Nav from './components/Nav'

import TechStack from './components/TechStack'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import FeaturedProjects from './components/Featured Project'
import WorkExperience from './components/WorkExperience'


export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <Nav />
      <main className="pt-24">
        <Hero />
      
        <TechStack />
        <About />
        <Services />
        <Stats />
        <FeaturedProjects />
        <WorkExperience />
         
        
      </main>
    </div>
  )
}
