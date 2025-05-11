import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
<div className="App">
  <Header />

  <section id="hero" className="snap-start">
    <Hero />
  </section>

  <section id="about" className="snap-center bg-[rgb(12,13,23)]">
    <About />
  </section>

  <section id="skills" className="snap-center bg-[rgb(12,13,23)] mt-20 md:mt-32">
    <Skills />
  </section>

  <section id="projects" className="snap-center bg-[rgb(12,13,23)]">
    <Projects />
  </section>
</div>

  );
}

export default App;
