import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import SelectedWork from './sections/SelectedWork'
import FeaturedDrone from './sections/FeaturedDrone'
import About from './sections/About'
import BookingContact from './sections/BookingContact'
import Footer from './sections/Footer'
import { SiteContentProvider } from './lib/SiteContentProvider'

function App() {
  return (
    <SiteContentProvider>
      <div className="bg-ink">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SelectedWork />
          <FeaturedDrone />
          <About />
          <BookingContact />
        </main>
        <Footer />
      </div>
    </SiteContentProvider>
  )
}

export default App
