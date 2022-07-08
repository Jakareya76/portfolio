import Hero from "../Hero";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";

const Layout = () => {
  return (
    <main className="bg-[#151a1b] md:ml-[60px]">
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Layout;
