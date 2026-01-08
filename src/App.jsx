import Hero from './components/Hero'
import Nav from './components/Nav'

import TechStack from './components/TechStack'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import FeaturedProjects from './components/Featured Project'
import WorkExperience from './components/WorkExperience'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div id='home'>
      <Nav />
      <main className="pt-24">
        <Hero />
      
        <TechStack />
        <About />
        <Services />
        <Stats />
        <FeaturedProjects />
        <WorkExperience />
        <CallToAction />
        <Contact />
        <Footer />
         
        
      </main>
    </div>
  )
}
