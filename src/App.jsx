import Header from "./components/Header"
import Hero from "./components/Hero"
import Intro from "./components/Intro"

function App() {

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[99]" >
        <Header />
      </header>

      <main>
        <Hero />

        <Intro />
      </main>
    </>
  )
}

export default App
