import About from "./components/About"
import Contact from "./components/Contact"
import Dishes from "./components/Dishes"
import Expertise from "./components/Expertise"
import Fotter from "./components/Fotter"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import NavBar from "./components/NavBar"
import Review from "./components/Review"

function App() {
  

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero/>
      <NavBar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <Contact/>
      <Fotter/>
    </main>
  )
}

export default App
