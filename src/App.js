import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="bg-zinc-900 md:ml-16 main-container">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;
