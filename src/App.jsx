import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import SelectedWork from './sections/SelectedWork'
import FeaturedDrone from './sections/FeaturedDrone'

function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <FeaturedDrone />
      </main>
    </div>
  )
}

export default App
