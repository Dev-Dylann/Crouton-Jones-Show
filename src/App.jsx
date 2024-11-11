import Header from "./components/Header"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Characters from "./components/Characters"
import Tokenomics from "./components/Tokenomics"
import Merchandise from "./components/Merchandise"
import Roadmap from "./components/Roadmap"
import Community from "./components/Community"
import Footer from './components/Footer'
import ToTop from "./components/ToTop"

function App() {

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[99]" >
        <Header />
      </header>

      <main>
        <Hero />

        <Intro />

        <Characters />

        <Tokenomics />

        <Merchandise />

        <Roadmap />

        <Community />

        <ToTop />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
