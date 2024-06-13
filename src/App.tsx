import Navbar from "components/Navbar";
import Home from "components/Home";
import Projects from "components/Projects";
import Skills from "components/Skills";
import About from "components/About";
import Contact from "components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App;
