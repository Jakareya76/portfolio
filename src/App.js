import Sidebar from './components/Sidebar';
import Hero from './container/Hero';
import About from './container/About';
import Project from './container/Project';
import Contact from './container/Contact';
import './App.css';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="bg-zinc-900 md:ml-16">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
};

export default App;
