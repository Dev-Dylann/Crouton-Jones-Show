import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[99]" >
        <Header />
      </header>

      <main>
        <Hero />

        <section className="min-h-screen"></section>
      </main>
    </>
  )
}

export default App
