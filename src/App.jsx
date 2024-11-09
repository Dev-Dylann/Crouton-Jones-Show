import Header from "./components/Header"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Characters from "./components/Characters"

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
      </main>
    </>
  )
}

export default App
